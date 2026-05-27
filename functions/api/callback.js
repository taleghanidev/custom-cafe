function renderBody(status, content) {
    const html = `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
    `;
    return new Blob([html]);
}

export async function onRequest(context) {
    const client_id = context.env.GITHUB_CLIENT_ID || 'Ov23liPqGwDTuuuAuEaU';
    const client_secret = context.env.GITHUB_CLIENT_SECRET || 'ba903787395a9d65656cc695b2b7fc1d61bed85e';
    try {
        const url = new URL(context.request.url);
        const code = url.searchParams.get('code');
        const response = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'user-agent': 'ibel-ai-cms',
                'accept': 'application/json',
            },
            body: JSON.stringify({ client_id, client_secret, code }),
        });
        const result = await response.json();
        if (result.error) {
            return new Response(renderBody('error', result), {
                headers: { 'content-type': 'text/html;charset=UTF-8' },
                status: 401
            });
        }
        return new Response(renderBody('success', { token: result.access_token, provider: 'github' }), {
            headers: { 'content-type': 'text/html;charset=UTF-8' },
            status: 200
        });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}

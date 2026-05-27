export const siteConfig = {
  name: 'Custom Cafe',
  tagline: 'Coffee \u00B7 Breakfast \u00B7 Lunch',
  description: 'Custom Cafe Brookvale \u2014 Specialty coffee, acai bowls, burgers & poke bowls. Mon-Fri 6am-3pm. 17 Sydenham Rd, Brookvale.',
  address: {
    street: '17 Sydenham Rd',
    suburb: 'Brookvale NSW 2100',
    full: '17 Sydenham Rd, Brookvale NSW 2100',
  },
  hours: {
    weekdays: 'Monday \u2013 Friday',
    weekdayTime: '6:00am \u2013 3:00pm',
    weekends: 'Saturday \u2013 Sunday',
    weekendTime: 'Closed',
    short: 'Mon\u2013Fri 6am\u20133pm',
  },
  phone: '0451 942 100',
  phoneHref: 'tel:+61451942100',
  email: 'custom.cafe.brookvale@gmail.com',
  links: {
    instagram: 'https://www.instagram.com/custom.cafe.brookvale/',
    instagramHandle: '@custom.cafe.brookvale',
    facebook: 'https://www.facebook.com/custom.cafe.brookvale/',
    ubereats: 'https://www.ubereats.com/au/store/custom-cafe/lSPof-_XTfK36cbtxtd7zA',
    doordash: 'https://www.doordash.com/store/custom-cafe-and-catering-brookvale-940007/',
    googleMaps: 'https://maps.google.com/?cid=13101596644572204831',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.0!2d151.275!3d-33.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5df!2sCustom+Cafe!5e0!3m2!1sen!2sau!4v1',
  },
  rating: {
    score: '4.8',
    reviews: 199,
    source: 'Google',
    url: 'https://maps.google.com/?cid=13101596644572204831',
  },
  features: [
    'Dine-in',
    'Takeaway',
    'Uber Eats',
    'DoorDash',
    'Outdoor seating',
    'Vegan options',
    'Vegetarian friendly',
    'Dog-friendly',
  ],
  coffee: 'Danes Coffee',
  about: {
    paragraphs: [
      'Custom Cafe is Brookvale\u2019s go-to for hearty breakfasts, specialty coffee, and proper good food. Tucked away on Sydenham Rd in the industrial heart of Brookvale, we\u2019re the kind of place where tradies, surfers, and families all feel at home.',
      'From our famous acai bowls loaded with fresh fruit to our stacked burgers and Korean beef wraps \u2014 everything is made fresh, served fast, and priced right. Coffee is roasted by Danes, pulled with care.',
    ],
  },
}

export interface MenuItem {
  name: string
  desc: string
  price: string
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    title: 'Brekkie',
    items: [
      { name: 'B&E Wrap or Roll', desc: 'Bacon & egg, your choice of sauce', price: '$9' },
      { name: 'B&E Deluxe Roll', desc: 'Double egg, onion, bacon, cheese, aioli', price: '$12' },
      { name: 'BLAT Wrap', desc: 'Bacon, lettuce, avocado, tomato, mayo', price: '$12.50' },
      { name: 'Smashed Avo', desc: 'Sourdough, feta, cherry tomato, dukkah', price: '$16.50' },
      { name: 'Brekkie Roll', desc: 'Bacon, egg, sausage, scrambled eggs, cheese, relish', price: '$12' },
      { name: 'Muesli Bowl', desc: 'Muesli, strawberries, blueberries, coconut, greek yoghurt', price: '$13' },
    ],
  },
  {
    title: 'Brooky Bowls',
    items: [
      { name: 'Japanese Bowl', desc: 'Teriyaki, edamame, wakame, avocado, sesame', price: '$18' },
      { name: 'Korean Bowl', desc: 'Korean beef, kimchi, sweet potato, edamame', price: '$18' },
      { name: 'Hawaiian Bowl', desc: 'Teriyaki chicken, pineapple, edamame, wakame', price: '$18' },
      { name: 'Mexican Bowl', desc: 'Spiced chicken, brown rice, corn, black beans, salsa', price: '$18' },
    ],
  },
  {
    title: 'Burgers & Lunch',
    items: [
      { name: 'Custom Burger', desc: 'Angus beef, lettuce, tomato, onion, cheese, pickles', price: '$14' },
      { name: 'Cheeseburger', desc: 'Angus beef, double cheese, onion, pickles', price: '$14' },
      { name: 'Steak Sandwich', desc: 'Scotch fillet, avocado, tomato, onion, aioli', price: '$16.50' },
      { name: 'Fish and Chips', desc: 'Beer battered fish, chips, tartare, lemon', price: '$14' },
    ],
  },
  {
    title: 'Coffee & Drinks',
    items: [
      { name: 'Latte / Cappuccino', desc: 'Danes Coffee house blend', price: '$4.20' },
      { name: 'Flat White', desc: 'Danes Coffee, textured milk', price: '$4.20' },
      { name: 'Iced Latte', desc: 'Espresso over ice, cold milk', price: '$5.50' },
      { name: 'Acai Smoothie', desc: 'Acai, banana, water', price: '$8.50' },
      { name: 'Berry Smoothie', desc: 'Yoghurt, mixed berry, honey, milk', price: '$8.50' },
      { name: 'Milkshake', desc: 'Chocolate, caramel, vanilla or strawberry', price: '$7.50' },
    ],
  },
]

export interface GalleryImage {
  src: string
  alt: string
  size?: 'tall' | 'wide'
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/ig-9.jpg', alt: 'Steak and chips at Custom Cafe', size: 'tall' },
  { src: '/images/ig-3.jpg', alt: 'Full cafe menu board' },
  { src: '/images/ig-2.jpg', alt: 'Weekly specials board' },
  { src: '/images/ig-4.jpg', alt: 'Mates enjoying breakfast at Custom Cafe', size: 'wide' },
  { src: '/images/ig-5.jpg', alt: 'Celebrating 2nd anniversary' },
  { src: '/images/ig-7.jpg', alt: 'Breakfast wraps and coffee' },
  { src: '/images/ig-8.jpg', alt: 'Custom Cafe outdoor area' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#order', label: 'Order' },
  { href: '#visit', label: 'Visit' },
]

export const weeklySpecials = [
  { day: 'Tuesday', item: 'Chilli Cheesesteak Wrap', price: '$13' },
  { day: 'Wednesday', item: 'Steak Sandwich', price: '$14' },
  { day: 'Thursday', item: 'Pasta', price: '$10' },
  { day: 'Friday', item: 'Fish and Chips', price: '$14' },
  { day: 'All Week', item: '$3 Coffee with B&E or BLAT Wrap', price: '$3' },
]

// Everything the website prints about the business lives here.
// Search for TODO to find what still needs real details.

export const business = {
  name: 'TODO Business Name Carpentry',
  shortName: 'TODO Carpentry', // the wordmark at the top of the quote sheet
  owner: 'TODO First name',
  phone: '0400 000 000', // TODO real mobile
  email: 'hello@example.com', // TODO real email
  abn: 'TODO', // e.g. '12 345 678 901'
  licence: 'TODO', // NSW contractor licence number, required on ads in NSW
  area: 'Sydney', // e.g. 'Inner West & Eastern Suburbs, Sydney'
  instagram: '', // full URL, or leave empty to hide
  googleReviews: '', // Google Business Profile link, or leave empty to hide

  // The ServiceM8 "Simple Online Enquiry" form link
  // (ServiceM8 → Settings → ServiceM8 Add-ons → Simple Online Enquiry).
  // While empty, the measure-up form on the site opens a pre-filled email instead.
  enquiryUrl: '',
};

// The printed price sheet on the website. Prices include GST and are "from" prices.
// Keep them in line with quoting/price-list.csv (those are ex GST: multiply by 1.1).
export const priceSheet = [
  {
    group: 'Decks',
    items: [
      { name: 'New hardwood deck', note: 'Frame, boards and oil, built and finished', price: 'from $395 / m²' },
      { name: 'Treated pine deck', note: 'Frame, boards and oil, built and finished', price: 'from $330 / m²' },
      { name: 'Re-board an old deck', note: 'Old boards off, frame checked, new boards on', price: '$88 / m² + boards' },
      { name: 'Sand and oil', note: 'Two coats of decking oil', price: '$33 / m²' },
      { name: 'Stairs', note: 'Hardwood treads and stringers', price: '$280 / step' },
      { name: 'Balustrade', note: 'Timber posts, rails and balusters to code', price: '$390 / m' },
    ],
  },
  {
    group: 'Doors and trims',
    items: [
      { name: 'Hang a door', note: 'Your door, fitted into the existing frame', price: '$176' },
      { name: 'Replace a door and frame', note: 'Old set out, pre-hung door set in', price: '$308' },
      { name: 'Hang an external door', note: 'Fitted, latched and weather-sealed', price: '$352' },
      { name: 'Fit a lock or handle', note: 'Your hardware, fitted and adjusted', price: '$66' },
      { name: 'Architraves', note: 'Both sides of one door', price: '$99' },
    ],
  },
  {
    group: 'Outdoor and inside',
    items: [
      { name: 'Timber pergola', note: 'Frame built on site, labour only', price: '$132 / m²' },
      { name: 'Timber gate', note: 'Built and hung, labour only', price: '$495' },
      { name: 'Stud wall', note: 'Non-structural wall, framed', price: '$121 / m' },
      { name: 'Built-in shelving', note: 'Timber or melamine, labour only', price: '$99 / m' },
      { name: 'Everything else', note: 'Repairs and odd jobs, two-hour minimum', price: '$99 / hour' },
    ],
  },
];

// Shown at the foot of the price sheet. TODO: confirm real hours.
export const hours = ['Monday to Saturday, 7am to 5pm', 'Written quotes within two business days'];

// Deck timbers for the live quote and the drawings.
// `price` is the deck price per m² including GST (frame, boards and oil, low deck, easy access),
// worked out from the starting rates in quoting/quote-calculator.xlsx. Update both together.
export const timbers = [
  { name: 'Merbau', colour: '#6b3a24', price: 395, note: 'Deep red-brown and very hard. The Sydney favourite.' },
  { name: 'Spotted gum', colour: '#8f7457', price: 420, note: 'Australian hardwood, grey-brown and hard-wearing.' },
  { name: 'Blackbutt', colour: '#bd9a74', price: 410, note: 'Australian hardwood, pale honey, good in bushfire zones.' },
  { name: 'Treated pine', colour: '#a8925e', price: 330, note: 'The budget choice. Takes stain well.' },
  { name: 'Composite', colour: '#55524d', price: 465, note: 'No oiling and no splinters. Costs more up front.' },
];

export const deckEstimate = {
  highDeckPerM2: 35, // extra $/m² when more than 1 m off the ground
  perStep: 280, // per step
  balustradePerM: 390, // per lin m
  fixed: 275, // rubbish removal
  spread: 0.15, // the range shown is ±15%
  minimum: 2500, // smallest deck job
};

// Everything the website prints about the business lives here.
// Search for TODO to find what still needs real details.

export const business = {
  name: 'TODO Business Name Carpentry',
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
  // While empty, "Request a quote" opens a pre-filled text message instead.
  enquiryUrl: '',
};

export const services = [
  {
    title: 'Decks',
    body: 'New decks, re-boarding tired decks, stairs and balustrades. Merbau, spotted gum, blackbutt, treated pine or composite.',
  },
  {
    title: 'Pergolas & outdoor',
    body: 'Timber pergolas, gates, fence repairs and outdoor carpentry.',
  },
  {
    title: 'Doors & trims',
    body: 'Hanging and replacing doors, locks, architraves and skirting.',
  },
  {
    title: 'Renovations & repairs',
    body: 'Small renovations, stud walls, built-in shelving and general carpentry repairs.',
  },
];

// Ballpark deck pricing for the website estimator, in dollars per m² INCLUDING GST,
// for a low, easy-access deck with framing, boards and oil.
// Worked out from the starting rates in quoting/quote-calculator.xlsx
// (labour + materials with 15% margin + GST). When you change the calculator's rates,
// update these to match.
export const deckEstimate = {
  perM2: {
    'Treated pine': 330,
    'Merbau': 395,
    'Spotted gum': 420,
    'Blackbutt': 410,
    'Composite': 465,
  } as Record<string, number>,
  highDeckPerM2: 35, // extra $/m² when more than 1 m off the ground
  perStep: 280, // per step
  balustradePerM: 390, // per lin m
  fixed: 275, // rubbish removal
  spread: 0.15, // shows ±15% as the range
  minimum: 2500, // smallest deck job
};

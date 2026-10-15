# Website

A one-page site: services, how quoting works, a deck ballpark calculator and "Request a quote" buttons.

## Fill in the business details

Everything the site prints is in `src/config.ts`. Search for `TODO`:

- name, first name, mobile, email
- **ABN and NSW contractor licence number.** NSW requires the licence number on advertising.
- service area, Instagram and Google review links (optional)
- `enquiryUrl`: the link to ServiceM8's **Simple Online Enquiry** form (ServiceM8 → Settings → ServiceM8 Add-ons). Once it's set, every "Request a quote" button goes there and the enquiry lands straight in ServiceM8. While it's empty, the buttons open a pre-filled text message to the mobile number.

The deck calculator's prices are in `deckEstimate` in the same file. They match the starting rates in `../quoting/quote-calculator.xlsx`. Change both together.

## Run it

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static site in dist/
```

## Put it online

The easiest free option is Vercel or Netlify: import this GitHub repository, set the **root directory to `website`**, build command `npm run build`, output `dist`. Then add a domain (about $15–25 a year for a `.com.au`; you need an ABN to register one) and update `site` in `astro.config.mjs`.

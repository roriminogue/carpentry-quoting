# Setting up Xero + ServiceM8

A checklist for a one-person, licensed carpentry business in Sydney. Work top to bottom; most steps take 5–15 minutes. Total is about one evening.

Prices and menu names below were checked in October 2026 from third-party sources, not the vendors' own pages. Confirm them when signing up.

---

## 0. Before you start (have these handy)

- [ ] ABN, and whether you're registered for GST. Register once turnover is expected to reach $75,000 a year. Most full-time carpenters cross that, so register from day one.
- [ ] NSW contractor licence number (Fair Trading). It must appear on every quote, contract and ad.
- [ ] Public liability insurance certificate. Most clients and builders ask for it.
- [ ] Business bank account (keep it separate from personal).
- [ ] Logo (optional) and a business email address.

## 1. Xero (accounts, GST, BAS)

1. Sign up at xero.com/au. **Ignite** (about A$37/month including GST) is enough to start: it sends quotes, 20 invoices a month, and lodges BAS. Move to **Grow** (about A$78) once you're sending more than 20 invoices a month.
2. **Settings → Organisation details:** business name, ABN, address, phone.
3. **Settings → Financial settings:** GST registered, BAS on the cash basis (simplest for a sole trader), quarterly.
4. **Bank feeds:** connect the business bank account.
5. **Invoice settings:** add your licence number and bank details to the invoice template footer. Payment terms: 7 days.
6. Optional: turn on **Stripe** or **GoCardless** in Xero so clients can pay invoices by card.
7. Ask your accountant to be added as an adviser. They can then do the BAS and tax return directly.

You won't make quotes in Xero; ServiceM8 does that and sends invoices across.

## 2. ServiceM8 (enquiries, quotes, jobs, photos)

1. Download **ServiceM8** from the App Store and start the free trial. Start on the **free or Starter plan**; it's priced by number of jobs a month, not by user. Upgrade when you pass the job limit.
2. **Settings → Business details:** business name, ABN, **licence number**, logo, phone, email.
3. **Settings → Accounting → Xero:** connect. Invoices, clients and payments then sync to Xero automatically. Set:
   - Labour and materials both go to Sales (or separate accounts if your accountant wants that).
   - GST on income: 10%.
4. **Materials & Services (your price list):** add the items from `quoting/price-list.csv`. ServiceM8 can import a CSV; if its import screen wants different column names, rename them, or just type the ~25 items in.
   - Change every price to your own first. The listed prices are starting points.
5. **Job templates:** create one for each common job type using `quoting/quote-templates.md`:
   - Deck – new build
   - Deck – re-board / repair
   - Doors & trims
   - Small renovation / general carpentry (hourly)
   Each template pre-fills the description, standard items and the terms text, so a quote takes minutes.
6. **Quote/invoice document:** in the document template settings, paste the **terms** from `quoting/quote-templates.md` into the quote footer. Make sure your licence number shows.
7. **Online quote acceptance:** turn on the option that lets the client accept the quote online. Set a deposit of **10%** maximum (NSW cap).

## 3. Add-ons (Settings → ServiceM8 Add-ons)

Turn these on. Some add-ons have a small monthly fee.

| Add-on | What it does for you | Set up with |
|---|---|---|
| **Simple Online Enquiry** | A web form clients fill in; it lands in ServiceM8 and asks the client follow-up questions if they left things out | Copy the form's link into the website config (see `website/README.md`) |
| **Automation** | Sends the instant reply and quote follow-ups by SMS/email without you touching anything | Wording in `quoting/messages.md` |
| **Email Inbox** | Gives you an `@servicem8` email address. Forward enquiry emails there and tap **Convert to Job** | Forward enquiries from Gmail, hipages etc. to it |
| **Reviews / feedback** (if offered) | Asks for a Google review after the job is paid | Wording in `quoting/messages.md` |

### Automation settings

- **New enquiry:** instant SMS reply (template 1).
- **Quote follow-up:** SMS 2 days after sending, email at day 7, final "quote expiring" at day 25. It stops by itself once the client replies or the job leaves Quote status.
- **Auto-unsuccessful:** move quotes with no response to Unsuccessful after 30 days. They come back automatically if the client replies.

## 4. NSW rules built into the paperwork

You have to follow these whatever software you use. The calculator flags them automatically, and the quote templates include them.

| Job price (incl. GST) | What you need |
|---|---|
| Up to $5,000 | Quote is fine. Still put it in writing. |
| Over $5,000 | **Written contract** before starting (small jobs contract). |
| Over $20,000 | **Large job contract** with a progress payment schedule, **and Home Building Compensation (HBCF) cover from icare before starting or taking any money, including the deposit.** |
| Any size | Deposit **max 10%**. Licence number on the quote. Variations agreed in writing. |

- Contracts: buy the **HIA** or **MBA NSW** home renovation / small works contracts (members get them cheaper) instead of writing your own. Attach the accepted ServiceM8 quote as the scope.
- HBCF: apply to icare through a distributor (broker) **before** your first job over $20k. Approval for a new contractor takes time, so start early.
- Decks: a deck over 1 m off the ground or over 25 m² is usually **not** exempt development and may need council or private certifier approval. Check before quoting.

Sources: [NSW Gov contracts](https://www.nsw.gov.au/housing-and-construction/building-or-renovating-a-home/preparing/contracts), [icare HBCF](https://icare.nsw.gov.au/government-agencies/our-funds-and-schemes/home-building-compensation-fund), [SIRA insurance obligations](https://www.sira.nsw.gov.au/resources-library/home-building-compensation-resources/publications/insurance-obligations-for-residential-building-work). This is a summary, not legal advice. Check with NSW Fair Trading or HIA/MBA if a job is borderline.

## 5. Test it end to end

1. Fill in the online enquiry form as if you were a client (use a friend's phone number).
2. Check the job appears in ServiceM8 and the instant SMS arrives.
3. Quote it from a job template, send it, and accept it from the friend's phone.
4. Check the deposit request, then mark the job complete and invoice it.
5. Check the invoice shows up in Xero.

Once that works, put the website live and add the link to your Google Business Profile, Instagram and email signature.

## 6. Get found (free, do this week)

- **Google Business Profile:** service-area business, categories "Carpenter" and "Deck builder", add photos of every job. The website link and "Request a quote" go to the enquiry form.
- Ask every happy client for a Google review (template 7 in `quoting/messages.md`). For a word-of-mouth business, reviews are the online version of a referral.

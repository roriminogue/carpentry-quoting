# Carpentry business: quoting setup

A quoting setup for a one-person, licensed carpentry business in Sydney, built around **Xero** (accounts, GST, BAS) and **ServiceM8** (enquiries, quotes, jobs, follow-ups) on an iPhone.

## How a quote flows

```
Website "Request a quote" ──► ServiceM8 Online Enquiry ──► new job in ServiceM8
                                                             │  instant SMS reply (automatic)
                                                             ▼
                                                    measure-up booked
                                                             │
        voice note ──► AI quote writer (or quote-calculator.xlsx) ──► quote from a job template
                                                             │  follow-ups at day 2 / 7 / 25 (automatic)
                                                             ▼
                                            client accepts online + 10% deposit
                                                             │
                                                  job done ──► invoice ──► Xero (BAS)
                                                             │
                                                   Google review request
```

## What's here

| File | What it's for |
|---|---|
| [`SETUP.md`](SETUP.md) | Step-by-step checklist: Xero, ServiceM8, add-ons, NSW rules, testing |
| [`quoting/price-list.csv`](quoting/price-list.csv) | Starting price list to load into ServiceM8 (Materials & Services) |
| [`quoting/quote-calculator.xlsx`](quoting/quote-calculator.xlsx) | Deck and general job calculator with NSW contract/insurance warnings (opens in Excel or Numbers on iPhone) |
| [`quoting/quote-templates.md`](quoting/quote-templates.md) | Quote terms and job templates (deck, re-board, doors, general) |
| [`quoting/messages.md`](quoting/messages.md) | Auto-reply, follow-up, expiry and review-request messages |
| [`quoting/ai-quote-writer/`](quoting/ai-quote-writer/HOW-TO-USE.md) | AI quote writer: talk through a measure-up on your phone, Claude drafts the quote, you check it and paste it into ServiceM8 |
| [`website/`](website/) | One-page website with a deck price estimator and quote buttons |

## Before using

1. **Every price is a starting point** from October 2026 Sydney cost guides. Replace them with real supplier prices and your own hours.
2. Fill in every `[BUSINESS NAME]`, `[LICENCE NO.]` and `TODO`.
3. Confirm ServiceM8 and Xero plan prices and add-on names when signing up; they were checked from third-party sources, not the vendors' own pages.
4. The NSW rules summary is not legal advice. Use HIA or MBA NSW contracts and check borderline jobs with NSW Fair Trading.

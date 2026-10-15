# AI quote writer: how to use it

Talk through the job after a measure-up, and Claude writes the quote. You check it, paste it into ServiceM8 and send it.
About 5 minutes instead of 30, and you still decide every price.

## Set it up once (10 minutes, easiest on a computer)

1. Go to **claude.ai** and sign in. Projects are in the left sidebar; if your plan doesn't show them, see "No Projects?" below.
2. **Projects → Create project.** Name it `Quote writer`.
3. Open `PROJECT-INSTRUCTIONS.md`, replace the `[BRACKETS]` with your business name, first name, licence number and ABN, and paste everything below the line into the project's **instructions**.
4. Add these four files to the project's **files**:
   - `quoting/ai-quote-writer/rates.md`
   - `quoting/price-list.csv`
   - `quoting/quote-templates.md`
   - `quoting/messages.md`
5. Test it: start a chat in the project and paste the example below. Check the total comes out at **$10,569.35**. If it does, it's reading your rates properly.

## After every measure-up (on your phone)

1. Open the **Claude app → Projects → Quote writer → new chat**.
2. Tap the **microphone** and talk it through, the way you'd explain it to a mate. Attach 2–4 photos if they help (access, the old deck, anything dodgy).
3. If Claude asks a question or two (it will if a measurement or the timber is missing), answer them.
4. Read **"Check this first"**: the assumptions, the flags, and the maths.
5. In ServiceM8, open the job, pick the matching job template, and paste in the **job description** and **line items**. Check the total matches.
6. Send the quote from ServiceM8 with the **customer message** Claude wrote. The automatic follow-ups take it from there.

Say "make it cheaper", "add a balustrade", "they'll pull the old deck out themselves" and so on, and it re-prices the quote.

## Example

**What you say:**

> Quote for Sarah Nguyen in Marrickville. New deck out the back, six by four, merbau, about 600 off the ground, three steps down to the lawn, sand and oil, take the rubbish. Easy access down the side.

**What comes back (shortened):**

> **Check this first**
> - Job: 6 × 4 m merbau deck, 600 mm high, 3 steps, oiled, Marrickville.
> - Assumptions: screw-fixed boards; no old deck to remove; easy access, so no difficulty multiplier.
> - Flags: over $5,000, so a written NSW home building contract is needed before starting. Under 1 m and under 25 m², so likely exempt development, but check.
> - Time on site: about 53 hours, roughly 7 days.
>
> **Quote for ServiceM8**
>
> | Code | Description | Qty | Unit | Unit price | Total |
> |---|---|---|---|---|---|
> | DECK-FRAME | Deck framing: footings, bearers, joists at 450 mm | 24 | m² | $95.00 | $2,280.00 |
> | DECK-BOARD | Lay merbau decking boards | 24 | m² | $55.00 | $1,320.00 |
> | DECK-STEP | Merbau stairs | 3 | step | $150.00 | $450.00 |
> | DECK-OIL | Sand and two coats of decking oil | 24 | m² | $30.00 | $720.00 |
> | MATERIALS | Merbau boards, H3/H4 frame, stair timber, fixings | 1 | each | $4,588.50 | $4,588.50 |
> | WASTE | Rubbish removal | 1 | each | $250.00 | $250.00 |
>
> Subtotal $9,608.50 · GST $960.85 · **Total $10,569.35** · Deposit to book $1,056.94
>
> **Message to Sarah**
> Hi Sarah, thanks for having me out on Tuesday. Your quote for the 6 × 4 m merbau deck is attached: $10,569.35 including GST, covering the frame, boards, three steps, sand and oil, and taking the rubbish away. The price holds for 30 days. A 10% deposit locks in your start date, and you can accept online from the quote. Any questions, just give me a call. Cheers, [FIRST NAME]

## Good habits

- **Always check the maths table** before you send. Claude is good with numbers, but you're the licensed one.
- **Give it real supplier prices** when you have them ("merbau's $102 a metre at Bowens this week"). It uses them instead of the standard rate.
- **Keep the rates current.** When a rate changes, update `rates.md`, `price-list.csv` and `quote-calculator.xlsx`, then re-upload `rates.md` to the project.
- **Privacy:** only include what the quote needs (name and suburb are enough; skip phone numbers and full addresses).

## No Projects?

If your Claude plan doesn't have Projects, open a new chat, paste the instructions at the top of your first message, and attach `rates.md` and `price-list.csv`. It works the same, but you set it up each time. Projects save that step.

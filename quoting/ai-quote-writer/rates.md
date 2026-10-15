# Rates and materials (for the AI quote writer)

All prices **ex GST**. These match `quoting/quote-calculator.xlsx` and `quoting/price-list.csv`.
When a rate changes, change it in all three places (or re-upload this file to the Claude project).

## Labour and general

| Item | Code | Rate (ex GST) |
|---|---|---|
| Carpentry labour | LAB-HR | $90 / hour |
| Day rate (8 hours) | LAB-DAY | $680 / day |
| Minimum charge (covers travel + first 2 hours) | MIN-CHG | $180 |
| Rubbish removal (ute load) | WASTE | $250 |
| Skip bin (bigger jobs, price varies by size/council) | SKIP | $450 |
| Materials margin on supplier cost | MATERIALS | 15% |
| Contingency (old houses, hidden structure, only when flagged) | — | 10% of subtotal |
| GST | — | 10% |
| Deposit on acceptance (NSW maximum) | — | 10% of total inc GST |

## Decks

Labour (ex GST):

| Item | Code | Rate |
|---|---|---|
| Framing labour (footings, bearers, joists at 450 mm) | DECK-FRAME | $95 / m² |
| Laying boards | DECK-BOARD | $55 / m² |
| Re-board (remove old, check frame, lay new) | DECK-REBOARD | $80 / m² |
| Sand and oil (oil included) | DECK-OIL | $30 / m² |
| Stairs | DECK-STEP | $150 / step |
| Balustrade | BALUSTRADE | $180 / lin m |

Site difficulty: multiply **deck labour** by 1.0 (flat, good access), 1.15 (sloped or tight access) or 1.3 (steep, carry-in, demolition).

Materials at supplier cost (ex GST, before the 15% margin):

| Material | Rate |
|---|---|
| Frame, low deck (stirrups/footings, H3/H4 bearers and joists, fixings) | $60 / m² |
| Extra frame materials if over 1 m off the ground | $25 / m² |
| Merbau boards | $95 / m² |
| Spotted gum boards | $115 / m² |
| Blackbutt boards | $105 / m² |
| Treated pine boards | $45 / m² |
| Composite boards | $150 / m² |
| Stairs materials | $90 / step |
| Balustrade materials (timber posts, rails, balusters) | $150 / lin m |

Board prices include about 10% offcut waste.

## Doors, trims and interior (labour, ex GST)

| Item | Code | Rate |
|---|---|---|
| Hang a door (door supplied, existing jamb) | DOOR-HANG | $160 each |
| Install prehung door (remove old door and frame) | DOOR-PREHUNG | $280 each |
| Hang external door (incl. weather seal) | DOOR-EXT | $320 each |
| Fit lockset or handle | LOCKSET | $60 each |
| Architraves, both sides of one door | ARCH-SET | $90 each |
| Skirting, remove and replace | SKIRT | $18 / lin m |
| Stud wall, non-structural | WALL-FRAME | $110 / lin m |
| Built-in shelving | SHELVING | $90 / lin m |

## Outdoor (labour, ex GST)

| Item | Code | Rate |
|---|---|---|
| Pergola frame | PERGOLA | $120 / m² |
| Timber gate, built and hung | GATE | $450 each |
| Fence repair | FENCE-REPAIR | $90 / hour |

## Worked example (to check the maths)

6 m × 4 m merbau deck, 600 mm high, 3 steps, no balustrade, sand and oil, rubbish removal, easy access:

| Line | Calc | Ex GST |
|---|---|---|
| Deck framing labour | 24 m² × $95 | $2,280.00 |
| Laying boards | 24 m² × $55 | $1,320.00 |
| Stairs labour | 3 × $150 | $450.00 |
| Sand and oil | 24 m² × $30 | $720.00 |
| Materials: frame $1,440 + merbau $2,280 + stairs $270 = $3,990 at cost, + 15% | $3,990 × 1.15 | $4,588.50 |
| Rubbish removal | | $250.00 |
| **Subtotal ex GST** | | **$9,608.50** |
| GST 10% | | $960.85 |
| **Total inc GST** | | **$10,569.35** |
| Deposit 10% | | $1,056.94 |

That's about $440/m² inc GST, which matches the calculator ($10,570).

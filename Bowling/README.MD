# Bowling Kata

This program calculates the total score for a single line of American Ten-Pin Bowling, given a valid sequence of rolls.

## Scoring Rules

- A game consists of 10 turns (called "frames").
- In each frame, the player has up to 2 rolls to knock down 10 pins.
- If the player knocks down all 10 pins on the first roll, it is a **strike** (`X`):
  - The frame ends immediately.
  - The score for the frame is 10 plus the total pins knocked down in the next two rolls.
- If the player knocks down all 10 pins in two rolls, it is a **spare** (`/`):
  - The score for the frame is 10 plus the number of pins knocked down in the next roll.
- If the player fails to knock down all pins in two rolls:
  - The score for the frame is the total number of pins knocked down in those two rolls.
- In the 10th frame:
  - If the player rolls a spare, they get one extra bonus roll.
  - If the player rolls a strike, they get two extra bonus rolls.
  - Bonus rolls are only used to calculate the score for the 10th frame.

## Notes

- The program does **not** check for valid rolls.
- The program does **not** check for the correct number of rolls or frames.
- The program does **not** provide scores for intermediate frames.
- Only the final total score is calculated.

## Example Inputs and Expected Scores

| Input (rolls)                   | Expected Score | Explanation                                 |
|----------------------------------|---------------|---------------------------------------------|
| `X X X X X X X X X X X X`       | 300           | 12 consecutive strikes (perfect game)       |
| `9- 9- 9- 9- 9- 9- 9- 9- 9- 9-` | 90            | 10 frames of 9 and a miss                   |
| `5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5`| 150           | 10 spares with a final 5 as bonus           |

- `X` = strike (all pins down in one roll)
- `/` = spare (all pins down in two rolls)
- `-` = miss (no pins down)


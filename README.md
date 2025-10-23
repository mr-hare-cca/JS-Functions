# Unit 8.6 – Functions (with Parameters)

This lesson focuses on **writing functions in JavaScript** and **using parameters**. During the activity, students will interact with **five buttons**; each button calls a function and displays results on the page using **`textContent`** (no prompts, no `console.log`).

---

## What you’ll build
A simple page with inputs, five buttons, and five output areas. Each button calls a function (via `onclick`) and **writes to the page**.

### Required IDs (for autograding)
**Buttons**
- `btnMyFunc` — increments a click counter and shows the count.
- `btnRandom` — shows a random integer from **1..max** using `getRandomNum(max)`.
- `btnAdder` — shows the sum from `myAdder(x, y)`.
- `btnDistance` — shows the distance from `distance(x1, y1, x2, y2)`.
- `btnQuadratic` — shows the root(s) from `quadratic(a, b, c)`.

**Inputs**
- `maxRand` — `max` for the random function.
- `addX`, `addY` — numbers for the adder.
- `x1`, `y1`, `x2`, `y2` — coordinates for distance.
- `qa`, `qb`, `qc` — coefficients for the quadratic.

**Outputs (use `textContent`)**
- `outMyFunc` — shows “Clicked N times” (or similar).
- `outRandom` — shows the random integer (or 0 if invalid).
- `outAdder` — shows the sum.
- `outDistance` — shows the numeric distance.
- `outQuadratic` — shows one or two roots (strings or numbers).

> Keep your outputs **in the DOM** with `textContent`. The autograder prevents `prompt()`/`alert()` and checks for `console.log` use during button clicks.

---

## Function Behavior (requirements)
- `myFunc()`  
  Increments a persistent counter and **updates `#outMyFunc`** with the current count.
- `getRandomNum(max)`  
  Returns an integer in **1..max**. If `max` is missing, not a number, or `< 1`, returns **0**.
- `myAdder(x, y)`  
  Returns `x + y` (numbers). Display the result in **`#outAdder`**.
- `distance(x1, y1, x2, y2)`  
  Returns the Euclidean distance. Display the numeric result in **`#outDistance`**.
- `quadratic(a, b, c)`  
  Returns an **array** of root(s). For negative discriminant, return string roots with `i` (e.g., `"p±qi"`). Display in **`#outQuadratic`**.

---

## Page Interaction
- Each button has an `onclick="..."` that calls a function which **reads inputs, calls the relevant function, and writes to the output element**.
- Do **not** use `prompt()` or `alert()`.
- Do **not** use `console.log` for output.

---

## Quick checklist
- [ ] All required **IDs** exist in your HTML.
- [ ] Each button calls the correct function **via `onclick`**.
- [ ] Each output is set using **`textContent`**.
- [ ] `getRandomNum(max)` returns **0** when `max` is invalid.
- [ ] `myFunc()` keeps a **persistent** counter between clicks.
- [ ] Distance and quadratic show results on the page (text is fine).


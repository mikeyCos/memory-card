# Changelog
---
### 04 JUN 2024
- 
---
### 03 JUN 2024
- Disabled a dialog element from rendering whenever a game has ended.
- When a card or image is clicked, a random cat fact is displayed in the `#notifications .messages` container.
- Created `notifications.messages.data` module; generates an array of messages that are fetched from [MeowFacts](https://github.com/wh-iterabb-it/meowfacts).
- Added breakpoint `@media screen and (min-width: 480px)` for `#notifications`/`#cards .container` containers.
- Added `undraw_playful_cat.svg` into pathway `assets/icons/miscellaneous`.
- Declared `onClickHandler` in `Cards` component instead of inside it's child component `Card`.
- Renamed `shuffle` function to `shuffleCards`.
- Best score is only set if `currentScore > bestScore`.
---
### 02 JUN 2024
- Updated `README.md`.
- Included an secondary option to fetch inside the `Cards` component's useEffect.
- Added `headers` to fetch options.
- Added `:hover` to `.slider input` and `.card` containers.
- Removed padding from `.card` containers.
---
### 31 MAY 2024
- Converted `buildArray` function into a asynchronous function that fetches a response from `thecatapi`, resolves the response into a JavaScript object (an array) and passes it into the callback.
- Moving the slider will reset the current and best scores.
- Currently, the `Cards` component module renders more than twice onload and when the slider value changes, because once `Cards` mounts, it's `useEffect` calls `setCards`.
- Created `cards`/`scoreboard`/`slider` stylesheets.
- Created `Scoreboard` component module.
---
### 30 MAY 2024
- Initial commit.
- Created a variety of stylesheets and applied basic CSS properties to a few sections.
- Initialized components: `Cards`/`Footer`/`Header`/`Main`/`Slider`.
- Renamed `main.jsx` to `index.jsx`.
- Created static skeleton.
- Removed boilerplate code from template.
- Ran `npm create vite@latest cv-application -- --template react`
---

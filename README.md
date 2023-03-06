# TTT - A TestTestTest Workshop

```
# Get started
pnpm install
pnpm exec playwright install
pnpm test
```

```
# Do development
pnpm storybook
pnpm dev
```

## What's the game?

**TTT** is a Tic Tac Toe variant that involves a little more strategy. Rather than playing as X's and O's, one player draws _vertical lines_, and the other _horizontal lines_. The goal is to be the first player to create three **t**'s in a row!

* Set up a 3x3 square board.
* Player One will draw vertical lines into boxes. Player Two will draw horizontal lines into boxes.
* Players alternate turns drawing their flavor of line into boxes.
* A player may draw their line into a square that already has a line drawn by the other player. In fact, this is the only way to win!
  * When a player does this, it forms a `+` symbol in the square. This is called a **t**.
* The first player to create a set of three **t**'s in a row (vertical, horizontal, or diagonal) wins.
* One last rule: Player Two can never play in the same square that Player One did the previous turn.
  * <small>This prevents the trival strategy of just always following Player One, which would lead to Player Two winning every game.</small>

## Testing Workshop

This repo serves as a simple example of testing on the frontend.

The nature of the workshop is to introduce patterns and philosophies that work independently of frameworks and tools.

### Tech Stack Used

* React - because everyone uses it nowadays
* Playwright - component testing directly in a real browser
* Storybook - for independently developing components
* Vite - build tool with hot module reloading

export namespace Ttt {
	export type Player = 'horizontal' | 'vertical'

	export type Square = {
		horizontal: boolean,
		vertical: boolean,
	}

	export type Board = Square[][]

	export type Game = {
		board: Board,
		currentTurn: Player,
	}

	export type Position = {
		row: number,
		col: number,
	}

	const emptySquare = (): Square => ({
		horizontal: false,
		vertical: false,
	})

	export const newGame = (): Game => ({
		board: [
			[emptySquare(), emptySquare(), emptySquare()],
			[emptySquare(), emptySquare(), emptySquare()],
			[emptySquare(), emptySquare(), emptySquare()],
		],
		currentTurn: 'vertical',
	})

	export const eachSquare = <T>(game: Game, callback: (square: Square, position: Position) => T): T[][] =>
		game.board.map((row, rowIndex) =>
			row.map((square, colIndex) =>
				callback(square, { row: rowIndex, col: colIndex })
			)
		)

	export const squareAtPosition = (game: Game, { row, col }: Position): Square =>
		game.board[row][col]

	export const select = (game: Game, { row, col }: Position): Game => ({
		...game,
		currentTurn: game.currentTurn === 'horizontal' ? 'vertical' : 'horizontal',
		board: eachSquare(game, (square, position) => {
			if (position.row === row && position.col === col) {
				return {
					...square,
					[game.currentTurn]: true,
				}
			}

			return square
		})
	})

	export const canSelectPosition = (game: Game, { row, col }: Position): boolean =>
		!squareAtPosition(game, { row, col })[game.currentTurn]
}

import { useState } from 'react'

export type TttSquare = {
	horizontal: boolean,
	vertical: boolean,
	select?: () => void,
}

export type TttBoard = TttSquare[][]

export type TttPlayer = 'horizontal' | 'vertical'

const empty = () => ({
	horizontal: false,
	vertical: false,
})

export const useTtt = () => {
	const [boardState, setBoardState] = useState<TttBoard>([
		[empty(), empty(), empty()],
		[empty(), empty(), empty()],
		[empty(), empty(), empty()],
	])

	const [turn, setTurn] = useState<TttPlayer>('vertical')

	const select = (row: number, col: number) => {
		setBoardState(markSquare(row, col, turn))
		setTurn(exchangeTurns)
	}

	const board = boardState.map((row, rowIndex) => row.map((square, colIndex) => ({
		...square,
		select: playerHasNotPlayedHere(square, turn)
			? () => select(rowIndex, colIndex)
			: undefined,
	})))

	return {
		board,
		turn,
	}
}

const markSquare = (row: number, col: number, turn: TttPlayer) =>
	(currentBoard: TttBoard) => {
		const newBoard = structuredClone(currentBoard)
		newBoard[row][col][turn] = true

		return newBoard
	}

const exchangeTurns = (turn: TttPlayer) =>
	turn === 'vertical' ? 'horizontal' : 'vertical'

const playerHasNotPlayedHere = (square: TttSquare, turn: TttPlayer) =>
	!square[turn]

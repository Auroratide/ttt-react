import { useState } from 'react'
import { Ttt } from '../ttt'

export type SelectableSquare = {
	horizontal: boolean,
	vertical: boolean,
	select?: () => void,
}

export type SelectableBoard = SelectableSquare[][]

export const useTtt = (
	initialGame?: Ttt.Game,
): {
	board: SelectableBoard,
	currentTurn: Ttt.Player,
} => {
	const [game, setGame] = useState<Ttt.Game>(initialGame ?? Ttt.newGame())

	const board = Ttt.eachSquare(game, (square, position) => ({
		...square,
		select: Ttt.canSelectPosition(game, position)
			? () => setGame((game) => Ttt.select(game, position))
			: undefined,
	}))

	const currentTurn = game.currentTurn

	return {
		board,
		currentTurn,
	}
}

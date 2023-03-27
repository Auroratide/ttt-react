import { Ttt } from './ttt.js'

export const makeTttGame = (template: Partial<Ttt.Game>): Ttt.Game => ({
	...Ttt.newGame(),
	...template,
})

export const makeSquare = {
	empty: (): Ttt.Square => ({
		horizontal: false,
		vertical: false,
	}),
	horizontal: (): Ttt.Square => ({
		horizontal: true,
		vertical: false,
	}),
	vertical: (): Ttt.Square => ({
		horizontal: false,
		vertical: true,
	}),
	both: (): Ttt.Square => ({
		horizontal: true,
		vertical: true,
	}),
}

import { TttSquare } from './useTtt'

export const makeSquare = (vertical: boolean, horizontal: boolean): TttSquare => {
	return {
		vertical,
		horizontal,
	}
}

export const makeEmpty = (): TttSquare => makeSquare(false, false)
export const makeHoriz = (): TttSquare => makeSquare(false, true)
export const makeVert = (): TttSquare => makeSquare(true, false)
export const makeBoth = (): TttSquare => makeSquare(true, true)

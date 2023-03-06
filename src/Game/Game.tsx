import { Board } from '../Board'
import { useTtt } from './useTtt'

export function Game() {
	const { board } = useTtt()

	return (
		<Board state={board} />
	)
}
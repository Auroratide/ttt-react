import c from 'classnames'
import css from './Game.module.css'
import { Board } from '../Board'
import { Mark } from '../Mark'
import { TttPlayer, TttSquare, useTtt } from './useTtt'

export interface GameProps {
	initialPlayer?: TttPlayer,
	initialBoard?: Pick<TttSquare, TttPlayer>[][],
}

export function Game({
	initialPlayer,
	initialBoard,
}: GameProps) {
	const { board, turn } = useTtt(initialPlayer, initialBoard)

	return (
		<article>
			<section>
				<h2>Board</h2>
				<Board state={board} />
			</section>
			<section className={c(css.row)}>
				<h2>Current Turn:</h2>
				<p className={c(css.squareContainer, css.smallerFont)}>
					<Mark type={turn} />
				</p>
			</section>
		</article>
	)
}
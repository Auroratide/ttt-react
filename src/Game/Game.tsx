import c from 'classnames'
import css from './Game.module.css'
import { Board } from '../Board'
import { Mark } from '../Mark'
import { useTtt } from './useTtt'
import { Ttt } from '../ttt'

export interface GameProps {
	initialGame?: Ttt.Game,
}

export function Game({
	initialGame,
}: GameProps) {
	const { board, currentTurn } = useTtt(initialGame)

	return (
		<article>
			<section>
				<h2>Board</h2>
				<Board state={board} />
			</section>
			<section className={c(css.row)}>
				<h2>Current Turn:</h2>
				<p className={c(css.squareContainer, css.smallerFont)}>
					<Mark type={currentTurn} />
				</p>
			</section>
		</article>
	)
}
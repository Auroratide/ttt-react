import c from 'classnames'
import css from './Board.module.css'
import { TttBoard } from '../Game'
import { Row } from './Row'

export interface BoardProps {
	state: TttBoard,
}

export function Board({ state }: BoardProps) {
	return (
		<table className={c(css.fullWidth)}>
			<caption>TTT Board</caption>
			<tbody>
				{state.map((row, i) => (
					<Row row={row} index={i} key={i} />
				))}
			</tbody>
		</table>
	)
}

import c from 'classnames'
import css from './Board.module.css'
import { SelectableBoard } from '../Game'
import { Row } from './Row'

export interface BoardProps {
	state: SelectableBoard,
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

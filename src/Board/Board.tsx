import { Square } from '../Square'
import c from 'classnames'
import css from './Board.module.css'

export interface BoardProps {
	state: {
		horizontal: boolean,
		vertical: boolean,
	}[][]
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

function Row({ row, index }: {
	row: {
		horizontal: boolean,
		vertical: boolean,
	}[],
	index: number,
}) {
	const label = String.fromCharCode(65 + index)

	return (
		<tr>
			{row.map((square, squareIndex) => (
				<td key={`${label}${squareIndex + 1}`}>
					<Square
						label={`${label}${squareIndex + 1}`}
						horizontal={square.horizontal}
						vertical={square.vertical}
					/>
				</td>
			))}
		</tr>
	)
}

import { Square } from '../Square'
import { SelectableSquare } from '../Game'

export interface RowProps {
	row: SelectableSquare[],
	index: number,
}

export function Row({ row, index }: RowProps) {
	const label = String.fromCharCode(65 + index)

	return (
		<tr>
			{row.map((square, squareIndex) => (
				<td key={`${label}${squareIndex + 1}`}>
					<Square
						label={`${label}${squareIndex + 1}`}
						horizontal={square.horizontal}
						vertical={square.vertical}
						onClick={square.select}
					/>
				</td>
			))}
		</tr>
	)
}

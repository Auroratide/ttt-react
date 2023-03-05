import { Square } from '../Square/Square'
import c from 'classnames'
import css from './Board.module.css'

export function Board() {
	return (
		<table className={c(css.fullWidth)}>
			<caption>TTT Board</caption>
			<tbody>
				<tr>
					<td>
						<Square label="A1" />
					</td>
					<td>
						<Square label="A2" />
					</td>
					<td>
						<Square label="A3" />
					</td>
				</tr>
				<tr>
					<td>
						<Square label="B1" />
					</td>
					<td>
						<Square label="B2" />
					</td>
					<td>
						<Square label="B3" />
					</td>
				</tr>
				<tr>
					<td>
						<Square label="C1" />
					</td>
					<td>
						<Square label="C2" />
					</td>
					<td>
						<Square label="C3" />
					</td>
				</tr>
			</tbody>
		</table>
	)
}

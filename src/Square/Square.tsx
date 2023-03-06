import c from 'classnames'
import css from './Square.module.css'
import { Mark } from '../Mark'

export interface SquareProps {
	label: string
	vertical?: boolean
	horizontal?: boolean
	onClick?: () => void
}

export function Square({ label, vertical, horizontal, onClick }: SquareProps) {
	return (
		<button className={c(css.square, css.relative, css.button)} onClick={onClick} disabled={onClick == null}>
			<span className={c(css.cornerLabel)}>{label}</span>
			{vertical && <Mark type="vertical" />}
			{horizontal && <Mark type="horizontal" />}
		</button>
	)
}

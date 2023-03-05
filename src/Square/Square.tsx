import c from 'classnames'
import css from './Square.module.css'

export interface SquareProps {
	label: string
}

export function Square({ label }: SquareProps) {
	return (
		<button className={c(css.square, css.cornerContainer, css.button)}>
			<span className={c(css.cornerLabel)}>{label}</span>
		</button>
	)
}

import c from 'classnames'
import { VisuallyHidden } from '../VisuallyHidden'
import css from './Square.module.css'

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

function Mark({ type }: { type: 'vertical' | 'horizontal' }) {
	return (
		<span className={c(css.absolutelyCentered, css.mark, css[type])}>
			<VisuallyHidden>{' '}{type}{' '}</VisuallyHidden>
		</span>
	)
}

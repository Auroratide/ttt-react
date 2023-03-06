import c from 'classnames'
import { VisuallyHidden } from '../VisuallyHidden'
import css from './Mark.module.css'

export interface MarkProps {
	type: 'vertical' | 'horizontal'
}

export function Mark({ type }: MarkProps) {
	return (
		<span className={c(css.absolutelyCentered, css.mark, css[type])}>
			<VisuallyHidden>{' '}{type}{' '}</VisuallyHidden>
		</span>
	)
}
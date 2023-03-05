import React from 'react'
import css from './VisuallyHidden.module.css'

export interface VisuallyHiddenProps {
	children?: React.ReactNode
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
	return (
		<span className={css.visuallyHidden}>
			{children}
		</span>
	)
}

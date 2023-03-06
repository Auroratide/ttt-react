import c from 'classnames'
import css from './App.module.css'
import { Game } from '../Game'

export function App() {
	return (
		<main>
			<h1>TTT</h1>
			<div className={c(css.fitScreen)}>
				<Game />
			</div>
		</main>
	)
}

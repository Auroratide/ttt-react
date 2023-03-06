import { StoryFn, Meta } from '@storybook/react'
import { Game } from './Game'

export default {
	component: Game,
} as Meta

export const Default: StoryFn = () => (
	<div style={{
		width: '40vw',
	}}>
		<Game />
	</div>
)

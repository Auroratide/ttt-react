import { StoryFn, Meta } from '@storybook/react'
import { Board } from './Board'

export default {
	component: Board,
} as Meta

export const Default: StoryFn = () => (
	<div style={{
		width: '40vw',
	}}>
		<Board />
	</div>
)

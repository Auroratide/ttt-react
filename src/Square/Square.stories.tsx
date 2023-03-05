import { StoryFn, Meta } from '@storybook/react'
import { Square } from './Square'

export default {
	component: Square,
} as Meta

export const Default: StoryFn = () => (
	<div style={{
		width: '200px',
	}}>
		<Square label="A1" />
	</div>
)

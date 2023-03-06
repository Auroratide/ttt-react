import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Mark } from './Mark'

export default {
	component: Mark,
} as Meta

export const Horizontal: StoryFn = () => (
	<Container>
		<Mark type="horizontal" />
	</Container>
)

export const Vertical: StoryFn = () => (
	<Container>
		<Mark type="vertical" />
	</Container>
)

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div style={{
			width: '200px',
			height: '200px',
			position: 'relative',
		}}>
			{children}
		</div>
	)
}

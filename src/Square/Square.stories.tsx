import { useState } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Square } from './Square'

export default {
	component: Square,
} as Meta

export const InteractiveExample: StoryFn = () => {
	const [horizontal, setHorizontal] = useState(false)

	const toggleHorizontal = () => {
		setHorizontal((prev) => !prev)
	}

	return (
		<Container>
			<Square label="A1" horizontal={horizontal} onClick={toggleHorizontal} />
		</Container>
	)
}

export const OnlyVertical: StoryFn = () => (
	<Container>
		<Square label="A1" vertical />
	</Container>
)

export const OnlyHorizontal: StoryFn = () => (
	<Container>
		<Square label="A1" horizontal />
	</Container>
)

export const BothVerticalAndHorizontal: StoryFn = () => (
	<Container>
		<Square label="A1" vertical horizontal />
	</Container>
)

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div style={{
			width: '200px',
		}}>
			{children}
		</div>
	)
}

import { StoryFn, Meta } from '@storybook/react'
import { Game } from './Game'
import {
	makeEmpty,
	makeHoriz,
	makeVert,
	makeBoth,
} from './test-builders'

export default {
	component: Game,
} as Meta

export const FreshGame: StoryFn = () => (
	<Container>
		<Game />
	</Container>
)

export const GameInProgress: StoryFn = () => (
	<Container>
		<Game initialBoard={[
			[makeVert(), makeEmpty(), makeEmpty()],
			[makeEmpty(), makeVert(), makeEmpty()],
			[makeHoriz(), makeBoth(), makeHoriz()],
		]} initialPlayer="vertical" />
	</Container>
)

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div style={{
			width: '40vw',
		}}>
			{children}
		</div>
	)
}

import { StoryFn, Meta } from '@storybook/react'
import { Game } from './Game'
import { makeTttGame, makeSquare } from '../ttt/test-builders'

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
		<Game initialGame={makeTttGame({
			board: [
				[makeSquare.vertical(), makeSquare.empty(), makeSquare.empty()],
				[makeSquare.empty(), makeSquare.vertical(), makeSquare.empty()],
				[makeSquare.horizontal(), makeSquare.both(), makeSquare.horizontal()],
			],
			currentTurn: 'vertical',
		})} />
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

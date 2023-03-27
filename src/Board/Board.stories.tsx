import { StoryFn, Meta } from '@storybook/react'
import { makeSquare } from '../ttt/test-builders'
import { Board } from './Board'

export default {
	component: Board,
} as Meta

export const EmptyBoard: StoryFn = () => (
	<Container>
		<Board state={[
			[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
			[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
			[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
		]} />
	</Container>
)

export const SomeFilled: StoryFn = () => (
	<Container>
		<Board state={[
			[makeSquare.empty(), makeSquare.horizontal(), makeSquare.vertical()],
			[makeSquare.empty(), makeSquare.both(), makeSquare.empty()],
			[makeSquare.horizontal(), makeSquare.vertical(), makeSquare.horizontal()],
		]} />
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

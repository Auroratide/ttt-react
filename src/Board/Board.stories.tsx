import { StoryFn, Meta } from '@storybook/react'
import { TttSquare } from '../Game'
import { Board } from './Board'

export default {
	component: Board,
} as Meta

const makeSquare = (state: 'empty' | 'horizontal' | 'vertical' | 'both'): TttSquare => ({
	horizontal: state === 'horizontal' || state === 'both',
	vertical: state === 'vertical' || state === 'both',
})

export const EmptyBoard: StoryFn = () => (
	<Container>
		<Board state={[
			[makeSquare('empty'), makeSquare('empty'), makeSquare('empty')],
			[makeSquare('empty'), makeSquare('empty'), makeSquare('empty')],
			[makeSquare('empty'), makeSquare('empty'), makeSquare('empty')],
		]} />
	</Container>
)

export const SomeFilled: StoryFn = () => (
	<Container>
		<Board state={[
			[makeSquare('empty'), makeSquare('horizontal'), makeSquare('vertical')],
			[makeSquare('empty'), makeSquare('both'), makeSquare('empty')],
			[makeSquare('horizontal'), makeSquare('vertical'), makeSquare('horizontal')],
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

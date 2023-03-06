import { StoryFn, Meta } from '@storybook/react'
import { TttSquare } from '../Game'
import { Board } from './Board'
import {
	makeEmpty,
	makeHoriz,
	makeVert,
	makeBoth,
} from '../Game/test-builders'

export default {
	component: Board,
} as Meta

// const makeSquare = (state: 'empty' | 'horizontal' | 'vertical' | 'both'): TttSquare => ({
// 	horizontal: state === 'horizontal' || state === 'both',
// 	vertical: state === 'vertical' || state === 'both',
// })

export const EmptyBoard: StoryFn = () => (
	<Container>
		<Board state={[
			[makeEmpty(), makeEmpty(), makeEmpty()],
			[makeEmpty(), makeEmpty(), makeEmpty()],
			[makeEmpty(), makeEmpty(), makeEmpty()],
		]} />
	</Container>
)

export const SomeFilled: StoryFn = () => (
	<Container>
		<Board state={[
			[makeEmpty(), makeHoriz(), makeVert()],
			[makeEmpty(), makeBoth(), makeEmpty()],
			[makeHoriz(), makeVert(), makeHoriz()],
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

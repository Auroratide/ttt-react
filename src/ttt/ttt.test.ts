import { test, expect } from '@playwright/experimental-ct-react'
import { makeTttGame, makeSquare } from './test-builders.js'
import { Ttt } from './ttt.js'

test.describe('TTT', () => {
	test('newGame', () => {
		// when
		const game = Ttt.newGame()

		// then
		expect(game.currentTurn).toBe('vertical')
		Ttt.eachSquare(game, (square) => {
			expect(square.horizontal).toBe(false)
			expect(square.vertical).toBe(false)
		})
	})

	test.describe('select', () => {
		test('square selected with current turn', () => {
			// given
			let game = makeTttGame({
				currentTurn: 'horizontal',
			})
			const positionToSelect = { row: 0, col: 0 }

			expect(Ttt.squareAtPosition(game, positionToSelect)).toEqual({
				horizontal: false,
				vertical: false,
			})

			// when
			game = Ttt.select(game, { row: 0, col: 0 })

			// then
			expect(Ttt.squareAtPosition(game, positionToSelect)).toEqual({
				horizontal: true,
				vertical: false,
			})
		})

		test('turns are exchanged', () => {
			// given
			let game = makeTttGame({
				currentTurn: 'horizontal',
			})

			// when
			game = Ttt.select(game, { row: 0, col: 0 })

			// then
			expect(game.currentTurn).toBe('vertical')
		})
	})

	test.describe('canSelectPosition', () => {
		test('square is empty', () => {
			// given
			const game = makeTttGame({
				board: [
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
				],
			})

			// then
			expect(Ttt.canSelectPosition(game, { row: 0, col: 0 })).toBe(true)
		})

		test('current player has played at position', () => {
			// given
			const game = makeTttGame({
				currentTurn: 'horizontal',
				board: [
					[makeSquare.horizontal(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
				],
			})

			// then
			expect(Ttt.canSelectPosition(game, { row: 0, col: 0 })).toBe(false)
		})

		test('other player has played at position', () => {
			// given
			const game = makeTttGame({
				currentTurn: 'horizontal',
				board: [
					[makeSquare.vertical(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
					[makeSquare.empty(), makeSquare.empty(), makeSquare.empty()],
				],
			})

			// then
			expect(Ttt.canSelectPosition(game, { row: 0, col: 0 })).toBe(true)
		})
	})
})
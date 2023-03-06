import { test, expect } from '@playwright/experimental-ct-react'
import { FreshGame, GameInProgress } from './Game.stories'

test.describe('Game', () => {
	test('alternating turns', async ({ mount }) => {
		const component = await mount(<FreshGame />)
		const getSquare = (label: string) =>
			component.getByRole('button', { name: new RegExp(label) })
	
		await expect(component.getByText('Current Turn: vertical')).toBeVisible()
		await getSquare('B2').click()
		await expect(getSquare('B2')).not.toContainText('horizontal')
		await expect(getSquare('B2')).toContainText('vertical')
	
		await expect(component.getByText('Current Turn: horizontal')).toBeVisible()
		await getSquare('B3').click()
		await expect(getSquare('B3')).toContainText('horizontal')
		await expect(getSquare('B3')).not.toContainText('vertical')

		await expect(component.getByText('Current Turn: vertical')).toBeVisible()
		await getSquare('B3').click()
		await expect(getSquare('B3')).toContainText('horizontal')
		await expect(getSquare('B3')).toContainText('vertical')
	})

	test('attempting to mark a square the player has already marked', async ({ mount }) => {
		const component = await mount(<GameInProgress />)
		const getSquare = (label: string) =>
			component.getByRole('button', { name: new RegExp(label) })
	
		await expect(component.getByText('Current Turn: vertical')).toBeVisible()
		await expect(getSquare('A1')).toContainText('vertical')

		await getSquare('A1').click({ force: true })

		// turn has not changed
		await expect(component.getByText('Current Turn: vertical')).toBeVisible()
	})
})

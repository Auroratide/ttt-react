import { test, expect } from '@playwright/experimental-ct-react'
import { FreshGame } from './Game.stories'

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
})

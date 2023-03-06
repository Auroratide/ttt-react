import { test, expect } from '@playwright/experimental-ct-react'
import { Default } from './Game.stories'

const getSquare = (label: string) => `button:has-text("${label}")`

test.describe('Game', () => {
	test('alternating turns', async ({ mount }) => {
		const component = await mount(<Default />)
	
		await component.locator(getSquare('B2')).click()
		await expect(component.locator(getSquare('B2'))).toContainText('vertical')
	
		await component.locator(getSquare('B3')).click()
		await expect(component.locator(getSquare('B3'))).toContainText('horizontal')
	})
})

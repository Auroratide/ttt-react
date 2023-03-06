import { test, expect } from '@playwright/experimental-ct-react'
import { Default } from './Game.stories'

test.describe('Game', () => {
	test('alternating turns', async ({ mount }) => {
		const component = await mount(<Default />)
		const getSquare = (label: string) =>
			component.getByRole('button', { name: new RegExp(label) })
	
		await getSquare('B2').click()
		await expect(getSquare('B2')).not.toContainText('horizontal')
		await expect(getSquare('B2')).toContainText('vertical')
	
		await getSquare('B3').click()
		await expect(getSquare('B3')).toContainText('horizontal')
		await expect(getSquare('B3')).not.toContainText('vertical')

		await getSquare('B3').click()
		await expect(getSquare('B3')).toContainText('horizontal')
		await expect(getSquare('B3')).toContainText('vertical')
	})
})

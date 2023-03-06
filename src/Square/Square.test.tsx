import { test, expect } from '@playwright/experimental-ct-react'
import { InteractiveExample, BothVerticalAndHorizontal } from './Square.stories'

test.describe('Square', () => {
	test('clicking a square', async ({ mount }) => {
		const component = await mount(<InteractiveExample />)
	
		await expect(component.getByText('horizontal')).toBeHidden()

		await component.getByRole('button', {
			name: /A1/,
		}).click()
	
		await expect(component.getByText('horizontal')).toBeVisible()
	})

	test('square cannot be clicked', async ({ mount }) => {
		const component = await mount(<BothVerticalAndHorizontal />)

		await expect(component.getByRole('button', {
			name: /A1/,
		})).toBeDisabled()
	})
})

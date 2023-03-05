import { test, expect } from '@playwright/experimental-ct-react'
import { InteractiveExample } from './Square.stories'

test('Square', async ({ mount }) => {
	const component = await mount(<InteractiveExample />)

	await expect(component.getByText('horizontal')).toBeHidden()

	await component.getByText('A1').click()

	await expect(component.getByText('horizontal')).toBeVisible()
})

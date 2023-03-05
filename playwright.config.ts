import type { PlaywrightTestConfig } from "@playwright/experimental-ct-react"
import { devices, defineConfig } from "@playwright/experimental-ct-react"

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: "./src",
	snapshotDir: "./snapshots",
	outputDir: "./playwright/results",
	timeout: 10 * 1000,
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["html", { open: "never", outputFolder: "./playwright/report" }]],
	use: {
		trace: "on-first-retry",
		screenshot: "only-on-failure",
		ctPort: 3100,
	},

	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
			},
		},
	],
}

export default defineConfig(config)

/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Singlish to Sinhala transliteration testing
 * IT3040 ITPM Assignment 1
 */
export default defineConfig({
    testDir: './tests',

    // Maximum time one test can run for
    timeout: 30 * 1000,

    // Test execution settings
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,

    // Reporter configuration
    reporter: [
        ['html', { outputFolder: 'playwright-report' }],
        ['list'],
        ['json', { outputFile: 'test-results.json' }]
    ],

    // Shared settings for all tests
    use: {
        // Base URL for the application under test
        baseURL: 'https://www.swifttranslator.com/',

        // Browser context options
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        // Navigation timeout
        navigationTimeout: 10000,

        // Action timeout
        actionTimeout: 10000,
    },

    // Configure projects for major browsers
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
});

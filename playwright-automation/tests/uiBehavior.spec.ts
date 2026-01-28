import { test, expect, Page } from '@playwright/test';

/**
 * IT3040 ITPM Assignment 1 - UI Behavior Test Case
 * Singlish to Sinhala Transliteration Testing
 * System Under Test: https://www.swifttranslator.com/
 */

test.describe('UI Behavior Tests - Real-time Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Pos_UI_0001: Real-time output behavior', async ({ page }) => {
        // Wait for page to be fully loaded
        await page.waitForLoadState('networkidle');

        // Get the input and output text areas
        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').last();

        // Ensure elements are visible
        await expect(inputField).toBeVisible();
        await expect(outputField).toBeVisible();

        // Clear any existing input
        await inputField.clear();

        // Test real-time transliteration by typing character by character
        const testInput = 'mama gedara yanawa';
        const expectedSinhalaWords = ['මම', 'ගෙදර', 'යනවා'];

        // Type the input text
        await inputField.fill(testInput);

        // Wait a short time for real-time processing
        await page.waitForTimeout(1500);

        // Get the output value
        const actualOutput = await outputField.inputValue();

        // Assertions for UI behavior
        // 1. Output should not be empty
        expect(actualOutput).not.toBe('');

        // 2. Output should contain Sinhala characters
        expect(actualOutput).toMatch(/[\u0D80-\u0DFF]+/); // Sinhala Unicode range

        // 3. Output should contain expected Sinhala words
        const containsExpectedWords = expectedSinhalaWords.some(word =>
            actualOutput.includes(word)
        );
        expect(containsExpectedWords).toBeTruthy();

        // 4. Test that output updates in real-time (no button click required)
        // Clear and type new input
        await inputField.clear();
        await inputField.fill('kohomada');
        await page.waitForTimeout(1000);

        const newOutput = await outputField.inputValue();

        // New output should be different from previous output
        expect(newOutput).not.toBe(actualOutput);

        // New output should contain expected transliteration
        expect(newOutput).toMatch(/කොහොමද/);

        // 5. Test UI responsiveness - output field should be visible and accessible
        await expect(outputField).toBeVisible();
        await expect(outputField).toBeEnabled();

        // 6. Verify that the transliteration happens without any button click
        // (This is implicit in the test - we never click any button)

        console.log('Real-time transliteration test completed successfully');
        console.log('Input:', testInput);
        console.log('Output:', actualOutput);
    });

    test('Pos_UI_0001_Extended: UI responsiveness with rapid input changes', async ({ page }) => {
        await page.waitForLoadState('networkidle');

        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').last();

        // Test rapid input changes to verify UI responsiveness
        const testInputs = [
            'ayubowan',
            'kohomada',
            'mama gedara yanawa'
        ];

        for (const input of testInputs) {
            await inputField.clear();
            await inputField.fill(input);
            await page.waitForTimeout(1000);

            const output = await outputField.inputValue();

            // Each input should produce a non-empty output
            expect(output).not.toBe('');

            // Output should contain Sinhala characters
            expect(output).toMatch(/[\u0D80-\u0DFF]+/);
        }

        console.log('UI responsiveness test with rapid changes completed');
    });

    test('Pos_UI_0001_Validation: Output field properties', async ({ page }) => {
        await page.waitForLoadState('networkidle');

        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').last();

        // Verify UI elements are properly rendered
        await expect(inputField).toBeVisible();
        await expect(inputField).toBeEnabled();
        await expect(inputField).toBeEditable();

        await expect(outputField).toBeVisible();

        // Type input and verify output appears
        await inputField.fill('mama');
        await page.waitForTimeout(1000);

        const output = await outputField.inputValue();

        // Verify output is populated
        expect(output.length).toBeGreaterThan(0);

        // Verify output contains Sinhala script
        const sinhalaRegex = /[\u0D80-\u0DFF]/;
        expect(sinhalaRegex.test(output)).toBeTruthy();

        console.log('Output field validation completed');
    });

});

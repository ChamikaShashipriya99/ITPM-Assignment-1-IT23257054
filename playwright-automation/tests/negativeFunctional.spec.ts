import { test, expect, Page } from '@playwright/test';

/**
 * IT3040 ITPM Assignment 1 - Negative Functional Test Cases
 * Singlish to Sinhala Transliteration Testing
 * System Under Test: https://www.swifttranslator.com/
 */

// Helper function to get input and output elements
async function getTranslatorElements(page: Page) {
    await page.waitForLoadState('networkidle');

    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();

    return { inputField, outputField };
}

// Helper function to test transliteration
async function testTransliteration(
    page: Page,
    input: string,
    waitTime: number = 2000
) {
    const { inputField, outputField } = await getTranslatorElements(page);

    await inputField.clear();
    await inputField.fill(input);
    await page.waitForTimeout(waitTime);

    const actualOutput = await outputField.inputValue();

    return actualOutput;
}

test.describe('Negative Functional Tests - Edge Cases and Robustness', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Neg_Fun_0001: Empty input handling', async ({ page }) => {
        const input = '';

        const actualOutput = await testTransliteration(page, input);

        // Empty input should result in empty output or remain unchanged
        expect(actualOutput).toBe('');
    });

    test('Neg_Fun_0002: Special characters only', async ({ page }) => {
        const input = '@#$%^&*()';

        const actualOutput = await testTransliteration(page, input);

        // Special characters should be preserved or handled gracefully
        // The system should not crash or produce unexpected behavior
        expect(actualOutput).toBeDefined();
        expect(actualOutput).toContain('@#$%^&*()');
    });

    test('Neg_Fun_0003: Excessive whitespace', async ({ page }) => {
        const input = 'mama     gedara     yanawa';

        const actualOutput = await testTransliteration(page, input);

        // System should handle excessive whitespace gracefully
        // Either preserve spaces or normalize them
        expect(actualOutput).toBeDefined();
        expect(actualOutput).toMatch(/මම.*ගෙදර.*යනවා/);
    });

    test('Neg_Fun_0004: Unsupported script - Chinese characters', async ({ page }) => {
        const input = '你好世界';

        const actualOutput = await testTransliteration(page, input);

        // Unsupported scripts should be preserved or handled gracefully
        expect(actualOutput).toBeDefined();
        // Chinese characters should remain unchanged or show appropriate handling
        expect(actualOutput).toContain('你好世界');
    });

    test('Neg_Fun_0005: Unsupported script - Arabic characters', async ({ page }) => {
        const input = 'مرحبا';

        const actualOutput = await testTransliteration(page, input);

        // Arabic script should be preserved or handled gracefully
        expect(actualOutput).toBeDefined();
        expect(actualOutput).toContain('مرحبا');
    });

    test('Neg_Fun_0006: Extremely long input', async ({ page }) => {
        const repeatedText = 'mama gedara yanawa ';
        const input = repeatedText.repeat(15); // Very long input

        const actualOutput = await testTransliteration(page, input, 3000);

        // System should handle long input without crashing
        expect(actualOutput).toBeDefined();
        expect(actualOutput.length).toBeGreaterThan(0);
        // Should contain Sinhala characters
        expect(actualOutput).toMatch(/මම|ගෙදර|යනවා/);
    });

    test('Neg_Fun_0007: Only numbers input', async ({ page }) => {
        const input = '123456789';

        const actualOutput = await testTransliteration(page, input);

        // Numbers should be preserved unchanged
        expect(actualOutput).toBeDefined();
        expect(actualOutput).toContain('123456789');
    });

    test('Neg_Fun_0008: Only punctuation marks', async ({ page }) => {
        const input = '.,!?;:';

        const actualOutput = await testTransliteration(page, input);

        // Punctuation should be preserved
        expect(actualOutput).toBeDefined();
        expect(actualOutput).toContain('.,!?;:');
    });

    test('Neg_Fun_0009: Multiple line breaks and paragraphs', async ({ page }) => {
        const input = 'mama gedara yanawa\n\namma inne\n\nthaththa awe naha';

        const actualOutput = await testTransliteration(page, input, 2500);

        // System should handle line breaks appropriately
        expect(actualOutput).toBeDefined();
        // Should contain transliterated Sinhala text
        expect(actualOutput).toMatch(/මම|ගෙදර|යනවා|අම්ම|ඉන්නේ/);
    });

    test('Neg_Fun_0010: Mixed invalid characters with valid text', async ({ page }) => {
        const input = 'mama ♠♣♥♦ gedara yanawa';

        const actualOutput = await testTransliteration(page, input);

        // System should handle mixed valid and invalid characters
        expect(actualOutput).toBeDefined();
        // Valid Singlish should be transliterated
        expect(actualOutput).toMatch(/මම|ගෙදර|යනවා/);
        // Special symbols should be preserved
        expect(actualOutput).toMatch(/♠♣♥♦/);
    });

});

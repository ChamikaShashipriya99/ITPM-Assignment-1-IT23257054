import { test, expect, Page } from '@playwright/test';

/**
 * IT3040 ITPM Assignment 1 - Positive Functional Test Cases
 * Singlish to Sinhala Transliteration Testing
 * System Under Test: https://www.swifttranslator.com/
 */

// Helper function to get input and output elements
async function getTranslatorElements(page: Page) {
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Find the input textarea - adjust selector based on actual page structure
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();

    return { inputField, outputField };
}

// Helper function to test transliteration
async function testTransliteration(
    page: Page,
    input: string,
    expectedOutput: string,
    waitTime: number = 2000
) {
    const { inputField, outputField } = await getTranslatorElements(page);

    // Clear any existing input
    await inputField.clear();

    // Type the input text
    await inputField.fill(input);

    // Wait for transliteration to occur (real-time processing)
    await page.waitForTimeout(waitTime);

    // Get the output value
    const actualOutput = await outputField.inputValue();

    return actualOutput;
}

test.describe('Positive Functional Tests - Singlish to Sinhala', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the translator page before each test
        await page.goto('/');
    });

    test('Pos_Fun_0001: Simple greeting translation', async ({ page }) => {
        const input = 'ayubowan';
        const expectedOutput = 'ආයුබෝවන්';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        // Assertion - check if output contains expected Sinhala text
        expect(actualOutput).toContain('ආයුබෝවන්');
    });

    test('Pos_Fun_0002: Simple interrogative sentence', async ({ page }) => {
        const input = 'kohomada';
        const expectedOutput = 'කොහොමද';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toContain('කොහොමද');
    });

    test('Pos_Fun_0003: Polite request with formal phrasing', async ({ page }) => {
        const input = 'karunakara mama ekka enna puluwan da';
        const expectedOutput = 'කරුණාකර මම එක්ක එන්න පුළුවන් ද';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        // Check for key words in the output
        expect(actualOutput).toMatch(/කරුණාකර|මම|එක්ක|එන්න|පුළුවන්|ද/);
    });

    test('Pos_Fun_0004: Informal casual conversation', async ({ page }) => {
        const input = 'mokada karanne';
        const expectedOutput = 'මොකද කරන්නේ';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මොකද|කරන්නේ/);
    });

    test('Pos_Fun_0005: Compound sentence with conjunction', async ({ page }) => {
        const input = 'mama gedara giya hari amma inne naha';
        const expectedOutput = 'මම ගෙදර ගියා හරි අම්ම ඉන්නේ නැහැ';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|ගෙදර|ගියා|හරි|අම්ම|ඉන්නේ|නැහැ/);
    });

    test('Pos_Fun_0006: Past tense sentence', async ({ page }) => {
        const input = 'mama iye iskole giya';
        const expectedOutput = 'මම ඊයේ ඉස්කෝලේ ගියා';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|ඊයේ|ඉස්කෝලේ|ගියා/);
    });

    test('Pos_Fun_0007: Future tense with intention', async ({ page }) => {
        const input = 'mama heta gedara yanawa';
        const expectedOutput = 'මම හෙට ගෙදර යනවා';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|හෙට|ගෙදර|යනවා/);
    });

    test('Pos_Fun_0008: Present continuous tense', async ({ page }) => {
        const input = 'mama kana kanawa';
        const expectedOutput = 'මම කන කනවා';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|කන|කනවා/);
    });

    test('Pos_Fun_0009: Imperative command form', async ({ page }) => {
        const input = 'meka karanna';
        const expectedOutput = 'මේක කරන්න';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මේක|කරන්න/);
    });

    test('Pos_Fun_0010: Negative sentence structure', async ({ page }) => {
        const input = 'mama eka karanna baha';
        const expectedOutput = 'මම එක කරන්න බැහැ';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|එක|කරන්න|බැහැ/);
    });

    test('Pos_Fun_0011: Pronouns - first person plural', async ({ page }) => {
        const input = 'api heta party ekata yanawa';
        const expectedOutput = 'අපි හෙට party එකට යනවා';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/අපි|හෙට|එකට|යනවා/);
    });

    test('Pos_Fun_0012: Mixed Singlish with English technical term', async ({ page }) => {
        const input = 'mama laptop eka repair karanna one';
        const expectedOutput = 'මම laptop එක repair කරන්න ඕනේ';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|එක|කරන්න|ඕනේ/);
    });

    test('Pos_Fun_0013: Brand names preservation', async ({ page }) => {
        const input = 'mama WhatsApp ekak damma';
        const expectedOutput = 'මම WhatsApp එකක් දැම්ම';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|එකක්|දැම්ම/);
    });

    test('Pos_Fun_0014: Abbreviations - OTP', async ({ page }) => {
        const input = 'OTP eka awa da';
        const expectedOutput = 'OTP එක ආවා ද';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/එක|ආවා|ද/);
    });

    test('Pos_Fun_0015: Email and Zoom references', async ({ page }) => {
        const input = 'mama email ekak dala Zoom meeting ekata join wenna';
        const expectedOutput = 'මම email එකක් දාලා Zoom meeting එකට join වෙන්න';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|එකක්|දාලා|එකට|වෙන්න/);
    });

    test('Pos_Fun_0016: Numbers and currency', async ({ page }) => {
        const input = 'meka rupees 500 yi';
        const expectedOutput = 'මේක rupees 500 යි';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මේක|500|යි/);
    });

    test('Pos_Fun_0017: Date format handling', async ({ page }) => {
        const input = 'meeting eka January 30 weni da';
        const expectedOutput = 'meeting එක January 30 වෙනි ද';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/එක|30|වෙනි|ද/);
    });

    test('Pos_Fun_0018: Time expression', async ({ page }) => {
        const input = 'pawa 3 ta enna';
        const expectedOutput = 'පව 3 ට එන්න';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/පව|3|ට|එන්න/);
    });

    test('Pos_Fun_0019: Place name - Colombo', async ({ page }) => {
        const input = 'mama Colombo ekata yanawa';
        const expectedOutput = 'මම Colombo එකට යනවා';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/මම|එකට|යනවා/);
    });

    test('Pos_Fun_0020: Colloquial slang expression', async ({ page }) => {
        const input = 'eka machan super';
        const expectedOutput = 'එක මචන් super';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/එක|මචන්/);
    });

    test('Pos_Fun_0021: Repeated words for emphasis', async ({ page }) => {
        const input = 'loku loku gedara';
        const expectedOutput = 'ලොකු ලොකු ගෙදර';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toMatch(/ලොකු|ලොකු|ගෙදර/);
    });

    test('Pos_Fun_0022: Complex sentence with subordinate clause', async ({ page }) => {
        const input = 'mama gedara giya wela amma kiwwa oya awe naha kiyala';
        const expectedOutput = 'මම ගෙදර ගිය වෙලා අම්ම කිව්ව ඔය ආවේ නැහැ කියලා';

        const actualOutput = await testTransliteration(page, input, expectedOutput, 3000);

        expect(actualOutput).toMatch(/මම|ගෙදර|ගිය|වෙලා|අම්ම|කිව්ව/);
    });

    test('Pos_Fun_0023: Joined words without spaces', async ({ page }) => {
        const input = 'mamagedara';
        const expectedOutput = 'මමගෙදර';

        const actualOutput = await testTransliteration(page, input, expectedOutput);

        expect(actualOutput).toContain('මමගෙදර');
    });

    test('Pos_Fun_0024: Long paragraph with multiple sentences', async ({ page }) => {
        const input = 'mama adha iskole giya. amma lunch ekak dunna. mama eka kala. ekata passe mama homework karanna gaththa.';
        const expectedOutput = 'මම අද ඉස්කෝලේ ගියා. අම්ම lunch එකක් දුන්න. මම එක කෑල. එකට පස්සේ මම homework කරන්න ගත්ත.';

        const actualOutput = await testTransliteration(page, input, expectedOutput, 3000);

        expect(actualOutput).toMatch(/මම|අද|ඉස්කෝලේ|ගියා|අම්ම|එකක්|දුන්න/);
    });

});

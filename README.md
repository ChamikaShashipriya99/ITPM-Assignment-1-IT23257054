# Singlish to Sinhala Transliteration - Playwright Automation Tests

## 📋 Project Description

This project contains automated test cases for the Singlish to Sinhala transliteration system available at [SwiftTranslator](https://www.swifttranslator.com/). The test suite is developed using **Playwright** with **TypeScript** as part of the IT3040 ITPM Assignment 1.

### Test Coverage

The automation framework includes **40 comprehensive test cases**:

- **29 Positive Functional Tests** - Validating accurate transliteration across various scenarios
- **10 Negative Functional Tests** - Testing edge cases and system robustness
- **1 UI Behavior Test** - Verifying real-time output functionality

## 🎯 Test Scope

### Positive Functional Tests Cover:
- Simple, compound, and complex sentences
- Interrogative and imperative forms
- Past, present, and future tenses
- Positive and negative sentence forms
- Polite vs informal phrasing
- Daily language usage scenarios (greetings, requests, responses)
- Word combinations (joined words, repeated words for emphasis)
- Mixed Singlish with English (technical terms, brands, places)
- Currency, time formats, dates, and numeric formats
- Multiple spaces, line breaks, and paragraph formatting
- Slang and colloquial expressions
- Long inputs (≥300 characters)

### Negative Functional Tests Cover:
- Email and URL transliteration errors
- Password handling issues
- Phonetic errors (w/v confusion, vowel length)
- Spacing and typo handling
- English word breakdown errors
- Slang and typo transliteration issues
- Mixed language case handling

### UI Tests Cover:
- Real-time transliteration behavior
- UI responsiveness
- Output field validation

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## 📦 Installation

Follow these steps to set up the project:

### 1. Navigate to the project directory

```bash
cd "d:/SLIIT/Y3S2/Assinment 1/IT23257054"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

This will download the required browser binaries (Chromium, Firefox, WebKit).

## 🚀 Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode (see browser)

```bash
npm run test:headed
```

### Run all tests (all 40 test cases)

```bash
npm test
```

or

```bash
npm run test:all
```

### Run tests in debug mode

```bash
npm run test:debug
```

### View test report

After running tests, view the HTML report:

```bash
npm run test:report
```

## 📁 Project Structure

```
playwright-automation/
├── tests/
│   └── negativeFunctional.spec.ts    # All 40 test cases (29 positive, 10 negative, 1 UI)
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Project dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── README.md                          # This file
└── playwright-report/                 # Generated test reports (after running tests)
```

## 🧪 Test Case Details

### Positive Functional Tests (29)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_Fun_0001 | Future Tense | M |
| Pos_Fun_0002 | Compound Logic | M |
| Pos_Fun_0003 | Advice/Imperative | M |
| Pos_Fun_0004 | Mixed Question | M |
| Pos_Fun_0005 | Command | S |
| Pos_Fun_0006 | Routine | M |
| Pos_Fun_0007 | Dislike | M |
| Pos_Fun_0008 | Greeting | S |
| Pos_Fun_0009 | Vehicle Request | M |
| Pos_Fun_0010 | Conditional | M |
| Pos_Fun_0011 | Apology | M |
| Pos_Fun_0012 | Daily Act | M |
| Pos_Fun_0013 | Joined Words | S |
| Pos_Fun_0014 | Repetition | S |
| Pos_Fun_0015 | Past Tense | M |
| Pos_Fun_0016 | Present Tense | M |
| Pos_Fun_0017 | Future Exam | M |
| Pos_Fun_0018 | Negation State | M |
| Pos_Fun_0019 | Plural Forms | M |
| Pos_Fun_0020 | Loan Request | M |
| Pos_Fun_0021 | Mixed Technical Terms | M |
| Pos_Fun_0022 | Currency Format | M |
| Pos_Fun_0023 | Time Format | S |
| Pos_Fun_0024 | Date Format | M |
| Pos_Fun_0025 | Multiple Spaces | M |
| Pos_Fun_0026 | Line Breaks and Paragraph | M |
| Pos_Fun_0027 | Very Long Input | L |
| Pos_Fun_0028 | Scientific Terminology | M |
| Pos_Fun_0029 | Slang Mixed Case | M |

### Negative Functional Tests (10)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Neg_Fun_0001 | Email Transliteration Error | M |
| Neg_Fun_0002 | Password Handling Error | M |
| Neg_Fun_0003 | URL Handling Error | M |
| Neg_Fun_0004 | Phonetic w Issue | M |
| Neg_Fun_0005 | Vowel Length (kama) | M |
| Neg_Fun_0006 | Phonetic w/v Confusion | M |
| Neg_Fun_0007 | Spacing/Typo Error | M |
| Neg_Fun_0008 | English Word Breakdown | M |
| Neg_Fun_0009 | Slang/Typo Handling | M |
| Neg_Fun_0010 | Mixed Language Case | M |

### UI Behavior Test (1)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_UI_0001 | Real-time output update behavior | S |

## 🔍 Test Execution Notes

1. **Network Dependency**: Tests require internet connection to access https://www.swifttranslator.com/
2. **Wait Times**: Tests include appropriate wait times for real-time transliteration processing
3. **Assertions**: Tests use flexible regex patterns to accommodate variations in transliteration output
4. **Browser Support**: Tests run on Chromium, Firefox, and WebKit by default

## 📊 Understanding Test Results

After running tests, you'll see:

- ✅ **Passed tests** - Transliteration worked as expected
- ❌ **Failed tests** - Output didn't match expected results
- ⏭️ **Skipped tests** - Tests that were skipped (if any)

Detailed results are available in:
- Console output (immediate feedback)
- HTML report (`playwright-report/index.html`)
- JSON report (`test-results.json`)

## 🛠️ Troubleshooting

### Issue: Tests fail with "Browser not found"
**Solution:** Run `npx playwright install` to download browsers

### Issue: Tests timeout
**Solution:** Check your internet connection and ensure https://www.swifttranslator.com/ is accessible

### Issue: Selector errors
**Solution:** The website structure may have changed. Update selectors in test files if needed.

### Issue: npm install fails
**Solution:** Ensure you have Node.js 16+ installed. Check with `node --version`

## 📝 Assignment Compliance

This project strictly follows the IT3040 ITPM Assignment 1 requirements:

- ✅ Tests functional accuracy and UI behavior only (no backend/performance/security testing)
- ✅ Uses Playwright with TypeScript
- ✅ Follows Appendix 2 test case format
- ✅ Includes 29 positive (exceeds minimum of 24), 10 negative, and 1 UI test case
- ✅ Original test cases (no plagiarism)
- ✅ Comprehensive coverage of all required areas:
  - ✅ Sentence structures (simple, compound, complex)
  - ✅ Interrogative and imperative forms
  - ✅ Positive and negative sentence forms
  - ✅ Daily language usage (greetings, requests, responses)
  - ✅ Word combinations and phrase patterns
  - ✅ Grammatical forms (tenses, negation, plural, pronouns)
  - ✅ Input length variation (S ≤30, M 31-299, L ≥300)
  - ✅ Mixed language content (Singlish + English)
  - ✅ Punctuation, currency, time formats, dates
  - ✅ Multiple spaces, line breaks, paragraphs
  - ✅ Informal language and slang

**IT3040 ITPM Assignment 1**  
BSc IT Year 3  Semester 2
Option 1: Singlish to Sinhala Transliteration Testing
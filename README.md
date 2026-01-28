# Singlish to Sinhala Transliteration - Playwright Automation Tests

## 📋 Project Description

This project contains automated test cases for the Singlish to Sinhala transliteration system available at [SwiftTranslator](https://www.swifttranslator.com/). The test suite is developed using **Playwright** with **TypeScript** as part of the IT3040 ITPM Assignment 1.

### Test Coverage

The automation framework includes **35 comprehensive test cases**:

- **24 Positive Functional Tests** - Validating accurate transliteration across various scenarios
- **10 Negative Functional Tests** - Testing edge cases and system robustness
- **1 UI Behavior Test** - Verifying real-time output functionality

## 🎯 Test Scope

### Positive Functional Tests Cover:
- Simple, compound, and complex sentences
- Interrogative and imperative forms
- Past, present, and future tenses
- Polite vs informal phrasing
- Daily language usage scenarios
- Mixed Singlish with English (technical terms, brands, places)
- Numbers, currency, dates, and time formats
- Abbreviations (OTP, Email, Zoom, WhatsApp)
- Slang and colloquial expressions
- Joined words and repeated words for emphasis

### Negative Functional Tests Cover:
- Empty input handling
- Special characters and punctuation
- Excessive whitespace
- Unsupported scripts (Chinese, Arabic)
- Extremely long input
- Numbers and punctuation only
- Line breaks and paragraph formatting
- Mixed valid and invalid characters

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
cd "d:/SLIIT/Y3S2/Assinment 1/playwright-automation"
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

### Run specific test suites

**Positive functional tests only:**
```bash
npm run test:positive
```

**Negative functional tests only:**
```bash
npm run test:negative
```

**UI behavior tests only:**
```bash
npm run test:ui
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
│   ├── positiveFunctional.spec.ts    # 24 positive functional test cases
│   ├── negativeFunctional.spec.ts    # 10 negative functional test cases
│   └── uiBehavior.spec.ts            # 1 UI behavior test case
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Project dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── README.md                          # This file
└── playwright-report/                 # Generated test reports (after running tests)
```

## 🧪 Test Case Details

### Positive Functional Tests (24)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_Fun_0001 | Simple greeting translation | S |
| Pos_Fun_0002 | Simple interrogative sentence | S |
| Pos_Fun_0003 | Polite request with formal phrasing | M |
| Pos_Fun_0004 | Informal casual conversation | S |
| Pos_Fun_0005 | Compound sentence with conjunction | M |
| Pos_Fun_0006 | Past tense sentence | M |
| Pos_Fun_0007 | Future tense with intention | M |
| Pos_Fun_0008 | Present continuous tense | S |
| Pos_Fun_0009 | Imperative command form | S |
| Pos_Fun_0010 | Negative sentence structure | M |
| Pos_Fun_0011 | Pronouns - first person plural | M |
| Pos_Fun_0012 | Mixed Singlish with English technical term | M |
| Pos_Fun_0013 | Brand names preservation | M |
| Pos_Fun_0014 | Abbreviations - OTP | S |
| Pos_Fun_0015 | Email and Zoom references | M |
| Pos_Fun_0016 | Numbers and currency | M |
| Pos_Fun_0017 | Date format handling | M |
| Pos_Fun_0018 | Time expression | S |
| Pos_Fun_0019 | Place name - Colombo | M |
| Pos_Fun_0020 | Colloquial slang expression | S |
| Pos_Fun_0021 | Repeated words for emphasis | S |
| Pos_Fun_0022 | Complex sentence with subordinate clause | L |
| Pos_Fun_0023 | Joined words without spaces | S |
| Pos_Fun_0024 | Long paragraph with multiple sentences | L |

### Negative Functional Tests (10)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Neg_Fun_0001 | Empty input handling | S |
| Neg_Fun_0002 | Special characters only | S |
| Neg_Fun_0003 | Excessive whitespace | M |
| Neg_Fun_0004 | Unsupported script - Chinese characters | S |
| Neg_Fun_0005 | Unsupported script - Arabic characters | S |
| Neg_Fun_0006 | Extremely long input | L |
| Neg_Fun_0007 | Only numbers input | S |
| Neg_Fun_0008 | Only punctuation marks | S |
| Neg_Fun_0009 | Multiple line breaks and paragraphs | M |
| Neg_Fun_0010 | Mixed invalid characters with valid text | M |

### UI Behavior Test (1)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_UI_0001 | Real-time output behavior | M |

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
- ✅ Includes 24 positive, 10 negative, and 1 UI test case
- ✅ Original test cases (no plagiarism)
- ✅ Comprehensive coverage of all required areas

**IT3040 ITPM Assignment 1**  
BSc IT Year 3  Semester 2
Option 1: Singlish to Sinhala Transliteration Testing


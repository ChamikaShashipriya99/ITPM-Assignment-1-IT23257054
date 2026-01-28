# Test Cases - Excel Import Format

## Instructions for Excel Conversion

Copy the tables below and paste them into Excel. Each test case is formatted for easy import.

---

## Table Headers Reference

| TC ID | Test case name | Input length type | Input | Expected output | Actual output | Status | Accuracy justification / Description of issue type | What is covered by the test |
|-------|-----------------|-------------------|-------|-----------------|----------------|--------|-----------------------------------------------------|---------------------------|

---

## POSITIVE FUNCTIONAL TEST CASES

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Pos_Fun_0001 | Simple greeting translation | S | ayubowan | ආයුබෝවන් | | | Validates basic greeting word transliteration accuracy | Daily Language Usage / Greetings / S / Accuracy |
| Pos_Fun_0002 | Simple interrogative sentence | S | kohomada | කොහොමද | | | Tests interrogative form with common greeting question | Daily Language Usage / Interrogative Form / S / Accuracy |
| Pos_Fun_0003 | Polite request with formal phrasing | M | karunakara mama ekka enna puluwan da | කරුණාකර මම එක්ක එන්න පුළුවන් ද | | | Validates polite request format with formal language | Daily Language Usage / Polite Phrasing / M / Accuracy |
| Pos_Fun_0004 | Informal casual conversation | S | mokada karanne | මොකද කරන්නේ | | | Tests informal conversational phrase accuracy | Daily Language Usage / Informal Phrasing / S / Accuracy |
| Pos_Fun_0005 | Compound sentence with conjunction | M | mama gedara giya hari amma inne naha | මම ගෙදර ගියා හරි අම්ම ඉන්නේ නැහැ | | | Validates compound sentence structure with conjunction | Daily Language Usage / Compound Sentence / M / Accuracy |
| Pos_Fun_0006 | Past tense sentence | M | mama iye iskole giya | මම ඊයේ ඉස්කෝලේ ගියා | | | Tests past tense verb conjugation accuracy | Daily Language Usage / Past Tense / M / Accuracy |
| Pos_Fun_0007 | Future tense with intention | M | mama heta gedara yanawa | මම හෙට ගෙදර යනවා | | | Validates future tense expression | Daily Language Usage / Future Tense / M / Accuracy |
| Pos_Fun_0008 | Present continuous tense | S | mama kana kanawa | මම කන කනවා | | | Tests present continuous tense accuracy | Daily Language Usage / Present Tense / S / Accuracy |
| Pos_Fun_0009 | Imperative command form | S | meka karanna | මේක කරන්න | | | Validates imperative command structure | Daily Language Usage / Imperative Form / S / Accuracy |
| Pos_Fun_0010 | Negative sentence structure | M | mama eka karanna baha | මම එක කරන්න බැහැ | | | Tests negative sentence formation | Daily Language Usage / Negative Sentence / M / Accuracy |
| Pos_Fun_0011 | Pronouns - first person plural | M | api heta party ekata yanawa | අපි හෙට party එකට යනවා | | | Validates plural pronoun usage with mixed English | Daily Language Usage / Plural Forms / M / Accuracy |
| Pos_Fun_0012 | Mixed Singlish with English technical term | M | mama laptop eka repair karanna one | මම laptop එක repair කරන්න ඕනේ | | | Tests handling of English technical terms within Singlish | Mixed Singlish + English / Technical Terms / M / Accuracy |
| Pos_Fun_0013 | Brand names preservation | M | mama WhatsApp ekak damma | මම WhatsApp එකක් දැම්ම | | | Validates brand name preservation in transliteration | Mixed Singlish + English / Brand Names / M / Accuracy |
| Pos_Fun_0014 | Abbreviations - OTP | S | OTP eka awa da | OTP එක ආවා ද | | | Tests abbreviation handling (OTP) | Mixed Singlish + English / Abbreviations / S / Accuracy |
| Pos_Fun_0015 | Email and Zoom references | M | mama email ekak dala Zoom meeting ekata join wenna | මම email එකක් දාලා Zoom meeting එකට join වෙන්න | | | Validates multiple technical abbreviations in one sentence | Mixed Singlish + English / Abbreviations / M / Accuracy |
| Pos_Fun_0016 | Numbers and currency | M | meka rupees 500 yi | මේක rupees 500 යි | | | Tests number and currency handling | Numbers & Formats / Currency / M / Accuracy |
| Pos_Fun_0017 | Date format handling | M | meeting eka January 30 weni da | meeting එක January 30 වෙනි ද | | | Validates date format preservation | Numbers & Formats / Date Format / M / Accuracy |
| Pos_Fun_0018 | Time expression | S | pawa 3 ta enna | පව 3 ට එන්න | | | Tests time format handling | Numbers & Formats / Time Format / S / Accuracy |
| Pos_Fun_0019 | Place name - Colombo | M | mama Colombo ekata yanawa | මම Colombo එකට යනවා | | | Validates place name preservation | Mixed Singlish + English / Place Names / M / Accuracy |
| Pos_Fun_0020 | Colloquial slang expression | S | eka machan super | එක මචන් super | | | Tests colloquial slang word (machan) transliteration | Slang & Colloquial / Informal Language / S / Accuracy |
| Pos_Fun_0021 | Repeated words for emphasis | S | loku loku gedara | ලොකු ලොකු ගෙදර | | | Validates repeated word handling for emphasis | Daily Language Usage / Repeated Words / S / Accuracy |
| Pos_Fun_0022 | Complex sentence with subordinate clause | L | mama gedara giya wela amma kiwwa oya awe naha kiyala | මම ගෙදර ගිය වෙලා අම්ම කිව්ව ඔය ආවේ නැහැ කියලා | | | Tests complex sentence with subordinate clause structure | Daily Language Usage / Complex Sentence / L / Accuracy |
| Pos_Fun_0023 | Joined words without spaces | S | mamagedara | මමගෙදර | | | Validates joined word transliteration accuracy | Daily Language Usage / Joined Words / S / Accuracy |
| Pos_Fun_0024 | Long paragraph with multiple sentences | L | mama adha iskole giya. amma lunch ekak dunna. mama eka kala. ekata passe mama homework karanna gaththa. | මම අද ඉස්කෝලේ ගියා. අම්ම lunch එකක් දුන්න. මම එක කෑල. එකට පස්සේ මම homework කරන්න ගත්ත. | | | Tests long input with multiple sentences and paragraph structure | Daily Language Usage / Simple Sentence / L / Accuracy |

---

## NEGATIVE FUNCTIONAL TEST CASES

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Neg_Fun_0001 | Empty input handling | S | [Empty string] | [Empty or appropriate message] | | | Validates system behavior with no input | Edge Cases / Empty Input / S / Robustness |
| Neg_Fun_0002 | Special characters only | S | @#$%^&*() | @#$%^&*() [unchanged or handled gracefully] | | | Tests special character handling | Edge Cases / Special Characters / S / Robustness |
| Neg_Fun_0003 | Excessive whitespace | M | mama     gedara     yanawa | මම     ගෙදර     යනවා [preserves or normalizes spaces] | | | Validates whitespace handling | Edge Cases / Whitespace Handling / M / Robustness |
| Neg_Fun_0004 | Unsupported script - Chinese characters | S | 你好世界 | 你好世界 [unchanged or error message] | | | Tests handling of non-Latin, non-Sinhala scripts | Edge Cases / Unsupported Script / S / Robustness |
| Neg_Fun_0005 | Unsupported script - Arabic characters | S | مرحبا | مرحبا [unchanged or error message] | | | Tests Arabic script handling | Edge Cases / Unsupported Script / S / Robustness |
| Neg_Fun_0006 | Extremely long input | L | mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa mama gedara yanawa | [Handles gracefully or shows appropriate limit] | | | Tests system behavior with extremely long input | Edge Cases / Long Input / L / Robustness |
| Neg_Fun_0007 | Only numbers input | S | 123456789 | 123456789 [unchanged] | | | Validates numeric-only input handling | Edge Cases / Numbers Only / S / Robustness |
| Neg_Fun_0008 | Only punctuation marks | S | .,!?;: | .,!?;: [unchanged] | | | Tests punctuation-only input | Edge Cases / Punctuation Only / S / Robustness |
| Neg_Fun_0009 | Multiple line breaks and paragraphs | M | mama gedara yanawa<br><br>amma inne<br><br>thaththa awe naha | [Preserves line breaks or formats appropriately] | | | Validates line break and paragraph handling | Edge Cases / Line Breaks / M / Formatting |
| Neg_Fun_0010 | Mixed invalid characters with valid text | M | mama ♠♣♥♦ gedara yanawa | මම ♠♣♥♦ ගෙදර යනවා [handles symbols appropriately] | | | Tests mixed valid and invalid character handling | Edge Cases / Mixed Characters / M / Robustness |

---

## UI TEST CASE

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Pos_UI_0001 | Real-time output behavior | M | mama gedara yanawa | මම ගෙදර යනවා [appears in real-time as user types] | | | Validates that output appears in real-time without requiring button click | Daily Language Usage / Simple Sentence / M / UI |

---

## Notes

1. **Actual Output** and **Status** columns should be filled after running the automated tests or manual testing
2. For **Status**, use "Pass" if actual output matches expected output, "Fail" otherwise
3. For **Accuracy Justification**, explain why it passed or describe the issue if it failed
4. This format is ready to be copied directly into Excel
5. Make sure to use a Unicode-compatible font in Excel to display Sinhala characters correctly (e.g., Nirmala UI, Iskoola Pota)

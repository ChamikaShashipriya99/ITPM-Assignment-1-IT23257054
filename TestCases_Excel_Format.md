# Test Cases - Excel Import Format

## Instructions for Excel Conversion

Copy the tables below and paste them into Excel. Each test case is formatted for easy import.

---

## Table Headers Reference

| TC ID | Test case name | Input length type | Input | Expected output | Actual output | Status | Accuracy justification / Description of issue type | What is covered by the test |
|-------|----------------|-------------------|-------|-----------------|--------------|--------|-----------------------------------------------------|---------------------------|

---

## POSITIVE UI TEST CASE

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Pos_UI_0001 | Real-time output update behavior | S | beheth bonna | බෙහෙත් බොන්න | | | Validates that output updates automatically in real-time while typing without requiring button click | Daily language usage / Simple sentence / S (≤30 characters) / Real-time output update behavior |

---

## POSITIVE FUNCTIONAL TEST CASES

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Pos_Fun_0001 | Future Tense | M | heta api nuvara yanavaa | හෙට අපි නුවර යනවා | | | Validates future tense expression with correct verb conjugation | Daily language usage / Future tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0002 | Compound Logic | M | mama baeQQkuvata yanavaa iitapasse salli dhaanavaa | මම බැංකුවට යනවා ඊටපස්සෙ සල්ලි දානවා | | | Tests compound sentence structure with sequential actions | Daily language usage / Compound sentence / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0003 | Advice/Imperative | M | asaniipa unath viBhaagaya liyanna yanna epaeyi | අසනීප උනත් විභාගය ලියන්න යන්න එපැයි | | | Validates imperative/advice form with conditional logic | Daily language usage / Imperative (command) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0004 | Mixed Question | M | Adha api film ekak balanna yamudha? | අද අපි film එකක් බලන්න යමුද? | | | Tests interrogative form with mixed Singlish and English technical term | Mixed Singlish + English / Interrogative (question) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0005 | Command | S | beheth bonna | බෙහෙත් බොන්න | | | Validates imperative command structure | Daily language usage / Imperative (command) / S (≤30 characters) / Accuracy validation |
| Pos_Fun_0006 | Routine | M | mama skole yanavaa | මම ස්කොලෙ යනවා | | | Tests present tense routine activity with English loanword | Daily language usage / Present tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0007 | Dislike | M | mama eyaata kaemathi naehae. | මම එයාට කැමති නැහැ | | | Validates negative sentence expressing dislike | Daily language usage / Negation (negative form) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0008 | Greeting | S | suba upandhinaya | සුබ උපන්දිනය | | | Tests greeting phrase transliteration accuracy | Greeting / request / response / Simple sentence / S (≤30 characters) / Accuracy validation |
| Pos_Fun_0009 | Vehicle Request | M | mata oyaage vaahanaya tikakata dhenna puluvandha | මට ඔයාගෙ වාහනය ටිකකට දෙන්න පුලුවන්ද | | | Validates polite request form with vehicle reference | Greeting / request / response / Interrogative (question) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0010 | Conditional | M | ehenam mama eeka dhennam | එහෙනම් මම ඒක දෙන්නම් | | | Tests conditional sentence structure | Daily language usage / Complex sentence / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0011 | Apology | M | samaavenna, mata eeka karanna baeri unaa | සමාවෙන්න, මට ඒක කරන්න බැරි උනා | | | Validates apology expression with explanation | Greeting / request / response / Simple sentence / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0012 | Daily Act | M | api adha pansal yanavaa | අපි අද පන්සල් යනවා | | | Tests daily routine activity expression | Daily language usage / Present tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0013 | Joined Words | S | Apiaevidhinnayanavaa | අපි ඇවිදින්න යනවා | | | Validates transliteration of joined words without spaces | Word combination / phrase pattern / Joined vs segmented word variations / S (≤30 characters) / Accuracy validation |
| Pos_Fun_0014 | Repetition | S | goda goda | ගොඩ ගොඩ | | | Tests repeated word expression for emphasis | Word combination / phrase pattern / Repeated word expressions / S (≤30 characters) / Accuracy validation |
| Pos_Fun_0015 | Past Tense | M | mama iiye paadam karaa | මම ඊයෙ පාඩම් කරා | | | Validates past tense verb conjugation | Daily language usage / Past tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0016 | Present Tense | M | api dhaen dhuvanavaa | අපි දැන් දුවනවා | | | Tests present tense continuous action | Daily language usage / Present tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0017 | Future Exam | M | mama heta viBhaagaya liyanavaa | මම හෙට විභාගය ලියනවා | | | Validates future tense with exam context | Daily language usage / Future tense / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0018 | Negation State | M | mata nidhimatha naee. | මට නිදිමත නෑ. | | | Tests negative form expressing state | Daily language usage / Negation (negative form) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0019 | Plural Forms | M | oyaala bath kanna | ඔයාල බත් කන්න | | | Validates plural pronoun and verb forms | Daily language usage / Plural form / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0020 | Loan Request | M | karuNaakara mata Nayak dhenna puluvandha | කරුණාකර මට ණයක් දෙන්න පුලුවන්ද | | | Tests polite request form for loan | Greeting / request / response / Interrogative (question) / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0021 | Mixed Technical Terms | M | magee LinkedIn ekee WiFi password eka update karanna | මගේ LinkedIn එකේ WiFi password එක update කරන්න | | | Validates handling of multiple English technical terms | Mixed Singlish + English / English technical/brand terms / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0022 | Currency Format | M | meka rupees 500 yi | මේක rupees 500 යි | | | Validates currency format handling with numbers | Punctuation / numbers / Currency / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0023 | Time Format | S | pawa 3 ta enna | පව 3 ට එන්න | | | Tests time format handling with numbers | Punctuation / numbers / Time format / S (≤30 characters) / Accuracy validation |
| Pos_Fun_0024 | Date Format | M | meeting eka January 30 weni da | meeting එක January 30 වෙනි ද | | | Validates date format preservation with English month name | Punctuation / numbers / Date format / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0025 | Multiple Spaces | M | mama     gedara     yanavaa | මම     ගෙදර     යනවා | | | Tests handling of excessive whitespace between words | Formatting (spaces / line breaks / paragraph) / Simple sentence / M (31-299 characters) / Robustness validation |
| Pos_Fun_0026 | Line Breaks and Paragraph | M | mama gedara yanavaa\n\namma inne\n\nthaththa awe naha | මම ගෙදර යනවා\n\nඅම්ම ඉන්නේ\n\nතත්තා ආවේ නැහැ | | | Validates line break and paragraph formatting preservation | Formatting (spaces / line breaks / paragraph) / Simple sentence / M (31-299 characters) / Formatting preservation |
| Pos_Fun_0027 | Very Long Input | L | Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. Mama dhaen town Ekata aava eegamanma Bank Ekata yanava salli vageyak dhaanna. | [Very long transliterated output ≥300 chars] | | | Tests system robustness with very long input (≥300 characters) | Daily language usage / Simple sentence / L (≥300 characters) / Robustness validation |
| Pos_Fun_0028 | Scientific Terminology | M | maanava moLaya saha kRUthrima budhDhiya (Artificial Intelligence) | මානව මොළය සහ කෘත්‍රිම බුද්ධිය (Artificial Intelligence) | | | Validates scientific terminology with English translation | Mixed Singlish + English / English technical/brand terms / M (31-299 characters) / Accuracy validation |
| Pos_Fun_0029 | Slang Mixed Case | M | appatasiri, mata ASSIGMENT eka submit karanna amathak unaane. | අප්පටසිරි, මට ASSIGMENT එක submit කරන්න අමතක උනානේ. | | | Tests slang expression with mixed case English word | Slang / informal language / Slang and colloquial phrasing / M (31-299 characters) / Robustness validation |

---

## NEGATIVE FUNCTIONAL TEST CASES

| TC ID | Test Case Name | Input Length Type | Input (Singlish) | Expected Output (Sinhala) | Actual Output | Status | Accuracy Justification / Issue Description | What is covered by the test |
|-------|----------------|-------------------|------------------|---------------------------|---------------|--------|-------------------------------------------|----------------------------|
| Neg_Fun_0001 | Email Transliteration Error | M | Oyaage email eka saman123@gmail.com needha | ඔයාගෙ email එක saman123@gmail.com නේද | | | Expected to FAIL: System incorrectly transliterates email username part instead of preserving it | Mixed Singlish + English / Names / places / common English words / M (31-299 characters) / Robustness validation |
| Neg_Fun_0002 | Password Handling Error | M | Oyaage phone ekee password eka "sadaruwan345" | ඔයාගෙ phone එකේ password එක "sadaruwan345" | | | Expected to FAIL: System transliterates password strings that should remain unchanged | Mixed Singlish + English / Names / places / common English words / M (31-299 characters) / Robustness validation |
| Neg_Fun_0003 | URL Handling Error | M | oyaata https://www.youtube.com/ me URL eka click karala youtube ekata yanna puluwan. | ඔයාට https://www.youtube.com/ මේ URL එක click කරලා youtube එකට යන්න පුළුවන්. | | | Expected to FAIL: System transliterates URL protocol (https) instead of preserving it | Mixed Singlish + English / Names / places / common English words / M (31-299 characters) / Robustness validation |
| Neg_Fun_0004 | Phonetic w Issue | M | api pettaneyata yanawa sellam karanna. | අපි පිට්ටනියට යනවා සෙල්ලම් කරන්න. | | | Expected to FAIL: System produces incorrect character for "w" phonetics in "yanawa" | Daily language usage / Simple sentence / M (31-299 characters) / Robustness validation |
| Neg_Fun_0005 | Vowel Length (kama) | M | mama kama ekak genawa api eka kamu | මම කෑම එකක් ගෙනාවා අපි එක කමු | | | Expected to FAIL: Incorrect vowel length changes meaning from "food" (කෑම) to "work" (කම) | Daily language usage / Simple sentence / M (31-299 characters) / Robustness validation |
| Neg_Fun_0006 | Phonetic w/v Confusion | M | ikmanata oka iwara karala pantiyata enna | ඉක්මනට ඕක ඉවර කරලා පන්තියට එන්න | | | Expected to FAIL: System confuses 'w' and 'v' phonetics in "iwara" | Daily language usage / Simple sentence / M (31-299 characters) / Robustness validation |
| Neg_Fun_0007 | Spacing/Typo Error | M | eka harim kethei | ඒක හරිම කැතයි | | | Expected to FAIL: System fails to correct spacing in common Singlish slang "harim" (should be "hari im") | Slang / informal language / Slang and colloquial phrasing / M (31-299 characters) / Robustness validation |
| Neg_Fun_0008 | English Word Breakdown | M | mama polece ynw | මම police යනවා | | | Expected to FAIL: System transliterates English loanword "police" instead of preserving it | Mixed Singlish + English / English technical/brand terms / M (31-299 characters) / Robustness validation |
| Neg_Fun_0009 | Slang/Typo Handling | M | harima pandethai oya | හරිම පණ්ඩිතයි ඔයා | | | Expected to FAIL: Incorrect transliteration of retroflex consonants in slang "pandethai" | Slang / informal language / Slang and colloquial phrasing / M (31-299 characters) / Robustness validation |
| Neg_Fun_0010 | Mixed Language Case | M | apal juice ekK bomud | ඇපල් juice එකක් බොමුද | | | Expected to FAIL: System struggles with mixed case and typo "ekK" in mixed language context | Mixed Singlish + English / Slang and colloquial phrasing / M (31-299 characters) / Robustness validation |

---

## Notes

1. **Actual Output** and **Status** columns should be filled after running the automated tests or manual testing
2. For **Status**, use "Pass" if actual output matches expected output, "Fail" otherwise
3. For **Accuracy Justification**, explain why it passed or describe the issue if it failed
4. This format is ready to be copied directly into Excel
5. Make sure to use a Unicode-compatible font in Excel to display Sinhala characters correctly (e.g., Nirmala UI, Iskoola Pota)
6. **Input Length Types:**
   - S = ≤30 characters
   - M = 31-299 characters
   - L = ≥300 characters
7. **What is covered by the test** format: [Input Type/Domain] / [Sentence/Grammar Focus] / [Input Length Type] / [Quality Focus]

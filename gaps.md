# Remaining SRA Transparency Gaps

This file records the **remaining** website transparency gaps after the latest updates to the fees page and footer links.

## 1. No service-specific transparency pages for other marketed areas
- **Gap:** The site markets several additional practice areas but does not publish equivalent service-stage, likely timescale, and fee/disbursement breakdowns for each.
- **Where marketed:** [app/practice/Data.js](app/practice/Data.js), [app/practice/page.jsx](app/practice/page.jsx), [app/components/Datas.js](app/components/Datas.js)
- **Areas affected:** Criminal Law, Family Law, Housing Law, Property Law, Litigation Law, Welfare Benefits, Police Station Representation.

## 2. Scope boundaries are still generic for several areas
- **Gap:** For the additional marketed areas, there is still no clear website statement of what is included, excluded, and charged separately for a typical matter.
- **Where:** [app/practice/Data.js](app/practice/Data.js)

## 3. Timescales are missing for the additional marketed areas
- **Gap:** Indicative timescales are published for Probate, Immigration, and Employment, but not for the other marketed areas.
- **Where current timescales appear:** [app/fees/page.jsx](app/fees/page.jsx)
- **Where missing areas are listed:** [app/practice/Data.js](app/practice/Data.js)

## 4. Public hourly-rate transparency is still limited
- **Gap:** The website does not present a single clear public hourly-rate table by fee earner seniority for matters charged on a time basis.
- **Where hints exist:** [app/components/fees/Data.js](app/components/fees/Data.js)
- **Where users look first:** [app/fees/page.jsx](app/fees/page.jsx)

## 5. Variable/bespoke pricing factors need clearer explanation
- **Gap:** Where pricing is marked as "Varies" or "Bespoke Quote", users still need clearer factors that drive those ranges and when a fixed quote can be confirmed.
- **Where:** [app/fees/page.jsx](app/fees/page.jsx)

## 6. Team qualification details are present but not fully consolidated
- **Gap:** Qualification/experience information exists, but there is no single compact directory-format summary (name, role, qualification status, relevant experience, and service focus) for rapid comparison.
- **Where:** [app/solicitors/page.jsx](app/solicitors/page.jsx), [app/components/solicitors/Solicitor.jsx](app/components/solicitors/Solicitor.jsx), [app/components/solicitors/Solicitor2.jsx](app/components/solicitors/Solicitor2.jsx), [app/components/solicitors/Solicitor3.jsx](app/components/solicitors/Solicitor3.jsx), [app/components/solicitors/Solicitor4.jsx](app/components/solicitors/Solicitor4.jsx), [app/components/solicitors/Solicitor6.jsx](app/components/solicitors/Solicitor6.jsx)

## 7. Minor consistency issue: opening hours mismatch
- **Gap:** Different pages/components state different closing times.
- **Where:** [app/components/Datas.js](app/components/Datas.js) and [app/contact/page.jsx](app/contact/page.jsx), [app/components/Footer.jsx](app/components/Footer.jsx)

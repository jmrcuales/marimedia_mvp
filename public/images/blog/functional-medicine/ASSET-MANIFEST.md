# Functional Medicine Article — Asset Manifest

Source reference page: https://mari-functional-medicine-ao6btud.gamma.site/

| Local file | Used for | Origin | Original source |
| --- | --- | --- | --- |
| `functional-medicine-hero.jpg` | Article hero (clinician + patient consultation) | Retrieved from the public Gamma page's CDN and re-optimized (resized, re-compressed, renamed) | `https://cdn.gamma.app/d5gmnenhpam4wwr/generated-images/jJvmrnvWsc0gjNJ-he009.jpg` |
| `functional-medicine-first-visit.jpg` | "Your First Visit" section (organizing health history before an appointment) | Retrieved from the public Gamma page's CDN and re-optimized (resized, re-compressed, renamed) | `https://cdn.gamma.app/d5gmnenhpam4wwr/generated-images/cIRUjmatwuWuonZ8ThGLf.jpg` |
| `interconnected-health-systems.jpg` | "The Body as an Interconnected System" section | The equivalent Gamma-generated asset (`https://cdn.gamma.app/d5gmnenhpam4wwr/generated-images/MtMQXbPK6-ePoMne4pO6R.jpg`) contained garbled, nonsensical AI-generated text baked into the image and was not usable on an accessible, professional health page. Replaced with a newly generated, text-free editorial illustration depicting the same six connected health factors (nutrition, sleep, movement, stress/environment, body systems, daily habits) in a matching ink-outline / cel-shaded illustration style. |

Notes:

- No other images or icons were used from the Gamma page (theme background art and Pictographic icon assets were part of Gamma's page-builder chrome, not article content).
- All three files above are optimized JPEGs served locally from `/public`; none are hotlinked from Gamma in production. Next.js's built-in image optimizer (`next/image`) serves right-sized, modern-format variants at request time.

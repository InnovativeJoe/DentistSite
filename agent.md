# The Tooth Clinic - Agent Instructions

This file is the working brief for LLMs and coding agents editing this project. Keep changes aligned with the clinic website goal: a premium, trust-building dentist clinic site for Sarita Vihar, Delhi that converts pain-driven and cosmetic dental visitors into calls, WhatsApp chats, direction requests, and bookings.

## Project

- **Clinic name:** The Tooth Clinic
- **Doctor:** Dr. Shourya Poswal
- **Phone / WhatsApp:** +91 9560932970
- **Primary location:** Sarita Vihar, Delhi
- **Google Maps link:** https://maps.app.goo.gl/37HQ8sRAguJzNWSeA
- **Primary CTA goals:** Call, WhatsApp, Book appointment, Get directions
- **Audience:** Local patients in and around Sarita Vihar looking for urgent dental pain relief, root canal treatment, braces, aligners, implants, cleaning, whitening, and affordable dental care.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **UI system:** shadcn/ui-style components
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Payments:** Razorpay Checkout frontend integration
- **WhatsApp:** Simple `wa.me` link integration

## Current Structure

- Main page: `app/page.tsx`
- Root layout and metadata: `app/layout.tsx`
- Global styles: `app/globals.css`
- shadcn-style components: `components/ui/*`
- Razorpay client button: `components/razorpay-button.tsx`
- Shared helpers: `lib/utils.ts`

## Design Rules

- Use a minimalist black, white, and neutral gray visual system.
- Keep the site clean, premium, medical, and trust-focused.
- Avoid loud colors, heavy gradients, decorative blobs, and cluttered layouts.
- Use Tailwind utility classes and existing UI components before adding new abstractions.
- Use accessible contrast, readable spacing, and mobile-first responsive layouts.
- Buttons and cards should stay restrained with small border radius.
- Include high-quality dental or clinic images where useful.
- Do not write self-referential copy such as "this section shows" or "our website features."

## Required Sections

The site should include or preserve these conversion sections:

1. **Hero**
   - Clear dentist-in-Sarita-Vihar positioning.
   - CTAs for Call, WhatsApp, and Book.
   - Mention pain relief, smile care, affordability, and payment options.

2. **Emergency CTA**
   - Include a strong "Dental Emergency? Call Now" prompt.
   - Keep it sticky or highly visible for toothache and swelling visitors.

3. **Services**
   - Root Canal Treatment
   - Braces
   - Aligners
   - Dental Implants
   - Cleaning and Polishing
   - Teeth Whitening
   - Emergency Dental Care
   - Use short, non-technical explanations.
   - Pricing ranges may be shown as guidance, but avoid overpromising exact pricing.

4. **Doctor Profile and Trust**
   - Feature Dr. Shourya Poswal.
   - Include qualification/experience placeholders if exact details are unavailable.
   - Highlight clean clinic, careful diagnosis, transparent estimates, sterilization, and patient comfort.

5. **Location and Timings**
   - Sarita Vihar, Delhi must be very visible.
   - Include clinic timings.
   - Include Google Maps embed.
   - Include "Get Directions" CTA.
   - Include parking guidance if exact parking details are unavailable.

6. **Reviews and Trust**
   - Link to Google reviews through the map link when an official embed is unavailable.
   - Use realistic testimonial-style copy without pretending to have verified review text.

7. **Blogs / Learn Section**
   - Include educational cards or articles for:
     - "When do you need a root canal?"
     - "How to choose braces vs aligners"
   - Keep language patient-friendly and local-search useful.

8. **Flexible Payments**
   - Highlight affordability for India.
   - Mention UPI, cards, Razorpay, and EMI-friendly treatment planning.
   - Make payment reassurance prominent for aligners, braces, implants, and larger treatments.

9. **Before / After Gallery**
   - Include smile transformations and cosmetic work themes.
   - Use appropriate placeholder imagery unless real clinic cases are supplied.
   - Avoid claiming specific results without real patient assets and consent.

10. **FAQs**
   - Cover pain questions: "Does root canal hurt?"
   - Cover cost concerns.
   - Cover procedure duration.
   - Cover post-treatment care.
   - Keep answers accurate, calming, and not overly technical.

11. **Footer**
   - Repeat phone, WhatsApp, location, services, and local SEO wording.

## Integration Notes

### WhatsApp

- Use this phone number for WhatsApp links: `919560932970`.
- Prefer prefilled appointment messages.
- Use `https://wa.me/919560932970?text=...`.

### Phone

- Use `tel:+919560932970`.
- Display as `+91 95609 32970` for readability.

### Razorpay

- The frontend checkout should use `NEXT_PUBLIC_RAZORPAY_KEY_ID`.
- If the key is missing, the booking action should gracefully fall back to WhatsApp.
- Do not hardcode live Razorpay secrets.
- Real payment capture, order creation, and verification require a backend endpoint before production use.

### Google Maps

- Use the provided map link for direction CTAs.
- A simple Google Maps query embed is acceptable when a precise iframe embed is unavailable.

## SEO Requirements

- Target local search terms:
  - Dentist in Sarita Vihar
  - Dental clinic in Sarita Vihar Delhi
  - Root canal in Sarita Vihar
  - Braces in Sarita Vihar
  - Aligners in Delhi
  - Affordable dentist in Delhi
- Use semantic HTML with one strong H1 and descriptive H2s.
- Keep metadata updated in `app/layout.tsx`.
- Preserve or improve JSON-LD LocalBusiness/Dentist structured data.
- Mention nearby context naturally, such as Sarita Vihar, Jasola, Okhla, Madanpur Khadar, and New Delhi, when relevant.

## Content Tone

- Calm, direct, and reassuring.
- Premium but affordable.
- Clear about treatment estimates and payment flexibility.
- Patient-first: pain relief, comfort, cleanliness, transparent costs, and confidence.
- Avoid exaggerated claims such as "painless guaranteed," "best dentist," or "permanent results" unless verified and legally safe.

## Development Guidelines

- Read existing files before editing.
- Keep edits scoped and consistent with the current structure.
- Prefer existing components in `components/ui`.
- Add new components only when they reduce real repetition or isolate client-only behavior.
- Keep client components minimal; default to server components for content sections.
- Do not add unnecessary dependencies.
- Maintain TypeScript correctness.
- Keep image sources compatible with `next.config.mjs`.
- Do not commit secrets or real private API keys.
- Keep `.gitignore` updated for local dependencies, build output, logs, and environment files.

## Verification

Before handing off substantial changes:

- Run `npm run build`.
- Confirm CTAs point to the correct phone, WhatsApp, Razorpay fallback, and map link.
- Check responsive behavior for mobile and desktop layouts.
- Ensure no medical or pricing copy overpromises results.
- If starting the dev server, use `npm run dev` and report the local URL.

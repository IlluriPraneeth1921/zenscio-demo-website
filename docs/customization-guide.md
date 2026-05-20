# Customization guide

## Brand layer

- Update fonts in `src/app/layout.tsx`
- Replace color tokens in `src/app/globals.css`
- Change the site name and metadata values in `src/app/layout.tsx`

## Content layer

- Edit the section arrays in `src/app/page.tsx`
- Replace placeholder testimonials, portfolio summaries, and pricing values with client-specific content
- Update the contact copy and response expectations around the project review form

## Structural changes

- Add new sections by following the existing `SectionHeading` plus card-grid pattern
- Remove sections by deleting the corresponding block and nav link
- Promote data arrays into separate files once multiple pages or vertical variants are needed

## Safe upgrade path

- Point `LEAD_CAPTURE_WEBHOOK_URL` at the approved intake destination for each environment
- Add `LEAD_CAPTURE_WEBHOOK_TOKEN` if the receiving endpoint expects bearer authentication
- Swap the analytics placeholder with a consent-aware provider component
- Add CMS or MDX integration only after the content editing workflow is decided

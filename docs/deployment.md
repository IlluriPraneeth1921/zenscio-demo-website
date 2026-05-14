# Deployment notes

## Recommended path

Deploy to Vercel or another Node-compatible platform that supports Next.js App Router output.

## Pre-deploy checklist

- Confirm final brand copy and contact email
- Replace placeholder metadata URL in `src/app/layout.tsx`
- Decide whether analytics is approved
- Confirm whether the contact form should remain mailto-based or move to a validated backend flow

## Minimal deployment steps

1. Push the project to a Git provider or attach the workspace directly to your preferred host.
2. Configure the project as a Next.js application.
3. Set any public environment variables such as `NEXT_PUBLIC_ANALYTICS_ID` only after approval.
4. Run the host preview build.
5. Review mobile layout, anchor navigation, metadata, and contact flow before production release.

## Notes

- No production credentials are required for the current template state.
- The current contact flow is deliberately local-only and should be upgraded before collecting leads at scale.

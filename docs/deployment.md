# Deployment notes

## Recommended path

Deploy to Vercel or another Node-compatible platform that supports Next.js App Router output.

## Pre-deploy checklist

- Confirm final brand copy and form response copy
- Replace placeholder metadata URL in `src/app/layout.tsx`
- Decide whether analytics is approved
- Set `LEAD_CAPTURE_WEBHOOK_URL` to the approved intake endpoint
- Set `LEAD_CAPTURE_WEBHOOK_TOKEN` if the intake endpoint requires bearer auth

## Minimal deployment steps

1. Push the project to a Git provider or attach the workspace directly to your preferred host.
2. Configure the project as a Next.js application.
3. Set `LEAD_CAPTURE_WEBHOOK_URL` and any approved public variables such as `NEXT_PUBLIC_ANALYTICS_ID`.
4. Run the host preview build.
5. Review mobile layout, anchor navigation, metadata, and contact flow before production release.

## Notes

- The contact route fails closed until `LEAD_CAPTURE_WEBHOOK_URL` is configured.
- Soft launch is provider-agnostic: any HTTPS endpoint that accepts JSON can receive the lead payload.

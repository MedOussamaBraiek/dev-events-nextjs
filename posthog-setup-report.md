<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the **DevEvent** Next.js App Router application. Here is a summary of every change made:

## Summary of changes

- **`instrumentation-client.ts`** *(new file)* — Initialises the PostHog JS SDK using the Next.js 15.3+ `instrumentation-client` pattern. Configured with a reverse-proxy ingest path (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`** — Added PostHog reverse-proxy rewrites (`/ingest/static/*` and `/ingest/*`) pointing to the EU PostHog cluster, plus `skipTrailingSlashRedirect: true` to support PostHog's API request format.
- **`components/ExploreBtn.tsx`** — Added `posthog.capture("explore_events_clicked")` inside the existing `onClick` handler to track hero CTA engagement.
- **`components/EventCard.tsx`** — Converted to a Client Component (`"use client"`) and added `posthog.capture("event_card_clicked")` with event metadata (title, slug, location, date) on each card click.
- **`components/Navbar.tsx`** — Converted to a Client Component (`"use client"`) and added `posthog.capture("nav_link_clicked")` on every navigation link, capturing the link label and destination href.
- **`components/EventsSectionTracker.tsx`** *(new file)* — A lightweight Client Component using `IntersectionObserver` to fire `posthog.capture("events_section_viewed")` once when the Featured Events section scrolls into the viewport (top of the discovery funnel).
- **`app/page.tsx`** — Imported `EventsSectionTracker` and rendered it inside the Featured Events `<div>` container.
- **`.env.local`** — Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).

## Tracked events

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the "Explore Events" CTA button in the homepage hero | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked an event card to navigate to its detail page | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link (Home, Events, Create Event, or logo) | `components/Navbar.tsx` |
| `events_section_viewed` | User scrolled the Featured Events section into view — top of the discovery funnel | `components/EventsSectionTracker.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behaviour, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics:** https://eu.posthog.com/project/130872/dashboard/537678
- 📈 **Events Section Views (Daily):** https://eu.posthog.com/project/130872/insights/3KpMEASs
- 🔻 **Homepage to Event Detail Funnel:** https://eu.posthog.com/project/130872/insights/1lVzZNrD
- 🖱️ **Event Card Clicks (Daily):** https://eu.posthog.com/project/130872/insights/PVm9Fec6
- 🔗 **Nav Link Clicks by Destination:** https://eu.posthog.com/project/130872/insights/6njDRFrn
- 🚀 **Explore Events Button Clicks:** https://eu.posthog.com/project/130872/insights/OPnO6eCr

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

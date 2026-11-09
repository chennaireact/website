import { pageMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EventsSection from "@/components/EventsSection";

export const metadata = pageMetadata("React Meetups & Events in Chennai", "Explore upcoming and past Chennai React meetups, talks, and community events in Chennai.", "/events");

export default function EventsPage() {
  return <main id="top" className="events-page"><SiteHeader /><EventsSection timeline /><SiteFooter /></main>;
}

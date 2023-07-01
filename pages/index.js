import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const items = getFeaturedEvents();
  return <EventList items={items}></EventList>;
}

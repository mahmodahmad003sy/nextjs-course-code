import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "./../../components/Events/EventList";
const SrarchPage = () => {
  const router = useRouter();
  const query = router.query;
  const items = getFilteredEvents({
    year: query?.slug?.[0],
    month: query?.slug?.[1],
  });

  if (!items || !items.length) return <h2>No Events Found</h2>;

  return <EventList items={items}></EventList>;
};

export default SrarchPage;

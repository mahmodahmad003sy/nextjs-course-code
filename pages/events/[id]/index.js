import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";
const EventByID = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  if (!event) return <>No Event Found</>;

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        image={event.image}
        date={event.date}
        address={event.location}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventByID;

import { Fragment, useEffect, useState } from "react";
import EventItem from "../../components/Events/EventItem";
import { getAllEvents, getFeaturedEvents } from "../../dummy-data";
import EventList from "./../../components/Events/EventList";
import SearchEvents from "../../components/Events/SearchEvents";
const Events = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const result = getAllEvents();
    setItems(result);
  }, []);
  return (
    <Fragment>
      <SearchEvents setItems={setItems}></SearchEvents>
      <EventList items={items}></EventList>;
    </Fragment>
  );
};
export default Events;

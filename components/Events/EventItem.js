import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "./../ui/Button";
const EventItem = (props) => {
  const { id, title, location, date, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}> Explore </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

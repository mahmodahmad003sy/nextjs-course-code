import { useEffect, useState } from "react";
import Button from "../ui/Button";
import classes from "./SearchEvents.module.css";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
const SearchEvents = (props) => {
  const router = useRouter();

  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState("01");

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select
            onChange={(e) => {
              setYear(e.target.value);
            }}
            id="year"
          >
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            id="month"
          >
            <option value={"01"}>January</option>
            <option value={"02"}>Feb</option>
            <option value={"03"}>Mar</option>
            <option value={"04"}>April</option>
            <option value={"05"}>may</option>
            <option value={"06"}>Jun</option>
            <option value={"07"}>Jul</option>
            <option value={"08"}>Aug</option>
            <option value={"09"}>Sep</option>
            <option value={"10"}>Oct</option>
            <option value={"11"}>Nov</option>
            <option value={"12"}>decembre</option>
          </select>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            router.push(`/events/${year}/${month}`);
          }}
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchEvents;

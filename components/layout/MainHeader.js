import Link from "next/link";
import classes from "./MainHeader.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Next dev</Link>
      </div>

      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

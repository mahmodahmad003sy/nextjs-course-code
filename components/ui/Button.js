import classes from "./Button.module.css";
import Link from "next/link";
const Button = (props) => {
  if (props.link)
    return (
      <Link href={props.link}>
        <a className={classes.btn}> {props.children}</a>
      </Link>
    );

  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;

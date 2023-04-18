import classes from "../styles/navBar.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function NavBar(props) {
  const logo = props.logo;
  const navLinks = props.links.map((item, index) => (
    <Link
      href={item.url}
      key={index}
      className={`${classes["navBar__menu-item"]} ${
        item.button ? classes[`navBar__menu-item--button`] : ""
      }`}
    >
      {item.name}
    </Link>
  ));
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className={classes["navBar"]}>
      <div className={classes["navBar__logo"]}>
        <Link href={logo.url} className={classes["navBar__logo-link"]}>
          {logo.name}
        </Link>
      </div>
      <div className={classes["navBar__menu-items"]}>{navLinks}</div>
      <div
        className={`${classes["navBar__menu-items"]} ${classes["navBar__menu-items--mobile"]}`}
        onClick={() => {
          setMenuClicked(!menuClicked);
        }}
      >
        <div
          className={`${classes["navBar__burger"]} ${
            menuClicked ? classes["navBar__burger__1--changed"] : ""
          }`}
        ></div>
        <div
          className={`${classes["navBar__burger"]} ${
            menuClicked ? classes["navBar__burger__2--changed"] : ""
          }`}
        ></div>
        <div
          className={`${classes["navBar__burger"]} ${
            menuClicked ? classes["navBar__burger__3--changed"] : ""
          }`}
        ></div>
        <div
          className={`${classes["navBar__menu-items--mobile__items"]} ${
            menuClicked
              ? classes["navBar__menu-items--mobile__items--show"]
              : ""
          }`}
        >
          {navLinks}
        </div>
      </div>
    </div>
  );
}

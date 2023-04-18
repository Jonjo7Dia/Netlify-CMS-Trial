import Image from "next/image";
import classes from "../styles/hero.module.scss";

export default function Hero(props) {
  return (
    <div className={classes["hero"]}>
      <Image
        src={props.image.url}
        alt={props.image.alt}
        className={classes["hero__image"]}
      />
      <h1 className={classes["hero__header"]}></h1>
      <div className={classes["hero__banner"]}></div>
      <h2 className={classes["hero__subheader"]}></h2>
    </div>
  );
}

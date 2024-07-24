import Image from "next/image";
import styles from "./page.module.css";
import Herosection from "./componets/HeroSection";

export default function Home() {
  return (
    <Herosection title={"LET\'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
  );
}

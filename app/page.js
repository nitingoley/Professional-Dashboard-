import Image from "next/image";
import Profile from "./components/Profile";
import Academics from "./components/Academics";
import Skills from "./components/Skills";
import Extras from "./components/Extras";

export default function Home() {
  return (
    <div>
      <Profile/>
      <Academics />
      <Skills />
      <Extras />
    </div>
  );
}

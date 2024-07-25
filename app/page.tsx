import Image from "next/image";
import Passwords from "./components/passwords";

export default function Home() {
  return (
    <div className=" bg-cyan-900 py-10">
      <Passwords />
    </div>
  );
}

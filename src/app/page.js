import Cv from "@/components/cv/Cv";
import SideBar from "@/components/side-par/SidePar";
import AppCenter from "../components/app-center/appCenter";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex m-0 p-0 bg-[#f0f0f6]'>
    <Cv />
    <AppCenter />
    <SideBar />
  </div>
  );
}

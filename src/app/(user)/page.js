"use client";
import BecomeReal from "@/components/becomereal/becomereal";
import Card from "@/components/card/card";
import Clients from "@/components/clients/clients";
import Customecard from "@/components/customercard/customecard";
import Lookinghome from "@/components/lookinghoom/lookinghome";
import Residentalcard from "@/components/residental/residentalcard";
import Sliders from "@/components/slider/sliders";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <Sliders />
        <Card />
        <Customecard />
        <Lookinghome />
        <Residentalcard />
        <Clients />
        <BecomeReal />
      </div>
    </>

    // {/* abfjhsgdkfjmhkshdjb */}
  );
}

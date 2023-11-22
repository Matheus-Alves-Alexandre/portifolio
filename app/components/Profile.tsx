"use client";

import Image from "next/image";
import { Github, Instagram, Twitter, Mail } from "lucide-react";
import { mLogo, mPhoto } from "../../public/assets/index";
import Link from "next/link";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import ThemeChange from "./theme/ThemeChange";

const Profile = () => {
  useEffect(() => {}, []);
  return (
    <div className="justify-center items-center border rounded-lg  p-10 gap-4 text-[#565656]">
      <Image src={mLogo} alt="" />
      <Image src={mPhoto} alt="" className="rounded-xl mt-5 mb-5" />
      <div className="text-[#ffff] gap-5 mb-10 mt-5 font-medium">
        <h3>m.alexandre016@gmail.com</h3>
        <h3>Base São Paulo, SP</h3>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <Link
          href="https://github.com/Matheus-Alves-Alexandre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={50} className="border rounded-full p-2" />
        </Link>
        <Link
          href="https://www.instagram.com/sr_ma_alexandre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={50} className="border rounded-full p-2" />
        </Link>
        <Link
          href="https://twitter.com/Sr_Matheus_A"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Twitter size={50} className="border rounded-full p-2" />
        </Link>
        <div>{/*  <ThemeChange /> */}</div>
      </div>
    </div>
  );
};

export default Profile;

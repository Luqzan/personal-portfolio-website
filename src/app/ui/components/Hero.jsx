"use client";

import CustomButton from "@/app/ui/components/CustomButton";
import Underline from "@/app/ui/components/Underline";
import { usePathname } from "next/navigation";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { useState } from "react";

export default function Hero() {
  const pathname = usePathname();
  const [iconColor, setIconColor] = useState("#0a0a0a");
  return (
    <div className="relative flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <p className="text-center font-mono text-3xl font-extralight tracking-wider">
          WELCOME TO MY
        </p>

        <h1 className="font-mono font-light text-center text-5xl tracking-widest">
          Portfolio
        </h1>

        <p className="max-w-[400px] text-center font-sans text-xl font-thin tracking-widest leading-7">
          My name is <Underline>Luqzan Ariff</Underline>, and I just{" "}
          <span className="text-nowrap">kick-started</span> my career as a{" "}
          <Underline>Full-Stack Developer</Underline>!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <CustomButton
          isFilled={true}
          iconRight={
            <DriveFileRenameOutlineOutlinedIcon sx={{ color: iconColor }} />
          }
          setIconColor={setIconColor}
        >
          HIRE ME
        </CustomButton>

        <CustomButton>GET TO KNOW ME &rarr;</CustomButton>
      </div>
    </div>
  );
}

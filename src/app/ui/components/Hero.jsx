"use client";

import HeroButton from "@/app/ui/components/HeroButton";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Underline from "./Underline";

export default function Hero() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-6">
        <p className="text-center font-mono text-3xl font-extralight tracking-wider leading-normal">
          WELCOME TO MY{" "}
          <span className="text-6xl tracking-widest font-light">Portfolio</span>
        </p>

        <p className="text-center font-sans text-xl font-thin tracking-widest leading-7">
          My name is <Underline>Luqzan Ariff</Underline>, and I just{" "}
          <span className="text-nowrap">kick-started</span> my career as a{" "}
          <Underline>Full-Stack Developer</Underline>!
        </p>
      </div>

      <div className="flex gap-6">
        <HeroButton
          isFilled={true}
          iconRight={
            <DriveFileRenameOutlineOutlinedIcon className="text-background" />
          }
        >
          HIRE ME
        </HeroButton>

        <HeroButton>GET TO KNOW ME &rarr;</HeroButton>
      </div>
    </div>
  );
}

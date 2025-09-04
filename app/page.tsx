import Background from "./profile/background";
import Avatar from "./profile/avatar";
import ProfileInfo from "./profile/profileinfo";
import Tags from "./profile/tags";
import Followers from "./profile/followers";
import Cards from "./profile/cards";;

import ExtraContent from "./profile/extracontent";
import { i } from "motion/react-client";

export default function Home() {
  const taglist=["öğrenci" , "organizatör" ,"baba" ,"hoca"];
  return (
    <main className="min-h-screen w-full relative overflow-x-hidden overflow-y-auto -translate-y-[270px]">
      <Background />
      <Avatar />
      <div className="flex flex-col gap-4">
        <ProfileInfo />
        <Tags liste={taglist} />
        <Followers />
        <Cards />
        <ExtraContent />
      </div>
    </main>
  );
}
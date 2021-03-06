import { VFC } from "react";
import { MyProfile } from "../molecules/MyProfile";

export const SideMenu:VFC = () => {
  return (
    <aside className=" border bg-white rounded p-5 mt-8 md:mt-0 md:flex-1">
      <MyProfile />
    </aside>
  );
};

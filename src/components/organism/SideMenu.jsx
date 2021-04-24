import { MyProfile } from "../molecules/MyProfile";
import { TagLists } from "../molecules/TagLists";

export const SideMenu = () => {
  return (
    <aside className=" border bg-white rounded p-5 mt-8 md:mt-0 md:flex-1">
      <MyProfile />
      <TagLists />
    </aside>
  );
};
import {
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineMessage,
  AiFillMessage,
} from "react-icons/ai";

import { RiVideoLine, RiVideoFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    title: "Search",
    icon: <AiOutlineSearch />,
    activeIcon: <AiOutlineSearch />,
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass />,
    activeIcon: <AiFillCompass />,
  },
  {
    title: "Reels",
    icon: <RiVideoLine />,
    activeIcon: <RiVideoFill />,
  },
  {
    title: "Message",
    icon: <AiOutlineMessage />,
    activeIcon: <AiFillMessage />,
  },
  {
    title: "Nofication",
    icon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />,
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle />,
    activeIcon: <AiFillPlusCircle />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    activeIcon: <CgProfile />,
  },
];

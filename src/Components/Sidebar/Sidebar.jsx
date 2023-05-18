import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./sidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(menu[0].title);
  const navigate = useNavigate();

  function handleActiveTab(item) {
    setActiveTab(item.title);
    if (item.title === "Profile") {
      navigate("/profile");
    } else if (item.title === "Search") {
      navigate("/search");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full pl-10">
        <div>
          <div className="pt-10">
            <img
              className="w-40"
              src="https://i.imgur.com/zqpwkLQ.png"
              alt="logo"
            />
          </div>
          <div className="mt-10">
            {menu.map((item) => (
              <div
                onClick={() => handleActiveTab(item)}
                className="flex items-center mb-5 cursor-pointer text-sm"
                key={item.title}
              >
                <span>
                  {item.title === activeTab ? item.activeIcon : item.icon}
                </span>
                <p
                  className={`ml-3 ${
                    item.title === activeTab ? "font-bold" : "font-semibold"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center pb-10">
          <IoReorderThreeOutline />
          <p className="ml-3 text-sm">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

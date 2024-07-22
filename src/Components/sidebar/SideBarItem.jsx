import React from "react";
import { NavLink } from "react-router-dom";

function SideBarItem({ to, title, icon }) {
  if (to === "/divider") {
    return <div className="border border-white/50 my-2 w-full" />;
  }

  if (to == "") {
    return (
      <div className="links">
        <p className="link-title">{title}</p>
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => ` ${isActive ? "active" : "inactive"} links`}
    >
      {icon}
      {title && <p className="link-title">{title}</p>}
    </NavLink>
  );
}

export default SideBarItem;

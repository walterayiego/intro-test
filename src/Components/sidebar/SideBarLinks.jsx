import React from "react";
import { CgHome } from "react-icons/cg";
import { GiRead } from "react-icons/gi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { MdNotificationsNone, MdOutlineRequestQuote } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { FaFileInvoice } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaCcDiscover } from "react-icons/lia";

const sideBarLinks = [
  {
    title: "Home",
    icon: <CgHome size={25} color="white " className="font-bold" />,
    to: "/home",
  },
  {
    to: "/dashboard",
    icon: <GiRead size={25} className=" font-bold" />,
    title: "My Dashboard",
  },
  {
    to: "/divider",
  },
  {
    to: "/prequalifications",
    icon: <IoIosCheckmarkCircle size={25} className="  text-white font-bold" />,
    title: "Pre Qualification",
  },
  {
    to: "/frameworkagreements",
    icon: <FaHandshake size={25} className="  text-white font-bold" />,
    title: "Framework Agreement",
  },
  {
    to: "/divider",
  },
  {
    to: "/closedprequalifications",
    title: "My active tenders",
    icon: <div  />,
  },

  {
    to: "/requestofquatation",
    icon: <MdOutlineRequestQuote size={25} className="text-white font-bold" />,
    title: "Request Of Quatation",
  },
  {
    to: "/purchaseorder",
    icon: <CgNotes size={25} className="text-white font-bold" />,
    title: "Purchase Order",
  },
  {
    to: "/delivery",
    icon: <TbTruckDelivery size={25} className="text-white font-bold" />,
    title: "Dispatch and Delivery",
  },
  {
    to: "/divider",
  },
  {
    to: "",
    title: "Financial Overview",
    icon: <></>,
  },
  {
    to: "/invoiceandsettlement",
    icon: <FaFileInvoice size={25} className="text-white font-bold" />,
    title: "Invoice and Settlement",
  },
  {
    to: "/divider",
  },
  {
    to: "/notifications",
    icon: <MdNotificationsNone size={25} className="text-white font-bold" />,
    title: "Notifications",
  },
  {
    to: "/discoversuppliers",
    icon: <LiaCcDiscover size={25} className="text-white font-bold" />,
    title: "Discover Suppliers",
  },
];

export default sideBarLinks;

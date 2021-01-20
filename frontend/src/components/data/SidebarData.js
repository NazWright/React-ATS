import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

//array of sidebar objects, add an object if you are adding a menu
export const EmployerMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Client",
    path: "/client",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text",
    sub_menu: [
      { title: "Add Client", path: "/add-client", cName: "nav-text" },
      { title: "View Clients", path: "/view-client", cName: "nav-text" },
    ],
  },
  {
    title: "Workflow",
    path: "/workflow",
    icon: <IoIcons.IoIosGitNetwork />,
    cName: "nav-text",
    // submenus
  },
  {
    title: "Job Orders",
    path: "/job-orders",
    icon: <GiIcons.GiSuitcase />,
    cName: "nav-text",
  },
  {
    title: "Job Listings",
    icon: <RiIcons.RiSuitcaseLine />,
    cName: "nav-text",
    sub_menu: [
      { title: "View Listings", path: "/listings", cName: "nav-text" },
      { title: "Post A Job", path: "/add-listings", cName: "nav-text" },
    ],
  },
];

export const ApplicantMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Job Openings",
    path: "/job-listings",
    icon: <RiIcons.RiSuitcaseLine />,
    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text",
  },
];

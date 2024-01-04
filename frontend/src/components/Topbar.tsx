import React from "react";
import { Link } from "react-router-dom";
export const Topbar = () => {
  return (
    <div className="bg-black w-full align-center max-w-screen-lg pt-8 px-6 pl-5">
      <div className="text-8xl text-white">Striver A2Z</div>
      <NavBar />
      
    </div>
  );
};

const Toproute = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Activity",
    route: "/activity",
  },
  {
    title: "Problem",
    route: "/problems",
  },
  {
    title: "LeaderBoard",
    route: "/leaderboar",
  },
];

const NavBar = () => {
  return (
    <div className="flex">
      {Toproute.map((item) => (
        <NavbarItem route={item.route} title={item.title} key={item.title} />
      ))}
    </div>
  );
};

const NavbarItem = ({ title, route }: { title: string; route: string }) => {
  return (
    // <Link to={route}>
    <div className="mr-10 text-slate-500 text-lg cursor-pointer hover:text-white text-base font-light">
      {title}
    </div>
    // </Link>
  );
};

import sidebarData from "@/datas/sidebar.data";
import Head from "next/head";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Mainlayout = ({ title, children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title || "demo"}</title>
        <link rel="stylesheet" href="" />
      </Head>
      <main className="w-full">
        <Sidebar toggle={toggle} />
        <div
          className={`  ${
            !toggle
              ? "md:ml-[11rem] lg:ml-[14rem] xl:ml-[16.8rem] 2xl:ml-[21rem]"
              : "ml-[5rem]"
          } `}
        >
          <Navbar setToggle={setToggle} toggle={toggle} />

          <div className="pt-16">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Mainlayout;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserIcon,
  ClockIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

function TabSelector({ isDark }: { isDark: boolean }) {
  const [activeTab, setActiveTab] = useState("crypto");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeStyle = "border-b-2 border-blue-600 font-semibold";
  const textStyle = isDark ? "text-white" : "text-black";

  return (
    <div
      className={`flex text-slate-500 justify-around w-full border-b ${
        isDark ? "border-gray-700" : "border-gray-200"
      }`}
    >
      <div
        className={`cursor-pointer ${
          activeTab === "crypto" ? activeStyle + " " + textStyle : ""
        }`}
        onClick={() => handleTabClick("crypto")}
      >
        Crypto
      </div>
      <div
        className={`cursor-pointer ${
          activeTab === "nfts" ? activeStyle + " " + textStyle : ""
        }`}
        onClick={() => handleTabClick("nfts")}
      >
        NFTs
      </div>
    </div>
  );
}

function OktoWalletContainer() {
  const [show, setShow] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    if(window.localStorage.getItem("darkmode") === "true"){
        setIsDark(true)
    }
  })
  if (!show) {
    return <div></div>;
  }

  const backgroundStyle = isDark ? "bg-gray-800" : "bg-white";
  const textStyle = isDark ? "text-white" : "text-black";
  const hoverStyle = isDark ? "hover:text-white" : "hover:text-black";

  return (
    <div
      className={`z-30 flex flex-col space-y-5 fixed top-0 h-full w-full ${backgroundStyle} border ${textStyle} rounded-lg shadow-lg p-4`}
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <img src="/okto_logo.png" alt="" className="w-8 h-8" />
          <div className={`font-bold text-xl ${textStyle}`}>Okto Wallet</div>
        </div>
        <div className="flex items-center space-x-3">
          <ArrowPathIcon className={`h-4 w-4 text-slate-600 ${hoverStyle}`} />
          <ClockIcon className={`h-4 w-4 text-slate-600 ${hoverStyle}`} />
          <UserIcon className={`h-4 w-4 text-slate-600 ${hoverStyle}`} />
        </div>
      </div>

      <TabSelector isDark={isDark} />

      <div className="flex flex-col items-center h-full justify-center space-y-3">
        {/* <img src="/coinAssets.png" alt="" className="w-32" /> */}
        <div className={`text-xl font-bold ${textStyle}`}>
          Your Crypto Lives here
        </div>
        <div
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}
        >
          Nothing to see here
        </div>
      </div>

      {/* See all tokens */}
      <button
        className={`rounded-full w-full font-semibold text-sm text-center border ${textStyle} p-2 shadow-sm hover:scale-105 transition-transform duration-300`}
        onClick={() => {
          console.log("button pushed");
          router.push("/tokens");
        }}
      >
        See all tokens
      </button>
    </div>
  );
}

export default OktoWalletContainer;

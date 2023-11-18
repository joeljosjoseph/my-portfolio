import React from "react";

type Props = {
  tabs: string[];
  activeTab: string;
  handleClick: (tabName: string) => void;
};

const Tab = ({ tabs, activeTab, handleClick }: Props) => {
  return tabs.map((tab) => (
    <div
      key={tab}
      onClick={() => handleClick(tab)}
      className={`text-[10px] sm:text-base border-[1px] font-bold border-black/50 px-4 py-2 cursor-pointer ${
        activeTab === tab ? "bg-black text-white" : "bg-white"
      }`}
    >
      {tab}
    </div>
  ));
};

export default Tab;

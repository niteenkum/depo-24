import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SidePanelItems from "./SidePanelItems";
import "./Component.scss";

interface IProps {
  handleScrollToElement: (mainIndex: number, index: number) => void;
  title: string;
  itemData?: string[];
  mainIndex: number;
}

export default function SidePanel({
  handleScrollToElement,
  title,
  itemData,
  mainIndex,
}: IProps) {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <div
        className={`${!active ? "inactive-card" : "active-card"}`}
        onClick={() => setActive(!active)}
      >
        {title}
        <BsChevronDown className="icon" />
      </div>
      {active ? (
        itemData?.map((item, index) => (
          <SidePanelItems
            handleScrollToElement={() =>
              handleScrollToElement(mainIndex, index)
            }
            title={item}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
}

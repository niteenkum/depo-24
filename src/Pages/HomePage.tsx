import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import ImageShowCard from "../Component/ImageShowCard";
import SectionDivider from "../Component/SectionDivider";
import SidePanel from "../Component/SidePanel";
import SidePanelItems from "../Component/SidePanelItems";
import useDataForHomePage from "../Hook/useDataForHomePage";
import "./Homepage.scss";

export default function HomePage() {
  const { l1Data, l3Data, setL3Data } = useDataForHomePage();
  const myReff = React.useRef<any>(null);

  let myRef = useRef<any>([]);

  function handleScrollToElement( mainIndex: number, index: number) {
   if(mainIndex === 0 ){
    document?.getElementById("scroller")?.scrollTo({
      top: myRef?.current[index].offsetTop,
      behavior: "smooth",
    });
   }else{
    document?.getElementById("scroller")?.scrollTo({
      top: myRef?.current[l3Data.length-1].offsetTop,
      behavior: "smooth",
    });
   }
  }

  // const search = (e: any) => {
  //   const searchValue = e.target.value;
  //   const filteredData = l3Data.filter((item) => {
  //     return item.title.toLowerCase().includes(searchValue.toLowerCase());
  //   });
  //   setL3Data(filteredData);
  // }



  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-12 ">
      <div className="side-panel">
        {l1Data.map((item, index) => (
          <SidePanel
            handleScrollToElement={handleScrollToElement}
            title={item?.title}
            itemData={item?.data}
            mainIndex={index}
          />
        ))}
      </div>

      <div className="item-panel" id="scroller">
        {l3Data?.map((item, index) => {
          return (
            <>
              <SectionDivider myRef={(element: any) => {myRef.current[index] = element}} title={item?.title} />
              <div className="grid grid-cols-2">
                {item?.data?.map((item, index) => {
                  return (
                    <ImageShowCard title={item?.name} image={item?.image_url} />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

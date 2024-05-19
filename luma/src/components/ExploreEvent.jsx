import React from "react";

const ExploreEvent = () => {
  const num = 5;
  return (
    <div className="text-white">
      <div className=" m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div>
      <div className=" px-28 md:px-48">
        <h1 className="text-6xl font-impact pb-12">EXPLORE EVENTS</h1>
        <h1 className="text-4xl font-impact pt-4">THIS WEEK</h1>
      </div>
      {/*grid columns */}
      <div className="grid grid-cols-3 z-10 md:grid-cols-4  pt-10 w-4/5 mx-auto">
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[70px]" src="https://media.licdn.com/dms/image/C4D0BAQE8MA5SwG9-tQ/company-logo_200_200/0/1663574766757?e=2147483647&v=beta&t=obgHNzjJNESh8vx6DvCtl1F6hV083zq40e_8_-db_rs" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">DEVS</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[80px] " src="https://miro.medium.com/v2/resize:fit:1400/0*YntK59UKWOld4BHr" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">GDSC</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[80px] " src="https://logowik.com/content/uploads/images/ui-path7967.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">UI PATH</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
           <img className="w-[70px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFQbYPYd8q_FBK--saQQJ4IyxkJ4ywcDwHsSeN-NGJw&s" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">IEEE</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[70px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYStOj4J1qrVVVRDIsFVcUZ3C93XgjWactypX1D_c3Q&s" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">ROTARACT</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[70px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HyVKlYYHozDMBMjq9G9NHLGYSYckcs8ZzEJ_eon1mg&s" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">YUVA</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[70px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyTClplcTHPwnoM52zRkTXsWxhUGiXSkRhtmWfqUKAeA&s" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">LEO</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
        <div className="flex p-3 gap-3">
          <div className="flex justify-center items-center bg-white w-[100px] h-[100px] rounded-full">
            <img className="w-[70px]" src="https://thumbs.dreamstime.com/b/events-icon-calendar-icon-white-background-events-icon-calendar-icon-simple-vector-icon-122490266.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold">OTHERS</h1>
            <h3 className="text-lg text-gray-400">{`${num} Events`}</h3>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img className="w-[850px]" src="../../src/assets/Images/circle.png" alt="" />
      </div>
    </div>
  );
};

export default ExploreEvent;
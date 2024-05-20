import React from "react";
import Header from "../Header";

const events = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1716139008~exp=1716142608~hmac=aa4df07d4082c3d36cd0885a00ff95c52a5d0b363709d091c0b0ac7d2779b9f1&w=1380",
    event: "web development",
    date: "24-05-2024",
    time: "3 to 5 pm",
    venue: "A102",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/view-smartphones-with-abstract-wallpaper-coming-out-screen_23-2151033627.jpg",
    event: "uiux development",
    date: "24-05-2024",
    time: "3 to 5 pm",
    venue: "A102",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/smartphone-trend-social-media-platform_1409-5016.jpg?t=st=1716143839~exp=1716147439~hmac=1bdee680c999a20e491108ae669e78ec0721d0525a8b80247acfd53a35b860dc&w=1380",
    event: "app development",
    date: "24-05-2024",
    time: "3 to 5 pm",
    venue: "A102",
  },
];

function UIpath() {
  return (
    <div className="text-white">
      {/* <div className=" m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5">DHENT</h1>
      </div> */}
      <Header />
      <div className="">
        <div className="px-28 py-3 md:px-48">
          <h1 className="text-6xl font-impact">UI PATH CLUB</h1>
        </div>
        <div className="grid grid-cols-3 z-10 md:grid-cols-4  pt-10 w-4/5 mx-auto">
          {events.map((eve) => (
            <div className="main flex flex-col w-[250px] p-5 bg-gray-300 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 uppercase">
              <img className="h-[140px] rounded-lg" src={eve.img} alt="" />
              <div className="px-1 bg-transparent">
                <h1 className="text-xl py-2 text-center font-bold  bg-transparent">
                  {eve.event}
                </h1>
                <h1 className="text-md pb-1  font-semibold bg-transparent">
                  date : {eve.date}
                </h1>
                <h1 className="text-md pb-1 font-semibold bg-transparent">
                  timing : {eve.time}
                </h1>
                <h1 className="text-md pb-1 font-semibold bg-transparent">
                  venue : {eve.venue}
                </h1>
              </div>
              <div className="flex justify-end bg-transparent -mt-4">
                <div className="rounded-full w-5 h-5 bg-gradient-to-r from-amber-300 to-red-600 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 right-0 -z-50">
        <img
          className="w-[700px] h-[200px] "
          src="../../src/assets/Images/bubble.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default UIpath;

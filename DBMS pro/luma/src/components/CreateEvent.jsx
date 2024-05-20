import React from "react";
// import Header from "./Header";

const CreateEvent = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="m-2 ">
        <h1 className="text-white text-4xl font-impact ml-3 p-5 pt-2">DHENT</h1>
      </div>
      <div className="flex justify-center">
        <div className="ml-36">
          <div className="text-white z-10 text-6xl font-impact">
            <h1 className="-ml-14">CREATE EVENT</h1>
          </div>
          <form className="relative z-10 bg-opacity-10  bg-gray-500 border-2 border-gray-300 border-opacity-88   bg-clip-padding backdrop-filter backdrop-blur-sm rounded-xl space-y-8  bg-transparent shadow-md  p-10  mt-4">
            <div className="space-y-4 bg-transparent uppercase pb-6 ">
              <div className="flex gap-4 items-center  py-2 bg-transparent ">
                <label
                  htmlFor="eventName"
                  className="block tracking-tight font-bold text-2xl  text-white bg-transparent "
                >
                  Event Name :
                </label>
                <input
                  id="eventName"
                  type="text"
                  className="mt-2 block text-lg pl-2 rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  placeholder="Event Name"
                  required
                />
              </div>
              <div className="flex gap-4 items-center bg-transparent ">
                <label
                  htmlFor="eventDate"
                  className="block tracking-tight text-2xl font-bold text-white py-2 bg-transparent "
                >
                  Conduct By :
                </label>
                <input
                  id=""
                  type="text"
                  className="mt-1 block  rounded-md text-lg pl-2  border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  placeholder="Conduct By"
                  required
                />
              </div>
              <div className="flex gap-7 items-center bg-transparent ">
                <label
                  htmlFor="eventDate"
                  className="block tracking-tight text-2xl  font-bold text-white py-2 bg-transparent "
                >
                  Event Date :
                </label>
                <input
                  id="eventDate"
                  type="date"
                  className="mt-1 block  rounded-md text-lg pl-2 text-gray-400 border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  placeholder="Event Name"
                  required
                />
              </div>
              <div className="flex gap-8 items-center bg-transparent ">
                <label
                  htmlFor="eventDate"
                  className="block tracking-tight text-2xl font-bold text-white py-2 bg-transparent "
                >
                  Event Time :
                </label>
                <input
                  id="eventDate"
                  type="time"
                  className="mt-1 block text-lg pl-2 rounded-md border-gray-300 shadow-sm text-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  required
                />
              </div>
              <div className="flex gap-[90px] items-center bg-transparent ">
                <label
                  htmlFor="eventDate"
                  className="block tracking-tight  text-2xl font-bold text-white py-2 bg-transparent "
                >
                  venue :
                </label>
                <input
                  id="eventDate"
                  type="text"
                  className="mt-1 block text-lg pl-2  rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  placeholder="Venue"
                  required
                />
              </div>
              <div className="flex gap-7 items-center bg-transparent ">
                <label
                  htmlFor="eventLink"
                  className="block text-2xl font-bold text-white py-2 bg-transparent "
                >
                  event link :
                </label>
                <input
                  id="eventLink"
                  type="text"
                  className="mt-1 block text-lg pl-2 rounded-md border-gray-300 shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent "
                  placeholder="Event link"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-6 bg-transparent ">
              <button
                type="reset"
                className="inline-flex uppercase justify-center py-2 px-4 border border-transparent shadow-gray-300 shadow-md text-sm font-bold rounded-md text-black bg-white hover:bg-black hover:text-white hover:outline "
              >
                Check Availablity
              </button>
              <button
                type="submit"
                className="inline-flex uppercase justify-center py-2 px-4 border border-transparent shadow-gray-300 shadow-md text-sm font-bold rounded-md text-black bg-white  hover:bg-black hover:text-white hover:outline "
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
        <div className="z-0 -ml-[190px]">
          <img
            className=" z-0  mt-[50px] w-[600px]"
            src="../../src/assets/Images/pie.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CreateEvent;

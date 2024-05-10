import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import Detail from "./Detail";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { GiDustCloud } from "react-icons/gi";

function Home() {
  const [data, setData] = useState(null);

  const [dustColor, setDustColor] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, "data");

    console.log("Data Reference:", dataRef);

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const updatedData = snapshot.val();
        console.log("Updated Data:", updatedData);
        setData(updatedData);
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <div className="shadow-lg flex flex-col justify-center items-center bg-white py-8 ">
        <h1 className="text-3xl font-bold mb-2">Weather Report</h1>
        {data ? (
          <ul className=" flex flex-col sm:flex-row justify-evenly items-center p-4 my-4  w-8/12">
            {/* Humidity */}
            <li className="flex flex-row items-start  bg-sky-200 text-sky-600 rounded-xl py-2 px-4 h-20 w-[10rem]">
              <p className="text-[4rem]">
                <WiHumidity />
              </p>
              <div className="flex flex-col items-center justify-between w-full">
                <p className="text-sm font-bold">Humidity</p>
                <div className="flex flex-row items-end">
                  <p className="text-3xl ">{data.humidity}</p>
                  <p className="text-base ml-1 ">%</p>
                </div>
              </div>
            </li>

            {/* Temperature */}

            <li className="flex flex-row items-start text-rose-700 bg-rose-200 rounded-xl py-2 px-2 h-20 w-[11rem]">
              <p className="text-[4rem]">
                <WiThermometer />
              </p>
              <div className="flex flex-col items-center justify-between w-full">
                <p className="text-sm font-bold">Temperature</p>
                <div className="flex flex-row items-end">
                  <p className="text-3xl ">{data.temp}</p>
                  <p className="text-base ml-1 ">°C</p>
                </div>
              </div>
            </li>

            {/* PM 2.5 */}
            <li className="flex flex-row items-start text-stone-500 bg-stone-200 te rounded-xl py-2 px-4 h-20 w-[15rem]">
              <p className="text-[3.5rem] flex items-center justify-center">
                <GiDustCloud className="text-[3.5rem]" />
              </p>
              <div className="flex flex-col items-center justify-between w-full">
                <p className="text-sm font-bold">Air quality - PM 2.5</p>
                <div className="flex flex-row items-end">
                  <p className="text-3xl ">{data.dust}</p>
                  <p className="text-base ml-1 ">mg/m&sup3;</p>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
        <Detail data={data} />
      </div>
    </div>
  );
}

export default Home;

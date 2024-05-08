import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Detail from "./Detail";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "data"); // Reference to your Firestore collection
        const querySnapshot = await getDocs(collectionRef); // Fetch data from the collection

        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          // Construct your data object from each document
          const item = {
            id: doc.id,
            ...doc.data(),
          };
          fetchedData.push(item);
        });

        setData(fetchedData); // Update the component state with the fetched data
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1 className="text-xl font-bold">Data from Firestore Collection</h1>
      <ul className="flex flex-row justify-center">
        {data.map((item) => (
          <li key={item.id} className="flex flex-row">
            <p className="p-4">Count: {item.count}</p>
            <p className="p-4">Temperature: {item.temp}</p>
            <p className="p-4">Humidity: {item.humidity}</p>
            <p className="p-4">PM2.5: {item.dust}</p>
            {/* Render other data fields as needed */}
          </li>
        ))}
      </ul>

      <Detail data={data} />
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import Home from "./component/Home";
import "./App.css";

function App() {

  const [bgcolor,setbgcolor] = useState("bg-white");


  return (
    <div className={`w-full ${bgcolor}`}>
      <Home setbgcolor={setbgcolor} />
    </div>
  );
}

export default App;

// import "./App.css";
import ScoreTable from "./ScoreTable";
import ChartComponents from "./ChartComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [iplData, setIplData] = useState({});
  useEffect(() => {
    const data = async () => {
      let idata = await fetch("./iplData.json");
      let res = await idata.json();

      setIplData(res);
    };
    data();
  }, []);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/scoretable"
          element={<ScoreTable data={iplData.iplData} />}
        />
        <Route
          path="/chartcompnents"
          element={
            <ChartComponents
              pieData={iplData.runData}
              barData={iplData.bowlerData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

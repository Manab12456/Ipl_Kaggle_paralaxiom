import { useEffect, useState } from "react";
import axios from "axios";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
const FetchApi = () => {
  const [iplData1, getData1] = useState();
  const [iplData2, getData2] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/task_1/?format=json").then((response) => {
      getData1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/task_2/?format=json").then((response) => {
      getData2(response.data);
    });
  }, []);
  // console.log(iplData);
  //   return <App iplData={iplData} />;

  if (iplData1 != null && iplData2 != null) {
    console.log(iplData2);
    return (
      <div className="graphs-page">
        <h2>Number of matches played per year of all the years of IPL</h2>
        <Graph1 props={iplData1} />
        <h2>Matches won of all teams over all the years of IPL</h2>
        <Graph2 props={iplData2} />
      </div>
    );
  } else return <h1>Loading</h1>;
};

export default FetchApi;

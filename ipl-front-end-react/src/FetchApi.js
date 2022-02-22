import { useEffect, useState } from "react";
import axios from "axios";
import Graph from "./Graph";
const FetchApi = () => {
  let [iplData, getData] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/?format=json").then((response) => {
      getData(response.data);
    });
  }, []);
  //   console.log(iplData);
  //   return <App iplData={iplData} />;

  return <Graph iplData={iplData} />;
};

export default FetchApi;

import { useEffect, useState } from "react";
import axios from "axios";
import Graph1 from "./Graphs/Page1/Graph1";
import Graph2 from "./Graphs/Page1/Graph2";
import Graph32008 from "./Graphs/Page2/Graph32008";
import Graph32009 from "./Graphs/Page2/Graph32009";
import Graph32010 from "./Graphs/Page2/Graph32010";
import Graph32011 from "./Graphs/Page2/Graph32011";
import Graph32012 from "./Graphs/Page2/Graph32012";
import Graph32013 from "./Graphs/Page2/Graph32013";
import Graph32014 from "./Graphs/Page2/Graph32014";
import Graph32015 from "./Graphs/Page2/Graph32015";
import Graph32016 from "./Graphs/Page2/Graph32016";
import Graph32017 from "./Graphs/Page2/Graph32017";
import Graph52008win from "./Graphs/Page4/Graph52008win";
import Graph52008played from "./Graphs/Page4/Graph52008played";
import Graph52009win from "./Graphs/Page4/Graph52009win";
import Graph52009played from "./Graphs/Page4/Graph52009played";
import Graph52010win from "./Graphs/Page4/Graph52010win";
import Graph52010played from "./Graphs/Page4/Graph52010played";
import Graph52011win from "./Graphs/Page4/Graph52011win";
import Graph52011played from "./Graphs/Page4/Graph52011played";
import Graph52012win from "./Graphs/Page4/Graph52012win";
import Graph52012played from "./Graphs/Page4/Graph52012played";
import Graph52013win from "./Graphs/Page4/Graph52013win";
import Graph52013played from "./Graphs/Page4/Graph52013played";
import Graph52014win from "./Graphs/Page4/Graph52014win";
import Graph52014played from "./Graphs/Page4/Graph52014played";
import Graph52015win from "./Graphs/Page4/Graph52015win";
import Graph52015played from "./Graphs/Page4/Graph52015played";
import Graph52016win from "./Graphs/Page4/Graph52016win";
import Graph52016played from "./Graphs/Page4/Graph52016played";
import Graph52017win from "./Graphs/Page4/Graph52017win";
import Graph52017played from "./Graphs/Page4/Graph52017played";
import Graphpg3 from "./Graphs/Page3/Graphpg3";

const FetchApi = ({ pg1, pg2, pg3, pg4 }) => {
  let page1 = pg1;

  let page2 = pg2;

  let page3 = pg3;

  let page4 = pg4;
  // let page1 = false;
  // let page2 = false;
  // let page3 = false;
  // let page4 = false;

  const [iplData1, getData1] = useState();
  const [iplData2, getData2] = useState();
  const [iplData3, getData3] = useState();
  const [iplData4, getData4] = useState();
  const [iplData5, getData5] = useState();

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
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/task_3/?format=json")
      .then((response) => {
        getData3(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/task_4/?format=json")
      .then((response) => {
        getData4(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/task_5/?format=json")
      .then((response) => {
        getData5(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // if (iplData3 != null && iplData4 != null && iplData5 != null) {
  //   console.log("3", iplData3);
  //   console.log("4", iplData4);
  //   console.log("5", iplData5);
  // }
  // console.log(iplData);
  //   return <App iplData={iplData} />;
  // console.log(iplData4);
  if (iplData1 != null && iplData2 != null && page1 == true) {
    //page 1
    // console.log(iplData2);
    return (
      <div className="graphs-page">
        <h2>Number of matches played per year of all the years of IPL</h2>
        <Graph1 props={iplData1} />
        <h2>Matches won of all teams over all the years of IPL</h2>
        <Graph2 props={iplData2} />
      </div>
    );
  }
  if (iplData3 != null && page2 == true) {
    return (
      <div className="graphs-page">
        <h2>2008</h2>
        <Graph32008 props={iplData3} />
        <h2>2009</h2>
        <Graph32009 props={iplData3} />
        <h2>2010</h2>
        <Graph32010 props={iplData3} />
        <h2>2011</h2>
        <Graph32011 props={iplData3} />
        <h2>2012</h2>
        <Graph32012 props={iplData3} />
        <h2>2013</h2>
        <Graph32013 props={iplData3} />
        <h2>2014</h2>
        <Graph32014 props={iplData3} />
        <h2>2015</h2>
        <Graph32015 props={iplData3} />
        <h2>2016</h2>
        <Graph32016 props={iplData3} />
        <h2>2017</h2>
        <Graph32017 props={iplData3} />
      </div>
    );
    console.log("3", iplData3);
  }
  if (iplData5 != null && page4 == true) {
    return (
      <div className="graphs-page">
        <h2 style={{}}>2008</h2>
        <div className="flex">
          <div>
            <Graph52008win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52008played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2009</h2>
        <div className="flex">
          <div>
            <Graph52009win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52009played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2010</h2>
        <div className="flex">
          <div>
            <Graph52010win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52010played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2011</h2>
        <div className="flex">
          <div>
            <Graph52011win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52011played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2012</h2>
        <div className="flex">
          <div>
            <Graph52012win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52012played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2013</h2>
        <div className="flex">
          <div>
            <Graph52013win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52013played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2014</h2>
        <div className="flex">
          <div>
            <Graph52014win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52014played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2015</h2>
        <div className="flex">
          <div>
            <Graph52015win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52015played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2016</h2>
        <div className="flex">
          <div>
            <Graph52016win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52016played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
        <h2 style={{}}>2017</h2>
        <div className="flex">
          <div>
            <Graph52017win props={iplData5} />
            <h5>Win</h5>
          </div>
          <div>
            <h2>VS</h2>
          </div>
          <div>
            <Graph52017played props={iplData5} />
            <h5>Played</h5>
          </div>
        </div>
      </div>
    );
  }
  if (iplData4 != null && page3 == true) {
    return (
      <div className="graphs-page">
        <Graphpg3 props={iplData4} />
        <h2>Top Economical bowler</h2>
      </div>
    );
  } else return <h1>Loading</h1>;
};
export default FetchApi;

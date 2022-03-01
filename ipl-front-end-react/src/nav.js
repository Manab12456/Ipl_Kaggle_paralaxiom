import FetchApi from "./FetchApi";
import { useState } from "react";
export default function Nav() {
  //   let pg1 = true;
  //   let pg2 = false;
  //   let pg3 = false;
  //   let pg4 = false; // default value
  let [pg1, getPg1] = useState(true);
  let [pg2, getPg2] = useState(false);
  let [pg3, getPg3] = useState(false);
  let [pg4, getPg4] = useState(false);

  function viewPage1() {
    getPg1(true);
    getPg2(false);
    getPg3(false);
    getPg4(false);
  }

  function viewPage2() {
    getPg1(false);
    getPg2(true);
    getPg3(false);
    getPg4(false);
  }

  function viewPage3() {
    getPg1(false);
    getPg2(false);
    getPg3(true);
    getPg4(false);
  }

  function viewPage4() {
    getPg1(false);
    getPg2(false);
    getPg3(false);
    getPg4(true);
    console.log("page4");
  }

  console.log(pg4);

  return (
    <div>
      <div className="graphs-page">
        <button id="pg1" onClick={viewPage1}>
          Home
        </button>
        <button id="pg2" onClick={viewPage2}>
          Page 2
        </button>
        <button id="pg3" onClick={viewPage3}>
          Page 3
        </button>
        <button id="pg4" onClick={viewPage4}>
          Page 4
        </button>
      </div>
      <FetchApi pg1={pg1} pg2={pg2} pg3={pg3} pg4={pg4} />
    </div>
  );
}

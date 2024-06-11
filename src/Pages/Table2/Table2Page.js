import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Btn from "../../Components/Button/Button";

const Table2Page = () => {
  const levels = [
    {level: "level one", color: "pruple", width:"364px"},
    {level: "level two", color: "blue", width:"260px"},
    {level: "level three", color: "green", width:"220px"},
    {level: "level four", color: "yellow", width:"200px"},
  ];

  const days = [
    {name: "Saterday", lec: ["Math", "Data", "ML", ""]},
    {name: "Sunday", lec: ["Math", "Data", "ML", ""]},
    {name: "Monday", lec: ["Math", "Data", "ML", ""]},
    {name: "TuesDay", lec: ["Math", "Data", "ML", ""]},
    {name: "Wednesday", lec: ["Math", "Data", "ML", ""]},
    {name: "Thursday", lec: ["Math", "Data", "ML", ""]},
  ];


  const NumBox = () => {
    return (
      <div className="d-flex">
        <div className="box-1">1</div>
        <div className="box-1">2</div>
        <div className="box-1">3</div>
        <div className="box-1">4</div>
        <div className="box-1">5</div>
        <div className="box-1">6</div>
        <div className="box-1">7</div>
      </div>
    );
  };

  const Classes = () => {
    return (
      <div className="d-flex">
        <div className="box-1">English</div>
        <div className="box-1">Biology</div>
        <div className="box-1">Math</div>
        <div className="box-1">English</div>
        <div className="box-1">Biology</div>
        <div className="box-1">Math</div>
        <div className="box-1">Arts</div>
      </div>
    );
  };

  return (
    <div className="table-page2 d-flex">
      <div className="side-bar">
          <div className="d-flex gap-4">
            <p style={{borderRadius:"50%", border:"1px solid white",width:"25px", height:"25px",textAlign:"center",color:"white"}}>1</p>
            <p style={{color:"white"}}>Add Classes</p>
          </div>
          <div className="d-flex gap-4">
            <p style={{borderRadius:"50%", border:"1px solid white",width:"25px", height:"25px",textAlign:"center",color:"white"}}>2</p>
            <p style={{color:"white"}}>Add Other Classes</p>
          </div>
          <div className="d-flex gap-4">
            <p style={{borderRadius:"50%", border:"1px solid white",width:"25px", height:"25px",textAlign:"center",color:"white"}}>3</p>
            <p style={{color:"white"}}>Add Subjects</p>
          </div>
          <div className="d-flex gap-4">
            <p style={{borderRadius:"50%", border:"1px solid white",width:"25px", height:"25px",textAlign:"center",color:"white"}}>4</p>
            <p style={{color:"white"}}>Add Teachers</p>
          </div>
          <div className="d-flex gap-4">
            <p style={{borderRadius:"50%", border:"1px solid white",width:"25px", height:"25px",textAlign:"center",color:"white"}}>5</p>
            <p style={{color:"white"}}>Setup Colors</p>
          </div>
      </div>
      <div>
      <table className="table-2">
        <thead className="text-center w-100">
          <th></th>
          <th>Monday</th>
          <th>TuesDay</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td>
            <NumBox/>
            </td>
            <td>
            <NumBox/>
            </td>
            <td>
            <NumBox/>
            </td>
            <td>
            <NumBox/>
            </td>
            <td>
            <NumBox/>
            </td>
          </tr>
          <tr>
            <td>Grade1</td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
          </tr>

          <tr>
            <td>Grade1</td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
          </tr>

         

          <tr>
            <td>Grade1</td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
          </tr>

          <tr>
            <td>Teacher1</td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
          </tr>

          
     

          
          <tr>
            <td>Teacher1</td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
            <td>
              <Classes/>
            </td>
          </tr>


        </tbody>
      </table>
        </div>
    </div>
  );
};

export default Table2Page;

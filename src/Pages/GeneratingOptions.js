import "./Home.css";
import { Form, Button } from "react-bootstrap";
import img from "../image/Untitled_design_1.png";
import { Link } from "react-router-dom";
export default function GeneratingOptions() {
  return (
    <div className="HomePage">
      Generating Otions
      <div className="buttons">
              <Link className="btn" to="/GenerateTableLec">
                Lectures Schedules
              </Link>

              <Link className="btn" to="/GenerateTableSec">
                Sections Schedules 
              </Link>
               </div>
               </div>
  );
}

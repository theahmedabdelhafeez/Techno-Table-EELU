import "./Home.css";
import { Form, Button } from "react-bootstrap";
import img from "../image/Untitled_design_1.png";
import { Link } from "react-router-dom";
export default function GeneratingOptions() {
  return (
    <div className="HomePage">
              <Button variant="primary">
                Lectures Schedules
              </Button>

              <Button variant="primary">
                Sections Schedules
              </Button>
               </div>
  );
}

import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import LoginStudent from "./Pages/LoginStudent";
import StudentsTable from "./Pages/StudentsTable";
import StaffTable from "./Pages/StaffTable";
import LoginAdmin from "./Pages/LoginAdmin";
import LoginStaff from "./Pages/LoginStaff";
import Schedules from "./Pages/Schedules";
import LecSchedules from "./Pages/LecSchedules";
import SecSchedules from "./Pages/SecSchedules";
import TablePage from "./Pages/Table/TablePage";
import GenerateTableLec from "./Pages/GenerateTableLec";
import GeneratingOptions from "./Pages/GeneratingOptions";
import GenerateTableSec from "./Pages/GenerateTableSec";
import Table2Page from "./Pages/Table2/Table2Page";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginstudent" element={<LoginStudent />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/loginstaff" element={<LoginStaff />} />
          <Route path="/Schedules" element={<Schedules />} />
          <Route path="/lecschedules" element={<LecSchedules />} />
          <Route path="/secschedules" element={<SecSchedules />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/studenttable" element={<StudentsTable />} />
          <Route path="/stafftable" element={<StaffTable />} />
          <Route path="/GenerateTableLec" element={<GenerateTableLec />} />
          <Route path="/GeneratingOptions" element={<GeneratingOptions />} />
          <Route path="/GenerateTableSec" element={<GenerateTableSec />} />
          <Route path="/table2" element={<Table2Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

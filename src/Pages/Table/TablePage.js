import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Btn from "../../Components/Button/Button";

const TablePage = () => {
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

  return (
    <div className="table-page">
      <Container fluid>
        <Row>
          <Col xl={2} className="d-flex flex-column gap-5 justify-content-center">
            {levels.map((level, i) => {
              return (
                <Btn
                  key={i}
                  text={level.level}
                  styles={{
                    backgroundColor: level.color,
                    maxWidth: level.width,
                    height: "75px",
                    borderRadius: "475.33px",
                  }}
                />
              );
            })}
          </Col>
          <Col xl={10}>
            {days.map((day, idx) => {
              return (
                <Row>
                  <Col className="table-cell">{day.name}</Col>

                  {day.lec.map((lec, idx) => {
                    return <Col className="table-cell">{lec}</Col>;
                  })}
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablePage;

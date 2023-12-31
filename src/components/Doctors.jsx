import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddModal from "./AddModal";

const Doctors = ({ appointments, doctors, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleClick = (drName) => {
    setShow(true);
    setSelectedDrName(drName);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Movies list
      </h3>
      <hr />

      <Row className="justify-content-center">
        {doctors.map((dr) => {
          return (
            <Col className="mt-3" key={dr.id} xs={6} sm={4} md={3}>
              <img
                className="img-thumbnail doctor-img"
                src={dr.img}
                alt={dr.name}
                onClick={() => {
                  handleClick(dr.name);
                }}
              />
              <h5 className="mt-2">{dr.name}</h5>
              <h6>{dr.dep}</h6>
            </Col>
          );
        })}
      </Row>

      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        drName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;

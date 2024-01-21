import SavedDataContext from "../context/SavedDataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./View.css";

export const View = () => {
  const redButton = {
    backgroundColor: "#Ac3b61",
    borderColor: "#Ac3b61",
    color: "#eee2dc",
  };
  const blueButton = {
    backgroundColor: "#5a5cd2",
    borderColor: "#31339e",
    color: "#eee2dc",
  };

  const handleDelete = (event) => {
    const tmpData = savedData.slice();
    tmpData.splice(Number(event.currentTarget.id), 1);
    setSavedData([...tmpData]);
  };

  const navigate = useNavigate();
  const { savedData, setSavedData } = useContext(SavedDataContext);

  return (
    <>
      <Row className="  mx-auto my-1">
        {savedData?.map((data, index) => (
          <Col key={index}>
            <Card className=" mb-2" style={{ width: "210px", margin: "auto" }}>
              <Card.Body className=" pokeCard ">
                <Card.Title
                  style={{
                    color: "#123C69",
                    fontSize: "18px",
                    height: "20px",
                  }}
                >
                  {data.pokeName}
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={data.pokeUrl}
                  className="img-fluid card-image"
                  style={{ width: "130px", height: "auto" }}
                />

                <Card.Title
                  className="card-title"
                  style={{ fontSize: "16px", color: "#123C69" }}
                >
                  {data.title}
                </Card.Title>
                <Card.Text
                  className="card-description"
                  style={{ fontSize: "14px", color: "#123C69" }}
                >
                  {data.description}
                </Card.Text>
                <Card.Text> </Card.Text>
                <Row>
                  <Col>
                    <Button
                      style={blueButton}
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          behavior: "instant",
                        });
                        navigate(`/detail/${index}`);
                      }}
                    >
                      View
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      style={redButton}
                      id={index}
                      onClick={(event) => {
                        handleDelete(event);
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

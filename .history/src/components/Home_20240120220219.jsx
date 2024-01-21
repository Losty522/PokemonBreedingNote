import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const greenButton = {
    backgroundColor: "#57a87b",
    borderColor: "#2a5a40",
    color: "#eee2dc",
  };

  const navigate = useNavigate();
  return (
    <>
      <Row className="align-items-center justify-content-center text-center mx-auto my-3">
        <Col xs="auto" className="mb-3">
          <h1 className="title">Pokemon Breeding Note</h1>
        </Col>

        <p style={{fontSize:30px}}>This website can make Pokemon Breeding Note.</p>

        <Col xs="auto" className="mb-3 mt-2">
          <Button
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "instant",
              });
              navigate("/create");
            }}
            style={greenButton}
          >
            Create a new note
          </Button>
        </Col>

        <Outlet />
      </Row>
    </>
  );
};

export default Home;

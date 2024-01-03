import { useContext } from "react";
import { useParams } from "react-router-dom";
import SavedDataContext from "../context/SavedDataContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Title from "./form/Title";
import Natures from "./form/Natures";
import Abilities from "./form/Abilities";
import Moves from "./form/Moves";
import HeldItem from "./form/HeldItem";
import TeraType from "./form/TeraType";
import EffortV from "./form/EffortV";
import Description from "./form/Description";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const PokeEdit = () => {
  const params = useParams();
  const { savedData, setSavedData } = useContext(SavedDataContext);
  const [currentEditData, setCurrentEditData] = useState(savedData[params.Id]);
  const navigate = useNavigate();

  const checkValid = () => {
    if (currentEditData.title === "") {
      alert("title is empty");

      return false;
    }
    if (currentEditData.efforts[6] > 508) {
      alert("efforts must be less than 509");
      return false;
    }

    return true;
  };

  // useEffect(() => {
  //   console.log(savedData[params.Id]);
  //   console.log(currentEditData);
  // }, [currentEditData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkValid()) {
      const tmp = [...savedData];
      tmp.splice(params.Id, 1, currentEditData);
      setSavedData(tmp);
      window.scroll({
        top: 0,
        behavior: "instant",
      });
      navigate(-1);
    }
  };

  return (
    <>
      <Row className="align-items-center justify-content-center text-center mx-auto my-5">
        <Col xs="auto">
          <h3>Edit details</h3>
        </Col>
        <Col xs="auto">
          <Button
            variant="danger"
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "instant",
              });
              navigate(-1);
            }}
          >
            Cancel
          </Button>
        </Col>
      </Row>

      <Form
        onSubmit={handleSubmit}
        className="align-items-center justify-content-center text-center mx-auto my-5"
        style={{ width: "80%", maxWidth: "800px", height: "80%" }}
      >
        <Title dataObj={currentEditData} updateDataObj={setCurrentEditData} />

        <Natures dataObj={currentEditData} updateDataObj={setCurrentEditData} />

        <Abilities
          dataObj={currentEditData}
          updateDataObj={setCurrentEditData}
        />

        <Moves dataObj={currentEditData} updateDataObj={setCurrentEditData} />

        <HeldItem
          dataObj={currentEditData}
          updateDataObj={setCurrentEditData}
        />

        <TeraType
          dataObj={currentEditData}
          updateDataObj={setCurrentEditData}
        />

        <EffortV dataObj={currentEditData} updateDataObj={setCurrentEditData} />

        <Description
          dataObj={currentEditData}
          updateDataObj={setCurrentEditData}
        />

        <Button variant="primary" type="submit">
          Complete
        </Button>
      </Form>
    </>
  );
};

export default PokeEdit;

import "./PokeDetail.css";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import SavedDataContext from "../context/SavedDataContext";
import { Fragment, useContext } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
const PokeDetail = () => {
  const blueButton = {
    backgroundColor: "#5a5cd2",
    borderColor: "#31339e",
    color: "#eee2dc",
  };
  const navigate = useNavigate();
  const params = useParams();
  const { savedData } = useContext(SavedDataContext);

  // useEffect(() => {
  //   console.log(savedData);
  // }, [savedData]);
  return (
    <>
      <div className="align-items-center justify-content-center text-center mx-auto my-1">
        <Button
          style={{ marginRight: "10px" }}
          variant="secondary"
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "instant",
            });
            navigate("/");
          }}
        >
          Back to home
        </Button>
        <Button
          style={blueButton}
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "instant",
            });
            navigate(`/edit/${params.Id}`);
          }}
        >
          Edit
        </Button>

        <div className="detail">
          <div>
            <h1>{savedData[params.Id]?.title}</h1>
            <h5>{savedData[params.Id]?.pokeName}</h5>
            <div className="type">
              {savedData[params.Id]?.detailsObj?.types?.map((data, index) => (
                <div key={index} className={data.type.name}>
                  {data.type.name}
                </div>
              ))}
            </div>

            <img className="pokeImg" src={savedData[params.Id].pokeUrl} />

            <div className="baseStats">
              <h3>Base stats</h3>
              {savedData[params.Id]?.detailsObj?.stats?.map((data, index) => {
                const stutsArray = [
                  "HP",
                  "Attack",
                  "Defense",
                  "Special Attack",
                  "Special Defense",
                  "Speed",
                ];
                return (
                  <Fragment key={index}>
                    <h6>{stutsArray[index]}</h6>
                    <ProgressBar
                      key={index}
                      now={data.base_stat}
                      min={0}
                      max={255}
                      label={data.base_stat}
                    />
                  </Fragment>
                );
              })}
            </div>

            <div className="mt-2 mb-2 ">
              <span>Nature:</span> {savedData[params.Id].nature}
            </div>
            <div className="mt-2 mb-2">
              <span>Ability:</span> {savedData[params.Id].abilities}
            </div>
            {savedData[params.Id].moves.map((move, index) => (
              <div className="mt-2 mb-2" key={index}>
                <span>Move {index + 1}: </span> {move}
              </div>
            ))}

            <div className="mt-2 mb-2">
              <span>HeldItem:</span> {savedData[params.Id].heldItem}
            </div>
            <div className="mt-2 mb-2">
              <span>Terastallize type:</span>
              <div className="type">
                <span className={savedData[params.Id].teraType.toLowerCase()}>
                  {savedData[params.Id].teraType}
                </span>
              </div>
            </div>
            <div className="baseStats">
              <h3>Effort values</h3>
              {savedData[params.Id]?.efforts?.map((data, index) => {
                const stutsArray = [
                  "HP",
                  "Attack",
                  "Defense",
                  "Special Attack",
                  "Special Defense",
                  "Speed",
                  "Total",
                ];
                return (
                  <Fragment key={index}>
                    <h6>{stutsArray[index]}</h6>
                    <ProgressBar
                      key={index}
                      now={data}
                      min={0}
                      max={252}
                      label={data}
                    />
                  </Fragment>
                );
              })}
            </div>
            <h5 className="mt-2 mb-2">Description:</h5>
            <p>{savedData[params.Id].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDetail;

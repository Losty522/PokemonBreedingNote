import { Fragment, useContext, useEffect, useState } from "react";
import SavedDataContext from "../context/SavedDataContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./create.css";
import { useNavigate } from "react-router-dom";
import Title from "./form/Title";
import Natures from "./form/Natures";
import Abilities from "./form/Abilities";
import Moves from "./form/Moves";
import HeldItem from "./form/HeldItem";
import TeraType from "./form/TeraType";
import EffortV from "./form/EffortV";
import Description from "./form/Description";

const Create = () => {
  // You can add more types to the array as needed.
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

  const navigate = useNavigate();
  const { savedData, setSavedData } = useContext(SavedDataContext);
  const [pokeData, setPokeData] = useState([]);
  // [isValid, setIsValid] = useState(false);

  const checkValid = () => {
    if (currentObj.title === "") {
      alert("title is empty");
      //setIsValid(false);
      return false;
    }
    if (currentObj.pokeName == "") {
      //setIsValid(false);
      alert("must select a pokemon");
      return false;
    }
    if (currentObj.efforts[6] > 508) {
      // setIsValid(false);
      alert("efforts must be less than 509");
      return false;
    }

    // setIsValid(true);
    return true;
  };

  const [currentObj, setCurrentObj] = useState({
    id: savedData.length == 0 ? 0 : savedData[savedData.length - 1].id + 1,
    title: "",
    description: "",
    pokeName: "",
    pokeId: "",
    pokeUrl: "",
    nature: "any",
    abilities: "any",
    moves: ["any", "any", "any", "any"],
    heldItem: "Nothing",
    teraType: "any",
    efforts: [0, 0, 0, 0, 0, 0, 0],
    detailsObj: [],
  });

  const pokemonPic =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //+ ID.png

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkValid()) {
      setSavedData([...savedData, currentObj]);

      window.scroll({
        top: 0,
        behavior: "instant",
      });
      navigate("/");
    }
  };

  const handleClickPokemon = (event) => {
    const name = event.currentTarget.children[0].innerText;
    const id = event.currentTarget.id;
    const pokeUrl = `${pokemonPic}${event.currentTarget.id}.png`;

    setCurrentObj({
      ...currentObj,
      pokeName: name,
      pokeId: id,
      pokeUrl: pokeUrl,
    });

    //get the selected pokemon detail data.
    const fetchSelectedPoke = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${event.currentTarget.id}`;
      const res = await fetch(url);
      const data = await res.json();

      setCurrentObj((prevObj) => {
        return {
          ...prevObj,
          detailsObj: data,
        };
      });
    };
    fetchSelectedPoke();
  };

  useEffect(() => {
    //const API_KEY = import.meta.env.VITE_POKE_API_KEY;
    const fetchPoke = async () => {
      const pokeDex = "https://pokeapi.co/api/v2/pokedex/31/";
      const res = await fetch(pokeDex);
      const data = await res.json();
      setPokeData(data.pokemon_entries);
      //console.log(data);
    };
    fetchPoke();
  }, []);

  // useEffect(() => {
  //   console.log(currentObj);
  // }, [currentObj]);

  return (
    <>
      <Row className="align-items-center justify-content-center text-center mx-auto my-5">
        <Col xs="auto">
          <h3>Create new data</h3>
        </Col>
        <Col xs="auto">
          <Button
            style={redButton}
            onClick={() => {
              window.scroll({
                top: 0,
                behavior: "instant",
              });
              navigate("/");
            }}
          >
            Cancel
          </Button>
        </Col>
      </Row>

      <Form
        className="align-items-center justify-content-center text-center mx-auto my-5"
        style={{
          width: "80%",
          maxWidth: "800px",
          height: "80%",
        }}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Title dataObj={currentObj} updateDataObj={setCurrentObj} />

        <Form.Group className="mb-3" controlId="formPokemon">
          <Form.Label>Pokemon</Form.Label>
          <Container className="window">
            <Row>
              {pokeData.map((data, index) => {
                return (
                  <Fragment key={index}>
                    <Col
                      id={`${data?.pokemon_species?.url
                        .replace(
                          "https://pokeapi.co/api/v2/pokemon-species/",
                          ""
                        )
                        .replace("/", "")}`}
                      xs={4}
                      sm={3}
                      md={2}
                      lg={2}
                      onClick={(event) => {
                        handleClickPokemon(event);
                      }}
                      className={
                        currentObj.pokeId ===
                        data?.pokemon_species?.url
                          .replace(
                            "https://pokeapi.co/api/v2/pokemon-species/",
                            ""
                          )
                          .replace("/", "")
                          ? "selected-pokemon"
                          : ""
                      }
                    >
                      <p className="pokeName">
                        {data?.pokemon_species?.name} <br />
                        <img
                          className="pokeImage"
                          src={`${pokemonPic}${data?.pokemon_species?.url
                            .replace(
                              "https://pokeapi.co/api/v2/pokemon-species/",
                              ""
                            )
                            .replace("/", "")}.png`}
                          alt="pokemonPicture"
                        />
                      </p>
                    </Col>
                  </Fragment>
                );
              })}
            </Row>
          </Container>
        </Form.Group>

        <Natures dataObj={currentObj} updateDataObj={setCurrentObj} />

        <Abilities dataObj={currentObj} updateDataObj={setCurrentObj} />

        <Moves dataObj={currentObj} updateDataObj={setCurrentObj} />

        <HeldItem dataObj={currentObj} updateDataObj={setCurrentObj} />

        <TeraType dataObj={currentObj} updateDataObj={setCurrentObj} />

        <EffortV dataObj={currentObj} updateDataObj={setCurrentObj} />

        <Description dataObj={currentObj} updateDataObj={setCurrentObj} />

        <Button style={blueButton} type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};

export default Create;

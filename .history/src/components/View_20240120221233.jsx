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

  useEffect(() => {
    console.log(savedData);
    const sampleData = [{}];
  }, []);

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

[
  {
    id: 0,
    title: "ddd",
    description: "test",
    pokeName: "sprigatito\n",
    pokeId: "906",
    pokeUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    nature: "any",
    abilities: "overgrow",
    moves: ["scratch", "take-down", "tail-whip", "bite"],
    heldItem: "Adamant Orb",
    teraType: "Normal",
    efforts: ["252", "252", "4", 0, 0, 0, 508],
    detailsObj: {
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "protean",
            url: "https://pokeapi.co/api/v2/ability/168/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: null,
      forms: [
        {
          name: "sprigatito",
          url: "https://pokeapi.co/api/v2/pokemon-form/906/",
        },
      ],
      game_indices: [],
      height: 4,
      held_items: [],
      id: 906,
      is_default: true,
      location_area_encounters:
        "https://pokeapi.co/api/v2/pokemon/906/encounters",
      moves: [
        {
          move: {
            name: "scratch",
            url: "https://pokeapi.co/api/v2/move/10/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "take-down",
            url: "https://pokeapi.co/api/v2/move/36/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "tail-whip",
            url: "https://pokeapi.co/api/v2/move/39/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "bite",
            url: "https://pokeapi.co/api/v2/move/44/",
          },
          version_group_details: [
            {
              level_learned_at: 7,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "leech-seed",
            url: "https://pokeapi.co/api/v2/move/73/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "egg",
                url: "https://pokeapi.co/api/v2/move-learn-method/2/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "solar-beam",
            url: "https://pokeapi.co/api/v2/move/76/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "agility",
            url: "https://pokeapi.co/api/v2/move/97/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "quick-attack",
            url: "https://pokeapi.co/api/v2/move/98/",
          },
          version_group_details: [
            {
              level_learned_at: 15,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "swift",
            url: "https://pokeapi.co/api/v2/move/129/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "rest",
            url: "https://pokeapi.co/api/v2/move/156/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "slash",
            url: "https://pokeapi.co/api/v2/move/163/",
          },
          version_group_details: [
            {
              level_learned_at: 28,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "substitute",
            url: "https://pokeapi.co/api/v2/move/164/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "protect",
            url: "https://pokeapi.co/api/v2/move/182/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "mud-slap",
            url: "https://pokeapi.co/api/v2/move/189/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "giga-drain",
            url: "https://pokeapi.co/api/v2/move/202/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "endure",
            url: "https://pokeapi.co/api/v2/move/203/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "charm",
            url: "https://pokeapi.co/api/v2/move/204/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "sleep-talk",
            url: "https://pokeapi.co/api/v2/move/214/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "facade",
            url: "https://pokeapi.co/api/v2/move/263/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "taunt",
            url: "https://pokeapi.co/api/v2/move/269/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "helping-hand",
            url: "https://pokeapi.co/api/v2/move/270/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "fake-tears",
            url: "https://pokeapi.co/api/v2/move/313/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "bullet-seed",
            url: "https://pokeapi.co/api/v2/move/331/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "magical-leaf",
            url: "https://pokeapi.co/api/v2/move/345/",
          },
          version_group_details: [
            {
              level_learned_at: 13,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "u-turn",
            url: "https://pokeapi.co/api/v2/move/369/",
          },
          version_group_details: [
            {
              level_learned_at: 21,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "copycat",
            url: "https://pokeapi.co/api/v2/move/383/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "egg",
                url: "https://pokeapi.co/api/v2/move-learn-method/2/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "worry-seed",
            url: "https://pokeapi.co/api/v2/move/388/",
          },
          version_group_details: [
            {
              level_learned_at: 25,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "sucker-punch",
            url: "https://pokeapi.co/api/v2/move/389/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "egg",
                url: "https://pokeapi.co/api/v2/move-learn-method/2/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "seed-bomb",
            url: "https://pokeapi.co/api/v2/move/402/",
          },
          version_group_details: [
            {
              level_learned_at: 17,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "energy-ball",
            url: "https://pokeapi.co/api/v2/move/412/",
          },
          version_group_details: [
            {
              level_learned_at: 32,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "nasty-plot",
            url: "https://pokeapi.co/api/v2/move/417/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "shadow-claw",
            url: "https://pokeapi.co/api/v2/move/421/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "leaf-storm",
            url: "https://pokeapi.co/api/v2/move/437/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "grass-knot",
            url: "https://pokeapi.co/api/v2/move/447/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "hone-claws",
            url: "https://pokeapi.co/api/v2/move/468/",
          },
          version_group_details: [
            {
              level_learned_at: 10,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "ally-switch",
            url: "https://pokeapi.co/api/v2/move/502/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "egg",
                url: "https://pokeapi.co/api/v2/move-learn-method/2/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "acrobatics",
            url: "https://pokeapi.co/api/v2/move/512/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "grass-pledge",
            url: "https://pokeapi.co/api/v2/move/520/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "petal-blizzard",
            url: "https://pokeapi.co/api/v2/move/572/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "egg",
                url: "https://pokeapi.co/api/v2/move-learn-method/2/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "disarming-voice",
            url: "https://pokeapi.co/api/v2/move/574/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "grassy-terrain",
            url: "https://pokeapi.co/api/v2/move/580/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "play-rough",
            url: "https://pokeapi.co/api/v2/move/583/",
          },
          version_group_details: [
            {
              level_learned_at: 36,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "leafage",
            url: "https://pokeapi.co/api/v2/move/670/",
          },
          version_group_details: [
            {
              level_learned_at: 1,
              move_learn_method: {
                name: "level-up",
                url: "https://pokeapi.co/api/v2/move-learn-method/1/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "grassy-glide",
            url: "https://pokeapi.co/api/v2/move/803/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "tera-blast",
            url: "https://pokeapi.co/api/v2/move/851/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
        {
          move: {
            name: "trailblaze",
            url: "https://pokeapi.co/api/v2/move/885/",
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: "machine",
                url: "https://pokeapi.co/api/v2/move-learn-method/4/",
              },
              version_group: {
                name: "scarlet-violet",
                url: "https://pokeapi.co/api/v2/version-group/25/",
              },
            },
          ],
        },
      ],
      name: "sprigatito",
      order: 906,
      past_abilities: [],
      past_types: [],
      species: {
        name: "sprigatito",
        url: "https://pokeapi.co/api/v2/pokemon-species/906/",
      },
      sprites: {
        back_default: null,
        back_female: null,
        back_shiny: null,
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/906.png",
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default: null,
            front_female: null,
          },
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/906.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/906.png",
            front_shiny_female: null,
          },
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/906.png",
          },
          showdown: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/906.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/906.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/906.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/906.gif",
            front_shiny_female: null,
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default: null,
              back_gray: null,
              back_transparent: null,
              front_default: null,
              front_gray: null,
              front_transparent: null,
            },
            yellow: {
              back_default: null,
              back_gray: null,
              back_transparent: null,
              front_default: null,
              front_gray: null,
              front_transparent: null,
            },
          },
          "generation-ii": {
            crystal: {
              back_default: null,
              back_shiny: null,
              back_shiny_transparent: null,
              back_transparent: null,
              front_default: null,
              front_shiny: null,
              front_shiny_transparent: null,
              front_transparent: null,
            },
            gold: {
              back_default: null,
              back_shiny: null,
              front_default: null,
              front_shiny: null,
              front_transparent: null,
            },
            silver: {
              back_default: null,
              back_shiny: null,
              front_default: null,
              front_shiny: null,
              front_transparent: null,
            },
          },
          "generation-iii": {
            emerald: {
              front_default: null,
              front_shiny: null,
            },
            "firered-leafgreen": {
              back_default: null,
              back_shiny: null,
              front_default: null,
              front_shiny: null,
            },
            "ruby-sapphire": {
              back_default: null,
              back_shiny: null,
              front_default: null,
              front_shiny: null,
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
            platinum: {
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default: null,
                back_female: null,
                back_shiny: null,
                back_shiny_female: null,
                front_default: null,
                front_female: null,
                front_shiny: null,
                front_shiny_female: null,
              },
              back_default: null,
              back_female: null,
              back_shiny: null,
              back_shiny_female: null,
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
            "x-y": {
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default: null,
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default: null,
              front_female: null,
              front_shiny: null,
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default: null,
              front_female: null,
            },
          },
        },
      },
      stats: [
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 61,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 54,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
      weight: 41,
    },
  },
];

import Form from "react-bootstrap/Form";
const TeraType = (props) => {
  const pokemonTypes = [
    "any",
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Steel",
    "Fairy",
  ];
  return (
    <Form.Group className="mb-3" controlId="formTerastallizeType">
      <Form.Label>Terastallize type</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) =>
          props.updateDataObj({
            ...props.dataObj,
            teraType: event.target.value,
          })
        }
      >
        {pokemonTypes.map((data, index) =>
          data === props.dataObj.teraType ? (
            <option selected key={index} value={data}>
              {data}
            </option>
          ) : (
            <option key={index} value={data}>
              {data}
            </option>
          )
        )}
      </Form.Select>
    </Form.Group>
  );
};

export default TeraType;

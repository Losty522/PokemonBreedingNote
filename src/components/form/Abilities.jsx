import Form from "react-bootstrap/Form";
const Abilities = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formAbilities">
      <Form.Label>Abilities</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) =>
          props.updateDataObj({
            ...props.dataObj,
            abilities: event.target.value,
          })
        }
      >
        <option key="-1" value="any">
          any
        </option>
        {props.dataObj?.detailsObj?.abilities?.map((obj, index) =>
          obj.ability.name === props.dataObj.abilities ? (
            <option selected key={index} value={obj.ability.name}>
              {obj.ability.name}
            </option>
          ) : (
            <option key={index} value={obj.ability.name}>
              {obj.ability.name}
            </option>
          )
        )}
      </Form.Select>
    </Form.Group>
  );
};

export default Abilities;

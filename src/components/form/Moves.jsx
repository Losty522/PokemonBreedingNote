import Form from "react-bootstrap/Form";
const Moves = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formMoves">
      <Form.Label>Moves</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.moves];
          tmpArray[0] = event.target.value;
          props.updateDataObj({ ...props.dataObj, moves: tmpArray });
        }}
      >
        <option key="-1" value="any">
          any
        </option>
        {props.dataObj?.detailsObj?.moves?.map((obj, index) =>
          obj.move.name === props.dataObj.moves[0] ? (
            <option selected key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          ) : (
            <option key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          )
        )}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.moves];
          tmpArray[1] = event.target.value;
          props.updateDataObj({ ...props.dataObj, moves: tmpArray });
        }}
      >
        <option key="-1" value="any">
          any
        </option>
        {props.dataObj?.detailsObj?.moves?.map((obj, index) =>
          obj.move.name === props.dataObj.moves[1] ? (
            <option selected key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          ) : (
            <option key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          )
        )}
      </Form.Select>

      <Form.Select
        aria-label="Default select example"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.moves];
          tmpArray[2] = event.target.value;
          props.updateDataObj({ ...props.dataObj, moves: tmpArray });
        }}
      >
        <option key="-1" value="any">
          any
        </option>
        {props.dataObj?.detailsObj?.moves?.map((obj, index) =>
          obj.move.name === props.dataObj.moves[2] ? (
            <option selected key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          ) : (
            <option key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          )
        )}
      </Form.Select>

      <Form.Select
        aria-label="Default select example"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.moves];
          tmpArray[3] = event.target.value;
          props.updateDataObj({ ...props.dataObj, moves: tmpArray });
        }}
      >
        <option key="-1" value="any">
          any
        </option>
        {props.dataObj?.detailsObj?.moves?.map((obj, index) =>
          obj.move.name === props.dataObj.moves[3] ? (
            <option selected key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          ) : (
            <option key={index} value={obj.move.name}>
              {obj.move.name}
            </option>
          )
        )}
      </Form.Select>
    </Form.Group>
  );
};

export default Moves;

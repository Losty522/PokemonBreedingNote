import Form from "react-bootstrap/Form";

const EffortV = (props) => {
  const totalEvs = (tmpArray) => {
    let result = 0;
    for (let i = 0; i < tmpArray.length - 1; i++) {
      result += Number(tmpArray[i]);
    }
    tmpArray[6] = result;
    props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
  };

  return (
    <Form.Group className="mb-3" controlId="Evs">
      <h3 style={props.dataObj.efforts[6] > 508 ? { color: "red" } : {}}>
        Total:{props.dataObj.efforts[6]}
      </h3>
      <Form.Label>
        Effort Values: HP <span>{props.dataObj.efforts[0]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[0]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[0] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
      <Form.Label>
        Effort Values: Attack <span>{props.dataObj.efforts[1]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[1]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[1] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
      <Form.Label>
        Effort Values: Defense <span>{props.dataObj.efforts[2]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[2]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[2] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
      <Form.Label>
        Effort Values: Special Attack <span>{props.dataObj.efforts[3]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[3]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[3] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
      <Form.Label>
        Effort Values: Special Defense <span>{props.dataObj.efforts[4]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[4]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[4] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
      <Form.Label>
        Effort Values: Speed <span>{props.dataObj.efforts[5]}</span>
      </Form.Label>
      <Form.Range
        type="range"
        min="0"
        max="252"
        value={props.dataObj.efforts[5]}
        step="4"
        onChange={(event) => {
          const tmpArray = [...props.dataObj.efforts];
          tmpArray[5] = event.target.value;
          props.updateDataObj({ ...props.dataObj, efforts: tmpArray });
          totalEvs(tmpArray);
        }}
      />
    </Form.Group>
  );
};

export default EffortV;

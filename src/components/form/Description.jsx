import Form from "react-bootstrap/Form";

const Description = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        value={props.dataObj.description}
        type="text"
        as="textarea"
        rows={3}
        placeholder="description"
        onChange={(event) =>
          props.updateDataObj({
            ...props.dataObj,
            description: event.target.value,
          })
        }
      />
    </Form.Group>
  );
};

export default Description;

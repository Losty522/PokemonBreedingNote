import Form from "react-bootstrap/Form";
const Title = (props) => {
  return (
    <Form.Group className="mb-3" controlId="formTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control
        value={props.dataObj.title}
        type="text"
        placeholder="Enter title"
        onChange={(event) => {
          props.updateDataObj({ ...props.dataObj, title: event.target.value });
        }}
      />
    </Form.Group>
  );
};

export default Title;

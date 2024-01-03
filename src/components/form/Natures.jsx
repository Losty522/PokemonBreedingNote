import Form from "react-bootstrap/Form";
const Natures = (props) => {
  const arrNatures = [
    "any",
    "Lonely",
    "Brave",
    "Adamant",
    "Naughty",
    "Bold",
    "Docile",
    "Relaxed",
    "Impish",
    "Lax",
    "Timid",
    "Hasty",
    "Serious",
    "Jolly",
    "Naive",
    "Modest",
    "Mild",
    "Quiet",
    "Bashful",
    "Rash",
    "Calm",
    "Gentle",
    "Sassy",
    "Careful",
    "Quirky",
  ];
  return (
    <Form.Group className="mb-3" controlId="formNatures">
      <Form.Label>Natures</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) =>
          props.updateDataObj({ ...props.dataObj, nature: event.target.value })
        }
      >
        {arrNatures.map((Natures, index) =>
          Natures === props.dataObj.nature ? (
            <option selected key={index} value={Natures}>
              {Natures}
            </option>
          ) : (
            <option key={index} value={Natures}>
              {Natures}
            </option>
          )
        )}
      </Form.Select>
    </Form.Group>
  );
};

export default Natures;

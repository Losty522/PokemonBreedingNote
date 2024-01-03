import Form from "react-bootstrap/Form";
const HeldItem = (props) => {
  const heldBattleItems = [
    "Nothing",
    "Absorb Bulb",
    "Adamant Orb",
    "Adrenaline Orb",
    "Air Balloon",
    "Assault Vest",
    "Big Root",
    "Binding Band",
    "Black Belt",
    "Black Glasses",
    "Black Sludge",
    "Blunder Policy",
    "Bright Powder",
    "Cell Battery",
    "Charcoal",
    "Choice Band",
    "Choice Scarf",
    "Choice Specs",
    "Damp Rock",
    "Dragon Fang",
    "Eject Button",
    "Eject Pack",
    "Electric Seed",
    "Eviolite",
    "Expert Belt",
    "Flame Orb",
    "Float Stone",
    "Focus Band",
    "Focus Sash",
    "Grassy Seed",
    "Grip Claw",
    "Griseous Orb",
    "Hard Stone",
    "Heat Rock",
    "Heavy-Duty Boots",
    "Icy Rock",
    "Iron Ball",
    "King's Rock",
    "Lagging Tail",
    "Leek",
    "Leftovers",
    "Life Orb",
    "Light Ball",
    "Light Clay",
    "Luminous Moss",
    "Lustrous Orb",
    "Magnet",
    "Mental Herb",
    "Metal Coat",
    "Metal Powder",
    "Metronome",
    "Miracle Seed",
    "Misty Seed",
    "Muscle Band",
    "Mystic Water",
    "Never-Melt Ice",
    "Normal Gem",
    "Pixie Plate",
    "Poison Barb",
    "Power Herb",
    "Protective Pads",
    "Psychic Seed",
    "Quick Claw",
    "Quick Powder",
    "Razor Claw",
    "Red Card",
    "Ring Target",
    "Rocky Helmet",
    "Room Service",
    "Rusted Shield",
    "Rusted Sword",
    "Safety Goggles",
    "Scope Lens",
    "Sharp Beak",
    "Shed Shell",
    "Shell Bell",
    "Silk Scarf",
    "Silver Powder",
    "Smooth Rock",
    "Snowball",
    "Soft Sand",
    "Soul Dew",
    "Spell Tag",
    "Sticky Barb",
    "Terrain Extender",
    "Throat Spray",
    "Toxic Orb",
    "Twisted Spoon",
    "Utility Umbrella",
    "Weakness Policy",
    "White Herb",
    "Wide Lens",
    "Wise Glasses",
    "Zoom Lens",
  ];

  return (
    <Form.Group className="mb-3" controlId="formHeldItem">
      <Form.Label>Held item</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(event) =>
          props.updateDataObj({
            ...props.dataObj,
            heldItem: event.target.value,
          })
        }
      >
        {heldBattleItems.map((data, index) =>
          data === props.dataObj.heldItem ? (
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

export default HeldItem;

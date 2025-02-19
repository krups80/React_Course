export default function Die(props) {
  return (
    <button
      className={`singleDice ${props.isHeld ? "held" : ""}`}
      onClick={() => props.hold(props.id)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
    >
      {props.data}
    </button>
  );
}

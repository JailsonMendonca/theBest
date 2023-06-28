import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`Eu sou`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Lionel Messi",
        ]}
      />
    </h1>
  );
};
export default AnimationText;

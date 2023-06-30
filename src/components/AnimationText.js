import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`O que é`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "The Best Of CV ?",
        ]}
      />
    </h1>
  );
};
export default AnimationText;

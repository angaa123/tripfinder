import { useState } from "react";
import ChipButton from "./ChipButton";

const MultiSelection: React.FC = () => {
  const items = ["Vehicle", "Culinary", "Best places", "Hotel"];
  const [choosen, setChoosen] = useState(items[0]);
  return (
    <>
      {items.map((item: string) => {
        return (
          <ChipButton
            key={item}
            labelName={item}
            choosen={choosen}
            setChoosen={setChoosen}
          />
        );
      })}
      {choosen === items[0] ? <div></div> : <></>}
    </>
  );
};

export default MultiSelection;

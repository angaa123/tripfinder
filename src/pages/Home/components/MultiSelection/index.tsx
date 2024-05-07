import ChipButton from "./ChipButton";

const MultiSelection: React.FC = () => {
  const items = ["Vehicle", "Culinary", "Best places", "Hotel", "Whole trip"];
  return (
    <>
      {items.map((item: string) => {
        return <ChipButton labelName={item} />;
      })}
    </>
  );
};

export default MultiSelection;

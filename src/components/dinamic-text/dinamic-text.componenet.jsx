import React from "react";
import Button from "../button/button.component";

const DinamicText = ({
  setMyState,
  filesMap,
  currentPhrase,
  setNewText,
  setTextId,
}) => {
  console.log(currentPhrase);

  return (
    <div className="file-text-container">
      <select
        className="title"
        onChange={(e) => {
          console.log(e.target.value);
          setMyState(e.target.value);
          setTextId(0);
        }}
        defaultValue="proverbs file"
      >
        {Object.keys(filesMap.filesMap).map((p, index) => (
          <option key={`type=${index}`} value={p}>
            {p.toUpperCase()}
          </option>
        ))}
      </select>

      <h1 id="currentPhrase">
        {currentPhrase
          ? currentPhrase.text
          : "You have recorded all phrases of this type. Please select another phrase type in order to continue recording."}
      </h1>
      <Button
        buttonType="inverted"
        onClick={setNewText}
        disabled={!currentPhrase}
      >
        New Text
      </Button>
    </div>
  );
};

export default DinamicText;
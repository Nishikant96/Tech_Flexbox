import { useState, useEffect } from "react";
import searchAPI from "./API/searchAPI";
import MapSuggestions from "./MapSuggestions";

const InputBox = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState(null);
  // console.log(suggestion, "suggestion");
  useEffect(() => {
    const timer = setTimeout(() => {
      searchAPI(text, setSuggestion);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  const onTextChanged = (target) => {
    setText(target.value);
  };

  const suggestionBox = () => {
    // console.log(suggestion, "rendering");
    if (suggestion === null || text === "") return null;
    if (suggestion !== null && suggestion.data.Response === "False")
      return <div>{suggestion.data.Error}</div>;
    if (suggestion.status === 200)
      return <MapSuggestions content={suggestion.data} />;
    if (suggestion.status !== 200) return <div>Some Error Occured</div>;
  };

  return (
    <>
      <div>
        <input
          value={text}
          onChange={(e) => onTextChanged(e.target)}
          type="text"
          placeHolder="Search"
        />
      </div>
      {suggestionBox()}
    </>
  );
};
export default InputBox;

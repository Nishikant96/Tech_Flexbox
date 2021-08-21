import SuggestionItem from "./SuggestionItem";

const MapSuggestions = (props) => {
  let data = props.content.Search;
  if (data.length > 5) data = props.content.Search.slice(0, 5);
  return (
    <>
      {data.map((val) => (
        <SuggestionItem data={val} />
      ))}
    </>
  );
};
export default MapSuggestions;

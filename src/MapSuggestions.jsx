import SuggestionItem from "./SuggestionItem";

const MapSuggestions = (props) => {
  let data;
  if (data.length > 5) data = props.content.Search.slice(0, 5);
  else data == props.content.Search;
  return (
    <>
      {data.map((val) => (
        <SuggestionItem data={val} />
      ))}
    </>
  );
};
export default MapSuggestions;

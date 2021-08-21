import SuggestionItem from "./SuggestionItem";

const MapSuggestions = (props) => {
  console.log(props.content.Search, "contgetn");
  const data = props.content.Search;

  return (
    <>
      {data.map((val) => (
        <SuggestionItem data={val} />
      ))}
    </>
  );
};
export default MapSuggestions;

const SuggestionItem = (props) => {
  const data = props.data;
  return (
    <div class="container">
      <div class="card u-clearfix">
        <div class="card-media">
          <img src={data.Poster} alt="" class="card-media-img" />
          <div class="card-media-preview u-flex-center"></div>
        </div>

        <div class="card-body">
          <h2 class="card-body-heading">{data.Title}</h2>
          <div class="card-body-options">
            <div class="card-body-option card-body-option-favorite"></div>
            <div class="card-body-option card-body-option-share"></div>
          </div>
          <br />
          <br />
          <br />
          <a href="#" class="card-button card-button-cta">
            {data.Year}
          </a>
        </div>
      </div>
    </div>
  );
};
export default SuggestionItem;

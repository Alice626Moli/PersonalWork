interface ISearchCityInput {
  onChangeSearch: (city: string) => void;
  onClickCity: () => void;
  searchCity: string;
}

export function SearchCityInput(props: ISearchCityInput) {
  const { searchCity, onChangeSearch, onClickCity } = props;

  return (
    <div className="mb-5 relative" style={{ width: "60%" }}>
      <input
        type="text"
        placeholder="Search for a city"
        className="input-default "
        value={searchCity}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
      <button
        type="button"
        className="button-default cursor-pointer"
        onClick={onClickCity}
      >
        Search
      </button>
    </div>
  );
}

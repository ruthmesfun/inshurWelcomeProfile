import Heading from "../shared/Heading";
import "./SearchBar.css";

const SearchBar = ({
  label,
  setSearchInput,
  searchInput,
}: SearchBarType): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = event;
    setSearchInput(value);
  };

  return (
    <div className="SearchBar">
      <label className="SearchBar__label">
        <Heading text={label} addSlash header={"h2"} color="light" />
        <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          name="movie_search"
          className="SearchBar__input"
        />
      </label>
    </div>
  );
};

type setSearchFnType = (a: string) => void;
interface SearchBarType {
  label: string;
  setSearchInput: setSearchFnType;
  searchInput: string;
}
export default SearchBar;

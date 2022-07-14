import "./searchBar.css";
import { useSearchParams } from "react-router-dom";
export default function SearchBar() {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="searchBarContainer">
      <input
        type="text"
        spellCheck="false"
        className="searchBar"
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <img className="magnifyingGlass" src="../../magnifying-glass.svg" />
    </div>
  );
}

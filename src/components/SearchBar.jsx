function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search by company, role or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />

      <button onClick={onSearch}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;
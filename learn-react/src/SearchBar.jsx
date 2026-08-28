function SearchBar({ search, setSearch, handleSearch }) {

    return (
        <div
            style={{
                padding: "25px",
                textAlign: "center",
                backgroundColor: "#ffffff"
            }}
        >

            {/* SEARCH INPUT */}

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
                style={{
                    width: "400px",
                    padding: "12px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}
            />


            {/* SEARCH BUTTON */}

            <button
                onClick={handleSearch}
                style={{
                    padding: "12px 20px",
                    marginLeft: "5px",
                    fontSize: "16px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Search
            </button>

        </div>
    );
}

export default SearchBar;

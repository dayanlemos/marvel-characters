import React from 'react';

const SearchBar = (props) => {

    const handleSearch = function (e) {
        const { onSearch } = props;
        onSearch(e.target.value);
    };

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter the character name to search" onChange={handleSearch} />
            </div>
        </div>
    )
};

export default SearchBar;
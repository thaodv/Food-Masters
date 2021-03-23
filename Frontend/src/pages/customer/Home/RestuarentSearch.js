import React from 'react'
import { useHistory } from 'react-router-dom'

const RestuarentSearch = () => {

    const history = useHistory();

    const handleSearch = () => {
        let query = document.getElementById("search_restuarant").value;

        if (query) {
            history.push(`/restaurants/${query}`);
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSearch}>
                <div class="searchbar">
                    <input className="search_input" type="text" name="search" id="search_restuarant"
                        placeholder="Search Restaurant By Name..." />
                    <button type="submit" className="search_icon btn" style={{ cursor: "pointer" }}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RestuarentSearch;

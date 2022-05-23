import React from 'react';

function FilterSelect() {
    return (
        <div>
            <p className="filterLabel">Filter by Author:</p>
            <select id="authorInputFilter" className="col leftRows firstFourRows allRows">
                <option value="all">All</option>
            </select>
        </div>
    )
}

export default FilterSelect;
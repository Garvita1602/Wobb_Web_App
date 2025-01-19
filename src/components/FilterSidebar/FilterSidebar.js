import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
    return (
        <aside className="filter-sidebar">
            <h2>Filter By</h2>
            <ul>
                <li>Followers</li>
                <li>Engagement</li>
                <li>Location</li>
                <li>Partnerships</li>
            </ul>
        </aside>
    );
};

export default FilterSidebar;

import React from 'react';

const CategoriesList = (props) => {
    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {props.categories.map((term, index) => (
                    <li key={index}>{term}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;
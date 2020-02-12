import React from 'react';
import './CardList.scss';

const CardList = ({ children }) => (
    <div>
        <div className="o-masonry">
            {children}
        </div>
    </div>
);

export default CardList;
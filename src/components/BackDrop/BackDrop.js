import React from 'react';
import './BackDrop.scss';

const BackDrop = (props) => (
    <div>
        <div onClick={props.toggleFunc} className="o-backdrop" />
    </div>
);

export default BackDrop;
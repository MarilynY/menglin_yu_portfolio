import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaLink, FaGithub, FaVideo } from 'react-icons/fa';
import './Card.scss';

import Tooltip from '@material-ui/core/Tooltip';

//Coming Soon
const Card4 = (props) => {

    const [toggler, setToggler] = useState(false);

    return(
        <div>
            <div className="o-card text-center">
                <div className="mb-2 position-relative overflow-hidden">
                    <img src={props.thumbnail} alt="Menglin" title="Menglin" />
                    <span className="o-hover-overlay d-flex align-items-center justify-content-center">
                        <div style={{color: "white"}}>
                            <h5>Coming Soon</h5>
                        </div>
                    </span>
                    <FsLightbox
                        toggler={ toggler }
                        sources={[props.full]}
                    />
                </div>
                <p className="mb-0">{props.title}</p>
                <small className="o-text-purple d-block mb-4">{props.category}</small>
            </div>
        </div>
    );
}

export default Card4;
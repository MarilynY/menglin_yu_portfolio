import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaLink, FaGithub, FaVideo } from 'react-icons/fa';
import './Card.scss';

import Tooltip from '@material-ui/core/Tooltip';

//Github
const Card3 = (props) => {

    const [toggler, setToggler] = useState(false);

    return(
        <div>
            <div className="o-card text-center">
                <div className="mb-2 position-relative overflow-hidden">
                    <img src={props.thumbnail} alt="Menglin" title="Menglin" />
                    <span className="o-hover-overlay d-flex align-items-center justify-content-center">
                        {/*Github*/}
                        <Tooltip title="Code" arrow placement="top">
                            <a href={props.githubUrl} target = "blank" className="rounded-circle bg-white m-1 o-text-purple">
                                <FaGithub />
                            </a>
                        </Tooltip>
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

export default Card3;
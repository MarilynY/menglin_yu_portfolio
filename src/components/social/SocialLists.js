import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa';

const SocialItem = ({ url, Icon }) => (
    <li className="m-1">
        {/*<Link className="text-white p-2" to={url} target="blank" ><Icon /></Link>*/}
        <a href={url} target = "blank" className="text-white p-2">
            <Icon />
        </a>
    </li>
);

class SocialList extends React.Component{

    state = {
        socials: [
            {
                //cannot add https before www!!!
                url: '//www.facebook.com/profile.php?id=100004829678244',
                Icon: FaFacebookF
            },
            {
                url: '//www.linkedin.com/in/menglin-yu/',
                Icon: FaLinkedinIn
            },
            {
                url: '//github.com/MarilynY',
                Icon: FaGithub
            },
        ]
    }

    render(){
        return(
            <ul className={`list-unstyled d-flex ${this.props.margin ? 'mb-5' : ''}`}>
                {
                    this.state.socials.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))
                }
            </ul>
        );
    }
}

export default SocialList;
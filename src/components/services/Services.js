import React from 'react';
import Title from '../title/Title';
import {
    FaMagic,
    FaCode,
    FaChartLine,
    FaMobileAlt
} from 'react-icons/fa';
import './Services.scss';

const ServiceBox = ({ Icon, title, subTitle, description }) => (
    <div className="services__div text-light m-2 d-flex flex-column align-items-center justify-content-center p-2 overflow-hidden">
        <div className="fas fa-magic o-font-lg mb-3 mt-3">
            <Icon />
        </div>
        <strong>{title}</strong>
        <small className="mb-3 services__small position-relative">{subTitle}</small>
        <p className="text-center o-font-sm">{description}</p>
    </div>
);

class Services extends React.Component{

    state = {
        services: [
            {
                Icon: FaCode,
                title: 'Web Development',
                subTitle: 'UI/UX Design & Coding',
                //The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications.
                //Strive to create visually appealing sites that feature user-friendly design and clear navigation.
                description: 'Strive to design and create visually appealing websites that feature user-friendly design and clear navigation.'
            },
            {
                Icon: FaMagic,
                title: 'Backend Development',
                subTitle: 'OOD & OOP in Java & Go',
                //A back-end web developer is responsible for server-side web application logic and integration of the work front-end web developers do.
                //Back-end developers usually write web services and APIs used by front-end developers and mobile application developers.
                description: 'Responsible for OO design, API design, server-side logic implementation and stability and efficiency monitoring.'
            },
            {
                Icon: FaMobileAlt,
                title: 'Mobile Development',
                subTitle: 'IOS and Android APP',
                //create, maintain and implement the source code to develop mobile apps and
                //programs that meet the needs and requirements of the clients using the computer programming languages.
                description: 'Design, create, maintain, and implement IOS App with React Native and Android App with Android Studio.'
            },
            {
                Icon: FaChartLine,
                title: 'Database & Cloud',
                subTitle: 'Database Design & Deployment',
                description: 'Design and implement SQL and NoSQL database and deploy application to AWS, GCE, Firebase and Heroku.'
            },
        ]
    }

    render(){
        return(
            <div className="services mb-5">
                <Title>Skill Sets</Title>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        this.state.services.map((item, index) => (
                            <ServiceBox key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Services;
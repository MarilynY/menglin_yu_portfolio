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
                subTitle: 'React JS',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.'
            },
            {
                Icon: FaMagic,
                title: 'Backend Development',
                subTitle: 'OOD in Java & Go',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.'
            },
            {
                Icon: FaChartLine,
                title: 'Database & Cloud',
                subTitle: 'database design & deployment',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.'
            },
            {
                Icon: FaMobileAlt,
                title: 'Android Development',
                subTitle: 'Mobile',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.'
            },
        ]
    }

    render(){
        return(
            <div className="services mb-5">
                <Title>Services</Title>
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
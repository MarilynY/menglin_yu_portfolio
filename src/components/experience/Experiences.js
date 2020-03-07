import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p className="text-justify o-font-sm">{description}</p>
    </div>
);

class Experiences extends React.Component{

    state = {
        experiences: [
            {id: 1, type: 'work', time: '04/2013 - 03/2015', field: 'Freelance Architecture', location: 'Washington, D.C.', description: ''},
            {id: 1, type: 'work', time: '08/2019 - Present', field: 'Freelance Full-stack Software Developer', location: 'Cleveland, OH', description: ''},
            {id: 2, type: 'education', time: '08/2019 - 06/2021', field: 'M.S. in Computer Science', location: 'Georgia Institute of Technology (online)', description: ''},
            {id: 2, type: 'education', time: '04/2019 - 08/2019', field: 'Full-stack Development Certificate', location: 'LaiOffer Boot Camp', description: ''},
            {id: 3, type: 'education', time: '08/2018 - 02/2019', field: 'Software Development Essentials Certificate', location: 'LaiOffer Boot Camp', description: ''},
            {id: 4, type: 'education', time: '08/2007 - 06/2012', field: 'B.E. in Architecture', location: 'Tianjin University, Tianjin, China', description: ''},
        ]
    }

    render(){
        return(
            <div className="row">
                {/*Experience*/}
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>

                {/*Education*/}
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaUniversity /></i>
                        <span className="font-weight-bold">Education</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'education').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;
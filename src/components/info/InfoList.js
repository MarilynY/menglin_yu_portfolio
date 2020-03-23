import React from 'react';
import Title from '../title/Title';

const InfoItem = ({ infoTitle, infoValue }) => (
    <li className="mb-2">
        <div className="row">
            <div className="col-4 font-weight-bold">{infoTitle}</div>
            <div className="col-8">{infoValue}</div>
        </div>
    </li>
);

class InfoList extends React.Component{

    state = {
        allInfo: [
            {
                infoTitle: 'Occupation',
                infoValue: "Full Stack Software Developer and CS Master\'s Candidate",
            },
            {
                infoTitle: 'Work Permit',
                infoValue: 'Unrestricted Work Authorization',
            },
            {
                infoTitle: 'Start Date',
                infoValue: 'In two weeks',
            },
        ]
    }

    render(){
        return(
            <div>
                <Title>About</Title>
                <ul className="list-unstyled p-3">
                    {
                        this.state.allInfo.map((item, index) => (
                            <InfoItem key={index} {...item} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default InfoList;
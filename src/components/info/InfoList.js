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
                infoValue: 'CS Master Student and Freelance Developer',
            },
            {
                infoTitle: 'Languages',
                infoValue: 'English, Mandarin',
            },
            {
                infoTitle: 'Nationality',
                infoValue: 'Chinese',
            },
            {
                infoTitle: 'Sponsorship',
                infoValue: 'Do Not Need',
            },
            {
                infoTitle: 'Available Data',
                infoValue: 'From now on',
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
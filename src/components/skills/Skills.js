import React from 'react';

const SkillItem = ({ title, percent }) => (
    <li className="mb-3">
        <strong className="o-font-sm font-weight-normal">{title}</strong>
        <div className="progress">
            <div className="progress-bar o-bg-purple" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </li>
);

class Skills extends React.Component{

    state = {
        skills: [
            {id: 1, title: 'REACT JS', percent: '90'},
            {id: 2, title: 'REACT NATIVE', percent: '90'},
            {id: 3, title: 'JAVA', percent: '90'},
            {id: 4, title: 'SQL', percent: '90'},
            {id: 5, title: 'MySQL', percent: '90'},
            {id: 6, title: 'GitHub', percent: '90'},
            {id: 7, title: 'HTML', percent: '75'},
            {id: 8, title: 'CSS', percent: '75'},
            {id: 9, title: 'JAVASCRIPT(ES5/ES6)', percent: '75'},
            {id: 10, title: 'UI & UX DESIGN', percent: '75'},
            {id: 11, title: 'AWS/GCP/FIREBASE/HEROKU', percent: '75'},
            {id: 12, title: 'JQUERY', percent: '50'},
            {id: 13, title: 'GO', percent: '50'},
            {id: 14, title: 'ELASTIC SEARCH', percent: '50'},
            {id: 15, title: 'Android Studio', percent: '50'},
        ]
    }

    render(){
        return(
            <div>
                <ul className="list-unstyled mb-5 o-grid">
                    {
                        this.state.skills.map(item => (
                            <SkillItem key={item.id} {...item} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Skills;
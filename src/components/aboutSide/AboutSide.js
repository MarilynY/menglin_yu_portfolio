import React from 'react';
import InfoList from '../info/InfoList';
import Services from '../services/Services';
import Testimonial from '../Testimonial/Testimonial';
import withCustomScroll from './../../hoc/withCustomScroll';

class AboutSide extends React.Component{
    render(){
        return(
            <div>
                <InfoList />
                <Services />
                <Testimonial />
            </div>
        );
    }
}

export default withCustomScroll(AboutSide);
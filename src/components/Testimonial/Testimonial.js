import React from 'react';
import Title from '../title/Title';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.scss';

const ReviewBox = ({ name, expert, review }) => (
    <div className="testimonial__div mx-2 px-3 pb-3 o-border-purple d-flex flex-column position-relative">
        <div className="fa-quote-left text-white o-font-lg text-center o-bg-purple position-absolute rounded-circle">
            <FaQuoteLeft />
        </div>
        <strong>{name}</strong>
        <small className="text-muted mb-3">{expert}</small>
        <p className="text-justify o-font-sm">{review}</p>
    </div>
);

class Testimonial extends React.Component{

    state = {
        testimonials: [
            {
                id: 1,
                name: 'Travis Marceau',
                expert: 'Lead Solution Engineer at Salesforce',
                review: 'Menglin and I worked together throughout the Software Development Process class at Georgia Tech. ' +
                    'In our time together, she consistently demonstrated an eagerness to take on challenging portions of the' +
                    'project to improve her skills in those areas. She was always on top of her work, and excited to contribute ' +
                    'to the team and anyone who needed assistance.\n' +
                    'I’ve worked in a number of different courses during my time in the Online Masters of Science in Computer ' +
                    'Science program at Georgia Tech, and I can’t think of many teammates who I enjoyed working with more. ' +
                    'She consistently positioned herself as a leader in the team, helping organize the effort of each individual involved. \n' +
                    'I wouldn’t hesitate to bring Menglin onto my team in the future!',
            },
            {
                id: 2,
                name: 'Jiang Wang',
                expert: 'Intern SDE at Amazon',
                review: 'I enjoy working with Menglin very much! She is a person who you can always rely on in the team. ' +
                    'We got to know each other when we took the Software Development Process course in the OMSCS program. ' +
                    'She always gets started to work on her assignments before everybody does and finishes her job with outstanding quality. ' +
                    'She loves to share her thought and ideas with others. I had many good discussions with her regarding our projects and ' +
                    'benefited a lot from her knowledge and experience in software development. In the following semester, I decided to ' +
                    'take the database course with her again, because she can inspire me to do a better job in my study. Overall, Menglin is a highly self-motivated and enthusiastic software developer who you want to have' +
                    ' in your team!',
            },
            {
                id: 3,
                name: 'Chunyang Shen',
                expert: 'Product Manager at Afterpay Touch',
                review: 'Menglin is one of my best partners in our startup project: My Kitchen Manager App. ' +
                    'She is the tech lead and responsible for both frontend and backend development. ' +
                    'I\'m the product manager, so we worked very closely to discuss our product\'s MVP functionalities, tech stacks, ' +
                    'roadmaps, designs, and technique issues regarding implementations. She has strong leadership and very conscientious ' +
                    'in her work. She made a perfect overall roadmap and assigned the work to teammates, then watched the conditions affecting' +
                    ' the team to make sure that teammates were making appropriate progress and our MVP managed to achieve in 5 weeks. ' +
                    'She does have strong design, coding, project management and communication skills. ' +
                    'You will never regret to have her to work with you!',
            },
            // {
            //     id: 4,
            //     name: 'Qingzhou Li',
            //     expert: 'Software Engineer at Amazon',
            //     review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
            //         'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ' +
            //         'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo ' +
            //         'duo dolores et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
            //         'sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur ' +
            //         'sadipscing elitr, sed diam nonumy eirmod tempor elitr, sed diam nonumy eirmod tempor ',
            // },

        ]
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1500,
            autoplaySpeed: 10000,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }]
        };
        return(
            <div>
                <Title>Reviews</Title>
                <div className="testimonial mb-5">
                    <Slider {...settings}>
                        {
                            this.state.testimonials.map(item => (
                                <ReviewBox key={item.id} {...item} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Testimonial;
import React from 'react';
import Avatar from '../avatar/Avatar';
import SocialList from '../social/SocialLists';
import './LeftSide.scss';

const LeftSide = () => (
    <>
        <div className="col-12 col-md-6 left-back d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
                <Avatar margin />
                <div className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p>
                    <h1 className="o-font-lg ml-2 o-text-purple">Menglin Yu</h1>
                </div>
                <p className="text-center text-white">I'm seeking a full-time software developer position while pursuing a Master’s Degree in CS online.
                    I'm well-versed in full-stack application development, cloud programming and deployment, and database management.</p>
                <SocialList margin />
                <div className="row mb-5 justify-content-center">
                    <a href="https://docs.google.com/document/d/1NZyzNOKLpB_1JeZ0cZRPFOCHGHUrTR5lHS3hqvkdKhI/edit?usp=sharing" target="blank"  className="d-block m-3 text-white o-btn text-center py-2 position-relative">DOWNLOAD CV</a>
                    <a href="https://docs.google.com/document/d/1ZiXc_VYLGMXHFpHVnCDXPYZW0BjFW11viuhjsF6wKqw/edit?usp=sharing" target="blank"  className="d-block m-3 text-white o-btn text-center py-2 position-relative">DOWNLOAD RESUME</a>
                </div>
            </div>
        </div>
    </>
);

export default LeftSide;
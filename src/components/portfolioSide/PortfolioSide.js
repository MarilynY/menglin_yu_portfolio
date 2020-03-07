import React, { Suspense } from 'react';
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import SkeletonLoader from './../skeletonLoader/SkeletonLoader';
import { portfolios } from './../../@fake-db/db/portfolios-db';
import withCustomScroll from './../../hoc/withCustomScroll';
import './PortfolioSide.scss';

//Demo + Website + Github
const Card = React.lazy(() => import('../card/Card'));
//Demo + Github
const Card1 = React.lazy(() => import('../card/Card1'));
//Demo
const Card2 = React.lazy(() => import('../card/Card2'));
//Github
const Card3 = React.lazy(() => import('../card/Card3'));
//Coming Soon
const Card4 = React.lazy(() => import('../card/Card4'));

class PortfolioSide extends React.Component{

    state = {
        portfolios
    }

    render(){
        console.log(this.state.portfolios);
        return(
            <div>
                <Title>Portfolios</Title>
                <CardList>
                    <Suspense fallback={<SkeletonLoader />}>
                        {/*MyKitchenManager -- done*/}
                        <Card1 { ...this.state.portfolios[0] }/>
                        {/*Event Recommendation -- done*/}
                        <Card { ...this.state.portfolios[1] }/>
                        {/*Word Game -- done*/}
                        <Card2 { ...this.state.portfolios[2] }/>
                        {/*Robot Delivery Service -- done*/}
                        <Card3 { ...this.state.portfolios[3] }/>
                        {/*Social Around -- done*/}
                        <Card { ...this.state.portfolios[4] }/>
                        {/*NBA Shooting Visualization -- done*/}
                        <Card { ...this.state.portfolios[5] }/>
                        {/*Smart Driving Android App -- done*/}
                        <Card1 { ...this.state.portfolios[6] }/>
                        {/*Animal Shelter Management*/}
                        <Card4 { ...this.state.portfolios[7] }/>
                    </Suspense>
                    {/*use same card on all items*/}
                    {/*{*/}
                    {/*    this.state.portfolios.map(item => (*/}
                    {/*        <Suspense key={item.id} fallback={<SkeletonLoader />}>*/}
                    {/*            <Card {...item} />*/}
                    {/*        </Suspense>*/}
                    {/*    ))*/}
                    {/*}*/}
                </CardList>
            </div>
        );
    }
}

export default withCustomScroll(PortfolioSide);
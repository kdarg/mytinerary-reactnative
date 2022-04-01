import React from 'react';
import { ScrollView } from 'react-native';
import MyCarousel from '../components/MyCarousel';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = (props) =>{
    return(
        <ScrollView style={{backgroundColor:'rgb(255, 234, 252)'}}>
                <Hero/>
                <CallToAction navigation={props.navigation}/>
                <MyCarousel/>
                <Footer/>
        </ScrollView>
    )
}

export default Home;
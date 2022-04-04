import { StyleSheet,Image, Text, View, TextInput, ScrollView, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from '../redux/actions/itinerariesActions'
import Itinerary from '../components/Itinerary'
import Footer from '../components/Footer'


const City = (props) => {
    // console.log('CHAUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')
    // console.log(props)
     const [loader, setLoader] = useState (true)

    useEffect(()=> {
        let listener = props.navigation.addListener('focus', ()=> {
            props.getOneCity(props.route.params.id)
            props.getItinerariesByCityId(props.route.params.id)
            setLoader(false)
        })
       return()=>{
           props.navigation.removeListener(listener)
       }
    }, [])

     if(loader){
        return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#3fced3"/>
                </View>
        
        )}

    const allMyItineraries = props.itinerary.length === 0 
    ?  
    <View style={styles.noResultsContainer}>
            <Text style={styles.noResults}>It seems there are no itineraries yet! </Text>
            <Image style={styles.imageNoResult} source={require('../assets/noitineraries.png')}/>
    </View>
    :
    props.itinerary.map((iti) =><Itinerary data={iti} key={iti._id}/>)

    return(
        <ScrollView style={{backgroundColor:'rgb(255, 234, 252)'}}>
        <ImageBackground style={styles.boxEachCity} source={{ uri:`https://mytinerary-arguello.herokuapp.com/assets/cities/${props.cityById.src}`}}>
                <Text style={styles.presentation}>
                    Welcome to {props.cityById.city}
                </Text>
        </ImageBackground>
        <ImageBackground source={require('../assets/popular_bg.png')} style={styles.popular}  >
            <Text style={styles.popularTitle}>Itineraries</Text>
        </ImageBackground>
       {allMyItineraries}
       <Footer/>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    boxEachCity:{
        width:"100%",
        height:300,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center"

    },
    popularTitle:{
        color: "white",
        letterSpacing: 1,
        textShadowColor:"rgb(112, 3, 45)",
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        fontFamily:"CroissantOne_400Regular",
        fontSize:25,
        width: "100%",
        marginBottom: 20,
        marginTop: 25,
        textAlign:"center"
    },
    popular:{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 30,
        marginTop: 20,
    },
    presentation:{
        fontFamily:"CroissantOne_400Regular",
        fontSize:30,
        alignSelf:"center",
        color: "white",
        textShadowColor:'rgb(112, 3, 45)',
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        backgroundColor:'rgba(255, 255, 255, 0.418)',
        padding:5,
    },

    joinText:{
        alignSelf:"flex-start",
        padding:15,
        color:"#dad8d8",
        fontSize:28,
        fontFamily:"ZenLoop_400Regular"
    },
    deco :{
        marginTop:-8,
        marginLeft:14,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:30
    },
   
    noItineraries:{
        alignSelf:'center',
        width:'100%',
        height:250,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginTop: 20,
        backgroundColor: 'black',
        width: 150,
        height: 50,
        zIndex: 1
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    noResultsContainer: {
        // marginTop: "5%",
        marginLeft: "12%",
        marginBottom: "10%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        backgroundColor:"white",
    },
    noResults: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        padding: "2%",
    },
    imageNoResult:{
        width: 100,
        height: 200,
    },



})

const mapStateToProps = state => {
    return{

        cityById: state.citiesReducer.cityById,
        itinerary: state.itinerariesReducer.itinerary,
        user: state.userReducer.user,
        getCities: state.citiesReducer.getCities
    }
}
const mapDispatchToProps = {
    getOneCity:citiesActions.getOneCity,
    getItinerariesByCityId: itinerariesActions.getItinerariesByCityId 
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
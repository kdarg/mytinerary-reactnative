import React from 'react'
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import citiesActions from "../redux/actions/citiesActions";
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import Footer from "../components/Footer"
import HeroCities from '../components/HeroCities';


const Cities = (props) => {
    console.log(props)

    // var img = "https://mytinerary-arguello.herokuapp.com/cities" + props.src


    useEffect(() => {
        async function getCities() {
            try{
                await props.getCities()
            } catch(error) {
                console.log(error)
            }
        }
        getCities()
    }, [])

    const inputsearch = (e) => {
        props.filterCities(e)
    }

return (
        
    <ScrollView style={styles.mainContainer}>
        <HeroCities/>
        <ImageBackground source={require('../assets/popular_bg.png')} style={styles.popular}  >
            <Text style={styles.popularTitle}>Adventures ahead!</Text>
        </ImageBackground>

        <TouchableWithoutFeedback >
            <View style={styles.boxSearch}>
                <TextInput style={styles.search} onChangeText={inputsearch} placeholder='Search by city..'/>
            </View>
        </TouchableWithoutFeedback>

        <ScrollView style={styles.citiesContainer}>
            <View style={styles.citiesScroll}>
                {(props.cityfiltered.length !== 0) ? props.cityfiltered.map ((city, index) => {
                return (
                    <View style={styles.boxCity} key={index}>
                    <TouchableOpacity>
                        <View style={styles.boxCities}>
                            <Image source={{uri:`https://mytinerary-arguello.herokuapp.com/assets/cities/${city.src}`}} style={styles.image}/>
                            <Text style={styles.place}>{city.city} - {city.country}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                )
            }): <View style={styles.noResultsContainer}>
                    <Text style={styles.noResults}>- No results to show -</Text>
                    <Text style={styles.noResults}>Please try again.</Text>
                    <Image style={styles.imageNoResult} source={require('../assets/noresult.png')}></Image>
                </View>
            }
            </View>
        </ScrollView>
            <Footer />       
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        width: "85%",
        marginTop: 25,
    },
    citiesContainer:{
        width: "100%",
        height: "100%",
    },
    popularTitle:{
        color: "white",
        letterSpacing: 1,
        textShadowColor:"rgb(112, 3, 45)",
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        fontFamily:"CroissantOne_400Regular",
        fontSize:20,
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
    mainContainer: {
        flex: 1,
        height: "100%",
        backgroundColor:'rgb(255, 234, 252)',
    },
    citiesScroll: {
        justifyContent: "center",
        alignItems: "center"
    },
    search: {
        fontSize: 14,
        padding: "2.5%",
        color: "black",
        
    },
    boxSearch: {
        borderColor: "#F68BC0",
        borderWidth: 2,
        width: "50%",
        marginBottom: "2%",
        borderRadius: 5,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
    },
    boxCity: {
        width: "90%",
        borderRadius: 15,
        height: 400,
        marginVertical: "3%",
    },
    boxCities:{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    place: {
        color: "black",
        fontSize: 35,
        fontWeight: "600",
        fontFamily:"ZenLoop_400Regular",
        textAlign: "center",
        padding: 40,
        backgroundColor: "white",
    },
    noResultsContainer: {
        marginTop: "5%",
        marginBottom: "5%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        backgroundColor:"white",
    },
    noResults: {
        color: "black",
        fontSize: 18,
        fontWeight: "500",
        padding: "2%",
    },
    imageNoResult:{
        width: 100,
        height: 200,
    },

})

const mapStateToProps = (state) => {
    return {
        cityfiltered: state.citiesReducer.filterCities,
    }
}

const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
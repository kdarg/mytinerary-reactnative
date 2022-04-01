import React from "react";
import Carousel from "react-native-snap-carousel";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const MyCarousel = () => {

    const cities = [
    {
        id: "01",
        country: "Germany",
        city: "Garmisch",
        url: "https://user-images.githubusercontent.com/75273639/160977578-e92055e8-9586-475f-838f-3edd03e33c69.png",
    },
    {
        id: "02",
        country: "Japan",
        city: "Kyoto",
        url: "https://user-images.githubusercontent.com/75273639/160977588-b51af193-e88d-41ef-87ce-919659b37486.png",
    },
    {
        id: "03",
        country: "Italy",
        city: "Belluno",
        url: "https://user-images.githubusercontent.com/75273639/160977441-1ea67bbb-00d8-426b-ad38-d41c0176cca8.png",
    },
    {
        id: "04",
        country: "Iceland",
        city: "Reykjavik",
        url: "https://user-images.githubusercontent.com/75273639/160977610-334d11d3-a72d-4037-889e-1f26262a524a.png",
    },
    {
        id: "05",
        country: "Finland",
        city: "Saariselkä",
        url: "https://user-images.githubusercontent.com/75273639/160977627-6f51dcda-528d-4905-9c1e-bdcf54cdfdb1.png",
    },
    {
        id: "06",
        country: "Germany",
        city: "Bavaria",
        url: "https://user-images.githubusercontent.com/75273639/160977406-ab7c6301-7ba9-4a02-aef2-9d5813651708.png",
    },
    {
        id: "07",
        country: "USA",
        city: "Leavenworth",
        url: "https://user-images.githubusercontent.com/75273639/160977673-2c68899e-6bdf-40e1-9290-39b592ebdc95.png",
    },
    {
        id: "08",
        country: "Switzerland",
        city: "Randa",
        url: "https://user-images.githubusercontent.com/75273639/160977599-4a868821-f7d2-4bba-83ab-f6c8c3d4ba25.png",
    },
    {
        id: "09",
        country: "Canada",
        city: "Alberta",
        url: "https://user-images.githubusercontent.com/75273639/160977621-95dacf16-4df5-45d0-a08b-ba92397e9c35.png",
    },
    {
        id: "010",
        country: "Canada",
        city: "Yukon",
        url: "https://user-images.githubusercontent.com/75273639/160977691-7842a7bf-1f68-4ada-802b-ffb61bc14d1e.png",
    },
    {
        id: "011",
        country: "Croatia",
        city: "Velebit",
        url: "https://user-images.githubusercontent.com/75273639/160977667-91b0a83b-285d-443e-b9f3-b79723bb2f25.png",
    },
    {
        id: "012",
        country: "Russia",
        city: "Teriberka",
        url: "https://user-images.githubusercontent.com/75273639/160977657-38207c9e-a414-4f10-9ab0-4bd9952e62ed.png",
    },

    ];

    const places = ({ item }) => {
        return (
            <View style={styles.carouselContainer}>
                
            <View key={item.id} style={styles.slide}>
            <View style={styles.polaroid}>
            <Image
                source={{ uri: item.url }}
                style={styles.image}>
            </Image>
            <Text style={styles.text}>{item.city} - {item.country}</Text>
            </View>
            </View>
            </View>
        );
    };

    return (
        <View style={styles.containerCarousel}>
            <ImageBackground source={require('../assets/popular_bg.png')} style={styles.popular}  >
                    <Text style={styles.popularTitle}>Popular MyTineraries</Text>
                </ImageBackground>
        <Carousel
            data={cities}
            sliderWidth={400}
            itemWidth={490}
            renderItem={places}
            autoplay={true}
            loop={true}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer:{
        height:450,
        alignItems:"center"
    },
    slide:{
        width:"100%"
    },
    polaroid:{
        width: "81%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        backgroundColor: "white",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: "90%",
    },
    text: {
        color: "rgb(221, 46, 113)",
        fontSize: 35,
        letterSpacing: 2,
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 24,
        alignSelf:"center",
        fontFamily:"ZenLoop_400Regular"
    },
    containerCarousel: {
        marginBottom: 20,
        marginTop: 20,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
    },
    popular:{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 30,
    },
    popularTitle:{
        color: "white",
        letterSpacing: 1,
        textShadowColor:'rgb(112, 3, 45)',
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        fontFamily:"CroissantOne_400Regular",
        fontSize:20,
        width: "100%",
        marginBottom: 20,
        marginTop: 25,
        textAlign:"center"
    }

});

export default MyCarousel;
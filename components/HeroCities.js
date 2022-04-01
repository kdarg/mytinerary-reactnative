import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const HeroCities = (props) => {
    return(
        <View>
            <ImageBackground source={require('../assets/citiesbg.png')} style={styles.heroBG} >
                <View style={styles.heroText}>
                    <Text style={styles.title}>Destinations</Text>
                    <View style={styles.sloganBox}>
                        <Text style={styles.slogan}>Find your perfect adventure down below!</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    heroBG:{
        width:"100%",
        height:700,
        justifyContent:"center",
        alignItems:"center"
    },
    heroText:{
        paddingBottom:150
    },
    title:{
        fontFamily:"CroissantOne_400Regular",
        fontSize:50,
        alignSelf:"center",
        color: "white",
        textShadowColor:'rgb(112, 3, 45)',
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        paddingBottom:20
    },
    sloganBox:{
        backgroundColor: "rgba(255, 255, 255, 0.733)",
        marginTop:20,
        padding:10,
},
    slogan:{
        fontFamily:"ZenLoop_400Regular",
        fontSize:24,
        alignSelf:"center",
        color:"black",
    },
})

export default HeroCities;
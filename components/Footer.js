import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Footer = () => {
    return(

            <View style={styles.footer}>
                <Image style={styles.imgLogo} source={require('../assets/logofooter.png')}/>

                <View style={styles.iconsFooter}>
                    <Image style={styles.socialMedia} source={require('../assets/github.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/instagram.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/twitter.png')} resizeMode="contain"/>
                    <Image style={styles.socialMedia} source={require('../assets/facebook.png')} resizeMode="contain"/>
                </View>
                <Text style={styles.copyright}>&copy; 2022 Copyright - All rights reserved </Text>
                <Text style={styles.copyright}>Designed by Karen Argüello</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#474747',
        width:"100%",
        height:220,
    },
    imgLogo:{
        marginTop:20,
        width:50,
        height:50,
        justifyContent:"center",
        alignContent:"center",
        alignSelf:"center",
    },
    copyright:{
        textAlign:"center",
        backgroundColor:"#000000",
        color:"white",
        paddingVertical:5,
        
    },
    socialMedia:{
        width:30
    },
    iconsFooter:{
        alignSelf:"center",
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})

export default Footer;
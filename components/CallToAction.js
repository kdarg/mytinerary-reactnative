import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'


const CallToAction = (props) => {
    return(
        <View style={{backgroundColor: "white", height: 715, alignItems:"center"}}>
            <Image source={require('../assets/cartel.png')} style={styles.callImg} resizeMode="contain"/>
                <View style={styles.padBot}>
                    <Text style={styles.titleCall}>Discover story-worthy travel moments</Text>
                    <View style={styles.textBox}>
                        <Text style={styles.firstItemCall}>• Do love snow and travelling? We're here to help you make the right choices with guides on destinations to explore during the pandemic.</Text>
                        <Text style={styles.itemsCall}>• Explore this year's expert-approved list of must-see destinations, places, and unforgettable experiences guaranteed to inspire.</Text>
                        <Text style={styles.rememberCall}>• And remember:</Text>
                        <Text style={styles.tolkien}>Not all those who wander are lost.</Text>
                    </View>
                </View>
                    <Button title="GET STARTED" buttonStyle={styles.getStarted} onPress={() => props.navigation.navigate('Cities')}/>
        </View>
    )
}

const styles = StyleSheet.create({

    tolkien:{
        textTransform:"uppercase",
        textAlign:"center",
        fontWeight:"bold",
        marginTop:5,
    },
    callImg:{
        width:300,
        height:300,
        marginTop:30,
        display: 'flex',
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    padBot:{
        paddingBottom:10
    },
    titleCall:{
        marginTop:20,
        alignSelf:"center",
        fontFamily:"ZenLoop_400Regular",
        fontSize:40,
        textTransform:"uppercase",
        textAlign: "center",
    },
    textBox:{
        marginTop:20
    },
    firstItemCall:{
        alignSelf:"center",
        color:"black",
        fontSize:14,
        paddingRight:15,
        paddingLeft:15,
        marginBottom:10,
    },
    itemsCall:{
        color:"black",
        fontSize:14,
        alignSelf:"center",
    },
    rememberCall:{
        alignSelf:"flex-start",
        color:"black",
        fontSize:14,
        paddingLeft:15,
        marginTop:10,
    },
    getStarted: {
        backgroundColor: "rgb(221, 46, 113);",
        color: "white",
        marginTop:10,
        alignSelf: "center",
        alignItems:"center",
    },

})

export default CallToAction;
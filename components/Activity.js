import { connect } from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions"
import React,{useState, useEffect} from "react"
import {Text, View, StyleSheet, Alert, Image, ScrollView, Pressable, TextInput, ToastAndroid } from 'react-native'

const Activity = (props) => {

    // console.log('HOLAAAAAAAAAAASAFDASFSAFDS')
    // console.log(props.id)

    const [activities, setActivities] = useState([])

    const [nombre, setNombre] = useState('')
    // console.log(nombre)

    useEffect( () => {
        props.getActivityByItinterary(props.id) 
        .then(res => {
            console.log(res)
            setActivities(res.response)
        } )

        setNombre('karen')
        
        // console.log('UWWWWWWWWWWWWWU')
        // console.log(activities)
        // console.log(nombre)

    }, [])



return (

<View >

<View>  
        
    <View>
        {activities.map((activity => (
                <View key={activity._id} >

                    <View style={{ alignItems: 'center', marginVertical: 10, flexDirection:'column' }}>
                        <Image source={{uri: `https://mytinerary-arguello.herokuapp.com/assets/imgs/${activity.src}`}} style={styles.authorImage} />
        
                        <View >
                        <Text style={styles.activitiesTitle}>{activity.title}</Text>
                        </View>

                    </View>


                </View>

            )))}
    </View>
</View>

    </View>
    )
}

const styles = StyleSheet.create({
    authorImage: {
        minWidth: 300,
        height: 200,
        borderRadius: 30
    },
    activitiesTitle:{
        marginTop: 20,
        borderRadius:10,
        fontSize:25,
        color:'#b90e6cbb',
        padding:10,
        textTransform:'uppercase',
        backgroundColor: '#ffdfed9a',
        fontFamily: 'ZenLoop_400Regular',
        letterSpacing:1,
        textAlign:'center',

    },
})

const mapDispatchToProps = {
    getActivityByItinterary: itinerariesActions.getActivityByItinterary
}

export default connect(null, mapDispatchToProps)(Activity)
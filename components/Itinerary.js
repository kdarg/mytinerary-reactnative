import React,{useState, useEffect} from "react"
import {connect} from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions"
import Icon from 'react-native-vector-icons/FontAwesome'
import Ioicons from 'react-native-vector-icons/Ionicons'
import {Text, View, StyleSheet, Alert, Image, ScrollView, Pressable, TextInput, ToastAndroid } from 'react-native'
import { Button } from 'react-native-elements'
import Activity from "./Activity"
import Comments from "./Comments"

const Itinerary = (props) =>{
    const {userName, profilePicture, src, hashtags, title, price, likes, description, duration, _id, comments} = props.data
    const [likeIcon, setLikeIcon] = useState(true)
    const [itinerariesLikes, setItinerariesLikes] = useState(likes)
    const [showActivities, setShowActivities]= useState([])
    const [button, setButton] = useState(false)

    const liked= itinerariesLikes.includes(props._id) ? <Icon name='heart' style={styles.iconoLikes}/> : <Icon name='heart-o' style={styles.iconoLikes} /> 

    const likeItinerary = async ()=>{
        setLikeIcon(false)
        if(!props.token){
            ToastAndroid.showWithGravityAndOffset('You must be logged in to like this post!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
        }else{
            let response = await props.likeItinerary(_id, props.token)
            setItinerariesLikes(response.data.response)
        }
        setLikeIcon(true)
    }


    // async function activityItinerary (){
    //     try{
    //         let response = await props.getActivityByItinterary(_id)
    //         setShowActivities(response)
    
    //     }catch (error){
    //         console.log(error)
    //     }
    // }

    const buttonHandler = () => {
        setButton(!button)
        // if(!button  && !showActivities.length){
        //     activityItinerary()
        // }
    
}

return(
    <ScrollView>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <View style={styles.contenedorItineraries}>

        <View>
            <Text style={styles.itiTitle}>{title}</Text>
            <View style={{  alignItems: 'center', marginVertical: 10, flexDirection:'row' }}>
                <Image source={{uri: `https://mytinerary-arguello.herokuapp.com/assets/imgs/${profilePicture}`}} style={styles.authorImage} />
                <Text style={styles.userName}> › {userName} ‹</Text>
            </View>
        </View>

        <View>
            <View>
                <Text style={styles.descri}>{description}</Text>
            </View>

            <View style={{ alignItems: 'center'}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, justifyContent:"space-around", width:"80%", flexWrap:'wrap'}}>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.underline}>Price</Text><Text>:</Text>
                    {[...Array(price)].map((cash, index) => {
                        return <Icon name="money" style={{ fontSize: 20, color: "green", marginLeft:5 }} key={index} />
                            })}
            </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.underline}>Duration</Text><Text>:</Text>
                            <Ioicons name="time-outline" style={{ fontSize: 20, color: "black", marginLeft: 3 }} />
                            <Text style={{ color: 'black', fontSize: 13 }}>{duration}</Text>
                        </View>
                        
            </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' , marginTop:10}}>
                                <Pressable onPress={(likeIcon ? likeItinerary : null )} >
                                {liked}
                                </Pressable> 
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 6, }}>{itinerariesLikes.length}</Text> 
                            </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical:10 }}>{hashtags.map((hashtag, index) => <Text key={index} style={styles.hashtags}>{hashtag}</Text>)}</View> 
            </View>
        </View>
            
            <View>
                    <View style={{display:button ? 'flex' : 'none'}}>
                        <View>
                            <Text style={styles.itiTitle}>ACTIVITIES </Text>
                        </View>
                        <View>
                            <Activity id={_id}/>

                            <View>
                            <Text style={styles.itiTitle}>COMMENTS </Text>
                        </View>
                            <Comments comments={comments}/>
                        </View>
                    </View>      
            </View>              
            <View>
                <Button buttonStyle={styles.btnView} onPress={buttonHandler} title={button ? "View Less" : "View More"} />
            </View>
        </View>   
        </View>

    </ScrollView>
    )
}

const styles = StyleSheet.create({

    contenedorItineraries: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '95%',
        justifyContent: 'center',
        padding: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    descri:{
        fontStyle: 'italic',
        padding: 10,
        textAlign: 'center',
    },
    underline:{
        textDecorationLine: 'underline',
    },
    hashtags:{
        
        color:'#f049979a',
        fontSize: 17,
        marginRight: 10,
        marginVertical:10,
    },
    userName:{
        color: 'black',
        fontSize: 30,
        fontFamily:'ZenLoop_400Regular',
        marginLeft:5,
        letterSpacing:1,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        textTransform:'uppercase',

    },
    itiTitle:{
        borderRadius:50,
        fontSize:25,
        color:'white',
        padding:10,
        textTransform:'uppercase',
        backgroundColor: '#f049979a',
        fontFamily: 'ZenLoop_400Regular',
        letterSpacing:1,
        textAlign:'center',

    },
    itineraryImage: {
        width: '100%',
        height: 200,
        borderRadius:15
    },
    authorImage: {
        minWidth: 70,
        height: 72,
        borderRadius: 50
    },
    iconoLikes: {
        fontSize: 20,
        color: 'red'
    },
    btnView: {
        backgroundColor: "rgb(221, 46, 113);",
        color: "white",
        marginTop:10,
        alignSelf: "center",
        alignItems:"center",
    },
    deco :{
        marginTop:-8,
        marginLeft:9,
        alignSelf:"flex-start",
        backgroundColor:"#3fced3",
        width:80,
        height:10,
        marginBottom:20
    },
    activityTitle:{
        alignSelf:"flex-start",
        padding:5,
        color:"#dad8d8",
        fontSize:28,
        fontFamily:"ZenLoop_400Regular"
    }
})

const mapStateToProps = (state) => {
    return{
        user:state.userReducer.user,

    }
}
const mapDispatchToProps ={
    likeItinerary:  itinerariesActions.likeItinerary,
    getActivityByItinterary: itinerariesActions.getActivityByItinterary
}    

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 
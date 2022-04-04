import { StyleSheet,Image, Text, View, TextInput, ScrollView, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import citiesActions from "../redux/actions/citiesActions"
import itinerariesActions from '../redux/actions/itinerariesActions'
// 


const Comments = (props) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    console.log(props.comments)


    return(
        <View style={styles.boxContainer}>
        {/* <Text>{props.comment.userID.firstname}</Text> */}

        {props.comments.map((comment) => 


        <View key={comment._id} style={styles.commentContainer}>
            <View>
                <Image source={{uri: comment.userID.urlimage }} style={styles.commentUsers} />
            </View>

            <View>
                <Text style={styles.userInfo}>{comment.userID.firstname} {comment.userID.lastname}</Text>
            </View>

            <View>
                <Text style={styles.commentCenter}>{comment.comment}</Text>
            </View>
        
        </View>

        )}
        
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo:{
        fontFamily:'CroissantOne_400Regular',
        
    },
    commentCenter:{
        textAlign: 'center',
        fontStyle:'italic'
    },
    boxContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
      
    },
    commentUsers: {
        width: 50,
        height: 50,
        borderRadius: 50,
        
        // display: 'flex',
        // justifyContent: 'center',
    },
    commentContainer:{
        backgroundColor:'#f7e8d48a',
        borderRadius:30,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign:'center',
        padding:10,
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
    getItinerariesByCityId: itinerariesActions.getItinerariesByCityId,
    addComment: itinerariesActions.addComment,
    editComment: itinerariesActions.editComment,
    deleteComment: itinerariesActions.deleteComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
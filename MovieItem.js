import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const imageUrl = "https://reactnative.dev/img/tiny_logo.png"


const MovieItem = () => {
    return (
        <View style = {{margin:10,padding:10,flexDirection: 'row', alignItems:'center', backgroundColor:'white'}}>
        <Image source= {{uri: imageUrl}}
        style = {{ width: 110, height: 120}}></Image>
        
        <View style = {{padding:10, gap:10}}>
        <Text style = {{fontWeight:'600', fontSize: 24}}>Turnina Red</Text>
  
        <View style = {{flexDirection:'row', gap:5}}>
          <Image style = {{width:25, height:25}}
         source={ require("./Assets/calendar.png")}
          />
        <Text style = {{fontWeight:'400', fontSize: 20}} >10 Mar, 2022</Text>
        </View>
        
        <View style = {{flexDirection:'row', gap:5, alignItems:'center'}}>
          <Image style = {{width:25, height:25}}
         source={require("./Assets/hand.png")}
           />
        <Text style = {{fontWeight:'400', fontSize: 20}}>1132</Text>
        <Text style = {{fontWeight:'400', fontSize: 20}}>|</Text>
        <Text style = {{fontWeight:'400', fontSize: 20}}>Rate: 7.4/10</Text>
        </View>
        
        </View>
      </View>
    )
}

export default MovieItem;
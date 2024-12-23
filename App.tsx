import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem'
const data = [1,1,1,1]

const App = () => {

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList data={ data }
      ItemSeparatorComponent={() =><View>

      </View>}
      renderItem={ () => (
        <MovieItem/>
      )}
      >
      </FlatList>
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'grey',
  },
  movieBanner: {
    width: 110,
    height: 120,
    backgroundColor: 'red'
  }
})
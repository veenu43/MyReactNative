import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState} style = {styles.myState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent


const styles = StyleSheet.create ({
   myState: {
      marginTop: 50,
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
      fontSize: 30
   }
})
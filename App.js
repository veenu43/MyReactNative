import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'
import List from './List'

export  class App extends React.Component {
   state = {
      myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'+
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'+
      'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis'+
     'aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat'+
     'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'+
      'officia deserunt mollit anim id est laborum.'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated in container and presented in presentational layer' })
   }
   render() {
      return (
         <View>
            <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}

const AppList = () => {
   return (
      <List />
   )
}

const Home = (props) => {
   return (
      <View style = {styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
      </View>
   )
}
List
export default AppList

const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: 'grey',
      height: 600
   },
   redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
})
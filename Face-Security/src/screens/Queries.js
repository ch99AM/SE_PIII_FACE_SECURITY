import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button} from 'react-native'


export default class Queries extends React.Component {
  toUser = async () => {
    try {
    } catch (error) {
      alert(error)
    }
  } 
  toArea = async () => {
    try {
      this.props.navigation.navigate('QueryByDate')
    } catch (error) {
      alert(error)
    }
  } 
  render() {
    
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}
            onPress={this.toArea}>
            <Text style={styles.btnText}>Query by area</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}
            onPress={this.toUser}>
            <Text style={styles.btnText}>Query by user</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:"10%",
    alignItems:'center',
    justifyContent:"space-evenly"
  },
  btnView:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:"100%",
    height:"10%"
  },
  btn:{
    width:"80%",
    height:"8%",
    backgroundColor:"#f08241",
    borderRadius:10,
    justifyContent:"center",
    alignItems:'center',
    marginStart:"1%"
  },
  btnText:{
    color:"white",
    marginHorizontal:"5%"
  }
})
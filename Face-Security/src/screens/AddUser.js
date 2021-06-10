import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


export default class Login extends React.Component {
  state = {
    name: '',
    lastName: '',
    SecondLastName: '',
    numID: '',
    userType: '',
    photo: '',
    accessAreas:''
  }
  handleNameChange = name =>{
    this.setState({name})
  }
  handleLastNameChange = lastName =>{
    this.setState({lastName})
  }
  handleSecondLastNameChange = SecondLastName =>{
    this.setState({SecondLastName})
  }
  handlenumIDChange = numID =>{
    this.setState({numID})
  }
  handleUserTypeChange = userType =>{
    this.setState({userType})
  }
  handlePhotoChange = photo =>{
    this.setState({photo})
  }
  handleAreasChange = accessAreas =>{
    this.setState({accessAreas})
  }
  onLogin = async () => {
      try {

      } catch (error) {
        alert(error)
      }
  }   

  render() {
    const {name, lastName, secondLastName, numID,
      userType, photo, accessAreas}=this.state
    return (
      <View style={styles.container}>
        <Text style={styles.textView}>Name</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='name' 
            value={name} placeholder='name'
            autoCapitalize='none' 
            onChangeText={this.handleNameChange}
          />
        </View>
        <Text style={styles.textView}>Last Name</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='lastname' 
            value={lastName} placeholder='last name'
            autoCapitalize='none' 
            onChangeText={this.handleLastNameChange}
          />
        </View>
        <Text style={styles.textView}>Second Last Name</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='secondLastName' 
            value={secondLastName} placeholder='second last name'
            autoCapitalize='none' 
            onChangeText={this.handleSecondLastNameChange}
          />
        </View>
        <Text style={styles.textView}>ID Number</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='numID' 
            value={numID} placeholder='ID number'
            autoCapitalize='none' 
            onChangeText={this.handlenumIDChange}
          />
        </View>
        <Text style={styles.textView}>User Type</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='userType' 
            value={userType} placeholder='user type'
            autoCapitalize='none' 
            onChangeText={this.handleUserTypeChange}
          />
        </View>
        <Text style={styles.textView}>Profile Photo</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='photo' 
            value={photo} placeholder='add photo'
            autoCapitalize='none' 
            onChangeText={this.handlePhotoChange}
          />
        </View>
        <Text style={styles.textView}>Access Areas</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='accessAreas' 
            value={accessAreas} placeholder='add areas'
            autoCapitalize='none' 
            onChangeText={this.handleAreasChange}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}
            onPress={this.onLogin}>
            <Text style={styles.loginText}>Add User</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  textView:{
    fontWeight:"bold",
    fontSize:16,
    color:"#f08241",
    marginBottom:1,
    padding:"3%"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fbfbfb",
    borderRadius:10,
    height:"4%",
    marginBottom:"1%",
    justifyContent:"center",
    padding:"3%"
  },
  inputText:{
    height:30,
    color:"black"
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#f08241",
    borderRadius:10,
    height:"4%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"15%",
    marginBottom:"2%",
    left:"50%"
  },
  loginText:{
    color:"white"
  }
})
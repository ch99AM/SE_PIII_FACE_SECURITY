import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button} from 'react-native'
import * as ImagePicker from 'expo-image-picker';

export default class EditInfoUser extends React.Component {
  state = {
    name: '',
    lastName: '',
    SecondLastName: '',
    numID: '',
    userType: '',
    photo: null,
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
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({photo: result});
    }
  }
  addUser = async () => {
    try {
      alert("Hola")
    } catch (error) {
      alert(error)
    }
  } 
  render() {
    const {name, lastName, secondLastName, numID,
      userType, photo, accessAreas}=this.state
      
    return (
      <ScrollView style={styles.container}>
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
        <Text style={styles.textView}>Access Areas</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='accessAreas' 
            value={accessAreas} placeholder='add areas'
            autoCapitalize='none' 
            onChangeText={this.handleAreasChange}
          />
        </View>
        <Text style={styles.textView}>Profile Photo</Text>
       
        {photo &&<Image source={{ uri: photo.uri}} 
            style={styles.imageView} />}

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
              onPress={this.pickImage}>
              <Text style={styles.btnText}>Pick Image</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
              onPress={this.addUser}>
              <Text style={styles.btnText}>Delete User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
              onPress={this.addUser}>
              <Text style={styles.btnText}>Add User</Text>
          </TouchableOpacity>
        </View> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:"10%"
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"#f08241",
    paddingHorizontal:"5%"
  },
  imageView:{
    marginLeft:"5%",
    width: "30%", 
    height: "20%" 
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
  btnView:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:"100%",
    height:"8%"
  },
  btn:{
    width:"20%",
    backgroundColor:"#f08241",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    marginTop:"2%",
    marginBottom:"2%",
    marginHorizontal:"1%"
  },
  btnText:{
    color:"white"
  }
})
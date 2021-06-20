import React from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native'

export default class Login extends React.Component {
  state = {
      user: '',
      password: '',
      token:'',
      valited:false
  }
  handleUserChange = user =>{
      this.setState({user})
  }
  handlePasswordChange = password => {
      this.setState({password})
  }
  onLogin = async () => {
      const { user, password } = this.state
      try {
        if (user.length > 0 && password.length > 0) {
          await fetch('https://reactnative.dev/movies.json', {
            method: 'POST',
            headers: { 'Accept': 'application/json',
                      'Content-Type': 'application/json'},
            body: JSON.stringify({   
              "user": user,
              "password": password
            })
          })
          .then( async respond => await respond.json())
          .then( async respondJson => {
            alert(respondJson);
            this.setState({
              token:respondJson.token,
              valited:respondJson.valited
            })
          })
          if (this.state.valited == true){
            this.props.navigation.navigate('App')
          }else{
            alert("Invalid User")
            this.props.navigation.navigate('App')
          }
        }
      }catch (error) {
        alert(error)
      }
  }    
  render() {
    const { user, password } = this.state
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>FACE SECURITY</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            name='user'
            value={user}
            placeholder='user'
            autoCapitalize='none'
            onChangeText={this.handleUserChange}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            name='password'
            value={password}
            placeholder='password'
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}
            onPress={this.onLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#465881',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#f08241",
    marginBottom:"12%"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#fbfbfb",
    borderRadius:25,
    height:50,
    marginBottom:"4%",
    justifyContent:"center",
    padding:"3%"
  },
  inputText:{
    color:"black",
    padding:"3%",
    height:50
  },
  loginBtn:{ 
    width:"80%",
    backgroundColor:"#f08241",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
})
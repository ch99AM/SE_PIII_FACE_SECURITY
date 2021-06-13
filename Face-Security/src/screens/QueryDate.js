import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    ScrollView, Dropdown} from 'react-native'


export default class QueryDate extends React.Component {
  state = {
    dateStart: '',
    dateEnd: '',
    timeStart: '',
    timeEnd: '',
    area: ''
  }
  handleDateStart = dateStart =>{
    this.setState({dateStart})
  }
  handleDateEnd = dateEnd =>{
    this.setState({dateEnd})
  }
  handleTimeStart = timeStart =>{
    this.setState({timeStart})
  }
  handleTimeEnd = timeEnd =>{
    this.setState({timeEnd})
  }
  handleArea = area =>{
    this.setState({area})
  }
  addUser = async () => {
    try {
      alert("Hola")
    } catch (error) {
      alert(error)
    }
  } 
  render() {
    const {dateStart, dateEnd, 
        timeStart, timeEnd, area}=this.state
    let data = [{
        value: 'Banana',
        }, {
        value: 'Mango',
        }, {
        value: 'Pear',
        }];
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textView}>Query By Date</Text>
        <Dropdown
        label='Favorite Fruit'
        data={data}
        />
        <Text style={styles.textView}>Date Start</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText} name='dateStart'         
            value={dateStart} placeholder='date start'
            autoCapitalize='none' 
            onChangeText={this.handleDateStart}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn}
              onPress={this.pickImage}>
              <Text style={styles.btnText}>Pick Image</Text>
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
    marginLeft:"15%",
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
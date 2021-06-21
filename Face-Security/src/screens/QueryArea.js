import React, {useState} from 'react'
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    Button, Platform} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class QueryArea extends React.Component  {

  toggleStart = false
  toggleEnd = false
  constructor () {
    super();
    this.state={
      startShow:false,
      startDate:new Date(),
      startMode:'date',
      endShow:false,
      endDate:new Date(),
      endMode:'date'
    }
  }

  onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.startDate
    this.setState({startShow:Platform.OS === 'ios'})
    this.setState({startDate:currentDate})
    this.setState({startMode:'time'})
    this.toggleStart == true? this.setState({startShow:true}):this.setState({startShow:false})
    this.toggleStart=false
  }
  startDatePicker = () => {
    this.setState({startShow:true})
    this.setState({startMode:'date'})
    this.toggleStart= true
  }

  onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.endDate
    this.setState({endShow:Platform.OS === 'ios'})
    this.setState({endDate:currentDate})
    this.setState({endMode:'time'})
    this.toggleEnd == true? this.setState({endShow:true}):this.setState({endShow:false})
    this.toggleEnd=false
  }
  endDatePicker = () => {
    this.setState({endShow:true})
    this.setState({endMode:'date'})
    this.toggleEnd= true
  }
  render()  {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textView}>Area</Text>  
          <ModalDropdown textStyle={styles.dropDownButtom}
            dropdownTextStyle={styles.dropDownText} 
            dropdownStyle={styles.dropDownView}
            options={['Area 1', 'Area 2']}/>
        </View>
        <View> 
          <Text style={styles.textView}>Start Date and Time</Text>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}
                onPress={this.startDatePicker}>
                <Text style={styles.btnText}>{`${this.state.startDate.toUTCString()}`}</Text>
            </TouchableOpacity>
          </View>
          {this.state.startShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.startDate}
              mode={this.state.startMode}
              is24Hour={false}
              display="default"
              onChange={this.onChangeStartDate}
            />
          )}
        </View>
        <View> 
          <Text style={styles.textView}>End Date and Time</Text>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}
                onPress={this.endDatePicker}>
                <Text style={styles.btnText}>{`${this.state.endDate.toUTCString()}`}</Text>
            </TouchableOpacity>
          </View>
          {this.state.endShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.endDate}
              mode={this.state.endMode}
              is24Hour={false}
              display="default"
              onChange={this.onChangeEndDate}
            />
          )}
        </View>
        <TouchableOpacity style={styles.btnQuery}
                onPress={() => alert('Hola')}>
                <Text style={styles.btnText}>Make Query</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:"10%"
  },
  textView:{
    fontWeight:"bold",
    fontSize:16,
    color:"#f08241",
    marginBottom:1,
    padding:"3%"
  },
  dropDownButtom:{
    marginHorizontal:'5%',
    fontSize:15,
  },
  dropDownText: {
    fontSize:15,
    marginHorizontal:'5%'
  },
  dropDownView: {
    marginHorizontal:'5%'
  }, 
  btnView:{
    justifyContent:"space-evenly",
    width:"100%",
    height:"15%",
    padding:'5%'
  },
  btn:{
    width:"80%",
    height:'50%',
    alignItems:'center',
    backgroundColor:"#f08241",
    borderRadius:10,
    justifyContent:"center",
    padding:'4%',
    paddingVertical:'5%',
    marginVertical:'4%'
  },
  btnQuery:{
    width:"60%",
    height:'8%',
    alignItems:'center',
    backgroundColor:"#f08241",
    borderRadius:10,
    justifyContent:"center",
    padding:'4%',
    marginVertical:'20%',
    marginLeft:'30%'
  },
  btnText:{
    color:"white"
  }
})
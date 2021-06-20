import React from 'react'
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import filter from 'lodash.filter'

export default class EditUser extends React.Component {
  state = {
    loading: false,
    data: [], 
    page: 1,
    seed: 1,
    error: null,
    query: '',
    fullData: []
  }

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state
    const url = 'https://randomuser.me/api/?seed=${'+seed+'}&page=${'+page+'}&results=50'
    this.setState({ loading: true })

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          fullData: res.results
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }
  contains = ({ name, email }, query) => {
    const { first, last } = name
    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true
    }
    return false
  }
  handleSearch = text => {
    const formattedQuery = text.toLowerCase()
    const data = filter(this.state.fullData, user => {
      return this.contains(user, formattedQuery)
    })
    this.setState({ data, query: text })
  }
  renderHeader = () => (
    <View
      style={styles.searchView}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={this.handleSearch}
        status='info'
        placeholder='Search'
        style={styles.searchText}
        textStyle={{ color: '#000' }}
        clearButtonMode='always'
      />
    </View>
  )
  renderSeparator = () => {
    return (
      <View style={styles.seperatorView}/>
    )
  }
  userInfo = () => {
    this.props.navigation.navigate("EditInfoUser")
  }
  render() {
    return (
      <View
        style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.userInfo}
              style={styles.touchableView}>
              <Text
                category='s1'
                style={{color: '#000'}}>
                {`${item.name.first} ${item.name.last}`}
              </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '1%',
    marginTop: '8%'
  },
  searchView:{
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    width:'80%',
    height:40
  },
  searchText:{
    borderColor: '#333',
    height:"100%",
    backgroundColor: '#fff'
  },
  seperatorView:{
    height: 1,
    width: '86%',
    backgroundColor: '#f08241',
    marginLeft: '2%'
  },
  touchableView:{
    flexDirection: 'row',
    paddingVertical: '4%',
    paddingHorizontal:'2%',
    alignItems: 'center'
  }

})
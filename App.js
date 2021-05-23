
import React from 'react';
import { StyleSheet,  View} from 'react-native';

import{Header} from './src/Header'
import{Content} from './src/Content'


class App extends React.Component {

  state = {
    data:null,
    renderDataItems:null,
    selectedScreenID:null,
}


componentDidMount = () => { 
  fetch("https://api.tvmaze.com/search/shows?q=batman",{'method':'GET'})
  .then( response => response.json() ) 
  .then( data => this.setData(data) )
  .catch( error => { console.log(error); } )
}

setId = (id) => {
  let selectedData = this.state.renderDataItems.find( v=> v.id === id )
  this.setState({selectedScreenID:selectedData})
  }

clearId = () => { this.setState({selectedScreenID:null}) }

searchCb = (enteredData) => {
  let filterCode =  this.state.data.filter(v=> { 
      return v.name.indexOf(enteredData) !== -1
  }) 
  this.setState({ renderDataItems:filterCode})
}

setData = (data) => {
  let dataReady = data.map( v => {
      return { id: v.show.id, 
              name: v.show.name,
              img: v.show.image.medium,
              summary: v.show.summary
          }})
  this.setState({data:dataReady})
  console.log(dataReady)
}
  

render() {

  
        return (
          <View style={styles.container}>
               <Header clearId={this.clearId} selectedScreenID={this.state.selectedScreenID} search={this.searchCb}/>
                {
                  this.state.data?
                  <Content  setID={this.setId} selectedScreenID={this.state.selectedScreenID} data={this.state.renderDataItems}/>
                  : null
                }
       
          
          
        </View>
        )
  }
}

  
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   }

 
});





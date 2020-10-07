import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView} from 'react-native';


const Webpage =()=> {
  return (
    
    <View style={styles.container}>
       <ScrollView syle={styles.ScrollView}>
      <Text style={styles.head}> News </Text>
      <View style={styles.container_child_1}>

        <Text style={styles.text_1}>41,838 bitcoin have been withdrawn from BitMEX since charges were announced</Text>
        <Text >Cumulative bitcoun withdrawals from BitMEX from 1 Oct 17:00 UTC to 2 Oct 14: UTC</Text>
        <Image source={require('./img/grafik.jpeg')}
        style={{width:300, height:300, resizeMode: 'contain', marginTop:-30, marginBottom:-30,
               
        }}/>
        <Text style={styles.text_2}>Bulls Exit BitMEX Bitcoin Futures Market </Text>
        <Text>Since the announcement from U.S. regulator, BitMEX has witnessed an outflow of more than 40,000 bitcoinc, currently worth more than $422 million.</Text>

      </View>

      <View style={styles.container_child_2}>
        <Image source = {require('./img/placard.jpeg')} 
        style={{width:300, height:300, resizeMode: 'contain', alignSelf: 'center', marginTop:-70}}
        
        />
        <Text style={styles.text_3}>Coinbase custumers can now dodge a bank</Text>
        <Text>New update from Coınbase quikens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into thei bank accounts</Text>
        </View>

        <View style={styles.container_child_3}>
          <Image source={require('./img/crypto.jpeg')}
          style={{width:300, height:300, resizeMode: 'contain', alignSelf: 'center',
          marginTop:-80          
          }}/>


        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{    
    backgroundColor: 'white',
  },



  container_child_1:{
    borderWidth: 2,
    borderColor: 'rgb(211,211,211)',
    borderRadius: 5,
    marginHorizontal:20,
    padding:10,
    backgroundColor:'white',
    marginBottom: 5,
    
  },
  container_child_2:{
    borderWidth:2,
    borderColor:'rgb(211,211,211)',
    borderRadius: 5,
    marginHorizontal:20,
    padding:10,
    backgroundColor:'white',
    marginBottom: 5,
    
  },
  container_child_3:{
    borderWidth: 2,
    borderColor: 'rgb(211,211,211)',
    borderRadius: 5,
    height:150,
    marginHorizontal:20,
    padding:0,
    backgroundColor:'white',
     

  },  
  head: {
    fontSize : 35,
    fontWeight: 'bold',
    marginLeft:10,
  }, 
  text_1: {
    fontSize:18,
  }, 
  text_2:{
    fontSize:20,
    fontWeight:"bold",
  },
  text_3:{
    marginTop:-70,
    fontSize:20,
    fontWeight: 'bold',
  }
  
})


export default Webpage;
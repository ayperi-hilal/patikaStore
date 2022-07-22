import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const NewsCard = ({ news }) => {
  const {title, imgURL, price, inStock, u_id} = news;
  return (
    
    <View >
      <View style={styles.cardRight}>
        <Image
          style={styles.imageCard}
          source={{ uri: imgURL }}
          key={u_id}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        { !inStock && <Text style={styles.in_stock} >STOKTA YOK</Text>  }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  cardRight: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 2,
    margin: 5,
    backgroundColor: '#F1EEE9',
    borderWidth: 10,
    borderRadius: 15,
    borderColor: 'white',
  },
  imageCard: {
    flex: 1,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'stretch',
  },
  title: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 20,

  },
  price: {
    fontSize: 15,
    margin: 5,

  },
  in_stock: {
    color: '#FF0000',
    fontSize: 16,
    textAlign: 'right',
},

});

export default NewsCard;
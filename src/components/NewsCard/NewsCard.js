import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const NewsCard = ({ news }) => {
  return (
    <View >
      <View style={styles.cardRight}>
        <Image
          style={styles.imageCard}
          source={{ uri: news.imgURL }}
          key={u_id}
        />
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.price}>{news.price}</Text>
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

  }

});

export default NewsCard;
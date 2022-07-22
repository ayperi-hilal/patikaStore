import React from "react";
import { TouchableOpacity, View, TextInput, StyleSheet, onChangeText } from 'react-native';


const SeaBarı = props => {
  return (
    <View>
      <TouchableOpacity style={styles.arama}>
        <TextInput
          style={styles.yazi}
          placeholder="Ara..."
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  arama: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#F1EEE9',
    height: 45,
    borderRadius: 5,
  },
  yazi: {
    margin: 5,
    marginTop: 10,
  }

});

export default SeaBarı;
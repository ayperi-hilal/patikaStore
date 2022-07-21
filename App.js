import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  View

} from 'react-native';
import SeaBarı from './src/SeaBarı';
import NewsCard from './src/components/NewsCard/NewsCard';
import HeadersBar from './src/HeadersBar'
import NewsData from './src/components/NewsCard/NewsData';
function App() {


  const renderNews = ({ item }) => <NewsCard news={item} />;
  const flatListKey = (item) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeadersBar />
        <SeaBarı />
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={flatListKey}
        data={NewsData}
        renderItem={renderNews}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,

  }
});


export default App;
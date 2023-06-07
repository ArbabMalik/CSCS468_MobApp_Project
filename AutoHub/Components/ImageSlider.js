import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => handleHeartPress(item)}>
            <Icon name="heart" size={24} color="red" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSharePress(item)}>
            <Icon name="share" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleHeartPress = (item) => {
    // Handle heart icon press
    console.log("Heart pressed for image:", item);
  };

  const handleSharePress = (item) => {
    // Handle share icon press
    console.log("Share pressed for image:", item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  imageContainer: {
    position: 'relative',
  },
  image: {
    width,
    height: 200,
    resizeMode: 'cover',
  },
  iconsContainer: {
    position: 'absolute',
    top: 10,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default ImageSlider;

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BoxWithImage = ({ imageSource, name, description }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#DDD',
        // padding: 10,
        height: 300,
        flexDirection: 'column',
        // flex: 0.5
        backgroundColor:'#D9D9D9'
        
    },
    image: {
        width: '100%',
        height: 165,
        borderRadius: 20,
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 200,
        overflow: 'hidden'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    },
});

export default BoxWithImage;

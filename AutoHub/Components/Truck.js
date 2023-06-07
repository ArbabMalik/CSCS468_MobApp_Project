import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { FaTruck } from 'react-icons/fa';
import Icon from 'react-native-vector-icons/FontAwesome';


const Truck = () => {
    return (
        <View style={styles.container}>
            <Icon name='truck' size={50} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: '#ff6161',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default Truck;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const index = () => {
    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-3xl'>Aora!</Text>
            <Link href='/profile' style={{ color: 'blue' }}>Go to profile</Link>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({});
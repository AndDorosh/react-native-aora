import { ScrollView, Text, Image, View } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';

const index = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: '100%', width: '100%' }}>
                <View className='w-full items-center justify-center h-full px-4'>
                    <Image
                        source={images.logo}
                        style={{ width: 130, height: 84 }}
                        resizeMode='contain'
                    />

                    <Image
                        source={images.cards}
                        style={{ maxWidth: 380, width: '100%', height: 300 }}
                        resizeMode='contain'
                    />

                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center'>
                            Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            style={{ width:136, height: 15, right: -12 }}
                            className='absolute -bottom-2'
                            resizeMode='contain'
                        />
                    </View>

                    <Text 
                        style={{ 
                            color: '#CDCDE0', 
                            marginTop: 28, 
                            fontSize: 14, 
                            lineHeight: 20, 
                            fontFamily: 'Poppins-Regular' ,
                            textAlign: 'center'
                        }}
                    >Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

                    <CustomButton 
                        title="Continue with Email"
                        handlePress={() => {}}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default index;


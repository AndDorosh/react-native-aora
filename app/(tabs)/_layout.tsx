import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '@/constants';
import { FC } from 'react';

type TTabIcon = {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
};

const TabIcon: FC<TTabIcon> = ({ icon, color, name, focused }) => {
    return (
        <View className="w-6 h-6">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={{ width: 24, height: 24 }}
            />
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen name="create" />
            <Tabs.Screen name="profile" />
            <Tabs.Screen name="bookmark" />
            <Tabs.Screen name="explore" />
            <Tabs.Screen name="search/[query]" />
        </Tabs>
    );
};

export default TabsLayout;

const styles = StyleSheet.create({});

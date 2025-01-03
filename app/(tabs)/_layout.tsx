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
        <View className="items-center justify-center gap-2 pt-4">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={{ width: 24, height: 24 }}
            />
            <Text
                className='text-xs'
                style={ focused ? styles.tabBarActiveText : styles.tabBarInactiveText }
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    tabBarActiveText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#FFA001',
    },
    tabBarInactiveText: {
        fontFamily: 'Poppins-Regular',
        color: '#CDCDE0',
    },
});

export default TabsLayout;

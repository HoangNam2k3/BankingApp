import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const CustomeDrawer = ({ props }) => {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#393AB4' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.imgBack}>
                <Image
                    source={require('../assets/img/ImagePlaceholder.png')}
                    style={{ width: 80, height: 80, borderRadius: 10, marginBottom: 10 }}
                />
                <Text style={styles.userName}> Cameron Williamson </Text>
            </TouchableOpacity>

            <View style={styles.containerDrawerList}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBack: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#393AB4',
        alignItems: 'center',
    },
    userName: {
        width: 100,
        color: '#fff',
        fontSize: 18,
        paddingVertical: 16,
        marginLeft: 16,
    },
    containerDrawerList: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
});

export default CustomeDrawer;

import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop'

const Profile = () => {
  return (
    <View>
        <NavTop tit={'Profile'} img={require('../assets/ActionSettings.png')}/>
        <View style={styles.container}>
            <Image source={require('../assets/ImagePlaceholder.png')}/>
            <View style={{
                flex:1,
                flexDirection:'column',
                marginLeft:16,
                marginRight:100
                }}>
                <Text style={{fontSize:16, fontWeight:700}}>Cameron Williamson</Text>
                <Text style={{fontSize:12, color:'#C5C5C7'}}>$joneswilliam</Text>
            </View>
        </View>
        <Text style={{marginTop: 30, marginLeft: 16, co}}>Personal Information</Text>

    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'flex-end',
    }
})
import { View, Text, StyleSheet, Image, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import NavTop from '../components/NavTop'

const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwtich = () =>setIsEnabled(previousState => !previousState);
  return (
    <View>
        <View style={{backgroundColor:'#fff'}}>
            <NavTop tit={'Profile'} img={require('../assets/ActionSettings.png')}/>
        </View>
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/ImagePlaceholder.png')}/>
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    marginLeft:16,
                    marginRight:100
                    }}>
                    <Text style={{fontSize:16, fontWeight:700}}>Cameron Williamson</Text>
                    <Text style={{fontSize:14, color:'#C5C5C7',paddingTop:10}}>$joneswilliam</Text>
                </View>
            </View>
            <Text style={styles.tit}>Personal Information</Text>


            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Account Number</Text>
                <Text style={{color:'#8A8A8E', fontSize:16}}>3024982387</Text>
            </View>

            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Username</Text>
                <Text style={{color:'#8A8A8E', fontSize:16}}>Dewa_Fan</Text>
            </View>

            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Email</Text>
                <Text style={{color:'#8A8A8E', fontSize:16}}>Dewafan@gmail.com</Text>
            </View>

            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Mobile Phone</Text>
                <Text style={{color:'#8A8A8E', fontSize:16}}>+620932938232</Text>
            </View>

            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Address</Text>
                <Text style={{color:'#8A8A8E', fontSize:16}}>Gotham Road 21...</Text>
            </View>

            <Text style={styles.tit}>Security</Text>
            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Change Pin</Text>
                <Image source={require('../assets/UIChevronRigth.png')}/> 
            </View>
            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Change Password</Text>
                <Image source={require('../assets/UIChevronRigth.png')}/> 
            </View>
            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Finger Print</Text>
                <Switch
                    trackColor={{false: '#767577', true:'#393AB4'}}
                    thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                    ios_backgroundColor= "#3e3e3e"
                    onValueChange={toggleSwtich}
                    value={isEnabled}
                    style={{height:20,transform:[{scaleX:1.3},{scaleY:1.3}]}}
                />
                    

            </View>

            <Text style={styles.tit}>Other</Text>
            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Language</Text>
                <Image source={require('../assets/UIChevronRigth.png')}/> 
            </View>
            <View style={styles.profile}>
                <Text style={{fontSize:16}}>Notification Settings</Text>
                <Image source={require('../assets/UIChevronRigth.png')}/> 
            </View>      


            
        </ScrollView>
    </View>
  )
}

export default Profile
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    profile:{
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomWidth:1,
        padding:12,
        borderBottomColor:'#cccc',
        alignItems:'center'
    },
    tit:{
        marginTop: 15, 
        marginLeft: 15, 
        color:'#8A8A8E', 
        fontSize: 17
    }
})
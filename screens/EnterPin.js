import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EnterPin = () => {

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);
    const pin5Ref = useRef(null);
    const pin6Ref = useRef(null);

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");

    const [isVisible, setIsViewVisible] = useState(false);
    const [backColor, setBackColor] = useState(false);

    const navigation = useNavigation();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleIsSubmited = () => {
      setIsSubmitted(value => !value)
    }

    useEffect(() => {
      if(isSubmitted === true){
        navigation.navigate('HomeDrawer')
      }
    }, [isSubmitted])
    
  return (
    <View style={setBackColor ? styles.grayContainer : styles.container}>
      <KeyboardAvoidingView style={{alignItems: 'center', justifyContent: 'space-between', flex: 1,}}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 12}}> 
            Enter Your Pin 
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', textAlign: 'center', marginBottom: 24}}> 
            Enter your pin to login  
          </Text>
        </View>

        <View style={styles.containTextInputView}>
            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin1Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin1) => {
                setPin1(pin1);
                if(pin1 != "") {
                  pin2Ref.current.focus();
                }
              }}
              style={styles.TextInputText}
              />
            </View>

            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin2Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin2) => {
                setPin2(pin2);
                if(pin2 != "") {
                  pin3Ref.current.focus();
                }
              }}
              style={styles.TextInputText}
              />
            </View>

            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin3Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin3) => {
                setPin3(pin3);
                if(pin3 != "") {
                  pin4Ref.current.focus();
                }
              }}
              style={styles.TextInputText}
              />
            </View>

            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin4Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin4) => {
                setPin4(pin4);
                if(pin4 != "") {
                  pin5Ref.current.focus();
                }
              }}
              style={styles.TextInputText}
              />
            </View>

            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin5Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin5) => {
                setPin5(pin5);
                if(pin5 != "") {
                  pin6Ref.current.focus();
                }
              }}
              style={styles.TextInputText}
              />
            </View>

            <View style={styles.TextInputView}>
              <TextInput 
              placeholder='0'
              ref={(pin6Ref)}
              keyboardType='number-pad'
              maxLength={1}
              onChange={(pin6)=> {
                setPin6(pin6);
                Keyboard.dismiss();
                setIsViewVisible(true)
                setBackColor(true)
              }}
              style={styles.TextInputText}
              />
            </View>
          </View>
      </View>

      <Pressable onPress={() => {toggleIsSubmited()}}>
        <View style={ isVisible ? styles.fingerPrint : styles.hiddenView} >
          <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 12}}>
            Scan your finger print
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', textAlign: 'center', marginBottom: 24}}> 
              Place your finger over the fingerprint sensor
          </Text>
          <Image source={require('../assets/img/ActionFingerprint.png')} style={{marginTop: 10}}/>
        </View>
      </Pressable>
        
      <View style={isVisible ? styles.hiddenView : styles.buttonContainer}>
        <TouchableOpacity style={styles.btnLearnMore}>
          <Text style={styles.textLearnMore}> 
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
      

    </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  grayContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  containTextInputView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  TextInputView: {
    width: 30,
    height: 40,
    justifyContent: ' center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#393AB4',
  },
  TextInputText: {
    fontSize: 20,
    textAlign: 'center'
  },
  headerContainer: {
    marginBottom: 20,
  },
  btnLearnMore: {
    width: 400,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
   marginBottom: 10,
  },
  textLearnMore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F9AFF',
  },
  fingerPrint: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 90,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
  },
  hiddenView: {
    display: 'none',
  },
});

export default EnterPin;
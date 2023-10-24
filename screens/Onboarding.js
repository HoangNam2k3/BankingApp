import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
    const navigation = useNavigation();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleIsSubmited = () => {
      setIsSubmitted(value => !value)
    }

    useEffect(() => {
      if (isSubmitted === true) {
        navigation.navigate('Splash');
      }
    }, [isSubmitted]);

    const onDone = () => {};

    const onSkip = () => {};

    const showSkipButton = () => {};
  
    const RenderItem = ({ item }) => {
      return (
        <View style={styles.containRenderItem}>
          <Image style={styles.introImageStyle} source={item.uri} />
          <View style={styles.introSlogonBox}>
            <Text style={styles.introTextStyle}>{item.text}</Text>
            <Text style={{
              fontSize: 14,
              fontWeight: '400',
              width: 296, 
              textAlign: 'center',
              alignSelf: 'flex-end',
              paddingTop: item.pdTop,
            }}>{item.title}</Text>  
          </View>     
        </View>
      );
    };
  
    return (
      <AppIntroSlider
        dotClickEnabled={true}
        activeDotStyle={{
          backgroundColor: '#393ab4',
          marginLeft: 16,
        }}
        dotStyle={{
          marginLeft: 16,
          backgroundColor:'#ccc',
        }}    
        data={slides}
        renderItem={RenderItem}
        showSkipButton={false}
        showNextButton={true}
        renderNextButton={() => {
          return (
            <TouchableOpacity onPress={() => {toggleIsSubmited()}} style={styles.introButton}>
              <Text style={styles.textSkipButton}> Skip </Text>
            </TouchableOpacity>
          );
        }}
        renderDoneButton={() =>{
          return(
            <TouchableOpacity onPress={ () => {toggleIsSubmited()}} style={styles.introButton}>
              <Text style={styles.textDoneButton}> Get Started </Text>
            </TouchableOpacity>
          );
        }}
        onDone={onDone}
        onSkip={onSkip}
      />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    containRenderItem: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 140,
      paddingBottom: 100,
    },
    introImageStyle: {
    },
    introTextStyle: {
      fontSize: 32,
      fontWeight: '700',
    },
    introSlogonBox: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    introButton: {
      height: 48,
    },
    textSkipButton: {
      color: '#c5c5c7',
      lineHeight: 48,
    },
    textDoneButton: {
      color: '#393bb7',
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 48,
    },
  });
  
  const slides = [
    {
      key: 1,
      text: 'Easy, Fast & Trusted',
      title: 'Fast money transfer and guaranteed safe transactions with others',
      uri: require('../assets/img/illustration2.png'),
      backgroundColor: '#000',
      pdTop: 100,
    },
    {
      key: 2,
      title: 'Track the progress of your savings and start a habit of saving with us',
      text: 'Saving your Money',  
      uri: require('../assets/img/illustration.png'),
      backgroundColor: '#fff',
      pdTop: 40,
    },
    {
      key: 3,
      title: 'Provides a quality of the financial system with free money transactions without any fees',   
      text: 'Free Transactions',
      uri: require('../assets/img/undraw_online_transactions_02ka.png'),
      backgroundColor: '#fff',
      pdTop: 40,
    },
  ];

export default Onboarding;
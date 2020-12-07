import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },
    button__home:{
      marginRight: 40
    },
    darkbg:{
      backgroundColor: "#333"
    },
    img:{
      marginBottom: 25
    },
    login__msg:(text = 'none') => ({
      fontWeight: 'bold',
      fontSize: 18,
      color: 'red',
      // marginTop: 10,
      marginBottom: 25,
      display: text
    }),
    login__form:{
      width: '80%'
    },
    login__input:{
      backgroundColor: '#fff',
      fontSize: 18,
      padding: 7,
      marginBottom: 15,
      borderRadius: 5
    },
    login__button:{
      padding: 12,
      backgroundColor: '#EA6A69',
      alignSelf: 'center',
      borderRadius: 5
    },
    login__buttonText:{
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333'
    }

  });

  export {css};
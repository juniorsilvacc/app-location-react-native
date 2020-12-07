import React from 'react';
import {View, Text} from 'react-native';
import {css} from '../assets/css/css';

export default function Page(){
    return(
        <View style={css.textPage}>
            <Text>Meu nome é tenho 24 anos de idade e sou desenvolvedor mobile!</Text>
        </View>
    )
}
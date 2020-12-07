import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Rastreio({navigation}) {
    return (
        <View>
            <Text>Este é o componente rastreio</Text>
            <Button 
                title="Ir para Rastreio" 
                onPress={() => navigation.navigate('Rastreio', {
                    id: 30
                })}
            />
        </View>
    );
}
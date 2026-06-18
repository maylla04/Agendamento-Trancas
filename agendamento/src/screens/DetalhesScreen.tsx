import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

export default function DetalhesScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Detalhe</Text>
    </View>
  );
}
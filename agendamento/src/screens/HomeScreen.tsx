import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Agendamento } from '../types/agendamento';
import { useSQLiteContext } from 'expo-sqlite';
import { listarAgendamentos } from '../repositories/agendamentoRepository';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const db = useSQLiteContext()
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    
  useEffect(() => {
    carregarAgendamentos()
}, []);

async function carregarAgendamentos() {
    const resultado = await listarAgendamentos(db);
    setAgendamentos(resultado)
}
  return (
    <View>
      <Text>Agendamento de tranças - Maylla Braids</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('NovoAgendamento')}>
        
        <Text>Novo Agendamento</Text>
      </TouchableOpacity>
      <FlatList
    data={agendamentos}
    keyExtractor={(item) => String(item.id)}
    renderItem={({ item }) => (
        <View>
            <Text>{item.nome}</Text>
            <Text>{item.data} às {item.horario}</Text>
            <Text>{item.tipo_tranca}</Text>
        </View>
    )}
/>
    </View>
  );
}
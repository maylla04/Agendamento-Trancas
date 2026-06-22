import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Agendamento } from '../types/agendamento';
import { useSQLiteContext } from 'expo-sqlite';
import { listarAgendamentos } from '../repositories/agendamentoRepository';
import CardAgendamento from '../components/CardAgendamento';
import BotaoPrimario from '../components/BotaoPrimario';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const db = useSQLiteContext()
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
    
  useFocusEffect(
    useCallback(() => {
        carregarAgendamentos();
    }, [])
);

  async function carregarAgendamentos() {
    const resultado = await listarAgendamentos(db);
    setAgendamentos(resultado)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>✂️ Maylla Braids</Text>
      <Text style={styles.subtitulo}>Agendamentos</Text>
      <BotaoPrimario texto="+ Novo Agendamento" onPress={() => navigation.navigate('NovoAgendamento')}/>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { agendamento: item })}>
            <CardAgendamento agendamento={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5ECD7',
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6B3F2A',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#4A2C1A',
    marginBottom: 20,
  },
});
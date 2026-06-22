import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useSQLiteContext } from 'expo-sqlite';
import { atualizarAgendamento } from '../repositories/agendamentoRepository';
import BotaoPrimario from '../components/BotaoPrimario';

type Props = NativeStackScreenProps<RootStackParamList, 'EditarAgendamento'>;

export default function EditarAgendamentoScreen({ navigation, route }: Props) {
  const { agendamento } = route.params;
  const db = useSQLiteContext();

  const [nome, setNome] = useState(agendamento.nome);
  const [telefone, setTelefone] = useState(agendamento.telefone);
  const [data, setData] = useState(agendamento.data);
  const [horario, setHorario] = useState(agendamento.horario);
  const [tipoTranca, setTipoTranca] = useState(agendamento.tipo_tranca);

  async function salvarEdicao() {
    await atualizarAgendamento(db, agendamento.id, {
      nome, telefone, data, horario,
      tipo_tranca: tipoTranca,
      foto_uri: agendamento.foto_uri
    });
    Alert.alert('Agendamento atualizado com sucesso!');
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Editar Agendamento</Text>
      <TextInput style={styles.input} placeholder="Nome do cliente" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Data" value={data} onChangeText={setData} />
      <TextInput style={styles.input} placeholder="Horário" value={horario} onChangeText={setHorario} />
      <TextInput style={styles.input} placeholder="Tipo de trança" value={tipoTranca} onChangeText={setTipoTranca} />
      <BotaoPrimario texto="Salvar alterações" onPress={salvarEdicao} />
    </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B3F2A',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#6B3F2A',
  },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agendamento } from '../types/agendamento';

type Props = {
    agendamento: Agendamento;
}

export default function CardAgendamento({ agendamento }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{agendamento.nome}</Text>
            <Text style={styles.info}>{agendamento.data} às {agendamento.horario}</Text>
            <Text style={styles.info}>{agendamento.tipo_tranca}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F5ECD7',  // bege
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        elevation: 3,
        borderLeftWidth: 5,
        borderLeftColor: '#6B3F2A',  // marrom
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6B3F2A',
    },
    info: {
        fontSize: 14,
        color: '#4A2C1A',
        marginTop: 4,
    }
});
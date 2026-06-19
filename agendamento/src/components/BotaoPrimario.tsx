import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    texto: string;
    onPress: () => void;
}

export default function BotaoPrimario({ texto, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#6B3F2A',   // marrom
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        marginBottom: 12,
        elevation: 3,
    },
    textoBotao: {
        color: '#F5ECD7',             // bege claro
        fontSize: 16,
        fontWeight: 'bold',
    }
});
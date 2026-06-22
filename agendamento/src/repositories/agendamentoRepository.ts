import { SQLiteDatabase } from "expo-sqlite";
import { Agendamento, NovoAgendamento } from "../types/agendamento";

export async function listarAgendamentos(db: SQLiteDatabase): Promise<Agendamento[]>{
    const resultado = await db.getAllAsync<Agendamento>(
        'SELECT * FROM agendamentos ORDER BY id DESC;'
    );
    return resultado
}

export async function inserirAgendamento(db: SQLiteDatabase, 
    agendamento: NovoAgendamento): Promise<void>
    {
        await db.runAsync(
            'INSERT INTO agendamentos (nome, telefone, data, horario, tipo_tranca, foto_uri) VALUES (?, ?, ?, ?, ?, ?);',
            [
                agendamento.nome, 
                agendamento.telefone, 
                agendamento.data, 
                agendamento.horario, 
                agendamento.tipo_tranca, 
                agendamento.foto_uri
            ]
        )
}

export async function excluirAgendamento(db: SQLiteDatabase, 
    id: number): Promise<void> {
    await db.runAsync('DELETE FROM agendamentos WHERE id = ?;', [id]) 
}

export async function buscarAgendamentoPorId(db: SQLiteDatabase, id: number): Promise<Agendamento | null> {
    const resultado = await db.getFirstAsync<Agendamento>(
        'SELECT * FROM agendamentos WHERE id = ?;', [id]
    );
    return resultado ?? null;
}

export async function atualizarAgendamento(db: SQLiteDatabase, 
    id: number, agendamento: NovoAgendamento): Promise<void>
    {
        await db.runAsync(
            'UPDATE agendamentos SET nome = ?, telefone = ?, data = ?, horario = ?, tipo_tranca = ?, foto_uri = ? WHERE id = ?;',
            [
                agendamento.nome, 
                agendamento.telefone, 
                agendamento.data, 
                agendamento.horario, 
                agendamento.tipo_tranca, 
                agendamento.foto_uri,
                id
            ]
        )
}


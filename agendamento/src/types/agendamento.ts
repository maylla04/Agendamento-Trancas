export type Agendamento = {
    id: number;
    nome: string;
    telefone: string;
    data: string;
    horario: string;
    tipo_tranca: string;
    foto_uri: string;
}

export type NovoAgendamento = {
    nome: string;
    telefone: string;
    data: string;
    horario: string;
    tipo_tranca: string;
    foto_uri: string;
}
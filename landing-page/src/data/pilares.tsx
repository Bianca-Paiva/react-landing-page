import iconFoco from '../assets/iconFoco.png';
import iconDados from '../assets/iconDados.png';
import iconIntegracao from '../assets/iconIntegracao.png';
import iconSeguranca from '../assets/iconSeguranca.png';

export interface Pilar {
    id: number; // Identificador único do pilar, utilizado para renderização e manipulação de dados
    icon: string; // URL ou caminho para o ícone representativo do pilar, utilizado para exibição visual na interface
    titulo: string; // Título do pilar, utilizado para destacar o nome ou conceito central do pilar
    descricao: string; // Descrição detalhada do pilar, fornecendo informações adicionais sobre seu propósito, benefícios ou características
}

export const pilares: Pilar[] = [
    {
        id: 1,
        icon: iconFoco, 
        titulo: 'Foco Técnico',
        descricao: 'Módulos específicos para laboratórios e oficinas.'
    },

    {
        id: 2,
        icon: iconDados, 
        titulo: 'Dados Ativos',
        descricao: 'Dashboards que mostram o desempenho individual.'
    },

    {
        id: 3,
        icon: iconIntegracao, 
        titulo: 'Integração Total',
        descricao: 'Comunicação fluida entre coordenação e alunos.'
    },

    {
        id: 4,
        icon: iconSeguranca, 
        titulo: 'Segurança Robusta',
        descricao: 'Dados protegidos com criptografia de ponta.'
    },
]; 
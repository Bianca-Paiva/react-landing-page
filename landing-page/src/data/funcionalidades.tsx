// Dados das funcionalidades da plataforma da landing page

export interface Funcionalidade {
  id: number;
  icon: string; // URL ou caminho para o ícone da funcionalidade
  title: string;
  description: string;
}

export const funcionalidades: Funcionalidade[] = [
    {   
        id: 1, 
        icon: "📊", 
        title: "Relatórios Detalhados", 
        description: "Vizualize o crescimento de cada turma com gráficos interativos e exportação simplificada de dados." 
    },

    {   
        id: 2, 
        icon: "🎯", 
        title: "Metas de Aprendizado", 
        description: "Defina competências específicas por curso e acompanhe a proficiência técnica de cada estudante." 
    },

    {   
        id: 3, 
        icon: "🔔", 
        title: "Alertas Inteligentes", 
        description: "Seja notificado automaticamente sobre quedas de rendimento ou faltas consecutivas." 
    },

    {   
        id: 4, 
        icon: "🤝", 
        title: "Gestão de Parceiras", 
        description: "Conecte alunos a estágios e empresas parceiras diretamente pela plataforma." 
    },

    {   
        id: 5, 
        icon: "📱", 
        title: "App do Aluno", 
        description: "Acesso rápido a notas, horários e materiais didáticos através de uma experiência mobile nativa." 
    },

    {   
        id: 6, 
        icon: "🔒", 
        title: "LGPD Compliance", 
        description: "Gestão de dados em total conformidade com as leis de proteção de dados brasileiras." 
    }
];
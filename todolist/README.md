# Requisitos da Aplicação
A aplicação deve ser desenvolvida individualmente e atender aos seguintes requisitos:

Requisitos Funcionais (O que a aplicação deve fazer):
Adicionar Tarefas: O usuário deve ser capaz de digitar o nome de uma nova tarefa em um campo de texto e adicioná-la à lista ao clicar em um botão.

Listar Tarefas: As tarefas adicionadas devem ser exibidas em uma lista na tela.

Marcar Tarefa como Concluída: O usuário deve poder marcar uma tarefa como "concluída". Isso deve ter um reflexo visual (ex: a tarefa fica riscada, muda de cor, etc.). O ideal é que seja possível também desmarcar a tarefa.

Não persistência: Os dados não precisam ser salvos. Toda vez que a página for atualizada, a lista de tarefas pode voltar ao seu estado inicial. Não haverá conexão com banco de dados.

# Requisitos Técnicos (Como a aplicação deve ser construída):
Tecnologias: A aplicação deve ser criada usando React com TypeScript.

Setup do Projeto: O projeto deve ser iniciado utilizando o Vite.

Controle de Versão: O código-fonte completo do projeto deve ser hospedado em um repositório público no seu GitHub.

# Documentação (README.md) - A Parte Mais Importante!
Tão importante quanto escrever o código é saber documentá-lo. O README.md do seu repositório será o seu relatório sobre o projeto. Ele deve ser bem escrito e explicar o processo de criação da sua aplicação.

Seu README deve conter, no mínimo, as seguintes seções:

Sobre o Projeto: Uma breve descrição do que a aplicação faz.

Tecnologias Utilizadas: Liste as principais tecnologias que você usou (React, TypeScript, Vite, etc.).

Estrutura de Componentes: Descreva os componentes que você criou (ex: Header, TodoList, TodoItem). Explique a responsabilidade de cada um e como eles se comunicam (via props).

Gerenciamento de Estado (useState): Explique quais estados sua aplicação gerencia. Por exemplo: "Utilizei um estado para armazenar o array de tarefas e outro para controlar o valor do input de nova tarefa". Mostre pequenos trechos de código para ilustrar.

Tipagem com TypeScript: Mostre como você usou o TypeScript para criar tipos ou interfaces para os seus dados. Por exemplo, como você definiu o tipo de um objeto de tarefa (ex: id, text, completed).

Efeitos Colaterais (useEffect): Se você utilizou o useEffect para alguma finalidade (por exemplo, para exibir uma mensagem no console toda vez que a lista de tarefas muda), explique aqui o que ele faz e por que você o utilizou.

Lembre-se: O README é sua chance de demonstrar que você entendeu os conceitos por trás do código que escreveu. Capriche!

# Desafio (Nota extra)
Para aqueles que desejam ir além e praticar a estilização de componentes, proponho um desafio bônus:

Utilize uma biblioteca de estilização para construir a interface, como Tailwind CSS, Material-UI, ou Shadcn/UI.

A implementação de qualquer uma dessas bibliotecas para estilizar a aplicação de forma coesa e agradável garantirá um bônus na nota da atividade.

Links úteis para o desafio:

Instalando Tailwind CSS com ViteLinks para um site externo.

Documentação do Material-UILinks para um site externo.

Documentação do Shadcn/UILinks para um site externo.
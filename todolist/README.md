# To-Do List App com React e TypeScript

Este é o repositório do projeto To-Do List, uma aplicação web simples desenvolvida para gerenciar tarefas diárias. O projeto foi construído como um exercício prático para aplicar conceitos fundamentais do ecossistema React, incluindo componentização, gerenciamento de estado, e tipagem estática com TypeScript.

## 🚀 Sobre o Projeto

A aplicação permite que os usuários realizem as seguintes ações:
* **Adicionar novas tarefas:** Um campo de texto permite a inserção de novas tarefas na lista.
* **Listar tarefas:** As tarefas são exibidas em duas seções distintas: "Pendentes" e "Finalizadas".
* **Marcar tarefas como concluídas:** Cada tarefa possui um checkbox que, ao ser marcado, move a tarefa para a lista de finalizadas, aplicando um estilo visual diferente e registrando a data e hora da conclusão. A ação pode ser revertida.

## 🛠️ Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas na construção deste projeto foram:

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a segurança e a manutenibilidade.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna que oferece um ambiente de desenvolvimento extremamente rápido.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização rápida e responsiva da interface.

## 🧱 Estrutura de Componentes

O projeto foi modularizado em componentes com responsabilidades únicas, seguindo as melhores práticas do React para organização e reutilização de código.

* `App.tsx`: É o componente principal (container), responsável por gerenciar o estado global da aplicação e orquestrar a comunicação entre os outros componentes.

* `AddTaskForm.tsx`: Contém o formulário (`<form>`) com o campo de texto e o botão para adicionar novas tarefas.
    * **Responsabilidade:** Gerenciar o estado do input de texto e notificar o componente `App` quando uma nova tarefa deve ser criada.
    * **Comunicação:** Recebe uma função `onAddTask` via props do `App.tsx` e a executa quando o formulário é enviado.

* `TaskList.tsx`: Componente reutilizável que renderiza uma lista de tarefas (`<ul>`).
    * **Responsabilidade:** Receber um título e um array de tarefas e renderizá-los na tela.
    * **Comunicação:** Recebe as props `title`, `tasks`, e a função `onToggle`. Ele itera sobre o array `tasks` e renderiza um componente `TaskItem` para cada tarefa, repassando as props necessárias.

* `TaskItem.tsx`: Renderiza um único item da lista de tarefas (`<li>`).
    * **Responsabilidade:** Exibir o texto da tarefa, o checkbox de conclusão e a data de finalização (se aplicável).
    * **Comunicação:** Recebe o objeto `task` e a função `onToggle` via props. Ao clicar no checkbox, ele chama a função `onToggle` com o ID da tarefa correspondente, delegando a lógica de alteração de estado para o componente `App`.

## 🧠 Gerenciamento de Estado (useState)

O estado da aplicação é gerenciado de forma local dentro dos componentes utilizando o hook `useState` do React.

O principal estado da aplicação reside no `App.tsx` e armazena o array com todos os objetos de tarefa.

```tsx
// Em App.tsx
import { useState } from 'react';
import type { Task } from './interfaces/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  // ...
}
```

tasks: Um array de objetos, onde cada objeto segue a interface Task. Ele é a "única fonte da verdade" para a lista de tarefas. Todas as operações (adicionar, marcar como concluída) resultam na atualização deste estado.

O componente AddTaskForm.tsx também possui seu próprio estado local para controlar o valor do input de forma independente.

```tsx
// Em AddTaskForm.tsx
import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');
// ...
}
```

Claro! Aqui está o conteúdo completo do README.md em um bloco único para facilitar a cópia.

Basta clicar no botão "Copiar" no canto superior direito do bloco de código abaixo e colar diretamente no seu arquivo README.md.

Markdown

# To-Do List App com React e TypeScript

Este é o repositório do projeto To-Do List, uma aplicação web simples desenvolvida para gerenciar tarefas diárias. O projeto foi construído como um exercício prático para aplicar conceitos fundamentais do ecossistema React, incluindo componentização, gerenciamento de estado, e tipagem estática com TypeScript.

## 🚀 Sobre o Projeto

A aplicação permite que os usuários realizem as seguintes ações:
* **Adicionar novas tarefas:** Um campo de texto permite a inserção de novas tarefas na lista.
* **Listar tarefas:** As tarefas são exibidas em duas seções distintas: "Pendentes" e "Finalizadas".
* **Marcar tarefas como concluídas:** Cada tarefa possui um checkbox que, ao ser marcado, move a tarefa para a lista de finalizadas, aplicando um estilo visual diferente e registrando a data e hora da conclusão. A ação pode ser revertida.

## 🛠️ Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas na construção deste projeto foram:

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a segurança e a manutenibilidade.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna que oferece um ambiente de desenvolvimento extremamente rápido.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização rápida e responsiva da interface.

## 🧱 Estrutura de Componentes

O projeto foi modularizado em componentes com responsabilidades únicas, seguindo as melhores práticas do React para organização e reutilização de código.

* `App.tsx`: É o componente principal (container), responsável por gerenciar o estado global da aplicação e orquestrar a comunicação entre os outros componentes.

* `AddTaskForm.tsx`: Contém o formulário (`<form>`) com o campo de texto e o botão para adicionar novas tarefas.
    * **Responsabilidade:** Gerenciar o estado do input de texto e notificar o componente `App` quando uma nova tarefa deve ser criada.
    * **Comunicação:** Recebe uma função `onAddTask` via props do `App.tsx` e a executa quando o formulário é enviado.

* `TaskList.tsx`: Componente reutilizável que renderiza uma lista de tarefas (`<ul>`).
    * **Responsabilidade:** Receber um título e um array de tarefas e renderizá-los na tela.
    * **Comunicação:** Recebe as props `title`, `tasks`, e a função `onToggle`. Ele itera sobre o array `tasks` e renderiza um componente `TaskItem` para cada tarefa, repassando as props necessárias.

* `TaskItem.tsx`: Renderiza um único item da lista de tarefas (`<li>`).
    * **Responsabilidade:** Exibir o texto da tarefa, o checkbox de conclusão e a data de finalização (se aplicável).
    * **Comunicação:** Recebe o objeto `task` e a função `onToggle` via props. Ao clicar no checkbox, ele chama a função `onToggle` com o ID da tarefa correspondente, delegando a lógica de alteração de estado para o componente `App`.

## 🧠 Gerenciamento de Estado (useState)

O estado da aplicação é gerenciado de forma local dentro dos componentes utilizando o hook `useState` do React.

O principal estado da aplicação reside no `App.tsx` e armazena o array com todos os objetos de tarefa.

```tsx
// Em App.tsx
import { useState } from 'react';
import type { Task } from './interfaces/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  // ...
}
```
tasks: Um array de objetos, onde cada objeto segue a interface Task. Ele é a "única fonte da verdade" para a lista de tarefas. Todas as operações (adicionar, marcar como concluída) resultam na atualização deste estado.

O componente AddTaskForm.tsx também possui seu próprio estado local para controlar o valor do input de forma independente.

TypeScript

// Em AddTaskForm.tsx
import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');
  // ...
}
⌨️ Tipagem com TypeScript
Para garantir a consistência e a segurança dos dados que fluem pela aplicação, o TypeScript foi utilizado para definir a estrutura dos objetos de tarefa através de uma interface.

O arquivo src/interfaces/Task.ts centraliza essa definição:

TypeScript

// src/interfaces/Task.ts
export interface Task {
  id: number;
  text: string;
  completed: boolean;
  completedAt: Date | null;
}
Essa interface garante que todo objeto de tarefa na aplicação terá um id numérico, um text em formato de string, um status completed booleano e uma data de conclusão que pode ser Date ou null.

✨ Efeitos Colaterais (useEffect)
Apesar de a funcionalidade principal não exigir useEffect, ele foi adicionado ao projeto para um fim didático e de melhoria na experiência do usuário: atualizar o título da página com o número de tarefas pendentes.

Isso cria um efeito colateral que sincroniza o estado da aplicação React com uma parte externa (a API do navegador para o título do documento).

TypeScript
```tsx
// Em App.tsx
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // ... resto do componente
  
  useEffect(() => {
    const pendingTasksCount = tasks.filter(task => !task.completed).length;
    
    if (pendingTasksCount > 0) {
      document.title = `${pendingTasksCount} tarefa(s) pendente(s)`;
    } else {
      document.title = 'To-Do List | Tudo em dia!';
    }
  }, [tasks]); // O array de dependências
}
```

O que ele faz: Este efeito calcula o número de tarefas não concluídas.

Por que foi utilizado: Para que o título da aba do navegador reflita dinamicamente o estado da aplicação.

Array de dependências [tasks]: Garante que o efeito seja executado somente quando o array tasks sofrer alguma alteração, evitando re-renderizações desnecessárias.

⚙️ Como Executar o Projeto
Para executar este projeto localmente, siga os passos abaixo:

Bash

# 1. Clone o repositório
git clone https://github.com/edumxk/To-Do-List.git

# 2. Navegue até a pasta do projeto
cd seu-repositorio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra http://localhost:5173 no seu navegador para ver a aplicação.
# Lista de tarefas

O seguinte projeto foi feito como parte do processo seletivo da empresa Super Mega Vendas. Para mais informações, [Clicar aqui](https://www.instagram.com/supermegavendas/).

## Uso e Configuração

Para usar a aplicação, basta [Clicar aqui](https://lista-tarefas-self.vercel.app/) já que a mesma se encontra com um deploy armazenado no Vercel.

Para baixar o código e vizualiza-lo melhor, clique em "New" <span style="color:green">**(O botão verde que está no início deste repositório)**</span> e faça o clone do projeto.

Ao baixar o app, siga os seguintes passos: 
1. Instale as dependências usando npm ou yarn. 
2. Clique no link que vai aparecer no terminal e a página irá abrir para você.
3. Para editar o código, ou vizualiza-lo da melhor maneira possível, use um editor de código de sua preferência.

## Funcionamento 

Basta escrever a tarefa no campo "Adicone uma tarefa" e escolher
uma prioridade para ela. 
Para editar, você pode clicar no botão azul na tarefa salva. Para salvar você pode:

- Clicar no botão salvar
- Clicar do lado de fora da tarefa
- Apertar o botão "enter"

Para excluir, basta clicar no botão vermelho, mas só podem ser excluídas as tarefas que não foram concluidas.
Para concluir, basta clicar no botão verde escrito "completar".

Quando recarregar a página as atividades continuam aparecendo, elas estão salvas em localStorage.

## Tenologias usadas

Para a estilização da lista foi usado o [Tailwind CSS](https://tailwindcss.com/)

Para a validação do formulário (caso tentem criar uma tarefa sem título ou sem prioridade, vai aparecer um aviso de que é necessário) foi usado o [React Hook Form](https://react-hook-form.com/).

Todos os ícones que aparecem na aplicação (os dos botões e o do título) são do [Heroicons](https://heroicons.com/).

Os commits seguiram o padrão do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Por fim, para fazer deploy da aplicação (o extra que realizei) usei o [Vercel](https://vercel.com).
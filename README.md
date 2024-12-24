# Lista de tarefas

O seguinte projeto foi feito como parte do processo seletivo da empresa Super Mega Vendas. Para mais informações, [Clicar aqui](https://www.instagram.com/supermegavendas/).

## Uso e Configuração

Para usar a aplicação, basta [Clicar aqui](https://lista-tarefas-self.vercel.app/) já que a mesma se encontra com um deploy armazenado no Vercel.

Para baixar o código, basta clicar em "New" <span style="color:green">**(O botão verde que está no início deste repositório)**</span> e escolher a melhor forma de fazer clone desse projeto (para quem nunca fez esse processo anteriormente, recomendo fazer o download ZIP).

Ao baixar o app, faça o seguinte: 
1. Abra o Terminal na aplicação 
2. Instale as dependências usando npm ou yarn (se nunca fez isso, [clique aqui para instalar o node e o npm](https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos#:~:text=A%20instala%C3%A7%C3%A3o%20do%20Node%20no,adicionado%20ao%20PATH%20do%20Windows.) )
3. Digite "npm run dev" ou 'yarn run dev" (o instalador que você usou)
4. Clique no link que vai aparecer no terminal e a página irá abrir para você.
5. Para editar o código, ou vizualiza-lo da melhor maneira possível, use um editor de código (é comum usarem o Visual Studio Code para isso, para instala-lo, [clique aqui](https://code.visualstudio.com/download)).

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
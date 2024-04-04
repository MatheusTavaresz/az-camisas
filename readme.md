## Catálogo de Camisetas
Este projeto é uma aplicação web responsiva desenvolvida em Next.js, React e Tailwind CSS. Ele apresenta uma lista de camisetas de uma loja virtual fictícia, permitindo aos usuários filtrar os produtos por nome, preço, tamanho e cor, além de visualizar os detalhes de cada camiseta.
### Como executar o projeto
#### Clonar o repositório:
```
git clone <URL_DO_REPOSITORIO>
```
#### Instalar as dependências:
```
npm install
```
#### Rodar a aplicação:
```
npm run dev
```
#### Acessar a aplicação no navegador:
http://localhost:3000
## Funcionalidades
- Lista de Camisetas: Exibe uma lista de camisetas com informações básicas, como nome, imagem, preço e disponibilidade de tamanhos e cores.
- Filtros de Busca: Permite aos usuários filtrar os produtos por nome, preço, tamanho e cor para encontrar facilmente o que estão procurando.
- Detalhes da Camiseta: Ao clicar em uma camiseta na lista, os usuários são levados a uma página de detalhes com informações mais detalhadas sobre o produto selecionado.
- Responsividade: A aplicação é totalmente responsiva, oferecendo uma experiência de usuário consistente em dispositivos móveis e desktops.

#### Estrutura do Projeto
- src/pages/: Contém as configurações de páginas (_app.js) e a página de detalhes da camiseta.
- src/components/: Componentes reutilizáveis da aplicação.
- src/data/: Dados simulados para as camisetas.

#### Notas
**Dados Simulados:** _Os dados das camisetas são simulados e podem ser encontrados em data/shirts.js. Você pode adicionar ou modificar os dados conforme necessário._
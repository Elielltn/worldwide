# WorldWide

O site permite que o usuário visualize detalhes de vários países do mundo utilizando a API RestCountries. O usuário pode ver todos os países, buscar um país específico, filtrar países por região, sub-região e população e, também, ordena-los de diferentes formas.

## Funcionalidades

### 1. Listagem de Países
- Ao acessar o site, uma lista inicial de países é exibida, mostrando:
  - Nome
  - Bandeira
  - Capital
  - Região
  - População
- A listagem é paginada, carregando 20 países por vez, com a opção de "Carregar mais" no final da página.

### 2. Pesquisa por Nome
- O site possui uma barra de pesquisa que permite ao usuário procurar por países específicos.
- Ao digitar parte ou todo o nome de um país, a lista é filtrada em tempo real para exibir apenas países que correspondem ao termo pesquisado.

### 3. Filtros
O site conta com diversos filtros que permitem refinar os resultados de acordo com as preferências do usuário:
- **Região**: Filtra países de uma região específica (por exemplo: Europa, África, Oceania).
- **Sub-região**: Filtra por sub-regiões dentro de uma região.
- **População**: Filtra países com base em faixas de população:
  - `<1M` (Menos de 1 milhão)
  - `1M-10M` (Entre 1 milhão e 10 milhões)
  - `10M-100M` (Entre 10 milhões e 100 milhões)
  - `>100M` (Mais de 100 milhões)

### 4. Ordenação
O usuário pode ordenar os países com base em:
- Nome (em ordem alfabética)
- População (em ordem crescente)
- Área (em ordem crescente)

### 5. Carregar Mais
- A funcionalidade "Carregar mais" permite ao usuário visualizar mais países na listagem, 20 países por vez.
- O botão só aparece enquanto houver mais países para carregar.

### 6. Visualização de Detalhes
- Ao clicar no botão **Details** ao lado de um país, o usuário é redirecionado para uma página de detalhes, onde são exibidas as seguintes informações:
  - Nome oficial do país
  - Bandeira
  - Capital
  - Região e sub-região
  - População
  - Área
  - Idiomas falados
  - Moedas utilizadas
  - Fuso horário
  - Código TLD (domínio de internet)
  - Código de discagem internacional

## Como Usar o Site

1. **Explorar Países**: Ao acessar o site, a lista de países é carregada automaticamente. Use o botão "Carregar mais" para explorar mais países.
2. **Pesquisar Países**: Utilize a barra de pesquisa para encontrar um país específico digitando parte ou todo o seu nome.
3. **Aplicar Filtros**: Use os menus suspensos para filtrar os países por região, sub-região ou população.
4. **Ordenar Países**: Escolha um critério de ordenação (nome, população ou área) para organizar os resultados de acordo com sua preferência.
5. **Visualizar Detalhes**: Clique no botão **Details** ao lado de um país para visualizar informações detalhadas sobre ele.
6. **Voltar à Lista**: Na página de detalhes, use o botão "Voltar" para retornar à listagem de países e continuar sua navegação.

## Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API** (para obtenção de dados da API Rest Countries)

## Utilizar o site localmente
1. Clone o repositório.
   - git clone https://github.com/Elielltn/worldwide.git (Para o comando funcionar o git deve estar instalado na maquina. Site para download: https://git-scm.com/downloads)
2. Navegue até a pasta do projeto.
   - cd worldwide-main
3. Abra o arquivo HTML no navegador.
   - open index.html (MacOS)
   - start index.html (Windows)

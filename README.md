# DevBurger - Backend

Este é o backend do projeto DevBurger, uma aplicação completa para gerenciar pedidos em uma hamburgueria. A API foi desenvolvida utilizando Node.js, Express, Sequelize, PostgreSQL e MongoDB para fornecer uma solução robusta e escalável.

## Funcionalidades

- **Autenticação e Autorização**: Sistema de login com autenticação via JWT.
- **Gestão de Usuários**: CRUD para usuários com diferentes níveis de permissão (admin e cliente).
- **Gestão de Produtos**: CRUD para produtos, incluindo nome, descrição, preço e categoria.
- **Gestão de Pedidos**: CRUD para pedidos, permitindo a criação, leitura, atualização e exclusão de pedidos feitos pelos clientes.
- **Integração com MongoDB**: Utilizado para armazenar informações específicas, como histórico de pedidos.
- **Integração com PostgreSQL**: Banco de dados relacional utilizado para armazenar a maior parte dos dados estruturados da aplicação.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript para o backend.
- **Express**: Framework web para Node.js, facilitando a criação de rotas e middleware.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações principais da aplicação.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados não estruturados, como o histórico de pedidos.
- **JWT**: JSON Web Tokens para autenticação e autorização de usuários.

## Configuração e Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/pablomartinsti/devBurger-Backend.git
   cd devBurger-Backend
# DevBurger - Backend

Este é o backend do projeto DevBurger, uma aplicação completa para gerenciar pedidos em uma hamburgueria. A API foi desenvolvida utilizando Node.js, Express, Sequelize, PostgreSQL e MongoDB para fornecer uma solução robusta e escalável.

## Funcionalidades

- **Autenticação e Autorização**: Sistema de login com autenticação via JWT.
- **Gestão de Usuários**: CRUD para usuários com diferentes níveis de permissão (admin e cliente).
- **Gestão de Produtos**: CRUD para produtos, incluindo nome, descrição, preço e categoria.
- **Gestão de Pedidos**: CRUD para pedidos, permitindo a criação, leitura, atualização e exclusão de pedidos feitos pelos clientes.
- **Integração com MongoDB**: Utilizado para armazenar informações específicas, como histórico de pedidos.
- **Integração com PostgreSQL**: Banco de dados relacional utilizado para armazenar a maior parte dos dados estruturados da aplicação.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript para o backend.
- **Express**: Framework web para Node.js, facilitando a criação de rotas e middleware.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações principais da aplicação.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados não estruturados, como o histórico de pedidos.
- **JWT**: JSON Web Tokens para autenticação e autorização de usuários.

## Configuração e Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/pablomartinsti/devBurger-Backend.git
   cd devBurger-Backend




   # DevBurger - Backend

Este é o backend do projeto DevBurger, uma aplicação completa para gerenciar pedidos em uma hamburgueria. A API foi desenvolvida utilizando Node.js, Express, Sequelize, PostgreSQL e MongoDB para fornecer uma solução robusta e escalável.

## Funcionalidades

- **Autenticação e Autorização**: Sistema de login com autenticação via JWT.
- **Gestão de Usuários**: CRUD para usuários com diferentes níveis de permissão (admin e cliente).
- **Gestão de Produtos**: CRUD para produtos, incluindo nome, descrição, preço e categoria.
- **Gestão de Pedidos**: CRUD para pedidos, permitindo a criação, leitura, atualização e exclusão de pedidos feitos pelos clientes.
- **Integração com MongoDB**: Utilizado para armazenar informações específicas, como histórico de pedidos.
- **Integração com PostgreSQL**: Banco de dados relacional utilizado para armazenar a maior parte dos dados estruturados da aplicação.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript para o backend.
- **Express**: Framework web para Node.js, facilitando a criação de rotas e middleware.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações principais da aplicação.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados não estruturados, como o histórico de pedidos.
- **JWT**: JSON Web Tokens para autenticação e autorização de usuários.

## Configuração e Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/pablomartinsti/devBurger-Backend.git
   cd devBurger-Backend

3. **Instale as dependências:**


bash
Copiar código
yarn install

3. **Configuração do Banco de Dados:**


PostgreSQL: Certifique-se de que o banco de dados PostgreSQL esteja rodando e configurado adequadamente.

MongoDB: Certifique-se de que o MongoDB Atlas ou outro serviço de MongoDB esteja configurado e disponível para conexão.

4. **Executar as Migrações:**

bash
Copiar código
yarn sequelize db:migrate

5. **Iniciar o Servidor:**

bash
Copiar código
yarn dev
O servidor estará disponível em http://localhost:3000.

 **Endpoints:**

Abaixo estão alguns dos principais endpoints da API:

Autenticação

POST /auth/login: Autentica um usuário.
POST /auth/register: Registra um novo usuário.
Usuários

GET /users: Lista todos os usuários.
GET /users/:id: Detalha um usuário específico.
POST /users: Cria um novo usuário.
PUT /users/:id: Atualiza um usuário existente.
DELETE /users/:id: Exclui um usuário.
Produtos

GET /products: Lista todos os produtos.
GET /products/:id: Detalha um produto específico.
POST /products: Cria um novo produto.
PUT /products/:id: Atualiza um produto existente.
DELETE /products/:id: Exclui um produto.
Pedidos

GET /orders: Lista todos os pedidos.
GET /orders/:id: Detalha um pedido específico.
POST /orders: Cria um novo pedido.
PUT /orders/:id: Atualiza um pedido existente.
DELETE /orders/:id: Exclui um pedido.

 **Contribuição**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.
   






<h1>CodeBurger - Backend</h1>

<p>
  Este é o backend do projeto CodeBurger, uma aplicação completa para gerenciar pedidos em uma hamburgueria. A API foi desenvolvida utilizando Node.js, Express, Sequelize, PostgreSQL e MongoDB para fornecer uma solução robusta e escalável.
</p>

<h2>Funcionalidades</h2>
<ul>
  <li><strong>Autenticação e Autorização:</strong> Sistema de login com autenticação via JWT.</li>
  <li><strong>Gestão de Usuários:</strong> CRUD para usuários com diferentes níveis de permissão (admin e cliente).</li>
  <li><strong>Gestão de Produtos:</strong> CRUD para produtos, incluindo nome, descrição, preço e categoria.</li>
  <li><strong>Gestão de Pedidos:</strong> CRUD para pedidos, permitindo a criação, leitura, atualização e exclusão de pedidos feitos pelos clientes.</li>
  <li><strong>Integração com MongoDB:</strong> Utilizado para armazenar informações específicas, como histórico de pedidos.</li>
  <li><strong>Integração com PostgreSQL:</strong> Banco de dados relacional utilizado para armazenar a maior parte dos dados estruturados da aplicação.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Node.js:</strong> Plataforma de desenvolvimento JavaScript para o backend.</li>
  <li><strong>Express:</strong> Framework web para Node.js, facilitando a criação de rotas e middleware.</li>
  <li><strong>Sequelize:</strong> ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o PostgreSQL.</li>
  <li><strong>PostgreSQL:</strong> Banco de dados relacional utilizado para armazenar as informações principais da aplicação.</li>
  <li><strong>MongoDB:</strong> Banco de dados NoSQL utilizado para armazenar dados não estruturados, como o histórico de pedidos.</li>
  <li><strong>JWT:</strong> JSON Web Tokens para autenticação e autorização de usuários.</li>
</ul>

<h2>Configuração e Instalação</h2>

<ol>
  <li><strong>Clone o repositório:</strong>
    <pre><code>git clone https://github.com/pablomartinsti/CodeBurger-Backend.git
cd CodeBurger-Backend</code></pre>
  </li>

  <li><strong>Instale as dependências:</strong>
    <pre><code>yarn install</code></pre>
  </li>

  <li><strong>Configuração do Banco de Dados:</strong>
    <ul>
      <li><strong>PostgreSQL:</strong> Certifique-se de que o banco de dados PostgreSQL esteja rodando e configurado adequadamente.</li>
      <li><strong>MongoDB:</strong> Certifique-se de que o MongoDB Atlas ou outro serviço de MongoDB esteja configurado e disponível para conexão.</li>
    </ul>
  </li>

  <li><strong>Executar as Migrações:</strong>
    <pre><code>yarn sequelize db:migrate</code></pre>
  </li>

  <li><strong>Iniciar o Servidor:</strong>
    <pre><code>yarn dev</code></pre>
    <p>O servidor estará disponível em <code>http://localhost:3000</code>.</p>
  </li>
</ol>

<h2>Endpoints</h2>
<p>Abaixo estão alguns dos principais endpoints da API:</p>

<h3>Autenticação</h3>
<ul>
  <li><code>POST /auth/login:</code> Autentica um usuário.</li>
  <li><code>POST /auth/register:</code> Registra um novo usuário.</li>
</ul>

<h3>Usuários</h3>
<ul>
  <li><code>GET /users:</code> Lista todos os usuários.</li>
  <li><code>GET /users/:id:</code> Detalha um usuário específico.</li>
  <li><code>POST /users:</code> Cria um novo usuário.</li>
  <li><code>PUT /users/:id:</code> Atualiza um usuário existente.</li>
  <li><code>DELETE /users/:id:</code> Exclui um usuário.</li>
</ul>

<h3>Produtos</h3>
<ul>
  <li><code>GET /products:</code> Lista todos os produtos.</li>
  <li><code>GET /products/:id:</code> Detalha um produto específico.</li>
  <li><code>POST /products:</code> Cria um novo produto.</li>
  <li><code>PUT /products/:id:</code> Atualiza um produto existente.</li>
  <li><code>DELETE /products/:id:</code> Exclui um produto.</li>
</ul>

<h3>Pedidos</h3>
<ul>
  <li><code>GET /orders:</code> Lista todos os pedidos.</li>
  <li><code>GET /orders/:id:</code> Detalha um pedido específico.</li>
  <li><code>POST /orders:</code> Cria um novo pedido.</li>
  <li><code>PUT /orders/:id:</code> Atualiza um pedido existente.</li>
  <li><code>DELETE /orders/:id:</code> Exclui um pedido.</li>
</ul>

<h2>Contribuição</h2>
<p>
  Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.
</p>

# Gconta 

<img  src='./assets/introducao.gif' width='700px' >

## Introdução

<img align='right' src='./assets/logo.svg' width='170px' >
<p align='left'>
O Gconta é um projeto desenvolvido para armazenar dados de login de usuários em um sistema de forma segura. Utilizando tecnologias como Node.js, TypeScript, NestJS, Prisma ORM e PostgreSQL, o Gconta oferece uma solução confiável para armazenamento e gerenciamento de informações de login.
</p>


## Tecnologias utilizadas

[![My Skills](https://skillicons.dev/icons?i=nodejs,ts,nestjs,prisma,postgres,react,styledcomponents,vite,&theme=light)](https://skillicons.dev)

- Node.js
- TypeScript
- NestJS
- Prisma ORM
- PostgreSQL
- React
- Styled-componets
- React-query
- React-hook-form
- Vite

## Como instalar
**Pré-requisitos**

- Node.js instalado
- Docker instalado (caso opte por usar Docker)

## Instalação e Configuração sem Docker

1. **Instale as dependências do projeto:**
   ```sh
   npm install
   ```

2. **Configure o banco de dados:**
   - Crie um arquivo `.env` na raiz do projeto backend com o seguinte conteúdo:
     ```env
     DATABASE_URL="postgresql://admin:admin@localhost:5432/gcontas?schema=public"
     PORTA_SERVIDOR=3000
     SEGREDO='dsadsadsa'
     ```

3. **Execute as migrações do banco de dados:**
   ```sh
   npx prisma migrate dev
   ```

4. **Gere os clientes do Prisma:**
   ```sh
   npx prisma generate
   ```

5. **Inicie o servidor backend:**
   ```sh
   npm run start:dev
   ```

6. **Configuração do frontend:**
   - Abra um novo terminal e navegue até a pasta do frontend:
     ```sh
     cd frontend-vite
     ```
   - Instale as dependências:
     ```sh
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```sh
     npm run dev
     ```

---

## Instalação e Configuração com Docker

1. **Criação da estrutura do banco de dados:**
   - Crie uma pasta `db` no caminho `/backend/db`.
   - Dentro dessa pasta, crie um arquivo `db.env` com o seguinte conteúdo:
     ```env
     POSTGRES_USER=admin
     POSTGRES_PASSWORD=admin
     ```

2. **Configuração dos arquivos de ambiente:**
   - Dentro da pasta `backend`, crie dois arquivos `.env`:
     - **.env (desenvolvimento):**
       ```env
       DATABASE_URL="postgresql://admin:admin@localhost:5432/gcontas?schema=public"
       PORTA_SERVIDOR=3000
       SEGREDO='segredo'
       ```
     - **env.prod (produção):**
       ```env
       # Produção
       DATABASE_URL="postgresql://admin:admin@db-container:5432/gcontas?schema=public"
       PORTA_SERVIDOR=3000
       SEGREDO='tstea'
       ```

3. **Configuração do Nginx para o frontend:**
   - Dentro da pasta `frontend-vite`, crie uma pasta chamada `nginx`.
   - Dentro dessa pasta, crie um arquivo `nginx.config` com o seguinte conteúdo:
     ```nginx
     server {
         listen   80;
         listen   [::]:80 default ipv6only=on;

         root /usr/share/nginx/html;
         index index.html;

         server_name _; # all hostnames

         location / {
             try_files $uri /index.html;
         }
     }
     ```

4. **Subindo os containers com Docker:**
   ```sh
   docker-compose up
   ```

5. **Executar em background:**
   ```sh
   docker-compose up -d
   ```

Após seguir esses passos, seu sistema estará configurado e pronto para uso!


## Como usar

1. Certifique-se de que o banco de dados PostgreSQL está configurado e em execução.
2. No terminal, navegue até o diretório raiz do projeto.
3. Execute o seguinte comando para iniciar o servidor:

```bash
npm run start:dev
```

4. O servidor NestJS será iniciado e estará ouvindo as requisições na porta definida.
5. Use as rotas e endpoints disponibilizados pelo servidor para criar, armazenar e gerenciar as informações de login dos usuários.

## Criador do projeto

O Gconta foi criado por João Guilherme, um desenvolvedor de software apaixonado por segurança e privacidade. O projeto foi desenvolvido com o objetivo de fornecer uma solução confiável e escalável para o armazenamento de dados de login de usuários.

![avatar](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/80895578?v=4?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d
)


 <sub><b>Joao Guilherme</b></sub></h4> <a href="https://github.com/JoaoG23/">🚀</a>


Done with 🤭 by Joao Guilherme 👋🏽 Entre em contato logo abaixo!

[![Linkedin Badge](https://img.shields.io/badge/-Joao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jaoo/)](https://www.linkedin.com/in/joaog123/)
[![Badge](https://img.shields.io/badge/-joaoguilherme94@live.com-c80?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:joaoguilherme94@live.com)](mailto:joaoguilherme94@live.com)


## Licença

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

# GithubStars

App para listagem de repositórios estrelados de usuários Github.

## Getting Started

### Installing

1. Necessário configurar oauth application na conta github:

    https://github.com/settings/developers

    Em "Authorization callback URL" informar a seguinte URL para testes local:

    http://localhost:3000/sigin

2. Dentro da pasta /api renomeie o arquivo .env.example para .env.

    Edite o arquivo e adicione os valores de GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET

    Ainda dentro da pasta /api execute os comandos:

    ```
    composer install
    docker-compose up
    ```
    
    Navegue até a pasta /app e renomeie o arquivo .env_example para .env.
    
    Edite o arquivo e adicione o valor de REACT_APP_GITHUB_CLIENT_ID
    
    Ainda dentro da pasta /app, execute os comandos: 
    
    ```
    npm install
    npm start
    ```

## Built With

* [Lumen](https://lumen.laravel.com/docs/5.6) - PHP Framework
* [React](https://reactjs.org/docs/hello-world.html) - JS Library for SPA
* [Docker](https://docs.docker.com/) - Used to run a PHP server

## Author

**Johny Velho** - [Linkedin](https://www.linkedin.com/in/johnyvelho/)
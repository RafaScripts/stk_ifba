# stk_ifba
## Instalação
para executar o projeto é recomendavel ter o docker e docker-compose instalados na máquina.

### 1. Instalação e execução com docker

Clone o projeto do github

2. Entre na pasta do projeto

execute o comando a baixo para criar a subrede do docker para o projeto
``` bash
docker network create --driver bridge --subnet 172.20.0.0/16 stk-net
```

agora temos 2 opções para roda o projeto, a primeira ira mostrar todos os logs do projeto e a segunda ira rodar em segundo plano.

1. Para rodar o projeto com logs
``` bash
docker-compose up
```

2. Para rodar o projeto em segundo plano
``` bash
docker-compose up -d
```


## License
[MIT](https://choosealicense.com/licenses/mit/)

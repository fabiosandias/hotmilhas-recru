# App HotMilhas


#### Toast de teste usando a promise <code> $q </code> do Angular Js 1.xx

```
O modelo de layout foi criado a partir do template do site
Material Design Lite e essa aplicação foi criada pra rodar no mobile web.
```

[MATERIAL DESIGN LITE](https://getmdl.io/ "Iŕ para o site Material Design Lite")

Para fazer o teste e ver a aplicação rodando no servidor web segue o link abaixo.

[Clique aqui para ver o demo.](http://hotmilhas.helpmain.com/ "Iŕ para o site demo")



Caso deseja baixar o projeto segue as instruções de como rodar.

Estou usando o bower como gerenciador de dependência e também estou disponibilizando 
juntamente com o projeto a pasta <code>bower_components</code> para facilitar a execução do programa.
Estou ciente que essa não é a maneira correta de usar o bower. Pois, uma vez que se usa tal gerenciador
 a pasta onde ficam as dependências do projeto não se versiona no git.

Caso não tivesse versionado a pasta <code>bower_components</code> no projeto você poderia executar o seguinte comando do bower:

```
bower install

```

    Estou levando em consideração que você tem o bower instalado em sua maquina caso precisasse executar o camando acima.


O comando acima irá baixar todas as dependências que estão no arquivo <code> bower.json</code>


#### O modelo do arquivo bower.json e suas dependências.
```javascript
{
  "name": "hotmilhas-recru",
  "homepage": "https://github.com/fabiosandias/hotmilhas-recru",
  "authors": [
    "fabiosandias <fabiosandias@hotmail.com>"
  ],
  "description": "Projeto de teste para recrutamento da hotmilhas",
  "main": "",
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "angular-ui-router": "^1.0.6",
    "angular-animate": "^1.6.6"
  }
}
```
## Segue o um preview das telas da aplicação
    Favor assim que abrir a aplicação no seu navegador coloque na resolução do mobile
    
    
![Alt text](http://hotmilhas.helpmain.com/images/home.png "Optional title attribute")

![Alt text](http://hotmilhas.helpmain.com/images/home_toast.png "Optional title attribute")

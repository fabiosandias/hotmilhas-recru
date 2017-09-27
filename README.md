# App HotMilhas


#### Toast de teste usando a promise <code> $q </code> do Angular Js 1.xx

```
O modelo de layout foi criado a parti do template do site
Material Design Lite e essa aplicação foi criada pra rodar no mobile web.
```

[MATERIAL DESIGN LITE](http://https://getmdl.io/index.html/ "Iŕ para o site Material Design Lite")

Para fazer o teste e ver a aplicação rodando no servidor web segue o link abaixo.

[Clique aqui para ver o demo.](http://hotmilhas.midmain.com.br/ "Iŕ para o site demo")



Caso deseja baixar o projeto segue as instruções de como rodar.

Estou usando o bower como gerenciador de dependência e também estou disponibilizando 
juntamente com o projeto a pasta <code>bower_components</code> para facilitar a execução do programa.
Estou ciente que essa não é a maneira correta de usar o bower. Pois, uma vez que se usa tal gerenciador
 a pasta onde ficam as dependências do projeto não se versiona no git.

Caso não tivesse liberado essa pasta no projeto a outra forma de obtê-la seria pelo bower com o seguinte comando:


```
bower install

```


O comando acima irá baixar todas as dependências que estão no arquivo <code> bower.json</code>


#### o modelo do arquivo bower.json e suas dependências.
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

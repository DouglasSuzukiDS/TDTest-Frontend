# Teste para Frontend

Este projeto foi feito para um teste para teste Frontend. Onde foi me passado um layout no Figma e seu objetivo era codar o projeto. Todos os direitos reservados aos desenvolvedores do Layout e para a empresa responsável para vaga.

O projeto foi codado em **Next**, utilizando **Typescript** e **TailwindCSS**.

Vale mencionar que esse foi meu primeiro projeto codado em *Next* sem ser projetos de aulas/cursos que realizo. Mesmo não utilizando quase nenhum recurso do Next em si, mas já fica de experiência.

Para não deixar o projeto completamente estático, e aproventando as telas para desenvolver, fiz um sistema para criação de novos cadastros, login, e logout, deixando as informações salvas no localStorage, simulando um acesso a um backend.

Confesso que demorou alguns dias pois tive problemas com npm/yarn/node/webpack e claro com a lógica de cadastro/login e responsividade. No final, deu tudo certo, e codei da melhor forma que consegui.

## Stacks utlizadas no projeto
***Frontend:*** *Next, Trypescript, TailwindCSS, SVGR/Webpack (para manipular SVG)*.

## Objetivos
- Codar o sistema, tela de Cadastro, Login, Dashboard, modal de recupeção de senha e modal de aviso do envio de email. 

- Codar as funcionalidades para cadastro, login, e exibição dos modais.

- Persistencia de dados ***(salvos no localStorage)***.

- Redirecionamento para a *'/login'*, caso não esteja logado.

- Redirecionamento para *'/dashboard'*, caso o usuário esteja logado.

- Toggle do aside com dados do usuário, e itens para 'navegação fictícia'.

- Responsividade do projeto.

## Aprendizado 
- Manipular SVG mesmo sem componentiza-los.

- Fazer configurações do Tailwind, inserindo **cores utilizadas para o layout**, **tamanhos de fontes**, **classes**, **'media screens'**, para que o processo de desenvolvimento seja mais ágil sem precisar utilziar CSS puro para estilizar.

- Reutilziar Types.

- Componentizar elementos que seram reutilizados **(inputs com icones)**.

- Verificação de dados, tamanho do nome e se é um email válido, informados pelo usuário.

- Criar um componente para exibir apenas um icone especifico, informando seu nome *(já estabelecido por um type)*, cor, e tamanho.

- Concentrar funções para 'acesso' de um API em apenas um arquivo. 


## Referência
- [**Bonieky Lacerda (B7WEB)**](https://b7web.com.br/fullstack/)

- [**TailwindCSS**](https://tailwindcss.com/)

- [**Next**](https://nextjs.org/)

- [**ChatGPT**](https://chat.openai.com/auth/login)

## Instalação e iniciando o Projeto

Clone o projeto
```bash
  git clone https://github.com/DouglasSuzukiDS/TDTest-Frontend.git
```

Entre na *pasta do projeto*:
```bash
    cd TDTest-Frontend
```

Instale as dependências do projeto:
```bash
    yarn | npm install
```
## Iniciando o Projeto

Depois de instalados as dependências do projeto: 
```bash
   yarn dev | npm run dev
```
Após iniciar o projeto, será informado a 'rota de acesso', normalmente a rota abaixo: 
```bash
   localhost:3000
```

## Rotas do Projeto 
*Existe apenas 3 rotas no projeto, sendo que uma delas só é possível acessar caso o usuário esteja logado*. 

Vale lembrar que não existe a rota **'/'**, caso o usuário acesse a rota, ele simplesmente será redirecionado para outra rota, estabelecidado no arquivo '**route.ts**'

```bash
   import { redirect } from "next/navigation"

   export async function GET(request: Request)  {
      redirect('/login')
   }
```

Rota | Função
-----|-------
**/login**   | *Página inicial que verifica se usuário está logado para direcionar a página **'/dashboard'**. Caso ele não esteja, é necessário efetuar o login na própria página, ou o cadastro e login.*
**/register** | *Página para realizar o registro de usuário. Sendo salvo no localStorage.*
**/dashboard** | *Seria a página principal da aplicação, sendo possível acessa-la apenas caso o usuário esteja logado.*

## Cores utilizadas no Projeto
***OBS***: As cores a seguir são as cores adicionadas ao Tailwind. Em resumo as cores que o Tailwind não possui, mas passou a possuir com a configuração no arquivo***tailwind.config.ts***. Claramento pode haver outras cores do projeto, mas nativas do Tailwind, com isso não foram adicionadas aqui.

**Cor** | **Nome da Variável**| **Hexadecimal** 
------- | ------- | --------------- 
![lightLayout](https://i.imgur.com/cF4eJqj.png) | ***lightLayout*** | ***#F0F0F0*** 
![darkLayout](https://i.imgur.com/kh0B2L4.png) | ***darkLayout*** | ***#333*** 
![beige](https://i.imgur.com/0O4dK0X.png) | ***beije*** | ***#CC6138*** 

## Tamanho de fontes utilizadas no Projeto
***OBS***: Os tamanhos de fontes a seguir, são os tamnahos de fontes que foram retiradas do layout e/ou usadas para o tamanho das fontes em modo responsivo, claramente não nativos do Tailwind. Esses tamanhos de fontes foram configurados no arquivo ***tailwind.config.ts***.

**Nome**| **valor** 
--------- | ------- 
**font-14** | **14px**
**font-18** | **18px**
**font-22** | **22px**
**font-30** | **30px**
**font-42** | **42px**
**font-44** | **44px**

## Tamanho de Telas utilizados no Projeto
***OBS***: Os tamanhos de telas a seguir, são os tamanhos que foram criados para melhor exibição do layout em modo responsivo, claramente não nativos do Tailwind. Esses tamanhos foram configurados no arquivo ***tailwind.config.ts***.

**Nome**| **valor** 
--------- | ------- 
**mobile** | **300px**
**tablet** | **620px**
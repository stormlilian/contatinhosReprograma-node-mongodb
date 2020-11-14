# {Reprograma} Projeto semana 14 : CRUD - DB - Backend

## Métodos HTTP utilizados:
GET - Busca dados
POST - Cria novo contato
PUT - Atualiza contato
DELETE - Deleta um registro


### Essa API deve ter as seguintes rotas:

- "**/**" Retorna index com apresentação
{
   mensagem: bem vinda a lista de contatinhos
}
- "**/contatos/**" Retorna todos os dados do banco de dados
- "**/contatos/criar**" Cria novo contato e retorna mensagem amigável
- "**/contatos/nome/**[NOME]" Retorna contato por nome específico
- "**/contatos/id/**[ID]" Retorna contato por id específico
- "**/contatos/deletar/**[ID]" Deleta contato por id específico e retorna mensagem amigável
- "**/contatos/atualizar/telefone/**[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável
- "**/contatos/atualizar/**[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)

### Arquitetura MVC

```bash
\--📂 NOME-DO-SEU-SERVIDOR
		 |   .gitignore
		 |   package-lock.json
		 |   package.json
	   |   **server.js**
			\--📂 node_modules
			\--📂src
			    |   **app.js**
			    |
			    📂---controller
			    |       **NOMEController.js**
			    |
			    📂---model
			    |       **NOMESchema.js
					|       Repository.js**
			    |
			    📂---routes
			            **NOMERoute.js
									index.js**
```

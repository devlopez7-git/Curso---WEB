ViaCEP Consulta

Descrição

Este projeto é uma aplicação web que permite consultar informações de endereços a partir de um CEP (Código de Endereço Postal) utilizando a API do ViaCEP. Desenvolvida com HTML, CSS e JavaScript, a aplicação oferece uma interface moderna e responsiva para buscar dados como rua, bairro, cidade, UF e código IBGE, exibindo-os automaticamente nos campos do formulário.

Funcionalidades





Consulta de endereços via API do ViaCEP ao inserir um CEP válido.



Preenchimento automático dos campos de rua, bairro, cidade, UF e IBGE.



Interface responsiva com design minimalista e intuitivo.



Navegação com links para informações sobre a API, ajuda e contato.



Validação de CEP no evento onblur para busca instantânea.

Tecnologias Utilizadas





HTML5: Estrutura da página.



CSS3: Estilização da interface (embutida no arquivo HTML).



JavaScript: Integração com a API ViaCEP via Fetch API (arquivo fetch.js).



ViaCEP API: Serviço gratuito para consulta de CEPs.

Como Usar





Clone ou baixe o repositório para sua máquina.



Certifique-se de que os arquivos index.html, fetch.js e a imagem background.jpg estão na mesma pasta.



Abra o arquivo index.html em um navegador web.



Insira um CEP válido (ex.: 01001-000 ou 01001000) no campo correspondente.



Ao sair do campo (evento onblur), os demais campos serão preenchidos automaticamente com os dados retornados pela API.

Estrutura do Projeto

viacep-consulta/
├── index.html      # Página principal da aplicação
├── fetch.js        # Lógica para consulta à API ViaCEP
├── background.jpg  # Imagem de fundo da página
└── README.md       # Documentação do projeto

Exemplos de Uso





Consulta válida: Insira o CEP 01001-000. Os campos serão preenchidos com dados como:





Rua: Praça da Sé



Bairro: Sé



Cidade: São Paulo



UF: SP



IBGE: 3550308



CEP inválido: Um CEP incorreto não preencherá os campos, e a API pode retornar um erro.

Dependências





Conexão com a internet para acessar a API do ViaCEP.



Navegador moderno com suporte à Fetch API.

Contribuição

Contribuições são bem-vindas! Algumas sugestões de melhorias incluem:





Adição de validação de formato de CEP antes da consulta.



Exibição de mensagens de erro amigáveis para o usuário.



Suporte a temas (claro/escuro) ou personalização de cores.



Implementação de um botão de limpeza de formulário.

Para contribuir:





Faça um fork do repositório.



Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).



Commit suas alterações (git commit -m 'Adiciona nova funcionalidade').



Envie para o repositório remoto (git push origin feature/nova-funcionalidade).



Abra um Pull Request.

Autor

Desenvolvido por devlopez7.
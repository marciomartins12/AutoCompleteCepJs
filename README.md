# AutoCompleteCepJs
Este é um simples código JavaScript que utiliza uma API de CEP para realizar consultas e preencher automaticamente as informações de endereço correspondentes ao CEP fornecido.

Funcionalidades
Quando um CEP é digitado em um campo de entrada específico (#cep) e ocorre um evento de perda de foco (quando o usuário sai desse campo), a função procuraCep é acionada.
A função procuraCep faz uma solicitação assíncrona (usando fetch) para a API ViaCEP, passando o CEP digitado como parâmetro na URL.
Os dados de endereço retornados pela API são convertidos em formato JSON.
Os campos de entrada correspondentes ao endereço (#cidade, #estado, #numero, #endereco e #bairro) são preenchidos automaticamente com as informações obtidas da API.
Se o CEP digitado for inválido, a mensagem de erro "Cep inválido. Tente novamente" é exibida no elemento HTML com a classe .cep-errado, e todos os campos de entrada são limpos.
Caso ocorra algum erro durante a solicitação à API, a mensagem de erro também é exibida no elemento .cep-errado e todos os campos de entrada são limpos. Se o campo de cidade estiver vazio, será exibida a mensagem "Exemplo: 65245000".

# Funcionalidades do projeto

- Upload de imagens
- Verificação de tamanho máximo e extensões de imagens aceitadas
- _Dropzone_
- Criação de rota para acesso a imagem de forma pública
- Remoção de imagens tanto no banco quanto fisicamente
- _CircularProgressbar_ utilizado para animar o progresso de upload de imagem
- Preview da imagem antes de finalizar o upload
- Armazenamento na nuvem com **Amazon S3**

# Instruções

Foi utilizado o gerenciador de pacotes `yarn` e o banco de dados `MongoDB`.

Crie um arquivo *.env* e preencha as variáveis conforme o *.env.example* estrutura.

Foi utilizado o *Amazon S3* para armazenar as imagens.

Utilize o comando `yarn` para baixar as dependências e em seguida `yarn dev` para rodar o projeto localmente. 

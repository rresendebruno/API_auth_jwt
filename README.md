# Autenticação NodeJS + JWT

---

- **API** com express e MongoDB(mongoose);
- Endpoints **públicos e privados**;
- Os privados precisam do **token** para serem acessados;
- O token é entregue **através do login** bem sucedido;
- Será preciso enviar o token pelo **header** da requisição;
- Um **middleware** valida se o token é válido ou não;
- **Não há persistência de sessão no back-end**, tudo é feito pelo token;

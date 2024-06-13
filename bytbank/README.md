# Bytbank - Cadastro de Transferências

Este é um aplicativo Angular para cadastro de transferências, onde você pode registrar transferências com valores e contas de destino.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

angular-projects/
└── bybank/
└── src/
└── app/
├── extrato/
├── models/
├── nova-transferencia/
├── services/
├── app-routing.module.ts
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
└── app.module.ts

- **extrato/**: Contém componentes relacionados ao extrato de transferências.
- **models/**: Contém modelos de dados utilizados no aplicativo.
- **nova-transferencia/**: Contém componentes para criação de novas transferências.
- **services/**: Contém serviços utilizados para lógica de negócios e comunicação com a API.

## Funcionalidades

- **Cadastro de Transferências**: Permite ao usuário cadastrar uma nova transferência informando o valor e a conta de destino.
- **Extrato de Transferências**: Exibe um extrato de todas as transferências realizadas.

## Instalação

1. Clone o repositório:
    ```bash
    git clone <URL do repositório>
    cd bybank
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o aplicativo:
    ```bash
    ng serve
    ```
   Abra seu navegador e acesse `http://localhost:4200`.

## Tecnologias Utilizadas

- Angular
- TypeScript
- SCSS

## Boas Práticas de Código

Este projeto segue as seguintes boas práticas de código:

1. **Modularização**: O código é organizado em módulos e componentes para facilitar a manutenção e a escalabilidade.
2. **Reutilização de Componentes**: Componentes são reutilizados sempre que possível para evitar duplicação de código.
3. **Serviços**: A lógica de negócios e a comunicação com a API são gerenciadas por serviços, seguindo o princípio de separação de responsabilidades.
4. **Modelos**: Modelos de dados são definidos para garantir a consistência dos dados no aplicativo.
5. **Testes**: O projeto inclui testes unitários para garantir a qualidade do código.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato pelo email: [seu-email@exemplo.com](mailto:seu-email@exemplo.com).

---

*Este projeto é um exemplo de um sistema de cadastro de transferências utilizando Angular.*

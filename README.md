# Integrator Client Core

Integração das apis js com o Integrator

## Documentação da API

Parametro obrigatório comtém o \*

#### Listar contatos

```js
ListContactData.run({ codcli: 'STRING*' });
```

#### Criar contato

```js
SaveContactData.run({
  codcli: 'STRING*',
  codco_cl: 'STRING',
  celular: '(00)000000000',
  e_mail: 'email@email.com.br',
});
```

#### Editar contato

```js
EditContactData.run({
  codco_cl_p: 'STRING*',
  celular: '(00)000000000',
  e_mail: 'email@email.com.br',
});
```

#### Editar nome cliente

```js
EditCustomerName.run({
  codcli: 'STRING*',
  nome_cli: 'STRING*',
});
```

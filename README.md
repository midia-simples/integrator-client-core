# Integrator Client Core

Integração das apis js com o Integrator

## Documentação da API

Parametro obrigatório comtém o \*

#### Lista os contatos

```js
ListContactData.run({ codcli: 'STRING*' });
```

#### Editar contato

```js
EditContactData.run({
  codco_cl_p: 'STRING*',
  celular: '(00)000000000',
  e_mail: 'email@email.com.br',
});
```

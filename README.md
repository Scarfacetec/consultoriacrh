# CRH Consultoria

Site institucional responsivo da CRH Consultoria em Recursos Humanos, com formulário que abre o WhatsApp com a mensagem preenchida. O envio é confirmado pelo visitante no WhatsApp.

## Cloudflare Pages

No painel Cloudflare, acesse Workers & Pages e crie um projeto Pages conectado ao repositório GitHub `Scarfacetec/consultoriacrh`.

Use estas configurações:

- Nome do projeto: `consultoriacrh`
- Branch de produção: `main`
- Framework: `None`
- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Diretório raiz: deixe em branco (raiz do repositório)

O projeto não precisa de variáveis de ambiente nem de dependências npm. A configuração Wrangler também está incluída. Após conectar o repositório, novos commits na branch main publicam as atualizações automaticamente.

Documentação: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Preparar localmente

Com Node.js instalado, execute `npm run build`. A pasta `dist` contém apenas os arquivos públicos do site. Também pode ser usada para upload direto no Cloudflare Pages.

## Editar

O conteúdo, estilos e interações estão em `index.html`. As imagens estão na raiz do projeto. Após alterar o site, execute o build novamente.

Desenvolvido por [Scarface tec](https://scarface.tec.br).

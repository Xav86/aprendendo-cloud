# Instruções para Agentes de IA - aprendendo-cloud

## Contexto do Projeto

**aprendendo-cloud** é um projeto educacional para aprender conceitos de cloud computing através da prática com código real. Focado em iniciantes que sabem programar em JavaScript/TypeScript mas têm pouca experiência com cloud.

- **Linguagem principal**: TypeScript + JavaScript
- **Framework**: Express.js (REST API)
- **Idioma**: Português brasileiro
- **Tipo**: Projeto educacional - prática de conceitos cloud através de examples
- **Público**: Iniciantes em cloud (nível Junior em JS/TS)

## Estrutura do Projeto

```
aprendendo-cloud/
├── src/
│   ├── index.ts           # Entry point - servidor Express
│   ├── routes/            # Rotas da API (com prefix /api)
│   │   └── health.ts      # Rota de health check
│   └── types/             # Type definitions compartilhadas
├── dist/                  # Output compilado (gerado)
├── tests/                 # Testes automatizados
├── docs/                  # Documentação educacional
├── tsconfig.json          # Configuração TypeScript
├── package.json
└── .github/               # Configurações GitHub
```

### Convenção de Rotas
- Todas as rotas devem usar o prefixo `/api`
- Exemplo: `GET /api/health` (não `GET /health`)
- Organizar rotas em modules por domínio (ex: `/api/users`, `/api/products`)

## Convenções de Desenvolvimento

### Nomenclatura
- **Variáveis e funções**: `camelCase` em TypeScript/JavaScript
- **Classes**: `PascalCase`
- **Constantes**: `UPPER_SNAKE_CASE`
- **Branches git**: `feature/descricao`, `fix/descricao`, `docs/descricao`

### Idioma
- Código: En inglês (nomenclatura de funções, imports, etc.)
- Comentários e documentação: Português brasileiro
- Commits: Português brasileiro com prefixo: `feat:`, `fix:`, `docs:`, `test:`, `chore:`

### Testes
- Framework: usar Jest (padrão para Node.js)
- Cobertura mínima: 80%
- Arquivos de teste: `*.test.ts` ou `*.spec.ts`
- Executar: `npm test` ou `npm run test:watch`

### Padrões de Código
- **Type Safety**: Sempre usar TypeScript com `strict: true`
- **ESLint**: Aplicar linting com ESLint + Prettier para formatação
- **Documentação**: JSDoc comentários para funções públicas

## Comandos Principais

```bash
npm install          # Instalar dependências
npm run dev         # Rodar API em modo desenvolvimento (watch)
npm run build       # Compilar TypeScript para dist/
npm run start       # Rodar aplicação compilada
npm test            # Executar testes
npm run lint        # Verificar linting
```

## Recomendações para Agentes de IA

1. **Favoreça clareza sobre complexidade** - este é um projeto educacional, explique o "porquê"
2. **Inclua comentários JSDoc** em funções públicas explicando conceitos cloud quando relevante
3. **Mantenha rotas simples** - exemplo: ums rota `GET /api/health` retorna `{ status: "ok" }`
4. **Sempre atualize README** quando adicionar features - documente o propósito educacional
5. **Teste localmente** - rode `npm run dev` e valide antes de sugerir mudanças

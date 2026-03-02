# aprendendo-cloud

Projeto educacional para aprender **conceitos de cloud computing** através da prática com código real.

## 🚀 Objetivo

Este repositório é um espaço para estudar e experimentar com cloud computing usando:
- **TypeScript** + **Express.js** para API REST
- Conceitos práticos de escalabilidade, deployment, testing
- Aprendizado baseado em exemplos reais

## 📦 Pré-requisitos

- Node.js v18+ (recomendado)
- npm ou yarn

## ⚙️ Configuração Inicial

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (com auto-reload)
npm run dev

# 3. Visualizar saída esperada
✅ Servidor rodando em http://localhost:3000
📍 Health check disponível em http://localhost:3000/api/health
```

## 📚 Estrutura do Projeto

```
src/
├── index.ts          # Entry point - servidor Express com middlewares
├── routes/           # Organização de rotas por domínio
│   └── health.ts     # Rota de health check (/api/health)
└── types/            # Type definitions compartilhadas (quando crescer)
```

### Convenção de Rotas

Todas as rotas usam o prefixo `/api`:
- `GET /api/health` → Valida se a API está funcionando

## 🧪 Comandos Úteis

```bash
# Modo desenvolvimento (watch mode com ts-node)
npm run dev

# Compilar TypeScript → JavaScript
npm run build

# Rodar aplicação compilada
npm start

# Executar testes
npm test

# Modo watch para testes
npm run test:watch

# Verificar linting
npm run lint
```

## 🔧 Testando a API

Com o servidor rodando (`npm run dev`), você pode testar:

```bash
# Health check
curl http://localhost:3000/api/health

# Resposta esperada:
# {
#   "status": "ok",
#   "timestamp": "2026-03-02T10:30:00.000Z"
# }
```

## 🎓 Conceitos de Cloud Sendo Explorados

Este projeto é um laboratório para compreender:
- **API REST** - Como construir backends escaláveis
- **Containerização** - Preparar a aplicação para cloud (Docker, CI/CD - em progresso)
- **Deployment** - Colocar a aplicação em produção
- **Logging e Monitoramento** - Rastrear o que acontece na produção

## 📝 Próximas Features (Planejado)

- [ ] Ambiente com variáveis (`.env`)
- [ ] Testes automatizados com Jest
- [ ] Logging estruturado
- [ ] Documentação com Swagger
- [ ] Docker para containerização
- [ ] CI/CD com GitHub Actions

## 👨‍💻 Para Agentes de IA

Consulte [.github/copilot-instructions.md](.github/copilot-instructions.md) para convenções do projeto e padrões de desenvolvimento.
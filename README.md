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
├── index.ts              # Entry point - servidor Express com middlewares
├── routes/               # Definição das rotas da API
│   ├── health.ts         # Rota de health check (/api/health)
│   └── users.ts          # Rotas de CRUD de usuários (/api/users)
├── controllers/          # Controllers - recebem requisições HTTP
│   └── userController.ts # Controller de usuários (CRUD)
├── services/             # Services - lógica de negócio
│   └── userService.ts    # Service de usuários (regras de negócio)
└── types/                # Type definitions compartilhadas
    └── user.ts           # Types/Interfaces de usuário
```

### Padrão de Arquitetura

Este projeto segue a arquitetura em **camadas**:

1. **Routes** - Define os endpoints HTTP
2. **Controllers** - Recebe requisições HTTP e valida dados
3. **Services** - Contém a lógica de negócio (validações, cálculos, etc)
4. **Types** - Type definitions compartilhadas entre camadas

Exemplo do fluxo: `HTTP Request → Route → Controller → Service → Response`

### Convenção de Rotas

Todas as rotas usam o prefixo `/api`:
- `GET /api/health` → Valida se a API está funcionando
- `GET /api/users` → Lista todos os usuários
- `POST /api/users` → Cria um novo usuário
- `GET /api/users/:id` → Obtém um usuário específico
- `PUT /api/users/:id` → Atualiza um usuário
- `DELETE /api/users/:id` → Deleta um usuário
- `PATCH /api/users/:id/status` → Altera o status do usuário

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

## 👥 CRUD de Usuários

A API possui um exemplo completo de CRUD (Create, Read, Update, Delete) de usuários. Por enquanto, os dados são armazenados em um **array em memória** (em produção seria um banco de dados real).

### Modelo de Usuário

```typescript
{
  id: string;              // ID único (gerado automaticamente)
  nome: string;            // Nome do usuário
  email: string;           // Email (único)
  senha: string;           // Senha em hash
  status: "ativo" | "inativo";  // Status do usuário
  criadoEm?: Date;         // Data de criação
  atualizadoEm?: Date;     // Data da última atualização
}
```

### Exemplos de Uso

#### 1. Listar todos os usuários
```bash
GET /api/users

curl -X GET http://localhost:3000/api/users

# Resposta:
# {
#   "sucesso": true,
#   "dados": [
#     {
#       "id": "abc123",
#       "nome": "João Silva",
#       "email": "joao@example.com",
#       "senha": "$2b$10$...", # hash da senha
#       "status": "ativo",
#       ...
#     }
#   ],
#   "total": 1
# }
```

#### 2. Criar um novo usuário
```bash
POST /api/users

curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Santos",
    "email": "maria@example.com",
    "senha": "senha123",
    "status": "ativo"
  }'

# Resposta:
# {
#   "sucesso": true,
#   "mensagem": "Usuário criado com sucesso",
#   "dados": {
#     "id": "xyz789",
#     "nome": "Maria Santos",
#     ...
#   }
# }
```

#### 3. Obter um usuário específico
```bash
GET /api/users/:id

curl -X GET http://localhost:3000/api/users/abc123
```

#### 4. Atualizar um usuário
```bash
PUT /api/users/:id

curl -X PUT http://localhost:3000/api/users/abc123 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva Atualizado",
    "status": "inativo"
  }'
```

#### 5. Alterar apenas o status (endpoint específico)
```bash
PATCH /api/users/:id/status

curl -X PATCH http://localhost:3000/api/users/abc123 \
  -H "Content-Type: application/json" \
  -d '{"status": "inativo"}'
```

#### 6. Deletar um usuário
```bash
DELETE /api/users/:id

curl -X DELETE http://localhost:3000/api/users/abc123
```

### Validações Implementadas

- ✅ Email é **único** (não permite duplicatas)
- ✅ Nome, email e senha são **obrigatórios** na criação
- ✅ Status só pode ser "ativo" ou "inativo"
- ✅ Retorna erro 404 se usuário não existe
- ✅ Senha é armazenada em **hash** (simulado por enquanto)

## 🎓 Conceitos de Cloud Sendo Explorados

Este projeto é um laboratório para compreender:
- **API REST** - Como construir backends escaláveis
- **Containerização** - Preparar a aplicação para cloud (Docker, CI/CD - em progresso)
- **Deployment** - Colocar a aplicação em produção
- **Logging e Monitoramento** - Rastrear o que acontece na produção

## 📝 Próximas Features (Planejado)

- [ ] Integração com banco de dados real (PostgreSQL/MongoDB)
- [ ] Autenticação com JWT
- [ ] Validação de dados com Zod/Joi
- [x] CRUD de usuários com Service + Controller
- [ ] Testes automatizados com Jest para CRUD de usuários
- [ ] Logging estruturado
- [ ] Documentação com Swagger/OpenAPI
- [ ] Docker para containerização
- [ ] CI/CD com GitHub Actions

## 👨‍💻 Para Agentes de IA

Consulte [.github/copilot-instructions.md](.github/copilot-instructions.md) para convenções do projeto e padrões de desenvolvimento.
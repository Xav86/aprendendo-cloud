import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

/**
 * Rotas de usuários
 * Prefixo: /api/users
 */

/**
 * GET /api/users
 * Lista todos os usuários cadastrados
 */
router.get('/', (req, res) => userController.listar(req, res));

/**
 * GET /api/users/:id
 * Obtém um usuário específico por ID
 * Exemplo: GET /api/users/abc123
 */
router.get('/:id', (req, res) => userController.obterPorId(req, res));

/**
 * POST /api/users
 * Cria um novo usuário
 * Body esperado:
 * {
 *   "nome": "João Silva",
 *   "email": "joao@example.com",
 *   "senha": "senha123",
 *   "status": "ativo"
 * }
 */
router.post('/', (req, res) => userController.criar(req, res));

/**
 * PUT /api/users/:id
 * Atualiza um usuário existente
 * Body: qualquer campo que queira atualizar
 */
router.put('/:id', (req, res) => userController.atualizar(req, res));

/**
 * DELETE /api/users/:id
 * Deleta um usuário
 */
router.delete('/:id', (req, res) => userController.deletar(req, res));

/**
 * PATCH /api/users/:id/status
 * Altera apenas o status de um usuário
 * Body esperado:
 * {
 *   "status": "inativo"
 * }
 */
router.patch('/:id/status', (req, res) => userController.alterarStatus(req, res));

export default router;

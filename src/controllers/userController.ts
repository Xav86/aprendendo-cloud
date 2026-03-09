import { Request, Response } from 'express';
import userService from '../services/userService';
import { CreateUserInput, UpdateUserInput } from '../types/user';

/**
 * Controller de Usuário
 * Responsável por receber requisições HTTP e chamar os serviços apropriados
 */
class UserController {
  /**
   * GET /api/users
   * Retorna todos os usuários cadastrados
   */
  listar(_req: Request, res: Response): void {
    try {
      const usuarios = userService.obterTodos();
      res.status(200).json({
        sucesso: true,
        dados: usuarios,
        total: usuarios.length,
      });
    } catch (erro) {
      res.status(500).json({
        sucesso: false,
        erro: 'Erro ao listar usuários',
      });
    }
  }

  /**
   * GET /api/users/:id
   * Retorna um usuário específico por ID
   */
  obterPorId(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const usuario = userService.obterPorId(id);

      if (!usuario) {
        res.status(404).json({
          sucesso: false,
          erro: 'Usuário não encontrado',
        });
        return;
      }

      res.status(200).json({
        sucesso: true,
        dados: usuario,
      });
    } catch (erro) {
      res.status(500).json({
        sucesso: false,
        erro: 'Erro ao obter usuário',
      });
    }
  }

  /**
   * POST /api/users
   * Cria um novo usuário
   */
  criar(req: Request, res: Response): void {
    try {
      const { nome, email, senha, status } = req.body;

      // Validações básicas
      if (!nome || !email || !senha) {
        res.status(400).json({
          sucesso: false,
          erro: 'Nome, email e senha são obrigatórios',
        });
        return;
      }

      const dados: CreateUserInput = {
        nome,
        email,
        senha,
        status: status || 'ativo',
      };

      const novoUsuario = userService.criar(dados);

      res.status(201).json({
        sucesso: true,
        mensagem: 'Usuário criado com sucesso',
        dados: novoUsuario,
      });
    } catch (erro) {
      const mensagem = erro instanceof Error ? erro.message : 'Erro ao criar usuário';
      res.status(400).json({
        sucesso: false,
        erro: mensagem,
      });
    }
  }

  /**
   * PUT /api/users/:id
   * Atualiza um usuário existente
   */
  atualizar(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const dados: UpdateUserInput = req.body;

      const usuarioAtualizado = userService.atualizar(id, dados);

      if (!usuarioAtualizado) {
        res.status(404).json({
          sucesso: false,
          erro: 'Usuário não encontrado',
        });
        return;
      }

      res.status(200).json({
        sucesso: true,
        mensagem: 'Usuário atualizado com sucesso',
        dados: usuarioAtualizado,
      });
    } catch (erro) {
      const mensagem = erro instanceof Error ? erro.message : 'Erro ao atualizar usuário';
      res.status(400).json({
        sucesso: false,
        erro: mensagem,
      });
    }
  }

  /**
   * DELETE /api/users/:id
   * Deleta um usuário
   */
  deletar(req: Request, res: Response): void {
    try {
      const { id } = req.params;

      const deletado = userService.deletar(id);

      if (!deletado) {
        res.status(404).json({
          sucesso: false,
          erro: 'Usuário não encontrado',
        });
        return;
      }

      res.status(200).json({
        sucesso: true,
        mensagem: 'Usuário deletado com sucesso',
      });
    } catch (erro) {
      res.status(500).json({
        sucesso: false,
        erro: 'Erro ao deletar usuário',
      });
    }
  }

  /**
   * PATCH /api/users/:id/status
   * Altera o status de um usuário (ativo/inativo)
   */
  alterarStatus(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status || !['ativo', 'inativo'].includes(status)) {
        res.status(400).json({
          sucesso: false,
          erro: 'Status deve ser "ativo" ou "inativo"',
        });
        return;
      }

      const usuarioAtualizado = userService.alterarStatus(id, status);

      if (!usuarioAtualizado) {
        res.status(404).json({
          sucesso: false,
          erro: 'Usuário não encontrado',
        });
        return;
      }

      res.status(200).json({
        sucesso: true,
        mensagem: 'Status alterado com sucesso',
        dados: usuarioAtualizado,
      });
    } catch (erro) {
      res.status(500).json({
        sucesso: false,
        erro: 'Erro ao alterar status',
      });
    }
  }
}

// Exportar instância única do controller
export default new UserController();

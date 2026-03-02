import { Router } from 'express';

const router = Router();

/**
 * Rota de health check - valida se a API está funcionando
 *
 * GET /api/health
 *
 * Resposta de sucesso (200):
 * {
 *   "status": "ok",
 *   "timestamp": "2026-03-02T10:30:00.000Z"
 * }
 */
router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

export default router;

import express from 'express';
import healthRoutes from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas da API
app.use('/api', healthRoutes);

// Tratamento de rotas não encontradas
app.use((_req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📍 Health check disponível em http://localhost:${PORT}/api/health`);
});

export default app;

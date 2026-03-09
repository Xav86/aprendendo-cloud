import express from 'express';
import healthRoutes from './routes/health';
import userRoutes from './routes/users';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas da API
app.use('/api', healthRoutes);
app.use('/api/users', userRoutes);

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
  console.log(`👥 CRUD de usuários disponível em http://localhost:${PORT}/api/users`);
});

export default app;

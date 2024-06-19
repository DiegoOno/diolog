import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

export const authMiddleware = async (req: FastifyRequest, res: FastifyReply, context: FastifyInstance) => {
  const { query } = req.body as any;
  const isLogin = query.includes('loginUser');
  const isRegister = query.includes('createUser');

  if (!isLogin && !isRegister) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
      }

      const decoded = context.jwt.verify(token);
      req.user = decoded;
    } catch (error) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
  }
};

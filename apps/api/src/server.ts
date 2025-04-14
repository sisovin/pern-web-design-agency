import app from './app';
import dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();

const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = '0.0.0.0'; // Listen on all network interfaces

/**
 * Create HTTP server and listen on the provided port.
 */
export function startServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    const server = createServer(app);

    // Handle specific server errors
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.syscall !== 'listen') {
        reject(error);
        return;
      }

      const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

      // Handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          reject(error);
      }
    });

    // Start listening for connections
    server.on('listening', () => {
      const addr = server.address();
      const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
      console.log(`Server listening on ${bind}`);
      console.log(`Local: http://localhost:${PORT}`);
      console.log(`Network: http://192.168.50.131:${PORT}`);
      resolve();
    });

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully');
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });

    // Listen on provided host and port
    server.listen(PORT, HOST);
  });
}

// Only start server if this file is run directly
if (require.main === module) {
  startServer()
    .then(() => console.log('Server started successfully'))
    .catch(err => {
      console.error('Failed to start server:', err);
      process.exit(1);
    });
}

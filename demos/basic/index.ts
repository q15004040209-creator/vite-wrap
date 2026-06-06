/**
 * vite-wrap demo: Basic Usage
 * 基础使用示例
 */
import { createVite } from '../../src/index';

async function main() {
  console.log('=== vite-wrap Basic Demo ===\n');

  // Create a basic Vite instance
  const vite = createVite({
    root: process.cwd(),
    server: {
      port: 3000,
      host: 'localhost',
      open: true,
      cors: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: true,
      target: 'esnext',
    },
  });

  // Display configuration
  const options = vite.getOptions();
  console.log('Configuration:', JSON.stringify(options, null, 2));

  // Start dev server
  await vite.start();

  console.log('\n  ? Vite dev server is running!');
  console.log('  ? Press Ctrl+C to stop\n');
}

main().catch(console.error);
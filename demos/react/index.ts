/**
 * vite-wrap demo: React Integration
 * React + Vite 集成示例
 */
import { createVite, type Plugin } from '../../src/index';

/**
 * Simple React JSX plugin for demonstration
 */
function reactPlugin(): Plugin {
  return {
    name: 'vite-plugin-react',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
        console.log(`  ? Transforming ${id}`);
        // In production, this would use esbuild or swc for JSX transformation
        return code;
      }
      return null;
    },
    load(id: string) {
      if (id === 'virtual:react') {
        return 'export const React = {};';
      }
      return null;
    },
  };
}

async function main() {
  console.log('=== vite-wrap React Demo ===\n');

  // Create Vite instance with React plugin
  const vite = createVite({
    server: {
      port: 3000,
      host: 'localhost',
      open: false,
    },
    build: {
      outDir: 'dist-react',
      minify: true,
    },
    plugins: [reactPlugin()],
    resolve: {
      alias: {
        '@': '/src',
        'react': 'virtual:react',
      },
    },
  });

  console.log('React plugin loaded');
  console.log('Options:', JSON.stringify(vite.getOptions(), null, 2));

  await vite.start();

  console.log('\n  ? React + Vite dev server ready!');
  console.log('  ? Try visiting http://localhost:3000\n');
}

main().catch(console.error);
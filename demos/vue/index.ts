/**
 * vite-wrap demo: Vue 3 Integration
 * Vue 3 + Vite 集成示例
 */
import { createVite, type Plugin } from '../../src/index';

/**
 * Simple Vue SFC plugin for demonstration
 */
function vuePlugin(): Plugin {
  return {
    name: 'vite-plugin-vue',
    enforce: 'pre' as const,
    buildStart() {
      console.log('  ? Vue plugin initializing...');
    },
    transform(code: string, id: string) {
      if (id.endsWith('.vue')) {
        console.log(`  ? Processing Vue SFC: ${id}`);
        // In production, this would use @vue/compiler-sfc
        return code;
      }
      return null;
    },
    load(id: string) {
      if (id === 'virtual:vue') {
        return `
export const createApp = (component) => ({ mount: (el) => component });
export const ref = (initial) => ({ value: initial });
export const reactive = (obj) => obj;
`;
      }
      return null;
    },
  };
}

async function main() {
  console.log('=== vite-wrap Vue 3 Demo ===\n');

  // Create Vite instance with Vue plugin
  const vite = createVite({
    server: {
      port: 3000,
      host: 'localhost',
      open: false,
    },
    build: {
      outDir: 'dist-vue',
      minify: true,
      target: 'esnext',
    },
    plugins: [vuePlugin()],
    resolve: {
      alias: {
        '@': '/src',
        'vue': 'virtual:vue',
      },
    },
  });

  console.log('Vue plugin loaded');
  console.log('Options:', JSON.stringify(vite.getOptions(), null, 2));

  await vite.start();

  console.log('\n  ? Vue 3 + Vite dev server ready!');
  console.log('  ? Try visiting http://localhost:3000\n');
}

main().catch(console.error);
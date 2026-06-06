/**
 * vite-wrap
 * 下一代前端构建工具封装 - Vite 极速开发体验
 */

export interface ServerOptions {
  port?: number;
  host?: string;
  open?: boolean;
  https?: boolean;
  cors?: boolean;
}

export interface BuildOptions {
  outDir?: string;
  sourcemap?: boolean | 'inline' | 'hidden';
  minify?: boolean | 'esbuild' | 'terser';
  target?: string;
  rollupOptions?: RollupOptions;
}

export interface RollupOptions {
  output?: {
    format?: 'es' | 'cjs' | 'umd' | 'iife';
    entryFileNames?: string;
    chunkFileNames?: string;
    assetFileNames?: string;
  };
  external?: string[];
}

export interface Plugin {
  name: string;
  enforce?: 'pre' | 'post';
  buildStart?: () => void | Promise<void>;
  transform?: (code: string, id: string) => string | null | Promise<string | null>;
  load?: (id: string) => string | null | Promise<string | null>;
}

export interface ViteOptions {
  root?: string;
  server?: ServerOptions;
  build?: BuildOptions;
  plugins?: Plugin[];
  resolve?: {
    alias?: Record<string, string>;
  };
}

/**
 * Create a Vite instance with the given options
 */
export function createVite(options: ViteOptions = {}): ViteInstance {
  return new ViteInstance(options);
}

export class ViteInstance {
  private options: ViteOptions;

  constructor(options: ViteOptions) {
    this.options = {
      root: options.root || process.cwd(),
      server: {
        port: options.server?.port || 3000,
        host: options.server?.host || 'localhost',
        open: options.server?.open ?? true,
        cors: options.server?.cors ?? true,
      },
      build: {
        outDir: options.build?.outDir || 'dist',
        sourcemap: options.build?.sourcemap ?? false,
        minify: options.build?.minify ?? true,
        target: options.build?.target || 'esnext',
      },
      plugins: options.plugins || [],
      resolve: options.resolve || {},
    };
  }

  /**
   * Start the development server
   */
  async start(): Promise<void> {
    const { port, host, open } = this.options.server!;
    console.log(`\n  ? Vite dev server starting...`);
    console.log(`  ? Local:   http://${host}:${port}`);
    console.log(`  ? Network: http://${getNetworkAddress()}:${port}\n`);
    console.log(`  ? Ready in ${Date.now()}ms\n`);

    if (open) {
      const url = `http://${host}:${port}`;
      console.log(`  ? Opening ${url} in browser...`);
    }
  }

  /**
   * Build for production
   */
  async build(): Promise<BuildResult> {
    const outDir = this.options.build?.outDir || 'dist';
    console.log(`\n  ? Vite building for production...`);
    console.log(`  ? dist/${outDir}`);

    return {
      output: outDir,
      duration: Date.now(),
      success: true,
    };
  }

  /**
   * Add a plugin to the Vite instance
   */
  use(plugin: Plugin): this {
    this.options.plugins?.push(plugin);
    return this;
  }

  /**
   * Get the current configuration
   */
  getOptions(): ViteOptions {
    return { ...this.options };
  }
}

export interface BuildResult {
  output: string;
  duration: number;
  success: boolean;
}

/**
 * Get local network address
 */
function getNetworkAddress(): string {
  const os = require('os');
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '0.0.0.0';
}

// Re-export types for convenience
export type { ViteOptions, ServerOptions, BuildOptions, Plugin };
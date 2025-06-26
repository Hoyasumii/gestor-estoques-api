import { defineConfig } from 'tsup';
import fg from 'fast-glob';

export default defineConfig(async () => {
  const files = await fg('src/**/*.ts', {
    ignore: ["**/*.spec.ts", "**/*.test.ts", "**/*.e2e.ts"]
  });

  return {
    entry: files,
    clean: true,
    minify: true
  }
});

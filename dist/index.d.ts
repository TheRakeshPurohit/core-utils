import { TransformOptions, TransformResult } from 'esbuild';

declare function installSourceMapSupport(): Map<string, string> | undefined;

declare function transformSync(code: string, filePath: string, extendOptions?: TransformOptions): TransformResult;
declare function transform(code: string, filePath: string, extendOptions?: TransformOptions): Promise<TransformResult>;

export { installSourceMapSupport, transform, transformSync };

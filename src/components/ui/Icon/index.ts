export * from './Icon.config';

export { default as IconDictionary } from './Icon.dictionary';
export * from './Icon.dictionary';

// Type-only default export to satisfy TypeScript when resolving this barrel.
// Runtime will use platform-specific index.web.ts / index.native.ts instead.
import type { ComponentType } from 'react';
import type { IIcon } from './Icon.config';

export declare const Icon: ComponentType<IIcon>;
export default Icon;

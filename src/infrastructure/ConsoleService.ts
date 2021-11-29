import * as T from '@effect-ts/core/Effect';
import { tag } from '@effect-ts/core/Has';
import { _A } from '@effect-ts/core/Utils';
import * as L from '@effect-ts/core/Effect/Layer';

const consoleService = T.succeedWith(() => ({
  info: (message: string) => T.succeedWith(() => console.info(message)),
  error: (message: string) => T.succeedWith(() => console.info(message)),
}));
export interface ConsoleService extends _A<typeof consoleService> {}
export const ConsoleService = tag<ConsoleService>();

export const ConsoleServiceLive = L.fromEffect(ConsoleService)(consoleService);

export const { info, error } = T.deriveLifted(ConsoleService)(
  ['info', 'error'],
  [],
  [],
);

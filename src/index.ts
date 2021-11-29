import { pipe } from '@effect-ts/core/Function';
import * as T from '@effect-ts/core/Effect';
import {
  ConsoleServiceLive,
  ConsoleService,
  info,
} from './infrastructure/ConsoleService';

const logToStdout = () => {
  return info('hello world');
};

const program = logToStdout();

pipe(program, T.repeatN(2), T.provideLayer(ConsoleServiceLive), T.runPromise);

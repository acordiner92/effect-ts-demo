import { pipe } from '@effect-ts/core/Function';
import * as T from '@effect-ts/core/Effect';
import { info, live, ConsoleService } from './infrastructure/ConsoleService';

const logToStdout = () => info('hello world');

const program = logToStdout();

pipe(program, T.provideService(ConsoleService)(live), T.runPromise);

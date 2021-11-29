import * as T from '@effect-ts/core/Effect';
import { tag } from '@effect-ts/core/Has';

interface ConsoleService {
  info: (message: string) => T.UIO<void>;
}

const ConsoleService = tag<ConsoleService>();

const info = (message: string) =>
  T.accessServiceM(ConsoleService)(_ => _.info(message));

const live: ConsoleService = {
  info: message => T.succeedWith(() => console.log(message)),
};

export { ConsoleService, live, info };

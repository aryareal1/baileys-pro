import type { AuthenticationState } from '../Types';
import { ILogger } from './logger';
/**
 * @deprecated use multi file auth state instead please
 * stores the full authentication state in a single JSON file
 *
 * DO NOT USE IN A PROD ENVIRONMENT, only meant to serve as an example
 * */
export declare const useSingleFileAuthState: (filename: string, logger?: ILogger) => {
    state: AuthenticationState;
    saveState: () => void;
};

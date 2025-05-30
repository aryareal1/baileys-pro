import { proto } from '../../WAProto';
import { KeyPair } from '../Types';
import { BinaryNode } from '../WABinary';
import { ILogger } from './logger';
export declare const makeNoiseHandler: ({ keyPair: { private: privateKey, public: publicKey }, NOISE_HEADER, mobile, logger, routingInfo }: {
    keyPair: KeyPair;
    NOISE_HEADER: Uint8Array;
    mobile: boolean;
    logger: ILogger;
    routingInfo?: Buffer | undefined;
}) => {
    encrypt: (plaintext: Uint8Array) => any;
    decrypt: (ciphertext: Uint8Array) => any;
    authenticate: (data: Uint8Array) => void;
    mixIntoKey: (data: Uint8Array) => void;
    finishInit: () => void;
    processHandshake: ({ serverHello }: proto.HandshakeMessage, noiseKey: KeyPair) => any;
    encodeFrame: (data: Buffer | Uint8Array) => any;
    decodeFrame: (newData: Buffer | Uint8Array, onFrame: (buff: Uint8Array | BinaryNode) => void) => void;
};

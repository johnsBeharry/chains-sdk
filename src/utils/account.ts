import { Network } from "./types";

import * as bip39 from "bip39";

/** Generate public/private key pairs */
class Account {
	private network: Network;

	/**
	 *
	 */
	constructor(network: Network) {
		this.network = network;
	}

	/*
	 * Check if mnemonic is valid
	 */
	public isValid(mnomonic: string): boolean {
		return;
	}

	/*
	 * Generate a mnemonic given some random entropy
	 * @param {entropy} string - Entropy
	 */
	public generate(entropy: string): string {
		return;
	}

	/*
	 * Get public key from mnemonic
	 * @param {mnemonic} string
	 */
	public getPrivateKey(): string {
		return;
	}

	/*
	 * Get public key from mnemonic
	 * @param {mnemonic} string
	 */
	public getPublicKey(mnomonic: string): string {
		return;
	}
}

import { Account, Network, ChainInfo, Transaction } from "./utils/types";

/** Connect to a chain and start a new wallet instance */
export default class Wallet {
	private account: Account;
	private network: Network;

	/**
	 * Create a wallet
	 * @param {Network} network - The chain-api chain and node.
	 * @param {Account} account - public/privateKey to instansiate the wallet with
	 */
	constructor(network: Network, account?: Account) {
		this.network = network || null;
		this.account = account || null;
	}

	// ACCOUNT

	/*
	 * Get the balance from the Account if field is set or the passed address
	 * @param {string} [account=this.account]
	 * @return {number} The balance of the account
	 */
	public getBalance(address?: string): number {
		return;
	}

	public getAccounts(): [Account] {
		return;
	}

	/* Generate mnemonic
	 *
	 */
	public createAccount() {}

	// TRANSACTIONS

	/**
	 * Fetch a single transaction from the chain
	 * @param {string} id - The transaction ID
	 * @return {Transaction} - Transaction object with the result
	 */
	public getTransaction(id: string): Transaction {
		return;
	}

	/**
	 * Get a list of transactions
	 * @param {Account}
	 * @return {Array<Transaction>}
	 */
	public getTransactions(account?: Account): Array<Transaction> {
		if (account === undefined && this.account != null) {
		}

		return;
	}

	public buildTransaction() {}
	public signTransaction() {}

	public suggestTransactionFee() {}
	public sendTransaction() {}

	public getPendingBonce() {}
	public cancelTransaction() {}

	// BLOCK
	public getBlockHeight() {}

	// ENCRYPTION TOOLS
	public encryptWithPublicKey() {}
	public decryptWithPrivateKey() {}
	public signMessage() {}
	public verifySignature() {}

	// EXCHANGE RATES
	public getRateIn() {}

	// CHAIN INFO
	public chainVersion() {}
}

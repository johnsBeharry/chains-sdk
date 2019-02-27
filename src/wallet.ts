import types from './utils/types';
import templates from './utils/templates';

class Wallet {
	constructor(public chain: string, public node: string){}

	public function getBalance(){}
	public function getAccounts(){}

	// Transactions
	public function getTransaction(){}
	public function getTransactions(){}
	public function signTransaction(){}

	public function suggestTransactionFee(){}
	public function sendTransaction(){}

	public function getPendingBonce(){}
	public function cancelTransaction(){}

	// Block
	public function getBlockHeight(){}

	// Encryption Tools
	public function encryptWithPublicKey(){}
	public function decryptWithPrivateKey(){}


	// Exchange Rates
	public function getRateIn(){}

	// Chain Info
	public function chainVersion(){}
}

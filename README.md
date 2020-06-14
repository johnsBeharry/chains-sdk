# Chains SDK

This Software Development Kit is necessary to provide a better Developer Experience for those looking to build clients that connect to, and interact with the `chains-api`.

### Javascript

The Javascript SDK will primarily be used in for the creation of Digital Wallets that utilise the React and React Native components from [`wallet-ui`](https://github.com/johnsbeharry/wallet).

    getBalance()
    getAccounts()

    // Transactions
    getTransaction()
    getTransactions()
    signTransaction()

    suggestTransactionFee()
    sendTransaction()
    sendSignedTransaction()

    getPendingNonce()
    cancelTransaction()

    // Block
    getBlockHeight()

    // Encrpytion Tools
    encryptWithPublicKey()
    decryptWithPrivateKey()

    // Exchange Rates
    getRateIn()

    // Chain Data
    chainVersion()
    chain

    // Events
    events = [
    	'new_transaction',
    	'transaction_confirmed',
    	'transaction_failed',
    	'...',
    ]

    // Example Usage

    var wallet = new Wallet({chain: 'doge', node: 'https//chains-api'})
    wallet.getBalance('dSdfd3423...')

    var wallet2 = new Wallet({chain: 'eth', node: 'https//chains-api'})
    wallet2.getBalance('0x...')
    wallet2.getTransaction(...)

    var wallet3 = new Wallet({chain: 'btc', node: 'https//chains-api'})
    wallet3.getBalance('b1234...')

## Chain Adapter

Adapters are a way to extend the SDK to support a unsupported chain.

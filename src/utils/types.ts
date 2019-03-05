export interface Account {
	publicKey: string,
	privateKey: string,
}

export interface Network {
	chain: string,
	node?: string,
}

export interface ChainInfo extends Network {
	version: string,	
}

export interface Transaction {
	hash: string,	
	timestamp: number,			
	from: string,
	to: string,
	value: number,
	fee: number,
	block: number,
	data: string,
	confirmations: number,
}

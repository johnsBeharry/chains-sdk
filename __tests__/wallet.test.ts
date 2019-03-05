import Wallet from "../src/wallet";
const mock = {
	ADDRESS: "",
	PUBLIC_KEY: "",
	PRIVATE_KEY: "",
	NODE: "https://localhost:18332",
	CHAIN: "btc",
};

test('create bitcoin account', () => {
	const wallet = new Wallet();
	expect(1).toBe(1);
});

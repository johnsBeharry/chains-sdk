import Wallet from "../src/wallet";
const mock = {
	ADDRESS: "",
	PUBLIC_KEY: "",
	PRIVATE_KEY: "",
	NODE: "https://localhost:18332",
	CHAIN: "btc",
	addresses: [1, 2, 3, 4],
};

test("create bitcoin account", async () => {
	try {
		const wallet = new Wallet({ chain: "btc" });
		const addresses = await wallet.getAccounts();
		for (let i = 0; i < addresses.length; i++) {
			expect(addresses[i]).toBe(mock.addresses[i]);
		}
	} catch (error) {
		console.log("error");
	}
});

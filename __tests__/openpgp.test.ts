// import * as bip39 from "bip39";
import openpgp from "openpgp";
import { crypto, key } from "openpgp";

var options = {
	userIds: [{ name:'Jane Smith', email:'jane@example.com' }],
	curve: "secp256k1", // use same curve as bitcoin
};

var options = {userIds: [{ name:'Jane Smith', email:'jane@example.com' }], curve: "secp256k1"}

test("generate rsa with random", async () => {
	let my_key = await openpgp.generateKey(options);
	console.log(my_key);
});

test("generate key with fixed entropy", () => {
	console.log(crypto.random.getRandomBytes(32));
	expect("").toBe("");
});
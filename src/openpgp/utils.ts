import { crypto, packet, enums } from "openpgp";

function constructParams(types, data) {
  return types.map(function(type, i) {
    if (data && data[i]) {
      return new type(data[i]);
    }
    return new type();
  });
}

/** Generate algorithm-specific key parameters
 * @param {String}          algo The public key algorithm
 * @param {Integer}         bits Bit length for RSA keys
 * @param {module:type/oid} oid  Object identifier for ECC keys
 * @returns {Array}              The array of parameters
 * @async
 */
function generateParams(algo, bits, oid) {
  const types = [].concat(this.getPubKeyParamTypes(algo), this.getPrivKeyParamTypes(algo));
  switch (algo) {
    case enums.publicKey.rsa_encrypt:
    case enums.publicKey.rsa_encrypt_sign:
    case enums.publicKey.rsa_sign: {
      return publicKey.rsa.generate(bits, "10001").then(function(keyObject) {
        return constructParams(
          types, [keyObject.n, keyObject.e, keyObject.d, keyObject.p, keyObject.q, keyObject.u]
        );
      });
    }
    case enums.publicKey.dsa:
    case enums.publicKey.elgamal:
      throw new Error('Unsupported algorithm for key generation.');
    case enums.publicKey.ecdsa:
    case enums.publicKey.eddsa:
      return publicKey.elliptic.generate(oid).then(function (keyObject) {
        return constructParams(types, [keyObject.oid, keyObject.Q, keyObject.d]);
      });
    case enums.publicKey.ecdh:
      return publicKey.elliptic.generate(oid).then(function (keyObject) {
        return constructParams(types, [
          keyObject.oid,
          keyObject.Q,
          { hash: keyObject.hash, cipher: keyObject.cipher },
          keyObject.d
        ]);
      });
    default:
      throw new Error('Invalid public key algorithm.');
  }
}
import { crypto, packet, enums } from "openpgp";
const publicKey = crypto.public_key;

function constructParams(types, data) {
  return types.map(function(type, i: number) {
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



/** Returns the types comprising the public key of an algorithm
 * @param {String} algo The public key algorithm
 * @returns {Array<String>} The array of types
 */
function getPubKeyParamTypes(algo) {
  switch (algo) {
    //   Algorithm-Specific Fields for RSA public keys:
    //       - a multiprecision integer (MPI) of RSA public modulus n;
    //       - an MPI of RSA public encryption exponent e.
    case enums.publicKey.rsa_encrypt:
    case enums.publicKey.rsa_encrypt_sign:
    case enums.publicKey.rsa_sign:
      return [type_mpi, type_mpi];
    //   Algorithm-Specific Fields for Elgamal public keys:
    //       - MPI of Elgamal prime p;
    //       - MPI of Elgamal group generator g;
    //       - MPI of Elgamal public key value y (= g**x mod p where x  is secret).
    case enums.publicKey.elgamal:
      return [type_mpi, type_mpi, type_mpi];
    //   Algorithm-Specific Fields for DSA public keys:
    //       - MPI of DSA prime p;
    //       - MPI of DSA group order q (q is a prime divisor of p-1);
    //       - MPI of DSA group generator g;
    //       - MPI of DSA public-key value y (= g**x mod p where x  is secret).
    case enums.publicKey.dsa:
      return [type_mpi, type_mpi, type_mpi, type_mpi];
    //   Algorithm-Specific Fields for ECDSA/EdDSA public keys:
    //       - OID of curve;
    //       - MPI of EC point representing public key.
    case enums.publicKey.ecdsa:
    case enums.publicKey.eddsa:
      return [type_oid, type_mpi];
    //   Algorithm-Specific Fields for ECDH public keys:
    //       - OID of curve;
    //       - MPI of EC point representing public key.
    //       - KDF: variable-length field containing KDF parameters.
    case enums.publicKey.ecdh:
      return [type_oid, type_mpi, type_kdf_params];
    default:
      throw new Error('Invalid public key encryption algorithm.');
  }
}
import { crypto, packet, enums } from "openpgp";
import * as SecretKey from "openpgp/src/packet/secret_key";

export async function generateSecretSubkey(options: any) {
  const secretSubkeyPacket = new packet.SecretSubkey(options.date);
  secretSubkeyPacket.packets = null;
  secretSubkeyPacket.algorithm = enums.read(enums.publicKey, options.algorithm);
  await secretSubkeyPacket.generate(options.rsaBits, options.curve);
  return secretSubkeyPacket;
}

export async function generateSecretKey(options: any) {
  const secretKeyPacket = new packet.SecretKey(options.date);
  secretKeyPacket.packets = null;
  secretKeyPacket.algorithm = enums.read(enums.publicKey, options.algorithm);
  await secretKeyPacket.generate(options.rsaBits, options.curve);
  return secretKeyPacket;
}


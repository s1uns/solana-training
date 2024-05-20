import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
import {
  getKeypairFromEnvironment,
  airdropIfRequired,
} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`⚡️ Connected to devnet`);

const publicKey = new PublicKey(process.env.PUBLIC_KEY_1 ? process.env.PUBLIC_KEY_1 : "5JhJhCj5yXhnZxtPRUvAnzGBfQNJhY2js4HoLVXzBTmG");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);


// await airdropIfRequired(
//   connection,
//   publicKey,
//   200 * LAMPORTS_PER_SOL,
//   300 * LAMPORTS_PER_SOL
// );

// console.log(
//   `💰 The balance for the wallet at address ${publicKey} is ${balanceInSOL} now!`
// );
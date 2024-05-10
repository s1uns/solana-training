import { Keypair } from "@solana/web3.js";
const prompt = require("prompt-sync")({ sigint: true });

let isFound: boolean = false;
let attemptsCount: number = 0;
let publicKey: string = '', secretKey:  Uint8Array = new Uint8Array();
const searchQuery = prompt("Which symbols combination should we search for: ");
const start = new Date().getTime();
console.log(`Looking for a public key with "${searchQuery}" in the beginning...`);


while(!isFound){
    const keypair = Keypair.generate();
    // console.log(keypair.publicKey.toBase58())
    if(keypair.publicKey.toBase58().slice(0, searchQuery.length).toLowerCase() == searchQuery.toLowerCase()){
        publicKey = keypair.publicKey.toBase58();
        secretKey = keypair.secretKey
        isFound = true;
    }
    attemptsCount++;
}
const elapsed = (new Date().getTime() - start) / 1000;

console.log(`The public key is: `, publicKey);
console.log(`The secret key is: `, secretKey);
console.log(`Time elapsed: `, elapsed, 's');
console.log(`Attempts taken: `, attemptsCount);


const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec; // elliptic
const ec = new EC('secp256k1'); // algoritma wallet

const myKey = ec.keyFromPrivate('1a942f4fe9851cc626733f0e19ae653c4dd86197e5673364e773d78acdd71f3b');
const myWalletAddress = myKey.getPublic('hex');

let tunacoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key disini', 10);
tx1.signTransaction(myKey);
tunacoin.addTransaction(tx1);

//tunacoin.createTransaction(new Transaction('address1','address2', 100));
//tunacoin.createTransaction(new Transaction('address1','address2', 50));
//^ Contoh Manual Transaction
 
console.log('\n starting the miner...');
tunacoin.minePendingTransactions(myWalletAddress); // Alamat Wallet yang public yang dituju

console.log('\nbalance of rama is', tunacoin.getBalanceOfAddress(myWalletAddress));

tunacoin.chain[1].transactions[0].amount = 1;

console.log('apakah valid?', tunacoin.isChainValid());
 
//console.log('\n starting the miner again...');
//tunacoin.minePendingTransactions('rama-address');

//console.log('\nbalance of rama is', tunacoin.getBalanceOfAddress('rama-address')); Mining Sentence












//console.log('Mining Block 1...');
//tunacoin.addBlock(new Block(1, "01/01/2021", {amount:4}));
//console.log('Mining Block 2...');
//tunacoin.addBlock(new Block(2, "01/01/2021", {amount:10}));

//console.log('Is Blockchain Valid?' + tunacoin.isChainValid()); //check 

//tunacoin.chain[1].data = { amount: 100};
//tunacoin.chain[1].hash = tunacoin.chain[1].calculateHash;

//console.log('Is Blockchain Valid?' + tunacoin.isChainValid());
//console.log(JSON.stringify(tunacoin, null, 4));
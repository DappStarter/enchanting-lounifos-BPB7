require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss hockey knife fortune spy'; 
let testAccounts = [
"0xefd069c798d6e656667a8c820794a86c4a03ad6438ed365011b1bc475b040ca3",
"0x6d93f9c618270a17dd542019f9a3fa18dd0147fd8101ba4c3f4cd9ade2000c92",
"0xbb365970177ffaaad8fc079f5e01c817cc37c6652d04221c576d6e2041e212ac",
"0x23d1fecd22775626af7c058d4fc04c5e20eb522bede11171371dc5d09584a47f",
"0x638a7660cf96cb04652b1e7cf0b2fcf072f73a0ade201ed9aae24ecdf04601c1",
"0xd803742b9453bbc2774f9591712c6379c21957919299139f6595ccb132635129",
"0x4166439ce00aeb625d416e0c40fc62b668e4b997c6903f17979a9700bbce001f",
"0x4a5484bb690bc4a181c1284d09702f6915fe34bd0f3431058d07deda55da4ef9",
"0xa0971f0a23d52c689d1be03b4abdf5a71ce01cb19538e613c7b132098405ae55",
"0x7051c77521272e6e03ea56ab7fb7b31e5f1bdeffaa20fc12da421dc41642b7e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


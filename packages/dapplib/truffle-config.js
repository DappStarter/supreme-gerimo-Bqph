require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note outside purity harvest hidden slot genuine'; 
let testAccounts = [
"0x050d5b7508f50babc84732969e8e269fa52c52d13e28412af35022a75a658342",
"0xfdd11c158b53ff605bc83dcfdfad1fa9133e6585612fb6db1e44c85122f89b2d",
"0x9a441198ec3a0820971e1e3861e462676eb5c109af6d56bd0b4cd269989b3bf5",
"0x4f9b42a78df4cadbc8d30def14991f8b8d15db89f06de88c2f9a166298fc7109",
"0xf496bf59b97eaff241f015232102d40899c66fd5fea59f07f86698f1dff5526a",
"0x8f088ea3cb8f21523d09a4e4b2cc7095b392569df4b05cc57635dc0982675b19",
"0xfa9e4531547eabd383d013213d61d401d49839f44f6c444edc0e34f0bb2693c9",
"0xb2866ef56990deccc08d26e44727bd4c228ecdca26f4af9cd2345ec7b458d5e7",
"0xa140b5400648cdfcb0fbff8ca3e5f699796e7eb0e578bfb511e8d41f17ca48c9",
"0xce444ca43e6c8d87ed9ffb15bf39f7de513c26e6e222bda7c4930808acaec644"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const key = document.getElementById("key");


function vigenereKeyLength(key, msg) {
    let keyLength = key.length;
    for(let i=0;i < msg.length - keyLength ; i++) {
        key += key[i%keyLength];
    }
    return key;
}

function vigenereEncrypt(msg, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    key = vigenereKeyLength(key, msg);
    for(let i=0; i < msg.length; i++) {
        let a = msg.charCodeAt(i);
        let b = key.charCodeAt(i);

        res += table[ ((a-97)+(b-97)) %26]
    }
    return res;
}

function vigenereDecrypt(cypher, key){
    let table = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    key = vigenereKeyLength(key, cypher);
    for(let i=0; i < cypher.length; i++) {
        let a = cypher.charCodeAt(i);
        let b = key.charCodeAt(i);
        let temp = a-b;
        
        if( temp < 0) {
            temp = 26 + temp;
        }
        res += (table[temp])
    }
    return res;
}


function vigenereEncryptCall(msg, keyIn) {
    msg = msg.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let cyphertext = vigenereEncrypt(msg, keyIn);

    return cyphertext;
}

function vigenereDecryptCall(cypherIn, keyIn) {
    cypherIn = cypherIn.toLowerCase();
    keyIn = keyIn.toLowerCase();

    let ori = vigenereDecrypt(cypherIn, keyIn);

    return ori;
}

function encryptButtonCall() {
    outputText.value = vigenereEncryptCall(inputText.value, key.value);
}

function decryptButtonCall() {
    inputText.value =  vigenereDecryptCall(outputText.value, key.value);
}

document.querySelector("#encryptButton").addEventListener("click",encryptButtonCall)
document.querySelector("#decryptButton").addEventListener("click",decryptButtonCall)
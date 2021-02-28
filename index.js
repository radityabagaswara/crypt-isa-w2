const affine = require("./affine");
const vigenere = require('./vigenere');
const trans = require("./transposition");

const mod = 26;

const affineKeyA = 7
const affineKeyB = 12;
const vigenereKey = "kadal";
const transKey = "pizza";


const encryptAll = async (text) => {
    

    const cAffine = await affine.crypt(text, affineKeyA, affineKeyB, mod);
    console.log("[Encryprt Affine]", cAffine);

    const cVigenere = await vigenere.crypt(cAffine, vigenereKey);
    console.log("[Encryprt Vigenere]", cVigenere);

    const cTrans = await trans.crypt(cVigenere, transKey, "x");
    console.log("[Encryprt Transposition]", cTrans);

    console.log("");
    return cTrans;
}

const decryptAll = async (text) => {
    console.log("");
    const dTrans = await trans.decrypt(text, transKey);
    console.log("[Decrypt Transposition]", dTrans);

    const dVigenere = await vigenere.decrypt(dTrans, vigenereKey);
    console.log("[Decrypt Vigenere]", dVigenere);

    const dAffine = await affine.decrypt(dVigenere, affineKeyA, affineKeyB, mod);
    console.log("[Decrypt Affine]", dAffine);

    return dAffine;
}

const run = async () => {
    console.log(process.argv);
    var myArgs = process.argv.slice(2);
    
    let encryptHasil = await encryptAll(myArgs[0]);
    let decryptHasil = await decryptAll(encryptHasil);
    
    console.log("");
    console.log("Hasil Encrypt");
    console.log(encryptHasil);

    console.log("");
    console.log("Hasil Decrpyt");
    console.log(decryptHasil);

}

run();
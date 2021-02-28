const utils = require("./utils");
const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

exports.crypt = (w, a, b, mod) => {
    let pop = w.split('');
    let crypt1 = [];
    pop.forEach(e => {
        const hsl = utils.mod((a * alph.indexOf(e) + b), mod);
        const cr = alph[hsl];
        crypt1.push(cr);
    });

    return crypt1.join('');
}

exports.decrypt = (w, a, b, mod) => {
    const modInv = utils.invModulo(a, mod);
    let pop = w.split('');
    let dcr = [];

    pop.forEach(e => {
        const hsl = utils.mod(modInv * (alph.indexOf(e) - b), mod);
        const cr = alph[Math.abs(hsl)];
        dcr.push(cr);
    });

    return dcr.join('');
}
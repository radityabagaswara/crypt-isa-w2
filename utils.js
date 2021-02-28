exports.invModulo = (num, mod) => {
        for (let x = 1; x < mod; x++) {
        if (((num % mod) * (x % mod)) % mod == 1)
            return x;
    }
}

exports.mod = (n, m) => {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
}
const table = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }

exports.crypt = (plainText, keyword) => {
    let encTxt = "";
    let spCharaCount = 0;

    for( let i = 0; i < plainText.length; i++ ){
      let key = (i - spCharaCount) % keyword.length;
      let keywordIndex = table.a.indexOf(keyword[key]);

      if(table[plainText[i]] ){
        encTxt += table[plainText[i]][keywordIndex];
      }else{
        encTxt += plainText[i];
        spCharaCount++;
      }
    }

    return encTxt;
} 

exports.decrypt = (encTxt, keyword) => {
    encTxt = encTxt.toLowerCase();
    keyword = keyword;

    let decryptedText = "";
    let spCharaCount = 0;

    for( let i = 0; i < encTxt.length; i++ ){
      let key = (i - spCharaCount) % keyword.length;
      let keyRow = table[keyword[key]];

      if( keyRow.indexOf(encTxt[i]) !== -1 ){
        decryptedText += table.a[keyRow.indexOf(encTxt[i])];
      }else{
        decryptedText += encTxt[i];
        spCharaCount++;
      }
    }

    return decryptedText;
}
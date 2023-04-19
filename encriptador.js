
function encriptador(text) {
  const chars = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  var s = text;
  s = s.replace(/[aeiou]/g, (m) => chars[m]);
  return s;
}

function desencriptador(text) {
    const chars = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
      };
    
      var s = text;
      s = s.replace(/(?:ai|enter|imes|ober|ufat)/g, m=> chars[m]);
    return s;
}

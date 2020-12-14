const money = function (number) {
  const acc = require("accounting");
  return acc.formatMoney(number, "Rp", ".");
};

module.exports = { money };

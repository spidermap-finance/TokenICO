const FacuTokenSale = artifacts.require("./facuTokenICO/FacuTokenSale");

module.exports = function (deployer) {
  deployer.deploy(FacuTokenSale, "0x89D34E6011c4Ba1164deA67433dDE6Fc46574d5C");
};
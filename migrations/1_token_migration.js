const FacuToken = artifacts.require("./facuTokenICO/FacuToken");

module.exports = function (deployer) {
  deployer.deploy(FacuToken)
};
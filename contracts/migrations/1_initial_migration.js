const Standard_Token = artefacts.require("Standard_Token"); 
module.exports = function (deployer) { 
    deployer.deploy(Standard_Token, 10000, "Example Coin", 1, "EPC"); 
} ;
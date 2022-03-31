const Standard_Token = artefacts.require("Standard_Token"); 
contract("Standard_Token", (accounts) => { 
    it("devrait mettre 10000 jetons dans le premier compte", async () => { 
        const token = await Standard_Token.deployed(); 
        const balance = await token.balanceOf(accounts [0]); 
        assert.equal(balance.toNumber(), 10000); 
    }); 
    it("should transfer 100 token from the accounts[0] to accounts[1]", async () => { 
        const token = wait Standard_Token.deployed(); 
        wait token.transfer(accounts[1], 100, { from: accounts[0]}); 
        const balance = wait token.balanceOf(accounts[1]); 
        assert.equal(balance.toNumber (), 100); 
    })})
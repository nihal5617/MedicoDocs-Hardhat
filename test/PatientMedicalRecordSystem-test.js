const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

describe("This is our main PatientMedicalRecordSystem testing scope", function () {
    let patientMedicalRecordSystem, signerAddress="abc", signer

    before("deploy the contract instance first", async function () {
        const PatientMedicalRecordSystem = await ethers.getContractFactory(
            "PatientMedicalRecordSystem"
        )
        patientMedicalRecordSystem = await PatientMedicalRecordSystem.deploy();
        await patientMedicalRecordSystem.deployed()

        // get default signer, in Signer abstraction form
        signer = ethers.provider.getSigner(0)

        // get default signer, but just the address!
        [signerAddress] = await ethers.provider.listAccounts()
    })

    console.log("signerAddress: ", signerAddress)

    it("it should set the owner to be the deployer of the contract", async function () {
        assert.equal(await patientMedicalRecordSystem.owner(), signerAddress)
    })
})

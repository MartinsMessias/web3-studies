async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld")
  
    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!")
    console.log("Contract deployed to address:", hello_world.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })

    //0x0958Eaf2c7a836f58309822A30b914F6e7e31e1d
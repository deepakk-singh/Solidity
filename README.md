

# Hello World

This Solidity program is a simple "Hello World" program that demonstrates the basic syntax and functionality of the Solidity programming language. The purpose of this program is to serve as a starting point for those who are new to Solidity and want to get a feel for how it works.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract has a single function that returns the string "Hello World!". This program serves as a simple and straightforward introduction to Solidity programming, and can be used as a stepping stone for more complex projects in the future.

## Getting Started

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

```javascript
pragma solidity ^0.8.4;

contract HelloWorld {
    function sayHello() public pure returns (string memory) {
        return "Hello World!";
    }
}

```

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "HelloWorld" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the sayHello function. Click on the "HelloWorld" contract in the left-hand sidebar, and then click on the "sayHello" function. Finally, click on the "transact" button to execute the function and retrieve the "Hello World!" message.

## Getting Started
# Installing
User can clone this repository to there local system or can dowload zip file.
User is required to install Node.js prior before executing the program.
Executing program
after cloning the Repository, open first terminal and enter the commands:
npm i
npm install @openzeppelin/contracts
Now open second terminal and enter the following commands to compile the contract if not compiled yet:
npx hardhat compile
Now Start the hardhat node:
npx hardhat node
Finally in the third terminal, deploy the contract on hardhat localhost, using the following command:
npx hardhat run --network localhost scripts/deploy.js
This will deploy the contract successfully.

## Help
To Understand the Hardhat commands on can use this command in terminal:

npx hardhat help


## Authors
Name: Deepak Kumar
Id:22BCS10494
GitHub: @deepakk-singh
Email: dipakkumar4167@gmail.com
##Video Link:
https://www.loom.com/share/0a9a4d4c17ec4109a0ed0c8d4ab4e3c8?sid=f80042cc-8560-4675-82b2-5f7dfb4c3377

## License

This project is licensed under the MIT License - see the LICENSE.md file for details


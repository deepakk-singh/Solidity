## MyToken Smart Contract
# Overview
MyToken is a simple ERC20-like token smart contract implemented in Solidity. The contract allows for minting and burning of tokens, keeping track of total supply, and storing balances for different addresses. This contract is built using Solidity 0.8.18.

## Features
# Token Details:

tokenName: The name of the token.
tokenAbbrv: The abbreviation (symbol) of the token.
totalSupply: The total supply of tokens in circulation.
# Address Balances:

The contract maintains a mapping of addresses to their respective token balances.
# Mint Function:

Allows the creation of new tokens.
Increases the totalSupply.
Increases the balance of a specified address.
# Burn Function:

Allows the destruction of tokens.
Decreases the totalSupply.
Decreases the balance of a specified address.
Ensures that the address has enough balance to burn the specified amount.


# Contract Functions
1. Mint
solidity
Copy code
function mint(address _to, uint256 _value) public;


# Parameters:
_to: The address to which tokens will be minted.
_value: The number of tokens to mint.
Functionality: Increases the total supply and updates the balance of the specified address.


# 2. Burn
solidity
Copy code
function burn(address _from, uint256 _value) public;


# Parameters:
_from: The address from which tokens will be burned.
_value: The number of tokens to burn.


# Functionality: Decreases the total supply and updates the balance of the specified address. Ensures that the address has enough balance to burn the tokens.
# Prerequisites
Solidity Compiler: Version 0.8.18 or higher.
Remix IDE (optional): For easy testing and deployment of the contract.
Node.js (optional): If using frameworks like Truffle or Hardhat.


## Deployment
To deploy the contract, you can use Remix IDE:

Copy the contract code into the Remix IDE.
Compile the contract with the Solidity compiler.
Deploy the contract to a local or test network using Remix’s built-in deployment tool.


## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/coin-token.git
## Usage
After deploying the contract, you can interact with the following functionalities:

Mint Tokens: Use the mint function to create new tokens and assign them to an address.
Burn Tokens: Use the burn function to destroy tokens from an address, reducing the total supply.



## Contact
For any questions or support, feel free to reach out:

GitHub: @deepakk-singh
Email: dipakkumar4167@gmail.com


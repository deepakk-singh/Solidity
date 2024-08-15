# Solidity
This project is a simple implementation of an ERC-20-like token in Solidity, with minting and burning functionalities. 


## Table of Contents

- [Project Overview](#project-overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Project Overview

The "Coin Token" project is a basic smart contract written in Solidity that includes:
- Public variables to store token details (Token Name, Token Abbreviation, and Total Supply).
- A mapping to keep track of balances for each address.
- A mint function to create new tokens and increase both total supply and individual balances.
- A burn function to destroy tokens and reduce the total supply and individual balances, with a check to ensure sufficient balance.

## Requirements

The contract includes the following functionalities:
1. **Public Variables**:
   - `collegeName`: The name of the token (e.g., "Chandigarh University").
   - `collegeAbbrv`: The abbreviation of the token (e.g., "CU").
   - `totalSupply`: The total supply of the token.

2. **Mapping**:
   - `balances`: A mapping that associates addresses with their token balances.

3. **Mint Function**:
   - Increases the total supply and the balance of the specified address.

4. **Burn Function**:
   - Decreases the total supply and the balance of the specified address, with a condition that ensures the balance is sufficient to burn.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/coin-token.git

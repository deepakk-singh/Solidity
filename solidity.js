// public variables here

string public collegeName = "Chandigarh University";
string public collegeAbbrv = "CU";
uint public totalSupply = 0;

// mapping variable here
mapping(address => uint) public balances;

// mint function
function mint(address _address, uint _value) public {
    totalSupply += _value;
    balances[_address] += _value;
}

// burn function
function burn(address _address, uint _value) public {
            require(balances[_address] >= _value, "Insufficient balance to burn");
    totalSupply -= _value;
    balances[_address] -= _value;
}

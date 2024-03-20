// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract LeisureContract {
    AggregatorV3Interface internal dataFeed;
    
    string public name = "LeisureContract";
    string public symbol = "U2LES";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    address payable public ownerAddress;
    uint32 public oneUsdToToken;
    address public usdtAddress = 0x29ed8cE3cA1CcF72838AdC691726603b42d8b799;


    mapping(address => uint256) public nonce;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Buy(address indexed buyer, uint256 value);
    event BuyWithUSDT(address indexed buyer, uint256 value);

    modifier onlyOwner {
        require(msg.sender == ownerAddress, "Only owner can call this function");
        _;
    }

    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
        ownerAddress = payable(msg.sender);
        oneUsdToToken = 100;

        // eth 0x694AA1769357215DE4FAC081bf1f309aDC325306
        // bnb 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
        dataFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    function setExchangeRate(uint32 rateUsdToToken) external onlyOwner {
        oneUsdToToken = rateUsdToToken;
    }

    function transfer(address to, uint256 value, uint256 userNonce) external returns (bool) {
        require(balanceOf[msg.sender] >= value, "Not enough balance");
        require(userNonce == nonce[msg.sender], "Invalid nonce");
        
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        nonce[msg.sender]++;

        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external returns (bool) { // ủy quyền cho thằng khác(spender) có thể chuyển tiền trong tài khoản của mình với một số lượng nhất định
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external returns (bool) {
        require(balanceOf[from] >= value, "Not enough balance");
        require(allowance[from][msg.sender] >= value, "Not enough allowance");
        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(from, to, value);
        return true;
    }

    function buyTokenWithUSDT(uint256 _amount) external returns (bool) {
        require(_amount >= 2, "The amount must be greater than 2 USDT");
        require(IERC20(usdtAddress).allowance(msg.sender, address(this)) >= _amount * 10 ** 18, "Allowance not set");

        IERC20(usdtAddress).transferFrom(msg.sender, address(this), _amount  * 10 ** 18);

        uint256 amountThis = _amount * oneUsdToToken * 10 ** 18;
        balanceOf[msg.sender] += amountThis;
        balanceOf[ownerAddress] -= amountThis;
        emit BuyWithUSDT(msg.sender, amountThis);
        return true;
    }

    function buyToken() external payable returns (bool) {
        require(msg.value > 0.001 ether, "The amount must be greater than 0.001 ether");

        int256 usdPrice = getChainlinkDataFeedLatestAnswer();
        uint256 amount = (msg.value * uint256(usdPrice) * oneUsdToToken * 10 ** 18);

        balanceOf[msg.sender] += amount;
        balanceOf[ownerAddress] -= amount;
        emit Buy(msg.sender, amount);
        return true;
    }

    receive() external payable {
        require(msg.value > 0.001 ether, "The amount must be greater than 0.001 ether");

        int256 usdPrice = getChainlinkDataFeedLatestAnswer();
        uint256 amount = (msg.value * uint256(usdPrice) * oneUsdToToken * 10 ** 18);

        balanceOf[msg.sender] += amount;
        balanceOf[ownerAddress] -= amount;
        emit Buy(msg.sender, amount);
    }

    function withdraw(uint amount) public onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance");
        ownerAddress.transfer(amount);
    }

    function withdrawUSDT(uint256 _amount) external onlyOwner {
        IERC20(usdtAddress).transfer(msg.sender, _amount);
    }

    function getChainlinkDataFeedLatestAnswer() public view returns (int) {
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        return answer / (10 ** 8);
    }
}
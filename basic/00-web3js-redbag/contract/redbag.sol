// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;
contract redpacket {
    //发红包的人
    address payable public rich;
    //准备发几个红包
    uint public number;

    constructor(uint _number) payable  {
        rich = payable(msg.sender);
        number = _number;
    }

    //账号余额
    function getBalance() public view returns (uint){
        return address(this).balance;
    }

     //抢红包
    function stakeMoney() public payable returns(bool){

        //紅包数量大于0
        require(number>0);

        //取得余额需要大于0
        require(getBalance()>0);
        number --;
        //此方法是 random 100内的数字
        uint random = uint(keccak256(abi.encode(block.timestamp, msg.sender, "rich")))%100;
        uint balance = getBalance();
        address payable someone = payable(msg.sender);

        //把钱转账给抢到红包的人
        someone.transfer(balance * random/100);
        return true;

    }

    //合约销毁
    function kill() public{
        require(msg.sender == rich);

        selfdestruct(rich);
    }



}
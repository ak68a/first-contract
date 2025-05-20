// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    // State variable to store the message
    string private message;
    
    // Event to emit when the message is updated
    event MessageUpdated(string oldMessage, string newMessage);
    
    // Constructor to set the initial message
    constructor(string memory initialMessage) {
        message = initialMessage;
        emit MessageUpdated("", initialMessage);
    }
    
    // Function to get the current message
    function getMessage() public view returns (string memory) {
        return message;
    }
    
    // Function to update the message
    function setMessage(string memory newMessage) public {
        string memory oldMessage = message;
        message = newMessage;
        emit MessageUpdated(oldMessage, newMessage);
    }
} 
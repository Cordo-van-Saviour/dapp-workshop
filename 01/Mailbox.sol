pragma solidity ^0.4.25;
/**
* @title Mailbox
* @author Uros Radovanovic <ookie@protonmail.com>
*/
contract Mailbox {

    event Message(address owner, address recipient, bytes subject, bytes message);

    /**
     * @notice Send message to email `recipient`.
     * @param recipient The address of the account to send the message to.
     * @param subject The subject of the message
     * @param message The message in MIME type application/pkcs7-mime.
     */
    function send(address recipient, bytes subject, bytes message) public {
        address owner = msg.sender;
        // Store the message in the transaction log.
        emit Message(owner, recipient, subject, message);
    }

}

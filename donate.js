function copyToClipboard(method) {
    let textToCopy;
    switch (method) {
        case 'NEFT':
            textToCopy = 'Account Name: Kitty Kafé\nAccount Number: 1234567890\nIFSC Code: ABCD0123456';
            break;
        case 'UPI':
            textToCopy = 'kittykafe@upi';
            break;
        default:
            return;
    }

    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Details copied to clipboard');
    }, function(err) {
        alert('Failed to copy details: ', err);
    });
}

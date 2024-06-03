(function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-content').classList.toggle('active');
    });

    function setWalkSpeed() {
        const walkspeed = prompt("Enter Walkspeed:");
        if (walkspeed !== null) {
            alert(`Walkspeed set to ${walkspeed}`);
            // Implement logic to set walkspeed in the game workspace
            // For example:
            // workspace.setWalkspeed(walkspeed);
        }
    }

    function setJumpPower() {
        const jumpPower = prompt("Enter Jump Power:");
        if (jumpPower !== null) {
            alert(`Jump Power set to ${jumpPower}`);
            // Implement logic to set jump power in the game workspace
        }
    }

    function toggleNoclip() {
        // Implement toggleNoclip function
    }

    function joinDiscord() {
        // Implement joinDiscord function
    }
})();

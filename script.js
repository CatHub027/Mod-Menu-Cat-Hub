// JavaScript code (IIFE)
        (function() {
            function setWalkSpeed() {
                const walkspeed = prompt("Enter Walkspeed:");
                if (walkspeed !== null) {
                    alert(`Walkspeed set to ${walkspeed}`);
                    // Example: Set walkspeed for the local player
                    game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = parseFloat(walkspeed);
                }
            }

            function setJumpPower() {
                const jumpPower = prompt("Enter Jump Power:");
                if (jumpPower !== null) {
                    alert(`Jump Power set to ${jumpPower}`);
                    // Example: Set jump power for the local player
                    game.Players.LocalPlayer.Character.Humanoid.JumpPower = parseFloat(jumpPower);
                }
            }

            function toggleNoclip() {
                // Example: Toggle noclip mode for the local player
                game.Players.LocalPlayer.Character.Humanoid:ChangeState(11);
            }

            function joinDiscord() {
                // Example: Open a link to join the game's Discord server
                window.open("https://discord.com/invite/roblox");
            }
        })();

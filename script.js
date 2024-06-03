document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const menu = document.getElementById("menu");
    const walkspeedBtn = document.getElementById("walkspeedBtn");
    const walkspeedInput = document.getElementById("walkspeedInput");
    const jumpPowerBtn = document.getElementById("jumpPowerBtn");
    const jumpPowerInput = document.getElementById("jumpPowerInput");
    const noclipBtn = document.getElementById("noclipBtn");

    toggleBtn.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    });

    walkspeedBtn.addEventListener("click", function() {
        const walkspeed = walkspeedInput.value;
        alert("Walkspeed set to: " + walkspeed);
        // Code to set walkspeed in Workspace
    });

    jumpPowerBtn.addEventListener("click", function() {
        const jumpPower = jumpPowerInput.value;
        alert("Jump Power set to: " + jumpPower);
        // Code to set jump power in Workspace
    });

    noclipBtn.addEventListener("click", function() {
        alert("Noclip toggled");
        // Code to toggle noclip in Workspace
    });
});

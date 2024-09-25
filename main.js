document.getElementById("submit").addEventListener("click", () => {
    const team = document.getElementById("team-name").value;
    const school = document.getElementById("school").value;
    const innovation = document.getElementById("innovation").value;
    const challenge = document.querySelector('input[name="challenge"]:checked').value;
    const experience = document.querySelector('input[name="experience"]:checked').value;
    const excitement = document.getElementById("excitement").value;
    let storage = JSON.parse(localStorage.getItem("data")) || [];
    let done = false
    for (let i = 0; i < storage.length; i++) {
        if (Object.values(storage[i]).includes(team)) {
            done = true
        }
    }
    if (done) {
        alert("You have already submitted this form.")
    } else {
        storage.push({
            team,
            school,
            innovation,
            challenge,
            experience,
            excitement
        });
        localStorage.setItem("data", JSON.stringify(storage));
        alert("Form submitted successfully!");
        window.location.reload()
    }
})
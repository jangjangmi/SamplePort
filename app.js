function showChoices() {
    const choicesDiv = document.getElementById("choices");
    choicesDiv.style.display = choicesDiv.style.display === "none" ? "block" : "none";
}

function toggleDescription(choiceId) {
    const descDiv = document.getElementById(`${choiceId}-desc`);
    descDiv.style.display = descDiv.style.display === "none" ? "block" : "none";
}

// Navbar
const navToggle = document.getElementById('navToggle');
const navOptions = document.getElementById('navOptions');

navToggle.addEventListener('click', () => {
    navOptions.style.display = navOptions.style.display === 'none' || navOptions.style.display === '' ? 'flex' : 'none';
});


//ripple effect

document.addEventListener('mousemove', function(e) {
    var image = document.getElementById('sunodKa');
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var imageWidth = image.offsetWidth / 2;
    var imageHeight = image.offsetHeight / 2;
    
    image.style.left = (mouseX - imageWidth) + 'px';
    image.style.top = (mouseY - imageHeight) + 'px';
});

//ito yung ripple effect na kapag pinipindot mo backgrund is parang may effect sya
document.body.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const size = 150; // Set a fixed size for the ripple
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = e.clientX - size / 2; // Center the ripple
    const y = e.clientY - size / 2; // Center the ripple

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const skinColor = document.getElementById('skin-color').value;
    const eyeColor = document.getElementById('eye-color').value;
    const hairStyle = document.getElementById('hair-style').value;

    const characterData = {
        skinColor,
        eyeColor,
        hairStyle
    };

    localStorage.setItem('characterData', JSON.stringify(characterData));
    window.location.href = 'map.html';
});

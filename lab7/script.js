document.addEventListener('DOMContentLoaded', function () {
    const colorForm = document.getElementById('colorForm');
    const heading = document.getElementById('heading');

    colorForm.addEventListener('submit', function (event) {
        event.preventDefault(); // prevent default form submission behavior

        const colorInput = document.getElementById('colorInput').value;
        heading.style.color = colorInput; // set the color of the heading
    });
});

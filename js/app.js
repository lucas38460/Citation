let baveu = document.getElementById('center');

async function textrandom () {
    fetch("https://api.quotable.io/random")

    .then(response => response.json())

    .then((data) => {
        baveu.textContent = data.content;
    });
};

textrandom();
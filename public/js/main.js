const form = document.querySelector("#image-form");
const promptInput = document.querySelector("#prompt");
const sizeInput = document.querySelector("#size");
const spinner = document.querySelector(".spinner");
const msg = document.querySelector(".msg");
const generatedImage = document.querySelector("#generatedImage");

const API = "/api";

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    generatedImage.src = '';
    const prompt = promptInput.value;
    const size = sizeInput.value;

    if (prompt === "") {
        alert("Please add some text");
        return;
    }

    console.log({ prompt, size });
    requestImageGeneration({ prompt, size });
}

async function requestImageGeneration(params) {
    showSpinner();

    try {
        const response = await axios.post(`${API}/images/generate`, params);
        const imageUrl = response.data.imageUrl;
        generatedImage.src = imageUrl;
        removeSpinner();
    } catch (error) {
        removeSpinner();
        msg.textContent = error.response.data.message;
        console.log(error);
        setTimeout(() => msg.textContent = '', 5000);
    }
}

function showSpinner() {
    spinner.classList.add("show");
}

function removeSpinner() {
    spinner.classList.remove("show");
}

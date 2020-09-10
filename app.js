'use strict';

function processImages() {
    let qty = $("#quantity").val();
    $('#doggie-list').replaceWith(`<ol id="doggie-list">
    </ol>`);
    for (let i = 0; i < qty; i++) {
        getRandomDogImage();
    }
}

function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson =>
            generateHtml(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


function generateHtml(responseJson) {
    //console.log(responseJson);
    $('#doggie-list').append(`<li><img src=" ${responseJson.message}" class="results-img"></li>`)
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        processImages();
    });
}

$(function() {
    watchForm();
});
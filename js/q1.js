'use strict'

var likes = 0
var disLikes = 0

function addLike() {
    likes++
    document.querySelector('.likes-amount').innerText = `(${likes})`;
}

function addDislike() {
    disLikes++
    document.querySelector('.dislikes-amount').innerText = `(${disLikes})`;
}
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = `${mostRecentScore}/100`;

let face = document.querySelectorAll('.far');



console.log(mostRecentScore)


if(mostRecentScore <= 100 && mostRecentScore >= 75) {
        console.log('it works')
        face[0].classList.add("fa-smile-wink")
} else if(mostRecentScore <= 74 && mostRecentScore >= 60) {
        face[0].classList.add("fa-smile")
} else if(mostRecentScore <= 59 && mostRecentScore >= 50) {
        console.log('it works')
        face[0].classList.add("fa-meh")
} else if(mostRecentScore <= 49 && mostRecentScore >= 25) {
        face[0].classList.add("fa-frown")
} else {
        face[0].classList.add("fa-sad-tear")
}
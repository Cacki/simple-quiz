const form = document.querySelector('form');
const score = document.querySelector('span');
const correctAnswears = ['A', 'A', 'B', 'B'];
const numberOfQuestions = correctAnswears.length;

form.addEventListener('submit', e => {
  e.preventDefault();
  let points = 0;
  for(let i = 0; i < numberOfQuestions; i++) {
    let answear = form[`question${i + 1}`];
    if (answear.value == correctAnswears[i]) {
      points ++;
    }
  }
  let percentScore = points / numberOfQuestions * 100;
  showScores(percentScore);
  score.parentElement.style="display: block";
  window.scrollTo({top: 0, behavior: 'smooth'});
});

const showScores = max => {
  let i = 0;
  setInterval( () => {
      i++;
      if(i <= max)
        score.textContent = `${i} %`;
  }, 17 );
};
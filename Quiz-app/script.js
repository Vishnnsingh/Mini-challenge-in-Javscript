const mainContainer = document.getElementById('main__container'), loadingContainer = document.getElementById('loading__container'), form = document.getElementById('submitForm');

const buildURL = () => 'https://opentdb.com/api.php?amount=1&type=multiple';

const displayLabels = (choices) => choices.forEach((choice, i) => {
  document.getElementById(`choice_${i + 1}`).value = choice;
  document.getElementById(`choice${i + 1}`).innerHTML = choice;
});

const buildQuestion = ({ question: questionText, correct_answer, incorrect_answers }) => {
  document.getElementById('question').innerHTML = questionText;
  displayLabels(randomizeQuestion(correct_answer, incorrect_answers));
};

const randomizeQuestion = (correctAnswer, incorrectAnswers) => {
  const randomArray = [correctAnswer, ...incorrectAnswers];
  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }
  return randomArray;
};

const callingAPI = async (url) => {
  mainContainer.style.display = 'none';
  loadingContainer.style.display = 'block';
  try {
    const { results: [questionObj] } = await (await fetch(url)).json();
    buildQuestion(questionObj);
    return questionObj.correct_answer;
  } catch (err) {
    console.error(err);
  } finally {
    mainContainer.style.display = 'block';
    loadingContainer.style.display = 'none';
  }
};

const processAPICall = async () => {
  const correctAnswer = await callingAPI(buildURL());
  checkAnswer(correctAnswer);
};

const checkAnswer = (correctAns) => form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedAnswer = document.querySelector('input[name="choices"]:checked');
  if (selectedAnswer) {
    const selectedValue = selectedAnswer.value, correctAnswerElement = document.querySelector(`input[value="${correctAns}"]`);
    displayAlert(selectedValue === correctAns ? 'correct' : 'wrong');
    setTimeout(() => {
      clearDisplayAlert();
      form.reset();
      if (selectedValue === correctAns) processAPICall();
    }, 1000);
  } else alert('Please select an answer');
});

document.addEventListener('DOMContentLoaded', processAPICall);

const displayAlert = (status) => document.getElementById(`${status}__alert`).style.display = 'inline-block';

const clearDisplayAlert = () => ['correct', 'wrong'].forEach(alert => document.getElementById(`${alert}__alert`).style.display = 'none');

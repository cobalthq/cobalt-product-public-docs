const yesButton = document.getElementById('feedback-yes');
const noButton = document.getElementById('feedback-no');

console.log('yesButton', yesButton);
console.log('noButton', noButton);

const disableButtons = () => {
  yesButton.disabled = true;
  noButton.disabled = true;
};

function thanksFeedback(button){
  button.blur();
  buttonText = button.innerText
  button.innerText = 'Thanks for the feedback!'
  setTimeout(function () {
    button.innerText = buttonText;
  }, 2000);
}

const sendFeedback = (value) => {
  if (typeof dataLayer !== 'object' || typeof dataLayer.push !== 'function') return;
  const args = {
    event: 'Feedback Buttons',
    action: 'click',
    label: window.location.pathname,
    value: value
  };
  dataLayer.push(args);
};

if (yesButton !== null ) {
  yesButton.addEventListener('click', () => {
    thanksFeedback(yesButton);
    disableButtons();
    sendFeedback(1);
  });
}

if (noButton !== null ) {
  noButton.addEventListener('click', () => {
    thanksFeedback(noButton);
    disableButtons();
    sendFeedback(0);
  });
}

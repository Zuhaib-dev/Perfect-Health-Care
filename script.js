
  function toggleAnswer(id) {
    const answer = document.getElementById('answer-' + id);
    const icon = document.getElementById('icon-' + id);

    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      icon.innerText = '-';
    } else {
      answer.classList.add('hidden');
      icon.innerText = '+';
    }
  }
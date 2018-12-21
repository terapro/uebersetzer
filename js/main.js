window.onload = fn;

function fn() {
  const lev100textFeeder = document.getElementById("100-textFeeder");
  const lev200textFeeder = document.getElementById("200-textFeeder");
  const lev200nextSentence = document.getElementById("200-nextSentence");

  function feedNextSentence() {
    const text = document.getElementById("100-textFeeder").value;
    const boundChar = findLastSentenceChar(text);
    let newText = text.slice(boundChar + 1);
    let sentence = text.slice(0, boundChar + 1);
    sentence = removeEmptySpaceAtStart(sentence);
    newText = removeEmptySpaceAtStart(newText);

    lev100textFeeder.value = newText;
    lev200textFeeder.value = sentence;
  }

  lev200nextSentence.addEventListener("click", feedNextSentence);
}

// Lib

function findLastSentenceChar(text) {
  return text.search(/[!.?]/);
}

function removeEmptySpaceAtStart(text) {
  return text.replace(/^\s+/, "");
}

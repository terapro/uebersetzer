window.onload = fn;

function fn() {
  const lev100textFeeder = document.getElementById("100-textFeeder");
  const lev200textFeeder = document.getElementById("200-textFeeder");
  const lev200nextSentence = document.getElementById("200-nextSentence");

  function feedNextSentence() {
    const text = document.getElementById("100-textFeeder").value;
    lev200textFeeder.blur();
    const boundChar = findLastSentenceChar(text);
    lev100textFeeder.value = text.slice(boundChar + 1);
    lev200textFeeder.value = text.slice(0, boundChar + 1);
  }

  // Lib

  function findLastSentenceChar(text) {
    return text.search(/[!.?]/);
  }

  lev200nextSentence.addEventListener("click", feedNextSentence);
}

const mAnimation = () => {
  const mArtowork = document.querySelector("#mArtoworkWrapper svg");
  const singleCharacter = document.querySelectorAll(
    "#mArtoworkWrapper svg path"
  );
  const singleCharacterOpacity0 =
    document.querySelectorAll("svg g[opacity='0']");

  let randomIndex = Math.floor(Math.random() * singleCharacterOpacity0.length);
  singleCharacterOpacity0[randomIndex].setAttribute("opacity", "1");
  setTimeout(() => {
    singleCharacterOpacity0[randomIndex].setAttribute("opacity", "0");
  }, 5000);
};

setInterval(mAnimation, 50);

window.addEventListener("DOMContentLoaded", (event) => {
  mAnimation();
});

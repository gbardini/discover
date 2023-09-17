function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, usar imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // se nao (dark mode) usar a imagem padrao
    img.setAttribute("src", "./assets/avatar.png");
  }
}

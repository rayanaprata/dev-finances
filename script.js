const Modal = {
  open() {
    // abrir Modal
    // adicionar a class active ao Modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do Modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

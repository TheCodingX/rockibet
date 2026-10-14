// Configuración de RockiBet para GitHub Pages.
// 1) Pegá acá el objeto firebaseConfig de tu proyecto (Firebase console → Configuración del proyecto → Tus apps → Web).
// 2) Asegurate de que incluya databaseURL (Realtime Database → copiá la URL que termina en .firebaseio.com o .firebasedatabase.app).
window.ROCKIBET_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    appId: ""
  },
  // PIN para entrar a la mesa de control (link "Acceso banca" al pie de la página).
  adminPin: "rocki",
  // Momento en que el mercado se abre sí o sí (hora Argentina 23:00 del 13/10 = 02:00Z del 14/10).
  unlockAt: "2026-10-14T02:00:00Z",
  // Nodo de la base donde vive la mesa. Cambialo para arrancar una mesa nueva sin borrar nada.
  path: "mesa"
};

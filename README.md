# RockiBet

Casa de apuestas en joda para la final Nacho vs Beni. Página estática + Firebase Realtime Database.

## Puesta en marcha

1. Creá un proyecto en https://console.firebase.google.com (gratis).
2. Compilación → Realtime Database → Crear base de datos → modo de prueba.
3. Configuración del proyecto → Tus apps → Web (</>) → registrá la app y copiá `firebaseConfig`.
4. Pegalo en `config.js` (agregá `databaseURL` si no viene).
5. Subí la carpeta a GitHub y activá Pages (Settings → Pages → Deploy from branch → main / root).

El modo de prueba de Firebase vence a los 30 días. Para que no lo toque cualquiera, en Reglas podés dejar:

```json
{ "rules": { "mesa": { ".read": true, ".write": true } } }
```

La mesa de control se abre con el link "Acceso banca" al pie de la página y el PIN de `config.js`.

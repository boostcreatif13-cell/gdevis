// Service Worker désactivé pour le moment
// Ce fichier évite les erreurs 404

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

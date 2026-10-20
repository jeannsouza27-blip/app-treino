// Projeto Shape service worker.
// HTML: network-first (always the latest app when online, cached copy offline).
// Everything else (manifest, icons, exercise photos, fonts): cache-first.
// Bump VERSION whenever this file or the precache lists change.
const VERSION = 'shape-v1';

const CORE = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable-512.png',
    './icons/apple-touch-icon.png'
];

// Exercise demo photos. Precached best-effort: one missing file never blocks install.
const IMAGES = [
    './imagem treino/Agachamento Livre.webp',
    './imagem treino/Agachamento.webp',
    './imagem treino/Cadeira Extensora.webp',
    './imagem treino/Crucifixo.jpg',
    './imagem treino/Desenvolvimento.webp',
    './imagem treino/Elevação Lateral.gif',
    './imagem treino/Elevação de Pernas.jpg',
    './imagem treino/Leg Press.webp',
    './imagem treino/Mesa Flexora.avif',
    './imagem treino/Panturrilha em Pé.gif',
    './imagem treino/Prancha.jpg',
    './imagem treino/Pulldown.gif',
    './imagem treino/Puxada Frente.webp',
    './imagem treino/Puxada Frontal.webp',
    './imagem treino/Remada Baixa.webp',
    './imagem treino/Remada Cavalinho.webp',
    './imagem treino/Rosca Direta.jpg',
    './imagem treino/Rosca Martelo.webp',
    './imagem treino/Supino Inclinado.webp',
    './imagem treino/Supino Reto.jpg',
    './imagem treino/Tríceps Corda.webp',
    './imagem treino/Tríceps Francês.webp',
    './1789409500843-d61b4ec1-6a6c-4e6c-bfa7-1701a10c2bed_3.jpg',
    './ChatGPT Image 14 de set. de 2026, 14_53_50.png'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(VERSION);
        await cache.addAll(CORE);
        await Promise.allSettled(IMAGES.map(url => cache.add(url)));
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)));
        await self.clients.claim();
    })());
});

const isHtml = request =>
    request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html');

async function networkFirst(request) {
    const cache = await caches.open(VERSION);
    try {
        const response = await fetch(request);
        if (response.ok) cache.put('./index.html', response.clone());
        return response;
    } catch (error) {
        return (await cache.match(request, { ignoreSearch: true }))
            || (await cache.match('./index.html'))
            || new Response('Sem conexão.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
}

async function cacheFirst(request) {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        // Opaque responses (cross-origin fonts) report status 0 but are still usable.
        if (response.ok || response.type === 'opaque') cache.put(request, response.clone());
        return response;
    } catch (error) {
        return new Response('', { status: 504 });
    }
}

self.addEventListener('fetch', event => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const sameOrigin = url.origin === self.location.origin;
    if (!sameOrigin && !FONT_HOSTS.includes(url.hostname)) return;

    if (sameOrigin && isHtml(request)) {
        event.respondWith(networkFirst(request));
        return;
    }
    event.respondWith(cacheFirst(request));
});

const urls = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
  'https://images.unsplash.com/photo-1600607686527-6fb886090705',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd'
];
for (const url of urls) {
  fetch(url).then(r => console.log(url, r.status)).catch(e => console.log(url, e.message));
}

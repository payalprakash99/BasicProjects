const progress = document.querySelector('.Progress-done')

setTimeout(() => {
progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;
},500)
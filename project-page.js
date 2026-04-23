const buttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => button.classList.add('button-hover'));
    button.addEventListener('mouseleave', () => button.classList.remove('button-hover'));
    button.addEventListener('focus', () => button.classList.add('button-hover'));
    button.addEventListener('blur', () => button.classList.remove('button-hover'));
});

sections.forEach(section => {
    section.addEventListener('mouseenter', () => section.classList.add('section-active'));
    section.addEventListener('mouseleave', () => section.classList.remove('section-active'));
});

import menu from "../data/menu.json";
import template from "../templates/menuTemplate.hbs";
// console.log(menu);
// console.log(template)
const refs = {
    menuList: document.querySelector('.js-menu'),
    switchButton: document.querySelector(".theme-switch__toggle"),
    body: document.body,
};
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

//Функция с файл templates
const markup = template(menu);


//Рендерим разметку
refs.menuList.insertAdjacentHTML('beforeend', markup);

//Вешаем слушателя собитый
refs.switchButton.addEventListener('change', changeTheme)
//Функция переключпения теми
function changeTheme(e) {
    if (e.target.checked) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', Theme.DARK)

        return 
    }
    refs.body.classList.remove(Theme.DARK)
    refs.body.classList.add(Theme.LIGHT)
    localStorage.setItem('Theme', Theme.LIGHT)
}
refs.body.classList.add(localStorage.getItem('Theme') === null ? Theme.LIGHT : localStorage.getItem('Theme'));


refs.switchButton.checked = localStorage.getItem('Theme') === Theme.DARK;
//======================Part-1===================================//
// Select and cache the <main> element
const mainEl = document.querySelector('main');

// Set the background color of mainEl using the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to an <h1> element with the text "DOM Manipulation"
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of "flex-ctr" to mainEl to apply flexbox styling
mainEl.classList.add('flex-ctr');


//======================Part-2===================================//

var topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

//======================Part-3===================================//

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach((element => {
    let topLinks = document.createElement("a");

    topLinks.setAttribute("href", element.href);

    topLinks.textContent = element.text;

    topMenuEl.appendChild(topLinks);
}))
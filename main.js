const nav = document.getElementById('main');
const navTop = nav.offsetTop; // distance from the top of the navbar to the top of the viewport


const fixNavbar = () => {
    const scrollY = window.scrollY; // how far are we scrolled
    if (scrollY > navTop) {
        document.body.classList.add('fixed-bar');
        // fixing the content from jumping up
        // when the navbar is fixed, it is no longer taking up
        // space in the dom, and the following element moves on up
        // the same amount
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
    } else {
        document.body.classList.remove('fixed-bar');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNavbar);
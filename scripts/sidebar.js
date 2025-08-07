let isOpen = false;

function moveSidebar(currentIndex, event) {

    const elements = document.getElementsByClassName('sidebarContainer');
    removeSidebar(elements)
    if (currentIndex === undefined) {
        return
    }
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (index === currentIndex) {
            element.classList.toggle('moveSidebar');

        }

    }
    event.stopPropagation();
}

function removeSidebar(elements) {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove('moveSidebar');
    }
}

function toggleSidebar(event) {
    isOpen = true
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebarOpenBtn');
    sidebar.classList.toggle('showSidebar');
    openBtn.classList.add('slideSidebarBtn');
    event.stopPropagation();
}

function closeSidebar() {
    const path = window.location.pathname;
    const skipPages = ['index.html', 'contact.html', 'datenschutz.html', 'impressum.html'];
    if (skipPages.some(page => path.includes(page))) return;
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebarOpenBtn');
    sidebar.classList.remove('showSidebar');
    openBtn.classList.remove('slideSidebarBtn');
    const elements = document.getElementsByClassName('sidebarContainer');
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove('moveSidebar');
    }
}

window.addEventListener('scroll', closeSidebar);
// window.addEventListener('click', closeSidebar);
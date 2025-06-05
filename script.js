// Select elements using correct selectors
const sideMenu = document.querySelector('#sideMenu'); // Use # for id
const navBar = document.querySelector('#navBar');     // Assuming your navbar has id="navBar"
const navLinks = document.querySelector('#navLinks'); // Assuming nav links container has id="navLinks"

// Function to open the side menu
function openMenu(){
   sideMenu.style.transform ='translateX(-16rem)';
}

// Function to close the side menu
function closeMenu(){
   sideMenu.style.transform ='translateX(16rem)';
}

// Add scroll listener to window
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-70', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-70', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});

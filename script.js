document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        console.log('Searching for:', query);
        // Implement search logic here
    });

    // Dynamic content loading
    const categoriesSection = document.querySelector('.categories');
    const featuredSection = document.querySelector('.featured');

    // Simulate loading categories
    const categories = ['Pizza', 'Burgers', 'Sushi', 'Desserts'];
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        categoriesSection.appendChild(categoryElement);
    });

    // Simulate loading featured items
    const featuredItems = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3'];
    featuredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        featuredSection.appendChild(itemElement);
    });

    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Navigating to:', item.textContent);
            // Implement navigation logic here
        });
    });
}); 
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});
function toggleNews() {
    const newsContent = document.getElementById('news-content');
    const newsIcon = document.getElementById('news-icon');
    
    if (newsContent.style.display === "none" || newsContent.style.display === "") {
        newsContent.style.display = "block"; // Show the news content
        newsIcon.textContent = "▾"; // Change the icon to upward arrow
    } else {
        newsContent.style.display = "none"; // Hide the news content
        newsIcon.textContent = "▸"; // Change the icon to downward arrow
    }
}
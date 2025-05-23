// Collapsible News Section
function toggleNews() {
    const newsContent = document.getElementById('news-content');
    const newsIcon = document.getElementById('news-icon');
    if (newsContent.style.display === "block") {
        newsContent.style.display = "none";
        newsIcon.textContent = "▸";
    } else {
        newsContent.style.display = "block";
        newsIcon.textContent = "▾";
    }
}

// By default, collapse news on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('news-content').style.display = "none";
    document.getElementById('news-icon').textContent = "▸";
});

// Theme Toggle Logic
(function() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    const darkClass = 'dark-mode';

    // Detect system preference
    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply theme
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add(darkClass);
        } else {
            body.classList.remove(darkClass);
        }
    }

    // Load theme from localStorage or system preference
    function loadTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            setTheme(true);
        } else if (stored === 'light') {
            setTheme(false);
        } else {
            setTheme(systemPrefersDark());
        }
    }

    // Toggle theme and save preference
    function toggleTheme() {
        const isDark = !body.classList.contains(darkClass);
        setTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Init
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
        loadTheme();
        // Update theme if system preference changes and no explicit user choice
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches);
            }
        });
    }
})();


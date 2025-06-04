    
        document.addEventListener('DOMContentLoaded', function() {
            const languageButton = document.getElementById('language-menu-button');
            const languageMenu = document.getElementById('language-menu');
            
            // Toggle dropdown menu
            languageButton.addEventListener('click', function() {
                const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
                languageButton.setAttribute('aria-expanded', !isExpanded);
                languageMenu.classList.toggle('hidden');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
                    languageButton.setAttribute('aria-expanded', 'false');
                    languageMenu.classList.add('hidden');
                }
            });
            
            // Handle language selection
            const languageOptions = languageMenu.querySelectorAll('a');
            languageOptions.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    const selectedLanguage = this.textContent.trim();
                    const flagSrc = this.querySelector('img').src;
                    
                    // Update button with selected language
                    languageButton.innerHTML = `
                        <span class="flex items-center">
                            <img src="${flagSrc}" alt="${selectedLanguage}" class="h-4 w-4 mr-2">
                            ${selectedLanguage}
                        </span>
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    `;
                    
                    // Close dropdown
                    languageButton.setAttribute('aria-expanded', 'false');
                    languageMenu.classList.add('hidden');
                    
                    window.location.href = this.href; // Redirect to selected language page
                });
            });
        });
/**
 * Personal Page Navigation Enhancement
 * Adds Enter key navigation to BhargavAchary.in on the personal page
 */

(function() {
  'use strict';

  // Only run on personal page
  function isPersonalPage() {
    // Check if we're on the personal page by looking at the URL or page title
    return window.location.pathname.includes('/personal') || 
           window.location.pathname.includes('/tabs/personal') ||
           document.querySelector('article .dynamic-title');
  }

  // Initialize Enter key handler
  function initPersonalPageNavigation() {
    if (!isPersonalPage()) {
      return;
    }

    // Add Enter key listener
    document.addEventListener('keydown', function(e) {
      // Check if Enter key is pressed
      if (e.key === 'Enter' || e.keyCode === 13) {
        // Don't trigger if user is typing in an input, textarea, or contenteditable
        const target = e.target;
        const tagName = target.tagName.toLowerCase();
        
        if (
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          target.isContentEditable
        ) {
          return;
        }

        // Don't trigger if user is clicking on a link or button
        if (tagName === 'a' || tagName === 'button') {
          return;
        }

        // Navigate to BhargavAchary.in
        e.preventDefault();
        window.location.href = 'https://bhargavachary.in';
        
        // Show toast notification if available
        if (window.Toast) {
          window.Toast.info('Navigating to BhargavAchary.in...', 2000);
        }
      }
    });

    // Show a subtle hint on page load
    setTimeout(function() {
      if (window.Toast) {
        window.Toast.info('💡 Press Enter to visit BhargavAchary.in', 3000);
      }
    }, 1500);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPersonalPageNavigation);
  } else {
    initPersonalPageNavigation();
  }
})();

// assets/js/anti-inspect.js
// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // Optionally show a message
    // alert('Right-click is disabled.');
});

// Disable keyboard shortcuts for DevTools
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        // Optionally show a message
        // alert('This function is disabled.');
    }
});

// Override console.log (optional, to prevent logging)
// console.log = function() {};
// console.warn = function() {};
// console.error = function() {};

// Optional: Detect DevTools opening via debugger
// (This can cause performance issues, use with caution)
// setInterval(function() {
//     const start = performance.now();
//     debugger;
//     const end = performance.now();
//     if (end - start > 100) {
//         // DevTools is open
//         // Optionally redirect or show a message
//         // alert('DevTools detected!');
//     }
// }, 1000);

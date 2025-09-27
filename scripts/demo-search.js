// scripts/demo-search.js
// Demo search for learning DOM XSS detection and remediation.
// --------------------------
// IMPORTANT:
// - This file intentionally contains a vulnerable renderer (renderVulnerable)
//   so you can observe unsafe behavior on your local demo site.
// - After you capture evidence (screenshots), switch to renderSafe by commenting
//   the vulnerable call and uncommenting renderSafe.
// - Only run these tests on your local machine (http://localhost:8000).
// --------------------------

(function () {
  // Find elements we need on the page
  const form = document.getElementById('searchForm');
  const input = document.getElementById('q');
  const results = document.getElementById('searchResults');

  // Safety early return: do nothing if required elements are missing
  if (!form || !input || !results) return;

  // --- Vulnerable renderer (for testing only) ---
  // This inserts user input directly as HTML into the page.
  // DO NOT use this in production.
  function renderVulnerable(text) {
    // Intentionally insecure:
    results.innerHTML = `<p>Search results for: ${text}</p>`;
  }

  // --- Safe renderer (what you should use after testing) ---
  // This treats input strictly as text so HTML tags are shown, not executed.
  function renderSafe(text) {
    // Safer: insert as plain text so <script> or HTML won't be interpreted.
    results.textContent = `Search results for: ${text}`;
  }

  // Form submit handler
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();           // keep the demo client-side (no reload)
    const q = input.value || '';   // get the user input

    // =========== TEST WORKFLOW ===========
    // 1) For initial testing, use the vulnerable renderer so you can see the issue.
    //    Enter a harmless marker like: <testXSS> and observe the output.
    //renderVulnerable(q);   // <-- intentionally vulnerable for testing

    // 2) After capturing screenshots / evidence, switch to the safe renderer:
    //    Comment the renderVulnerable line above, and uncomment the line below.
    renderSafe(q);
    // ======================================

    // (No further action here — the demo is purely client-side.)
  });
})();

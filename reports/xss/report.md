# DOM Reflected XSS — Demo Search

**Scope:** `amazon-demo` repo (local demo)  
**Repo:** https://github.com/barakamukungu/amazon-demo  
**Local URL:** http://localhost:8000/amazon.html  
**Tested on:** 2025-09-27  
**Tools:** Browser DevTools

## Summary
A client-side DOM reflected XSS was found in the demo search component (added for learning). The demo search originally inserted untrusted user input into the DOM using `innerHTML`, allowing user-supplied markup to be interpreted by the browser.

> NOTE: All testing was performed on a local instance. Do **not** run these tests against systems you do not own or have explicit permission to test.

## Steps to reproduce (high-level)
1. Start the app locally:
   ```bash
   python -m http.server 8000
   # open http://localhost:8000/amazon.html
2. Enter <testXSS> in the Demo search field and submit.
3. Inspect the DOM (DevTools → Elements) to see whether the marker is rendered as HTML or escaped as text.

Observed behavior (before fix)

The input <testXSS> was rendered as HTML in the results area (evidence files below), confirming a DOM reflection of user input via innerHTML.

Impact

If similar code exists in a real application with user-controllable inputs, an attacker could inject scripts that execute in other users' browsers, enabling session theft, UI manipulation, or other client-side attacks. In this local demo the impact is educational.

Remediation

Replaced unsafe DOM insertion (innerHTML = userInput) with a safe insertion method (textContent) so user input is treated as text, not markup.

Consider adding a Content-Security-Policy (CSP) for defense-in-depth.

Evidence

reports/xss/vulnerable.html

reports/xss/fixed.html
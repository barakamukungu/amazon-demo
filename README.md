# Amazon-demo (frontend security demo)

**Author:** Baraka Bethely Mukungu  
**Repo:** https://github.com/barakamukungu/amazon-demo

## Project overview
A small static frontend demo built with HTML, CSS and JavaScript for learning web development and practicing basic web-security concepts. This repository is intentionally simple so learners can safely test vulnerabilities on a local instance and practice remediation.

> **Important:** All testing must be done on local instances or systems you own. Do **not** test other people's sites without explicit permission.

---

## How to run locally
1. Clone the repo:
```bash
git clone https://github.com/barakamukungu/amazon-demo.git
cd amazon-demo
Start a simple static server (Python 3):

bash
python -m http.server 8000
# then open http://localhost:8000/amazon.html
Or, using serve (Node):

bash
npx serve . -l 8000
Demo search (XSS practice)
A demo search component has been added to amazon.html for learning DOM XSS detection and remediation.

Script: scripts/demo-search.js

Behavior:

The file contains two renderers:

renderVulnerable() — intentionally uses innerHTML to show how unescaped input is interpreted (use only for testing on localhost).

renderSafe() — uses textContent and is the recommended safe approach.

Testing flow:

Run the server and open http://localhost:8000/amazon.html.

Use the demo search and enter the marker: <testXSS>.

Observe behavior with the vulnerable renderer, capture screenshots, then switch to the safe renderer and confirm the fix.

Reports & evidence
Find the test reports and evidence in the reports/ folder:

reports/xss/ — DOM XSS report

reports/headers/ — response header assessment

reports/info_disclosure/ — directory listing information-disclosure note

Each report contains reproduction steps, impact, remediation, and links to commits where fixes were applied.

License

MIT — educational use.

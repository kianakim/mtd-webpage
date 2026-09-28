MORGAN JOURNAL KIT
==================

Copy into your site folder (the one that has index.html and styles.css):

  journal.css        -> next to styles.css
  journal.js         -> next to styles.css
  assets/journal/    -> INSIDE your existing assets/ folder (keep the icons/ subfolder)

Then either:
  A) replace your index.html with the one in this kit (it is your file plus the 4 edits below), or
  B) make the 4 edits yourself:
       1. Fonts link: add  &family=Pixelify+Sans:wght@400;500;700  before &display=swap
       2. After <link rel="stylesheet" href="styles.css" />  add
            <link rel="stylesheet" href="journal.css" />
       3. Close </main> right after the SUPPORT section, then paste journal-section.html,
          then put your FOOTER after it (the journal is wider than your 560px column,
          so it has to sit outside <main class="page">)
       4. Before </body> add  <script src="journal.js" defer></script>

Keep the folder structure. If the frame/tabs/icons look like plain brown boxes,
the images did not load: check that assets/journal/ exists next to index.html.

Pack credit: the tab markers and book art come from Crusenho's
"Complete UI Book Styles Pack" (https://crusenho.itch.io/complete-ui-book-styles-pack).
Its license asks for credit and does not allow re-publishing the art itself, so keep
your GitHub repo private (or ask the author first).

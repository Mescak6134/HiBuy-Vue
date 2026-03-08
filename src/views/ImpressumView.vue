<script setup lang="ts">
const impressumData = {
  company:         'HiBuy GbR',
  legalForm:       'Gesellschaft bürgerlichen Rechts (GbR)',
  representatives: ['Mesut Sancak', 'Burak Taha Yigit'],
  street:          'Neckarstraße 27',
  city:            '73728 Esslingen am Neckar',
  country:         'Deutschland',
  phone:           '+49 171 90 12 134',
  phoneTel:        '+4917190121234',
  email:           'hibuy@gmx.de',
  taxNumber:       '59092/65319',
  euDisputeUrl:    'https://ec.europa.eu/consumers/odr/',
  lastUpdated:     '2026-03-08',
}
</script>

<template>
  <div class="imp-page section">
    <div class="container imp-wrap">

      <RouterLink to="/" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Zurück zur Startseite
      </RouterLink>

      <!-- ══ IMPRESSUM ══ -->
      <div class="imp-hero" id="impressum">
        <span class="section-label">§ 5 TMG</span>
        <h1>Impressum</h1>
        <p>Gesetzlich vorgeschriebene Angaben gemäß § 5 TMG und § 55 RStV</p>
      </div>

      <div class="imp-content">
        <!-- Zeile 1: Anbieter – volle Breite -->
        <div class="imp-block imp-block--full">
          <div class="imp-block__label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
            Anbieter
          </div>
          <dl class="imp-dl imp-dl--horizontal">
            <div class="imp-dl__row">
              <dt>Unternehmensname</dt>
              <dd>{{ impressumData.company }}</dd>
            </div>
            <div class="imp-dl__row">
              <dt>Rechtsform</dt>
              <dd>{{ impressumData.legalForm }}</dd>
            </div>
            <div class="imp-dl__row">
              <dt>Vertreter</dt>
              <dd>
                <span v-for="(rep, i) in impressumData.representatives" :key="i">
                  {{ rep }}<br v-if="i < impressumData.representatives.length - 1">
                </span>
              </dd>
            </div>
            <div v-if="impressumData.taxNumber" class="imp-dl__row">
              <dt>Steuernummer</dt>
              <dd>{{ impressumData.taxNumber }}</dd>
            </div>
          </dl>
        </div>

        <!-- Zeile 2: Anschrift + Kontakt nebeneinander -->
        <div class="imp-row">

          <div class="imp-block">
            <div class="imp-block__label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Anschrift
            </div>
            <address class="imp-address">
              {{ impressumData.company }}<br>
              {{ impressumData.street }}<br>
              {{ impressumData.city }}<br>
              {{ impressumData.country }}
            </address>
          </div>

          <div class="imp-block">
            <div class="imp-block__label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Kontakt
            </div>
            <dl class="imp-dl">
              <div class="imp-dl__row">
                <dt>Telefon</dt>
                <dd><a :href="`tel:${impressumData.phoneTel}`">{{ impressumData.phone }}</a></dd>
              </div>
              <div class="imp-dl__row">
                <dt>E-Mail</dt>
                <dd><a :href="`mailto:${impressumData.email}`">{{ impressumData.email }}</a></dd>
              </div>
            </dl>
          </div>

        </div>

        <div class="imp-legal">

          <div class="imp-legal__block">
            <h2>EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a :href="impressumData.euDisputeUrl" target="_blank" rel="noopener noreferrer">{{ impressumData.euDisputeUrl }}</a></p>
            <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          <div class="imp-legal__block">
            <h2>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>

          <div class="imp-legal__block">
            <h2>Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          </div>

          <div class="imp-legal__block">
            <h2>Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>

        </div>
      </div>

      <!-- ══ DATENSCHUTZERKLÄRUNG ══ -->
      <div class="imp-hero" id="datenschutz" style="margin-top: 5rem;">
        <span class="section-label">Art. 13 DSGVO</span>
        <h2 style="font-size: clamp(1.7rem, 3vw, 2.4rem);">Datenschutzerklärung</h2>
        <p>Stand: {{ impressumData.lastUpdated }}</p>
      </div>

      <div class="imp-content">
        <div class="imp-legal">

          <div class="imp-legal__block">
            <h2>1. Verantwortlicher (Art. 13 Abs. 1 lit. a DSGVO)</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung ist:<br><br>
              <strong>{{ impressumData.company }}</strong><br>
              {{ impressumData.street }}<br>
              {{ impressumData.city }}<br>
              E-Mail: <a :href="`mailto:${impressumData.email}`">{{ impressumData.email }}</a><br>
              Telefon: {{ impressumData.phone }}
            </p>
          </div>

          <div class="imp-legal__block">
            <h2>2. Betroffenenrechte (Art. 15–21 DSGVO)</h2>
            <p>Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:</p>
            <ul class="imp-list">
              <li><strong>Auskunftsrecht</strong> – Art. 15 DSGVO: Du kannst Auskunft über deine gespeicherten Daten verlangen.</li>
              <li><strong>Recht auf Berichtigung</strong> – Art. 16 DSGVO: Unrichtige Daten können korrigiert werden.</li>
              <li><strong>Recht auf Löschung</strong> – Art. 17 DSGVO: Du kannst die Löschung deiner Daten verlangen.</li>
              <li><strong>Recht auf Einschränkung</strong> – Art. 18 DSGVO: Die Verarbeitung kann eingeschränkt werden.</li>
              <li><strong>Widerspruchsrecht</strong> – Art. 21 DSGVO: Du kannst der Verarbeitung widersprechen.</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> – Art. 20 DSGVO: Du kannst deine Daten in einem maschinenlesbaren Format erhalten.</li>
            </ul>
            <p>Zur Ausübung deiner Rechte wende dich an: <a :href="`mailto:${impressumData.email}`">{{ impressumData.email }}</a></p>
            <p>Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde in Baden-Württemberg ist der <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</a>.</p>
          </div>

          <div class="imp-legal__block">
            <h2>3. Datenerfassung auf dieser Website</h2>
            <h3 class="imp-subheading">3.1 Server-Logfiles</h3>
            <p>Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles:</p>
            <ul class="imp-list">
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
              <li>IP-Adresse (anonymisiert oder vollständig, je nach Anbieter)</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
            </ul>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
            <h3 class="imp-subheading">3.2 Kontaktaufnahme per E-Mail oder Telefon</h3>
            <p>Wenn du uns per E-Mail oder Telefon kontaktierst, wird deine Anfrage zum Zwecke der Bearbeitung bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Daten verbleiben bei uns, bis du uns zur Löschung aufforderst oder der Zweck entfällt.</p>
          </div>

          <div class="imp-legal__block" id="cookies">
            <h2>4. Cookies (§ 25 TTDSG)</h2>
            <p>Diese Website setzt ausschließlich technisch notwendige Cookies ein. Nach <strong>§ 25 Abs. 2 Nr. 2 TTDSG</strong> ist keine Einwilligung erforderlich, da sie unbedingt erforderlich sind, um einen vom Nutzer ausdrücklich gewünschten Dienst bereitzustellen.</p>
            <div class="cookie-table-wrap">
              <table class="cookie-table">
                <thead>
                  <tr>
                    <th>Name</th><th>Zweck</th><th>Laufzeit</th><th>Drittanbieter</th><th>Rechtsgrundlage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>hibuy-theme</code></td>
                    <td>Speichert die vom Nutzer gewählte Farbgebung (heller oder dunkler Modus).</td>
                    <td>1 Jahr</td>
                    <td>Nein</td>
                    <td>§ 25 Abs. 2 Nr. 2 TTDSG – technisch notwendig</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>Cookies deaktivieren:</strong> Du kannst Cookies in deinem Browser jederzeit löschen oder deaktivieren. Dann wird die gewählte Darstellung nicht gespeichert.</p>
            <p>Wir setzen keine Analyse-, Marketing- oder Tracking-Cookies. Es werden keine Daten an Drittanbieter übermittelt.</p>
          </div>

          <div class="imp-legal__block">
            <h2>5. Hosting & technische Infrastruktur</h2>
            <p>Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. GitHub ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a>.</p>
          </div>

          <div class="imp-legal__block">
            <h2>6. Schriften (lokal eingebunden)</h2>
            <p>Diese Website verwendet die Schriften „DM Sans" und „Syne", welche <strong>lokal</strong> auf dem Webserver gespeichert sind. Es wird keine Verbindung zu externen Anbietern wie Google Fonts hergestellt. Es werden daher keine personenbezogenen Daten an Dritte übermittelt.</p>
          </div>

          <div class="imp-legal__block">
            <h2>7. Aktualität dieser Erklärung</h2>
            <p>Diese Datenschutzerklärung hat den Stand {{ impressumData.lastUpdated }}. Bei Änderungen der gesetzlichen Vorgaben oder unserer Website wird diese Erklärung entsprechend aktualisiert.</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.imp-page { padding-bottom: var(--space-16); }
.imp-wrap { max-width: 960px; }

.back-link {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 0.875rem; font-weight: 500; color: var(--color-text-muted);
  margin-bottom: var(--space-6); transition: color var(--transition);
}
.back-link:hover { color: var(--color-text); opacity: 1; }

.imp-hero {
  margin-bottom: var(--space-6); padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--color-border);
}
.section-label {
  display: inline-block; font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--color-green); background: var(--color-green-light);
  padding: 3px 10px; border-radius: var(--radius-full); margin-bottom: var(--space-2);
}
.imp-hero h1, .imp-hero h2 { margin-bottom: 6px; }
.imp-hero p { font-size: 0.9rem; }

/* Anbieter – volle Breite */
.imp-block--full {
  margin-bottom: var(--space-3);
}

/* Anschrift + Kontakt – zwei Spalten */
.imp-row {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: var(--space-3); margin-bottom: var(--space-5);
}

/* Horizontale Felder in der Anbieter-Box */
.imp-dl--horizontal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space-3);
}
.imp-block {
  background: var(--color-surface); border: 1px solid var(--color-border);
  border-radius: var(--radius-lg); padding: var(--space-4);
}
.imp-block__label {
  display: flex; align-items: center; gap: 7px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.09em;
  text-transform: uppercase; color: var(--color-text-muted);
  margin-bottom: var(--space-3); padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}
.imp-dl { display: flex; flex-direction: column; gap: var(--space-2); }
.imp-dl__row { display: flex; flex-direction: column; gap: 2px; }
.imp-dl__row dt { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em; color: var(--color-text-muted); text-transform: uppercase; }
.imp-dl__row dd { font-size: 0.9rem; color: var(--color-text); line-height: 1.7; }
.imp-dl__row a { color: var(--color-blue); text-decoration: underline; text-underline-offset: 3px; }
.imp-address { font-style: normal; font-size: 0.9rem; color: var(--color-text); line-height: 1.85; }

.imp-legal {
  display: flex; flex-direction: column;
  border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  overflow: hidden; background: var(--color-surface);
}
.imp-legal__block { padding: var(--space-5); border-bottom: 1px solid var(--color-border); }
.imp-legal__block:last-child { border-bottom: none; }
.imp-legal__block h2 {
  font-size: 1rem; font-weight: 700; color: var(--color-text);
  margin-bottom: var(--space-3); display: flex; align-items: center; gap: 8px;
}
.imp-legal__block h2::before {
  content: ''; display: inline-block; width: 3px; height: 1em;
  background: var(--color-green); border-radius: 2px; flex-shrink: 0;
}
.imp-subheading { font-size: 0.9rem; font-weight: 600; color: var(--color-text); margin: var(--space-3) 0 var(--space-1); }
.imp-legal__block p { font-size: 0.875rem; line-height: 1.8; margin-bottom: var(--space-2); }
.imp-legal__block p:last-child { margin-bottom: 0; }
.imp-legal__block a { color: var(--color-blue); text-decoration: underline; text-underline-offset: 3px; }
.imp-legal__block strong { color: var(--color-text); font-weight: 600; }

.imp-list {
  list-style: none; margin: var(--space-2) 0;
  display: flex; flex-direction: column; gap: 6px;
}
.imp-list li { font-size: 0.875rem; color: var(--color-text-muted); padding-left: 1.2em; position: relative; line-height: 1.6; }
.imp-list li::before { content: '–'; position: absolute; left: 0; color: var(--color-green); font-weight: 700; }

.cookie-table-wrap { overflow-x: auto; margin: var(--space-3) 0; border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.cookie-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
.cookie-table th { background-color: var(--color-surface-alt); padding: 10px 14px; text-align: left; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-muted); border-bottom: 1px solid var(--color-border); white-space: nowrap; }
.cookie-table td { padding: 12px 14px; vertical-align: top; color: var(--color-text-muted); line-height: 1.6; border-bottom: 1px solid var(--color-border); }
.cookie-table tr:last-child td { border-bottom: none; }
.cookie-table code { font-family: monospace; font-size: 0.85em; background: var(--color-tag); padding: 2px 6px; border-radius: 4px; color: var(--color-text); white-space: nowrap; }

@media (max-width: 760px) {
  .imp-row { grid-template-columns: 1fr; }
  .imp-legal__block { padding: var(--space-4); }
}
</style>
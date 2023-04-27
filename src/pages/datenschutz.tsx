import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { TextLink } from '~/components/Link';
import { H1, H2, H3 } from '~/components/Text';

const DatenschutzPage = () => {
  const title = 'Datenschutz';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero title={title} />
      <Content>
        <div className="mt-16">
          <H1>Datenschutzvereinbarung</H1>
        </div>
        <div className="mt-8">
          <H2>Einleitung</H2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
            aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
            auch kurz als “Daten” bezeichnet) wir zu welchen Zwecken und in
            welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle
            von uns durchgeführten Verarbeitungen personenbezogener Daten,
            sowohl im Rahmen der Erbringung unserer Leistungen als auch
            insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
            innerhalb externer Onlinepräsenzen, wie z.B. unserer
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
            “Onlineangebot”.
          </p>
          <p className="mt-2">
            Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
          </p>
          <p className="mt-2">Stand: 22. Juni 2022</p>
        </div>
        <div className="mt-8">
          <H2>Verantwortliche Person</H2>
          <p>
            Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
            EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p className="font-bold">Fair Spaces GmbH</p>
          <p className="mt-2">
            Impressum:&nbsp;
            <TextLink to="http://fair-spaces.de/home/impressum/">
              www.fair-spaces.de
            </TextLink>
          </p>
        </div>
        <div className="mt-8">
          <H2>Ihre Betroffenenrechte</H2>
          <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
            können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              Auskunft über Ihre bei uns gespeicherten Daten und deren
              Verarbeitung (Art. 15 DSGVO),
            </li>
            <li>
              Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
            </li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>
              Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
              aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18
              DSGVO),
            </li>
            <li>
              Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21
              DSGVO) und Datenübertragbarkeit, sofern Sie in die
              Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns
              abgeschlossen haben (Art. 20 DSGVO).
            </li>
          </ul>
          <p className="mt-2">
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p className="mt-2">
            Sie können sich jederzeit mit einer Beschwerde an eine
            Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde
            des Bundeslands Ihres Wohnsitzes oder an die für uns als
            verantwortliche Stelle zuständige Behörde.
          </p>
          <p className="mt-2">
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich)
            mit Anschrift finden Sie unter:&nbsp;
            <TextLink to="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html">
              bfdi.bund.de
            </TextLink>
          </p>
        </div>
        <div className="mt-8">
          <H2>Übersicht der Verarbeitungen</H2>
          <p>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
            und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
            betroffenen Personen.
          </p>
          <div className="mt-6">
            <H3>Arten der verarbeiteten Daten</H3>
            <ul className="mt-2 list-disc pl-4">
              <li>Bestandsdaten.</li>
              <li>Kontaktdaten.</li>
              <li>Inhaltsdaten.</li>
              <li>Nutzungsdaten.</li>
              <li>Meta-/Kommunikationsdaten.</li>
            </ul>
          </div>
          <div className="mt-6">
            <H3>Kategorien betroffener Personen</H3>
            <ul className="mt-2 list-disc pl-4">
              <li>Kommunikationspartner*innen.</li>
              <li>Nutzer*innen.</li>
            </ul>
          </div>
          <div className="mt-6">
            <H3>Zwecke der Verarbeitung</H3>
            <ul className="mt-2 list-disc pl-4">
              <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
              <li>Kontaktanfragen und Kommunikation.</li>
              <li>Direktmarketing.</li>
              <li>Reichweitenmessung.</li>
              <li>Profile mit nutzerbezogenen Informationen.</li>
              <li>
                Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <H3>Maßgebliche Rechtsgrundlagen</H3>
          <p>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
            DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
            nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
            nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
            Sitzland gelten können. Sollten ferner im Einzelfall speziellere
            Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
            Datenschutzerklärung mit.
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              <span className="font-bold">
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)
              </span>
              &nbsp;- Die betroffene Person hat ihre Einwilligung in die
              Verarbeitung der sie betreffenden personenbezogenen Daten für
              einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
            </li>
            <li>
              <span className="font-bold">
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S.
                1 lit. b. DSGVO)
              </span>
              &nbsp;- Die Verarbeitung ist für die Erfüllung eines Vertrags,
              dessen Vertragspartei die betroffene Person ist, oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich, die auf
              Anfrage der betroffenen Person erfolgen.
            </li>
            <li>
              <span className="font-bold">
                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
              </span>
              &nbsp;- Die Verarbeitung ist zur Erfüllung einer rechtlichen
              Verpflichtung erforderlich, der der Verantwortliche unterliegt.
            </li>
            <li>
              <span className="font-bold">
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
              </span>
              &nbsp;- Die Verarbeitung ist zur Wahrung der berechtigten
              Interessen des Verantwortlichen oder eines Dritten erforderlich,
              sofern nicht die Interessen oder Grundrechte und Grundfreiheiten
              der betroffenen Person, die den Schutz personenbezogener Daten
              erfordern, überwiegen.
            </li>
          </ul>
          <p className="mt-2">
            Zusätzlich zu den Datenschutzregelungen der
            Datenschutz-Grundverordnung gelten nationale Regelungen zum
            Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
            zum Schutz vor Missbrauch personenbezogener Daten bei der
            Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
            insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
            Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
            Kategorien personenbezogener Daten, zur Verarbeitung für andere
            Zwecke und zur Übermittlung sowie automatisierten
            Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
            Weiteren regelt es die Datenverarbeitung für Zwecke des
            Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
            auf die Begründung, Durchführung oder Beendigung von
            Beschäftigungsverhältnissen sowie die Einwilligung von
            Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
            Bundesländer zur Anwendung gelangen.
          </p>
        </div>
        <div className="mt-8">
          <H2>Sicherheitsmaßnahmen</H2>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
            Berücksichtigung des Stands der Technik, der Implementierungskosten
            und der Art, des Umfangs, der Umstände und der Zwecke der
            Verarbeitung sowie der unterschiedlichen
            Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
            Rechte und Freiheiten natürlicher Personen geeignete technische und
            organisatorische Maßnahmen, um ein dem Risiko angemessenes
            Schutzniveau zu gewährleisten.
          </p>
          <p className="mt-2">
            Zu den Maßnahmen gehören insbesondere die Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
            Kontrolle des physischen und elektronischen Zugangs zu den Daten als
            auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
            Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
            wir Verfahren eingerichtet, die eine Wahrnehmung von
            Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
            Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
            Auswahl von Hardware, Software sowie Verfahren entsprechend dem
            Prinzip des Datenschutzes, durch Technikgestaltung und durch
            datenschutzfreundliche Voreinstellungen.
          </p>
        </div>
        <div className="mt-8">
          <H2>Übermittlung von personenbezogenen Daten</H2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
            vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
            selbstständige Organisationseinheiten oder Personen übermittelt oder
            sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser
            Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder
            Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden
            werden, gehören. In solchen Fall beachten wir die gesetzlichen
            Vorgaben und schließen insbesondere entsprechende Verträge bzw.
            Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
            Empfängern Ihrer Daten ab.
          </p>
        </div>
        <div className="mt-8">
          <H2>Datenverarbeitung in Drittländern</H2>
          <p className="mt-2">
            Sofern wir Daten in einem Drittland (d.h., außerhalb der
            Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR))
            verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von
            Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an
            andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies
            nur im Einklang mit den gesetzlichen Vorgaben.
          </p>
          <p className="mt-2">
            Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
            gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir
            die Daten nur in Drittländern mit einem anerkannten
            Datenschutzniveau, vertraglichen Verpflichtung durch sogenannte
            Standardschutzklauseln der EU-Kommission, beim Vorliegen von
            Zertifizierungen oder verbindlicher internen Datenschutzvorschriften
            verarbeiten (Art. 44 bis 49 DSGVO,{' '}
            <TextLink to="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de">
              Informationsseite
            </TextLink>{' '}
            der EU-Kommission.
          </p>
        </div>
        <div className="mt-8">
          <H2>Löschung von Daten</H2>
          <p>
            Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
            Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
            Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
            (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist
            oder sie für den Zweck nicht erforderlich sind).
          </p>
          <p className="mt-2">
            Sofern die Daten nicht gelöscht werden, weil sie für andere und
            gesetzlich zulässige Zwecke erforderlich sind, wird deren
            Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
            gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für
            Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt
            werden müssen oder deren Speicherung zur Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte
            einer anderen natürlichen oder juristischen Person erforderlich ist.
          </p>
          <p className="mt-2">
            Unsere Datenschutzhinweise können ferner weitere Angaben zu der
            Aufbewahrung und Löschung von Daten beinhalten, die für die
            jeweiligen Verarbeitungen vorrangig gelten.
          </p>
        </div>
        <div className="mt-8">
          <H2>Bereitstellung des Onlineangebotes und Webhosting</H2>
          <p>
            Um unser Onlineangebot sicher und effizient bereitstellen zu können,
            nehmen wir die Leistungen von einem oder mehreren
            Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von ihnen
            verwalteten Servern) das Onlineangebot abgerufen werden kann. Zu
            diesen Zwecken können wir Infrastruktur- und
            Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
            Datenbankdienste sowie Sicherheitsleistungen und technische
            Wartungsleistungen in Anspruch nehmen.
          </p>
          <p className="mt-2">
            Zu den im Rahmen der Bereitstellung des Hostingangebotes
            verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes
            betreffenden Angaben gehören, die im Rahmen der Nutzung und der
            Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse,
            die notwendig ist, um die Inhalte von Onlineangeboten an Browser
            ausliefern zu können, und alle innerhalb unseres Onlineangebotes
            oder von Webseiten getätigten Eingaben.
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              <span className="font-bold">Verarbeitete Datenarten:</span>
              &nbsp;Inhaltsdaten (z.B. Eingaben in Onlineformularen);
              Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
              Zugriffszeiten); Meta-/Kommunikationsdaten (z.B.
              Geräte-Informationen, IP-Adressen).
            </li>
            <li>
              <span className="font-bold">Betroffene Personen:</span>
              &nbsp;Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <span className="font-bold">Zwecke der Verarbeitung:</span>
              &nbsp;Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit.
            </li>
            <li>
              <span className="font-bold">Rechtsgrundlagen:</span>
              &nbsp;Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
            </li>
          </ul>
          <p className="mt-2 font-bold">
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
          </p>
          <ul className="mt-2 list-disc pl-4">
            <li>
              <span className="font-bold">Kontaktformular:</span>&nbsp;Wenn
              Nutzer über unser Kontaktformular, E-Mail oder andere
              Kommunikationswege mit uns in Kontakt treten, verarbeiten wir die
              uns in diesem Zusammenhang mitgeteilten Daten zur Bearbeitung des
              mitgeteilten Anliegens. Zu diesem Zweck verarbeiten wir
              personenbezogene Daten im Rahmen vorvertraglicher und
              vertraglicher Geschäftsbeziehungen, soweit dies zu deren Erfüllung
              erforderlich ist und im Übrigen auf Grundlage unserer berechtigten
              Interessen sowie der Interessen der Kommunikationspartner an der
              Beantwortung der Anliegen und unserer gesetzlichen
              Aufbewahrungspflichten.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <H2>Newsletter</H2>
          <div className="mt-6">
            <H3>Art und Zweck der Verarbeitung:</H3>
            <p>
              Für die Zustellung unseres Newsletters erheben wir
              personenbezogene Daten, die über eine Eingabemaske an uns
              übermittelt werden.
            </p>
            <p className="mt-2">
              Für eine wirksame Registrierung benötigen wir eine valide
              E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich
              durch den Inhaber*in einer E-Mail-Adresse erfolgt, setzen wir das
              „Double-Opt-in“-Verfahren ein. Hierzu protokollieren wir die
              Anmeldung zum Newsletter, den Versand einer Bestätigungsmail und
              den Eingang der hiermit angeforderten Antwort. Weitere Daten
              werden nicht erhoben.
            </p>
          </div>
          <div className="mt-6">
            <H3>Rechtsgrundlage:</H3>
            <p>
              Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren
              Newsletter bzw. vergleichbare Informationen per E-Mail an Ihre
              angegebene E-Mail-Adresse.
            </p>
            <p className="mt-2">
              Die Einwilligung zur Speicherung Ihrer persönlichen Daten und
              ihrer Nutzung für den Newsletterversand können Sie jederzeit mit
              Wirkung für die Zukunft widerrufen. In jedem Newsletter findet
              sich dazu ein entsprechender Link. Außerdem können Sie sich
              jederzeit auch direkt auf dieser Website abmelden oder uns Ihren
              Widerruf über die am Ende dieser Datenschutzhinweise angegebene
              Kontaktmöglichkeit mitteilen.
            </p>
          </div>
          <div className="mt-6">
            <H3>Empfänger*in:</H3>
            <p>
              Empfänger*innen der Daten sind ggf. Auftragsverarbeiter*innen.
            </p>
          </div>
          <div className="mt-6">
            <H3>Speicherdauer:</H3>
            <p>
              Die Daten werden in diesem Zusammenhang nur verarbeitet, solange
              die entsprechende Einwilligung vorliegt. Danach werden sie
              gelöscht.
            </p>
          </div>
          <div className="mt-6">
            <H3>Bereitstellung vorgeschrieben oder erforderlich:</H3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt
              freiwillig, allein auf Basis Ihrer Einwilligung. Ohne bestehende
              Einwilligung können wir Ihnen unseren Newsletter leider nicht
              zusenden.
            </p>
          </div>
          <div className="mt-6">
            <H3>Widerruf der Einwilligung:</H3>
            <p>
              Die Einwilligung zur Speicherung Ihrer persönlichen Daten und
              ihrer Nutzung für den Newsletterversand können Sie jederzeit mit
              Wirkung für die Zukunft widerrufen. Die Abmeldung kann über den in
              jeder E-Mail enthaltenen Link oder beim unten aufgeführten
              Datenschutzbeauftragte*n bzw. der für den Datenschutz zuständigen
              Person beantragt werden.
            </p>
          </div>
          <div className="mt-8">
            <H2>Heyflow.</H2>
            <p>
              Wir verwenden interaktive Anfrageformulare, sogenannte „Flows“, um
              gute Maßnahmen für die kommunale Radverkehrsförderung von Kommunen
              zu erhalten. Wir verarbeiten hierbei personenbezogene Daten, die
              über Flows erhoben und anschließend verarbeitet werden.
              Rechtsgrundlage für die Datenverarbeitung ist [Rechtsgrundlage, z.
              B. Art. 6 Abs. 1 UAbs. 1 Buchst. a (Einwilligung der betroffenen
              Person) oder Art. 6 Abs. 1 UAbs. 1 Buchst. f (Wahrung der
              berechtigten Interessen des Verantwortlichen)]
            </p>
            <p className="mt-2">
              Für das Erstellen und den Einsatz von Flows nutzen wir die Dienste
              der Heyflow GmbH, Jungfernstieg 49, 20354 Hamburg, Deutschland
              („Heyflow“). Heyflow verarbeitet über Flows erhobene
              personenbezogene Daten ausschließlich in unserem Auftrag und nach
              unseren Weisungen auf der Grundlage eines
              Auftragsverarbeitungsvertrags. Heyflow nutzt den
              Server-Hosting-Dienst „Google Cloud Platform“ der Google LLC; die
              Heyflow Dienste einschließlich der über Flows erhobenen
              personenbezogenen Daten werden ausschließlich auf Servern in der
              EU gehostet.
            </p>
            <p className="mt-2">
              Näheres zur Datenverarbeitung mittels Heyflow findet sich
              auf:&nbsp;
              <TextLink to="https://heyflow.app/de/datenschutz?">
                heyflow.app
              </TextLink>
            </p>
          </div>
          <div className="mt-8">
            <H2>Webanalyse, Monitoring und Optimierung</H2>
            <p>
              Die Webanalyse (auch als “Reichweitenmessung” bezeichnet) dient
              der Auswertung der Besucherströme unseres Onlineangebotes und kann
              Verhalten, Interessen oder demographische Informationen zu den
              Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme
              Werte umfassen. Mit Hilfe der Reichweitenanalyse können wir z.B.
              erkennen, zu welcher Zeit unser Onlineangebot oder dessen
              Funktionen oder Inhalte am häufigsten genutzt werden oder zur
              Wiederverwendung einladen. Ebenso können wir nachvollziehen,
              welche Bereiche der Optimierung bedürfen.
            </p>
            <p className="mt-2">
              Neben der Webanalyse können wir auch Testverfahren einsetzen, um
              z.B. unterschiedliche Versionen unseres Onlineangebotes oder
              seiner Bestandteile zu testen und optimieren.
            </p>
            <p className="mt-2">
              Sofern nachfolgend nicht anders angegeben, können zu diesen
              Zwecken Profile, d.h. zu einem Nutzungsvorgang zusammengefasste
              Daten angelegt und Informationen in einem Browser, bzw. in einem
              Endgerät gespeichert und aus diesem ausgelesen werden. Zu den
              erhobenen Angaben gehören insbesondere besuchte Webseiten und dort
              genutzte Elemente sowie technische Angaben, wie der verwendete
              Browser, das verwendete Computersystem sowie Angaben zu
              Nutzungszeiten. Sofern Nutzer in die Erhebung ihrer Standortdaten
              uns gegenüber oder gegenüber den Anbietern der von uns
              eingesetzten Dienste einverstanden erklärt haben, können auch
              Standortdaten verarbeitet werden.
            </p>
            <p className="mt-2">
              Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch
              nutzen wir ein IP-Masking-Verfahren (d.h., Pseudonymisierung durch
              Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden die
              im Rahmen von Webanalyse, A/B-Testings und Optimierung keine
              Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen)
              gespeichert, sondern Pseudonyme. D.h., wir als auch die Anbieter
              der eingesetzten Software kennen nicht die tatsächliche Identität
              der Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in
              deren Profilen gespeicherten Angaben.
            </p>
            <p className="mt-2">
              <span className="font-bold">Hinweise zu Rechtsgrundlagen:</span>
              &nbsp; Sofern wir die Nutzer um deren Einwilligung in den Einsatz
              der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung
              von Daten die Einwilligung. Ansonsten werden die Daten der Nutzer
              auf Grundlage unserer berechtigten Interessen (d.h. Interesse an
              effizienten, wirtschaftlichen und empfängerfreundlichen
              Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie
              auch auf die Informationen zur Verwendung von Cookies in dieser
              Datenschutzerklärung hinweisen.
            </p>
            <ul className="mt-2 list-disc pl-4">
              <li>
                <span className="font-bold">Verarbeitete Datenarten:</span>
                &bsp;Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten (z.B.
                Geräte-Informationen, IP-Adressen).
              </li>
              <li>
                <span className="font-bold">Betroffene Personen:</span>
                &nbsp;Nutzer (z.B. Webseitenbesucher, Nutzer von
                Onlinediensten).
              </li>
              <li>
                <span className="font-bold">Zwecke der Verarbeitung:</span>
                &nbsp;Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
                wiederkehrender Besucher); Profile mit nutzerbezogenen
                Informationen (Erstellen von Nutzerprofilen).
              </li>
              <li>
                <span className="font-bold">Sicherheitsmaßnahmen:</span>
                &nbsp;IP-Masking (Pseudonymisierung der IP-Adresse).
              </li>
              <li>
                <span className="font-bold">Rechtsgrundlagen:</span>
                &nbsp;Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO);
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
              </li>
            </ul>
            <p className="mt-2 font-bold">
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </p>
            <ul className="mt-2 list-disc pl-4">
              <li>
                <span className="font-bold">Matomo (ohne Cookies):</span>
                &nbsp;Bei Matomo handelt es sich um eine datenschutzfreundliche
                Webanalysesoftware, die ohne Cookies eingesetzt wird und bei der
                die Erkennnung wiederkehrender Nutzer mit Hilfe eines so
                genannten “digitalen Fingerabdrucks” erfolgt, der anonymisiert
                gespeichert und alle 24 Stunden geändert wird; Beim “digitalen
                Fingerabdruck” werden Nutzerbewegungen innerhalb unseres
                Onlineangebotes mit Hilfe von pseudonymisierten IP-Adressen in
                Kombination mit nutzerseitige Browsereinstellungen so erfasst,
                dass Rückschlüsse auf die Identität einzelner Nutzer nicht
                möglich sind. Die im Rahmen der Nutzung von Matomo erhobenen
                Daten der Nutzer werden nur von uns verarbeitet und nicht mit
                Dritten geteilt; Website: matomo.org.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <H2>Änderung und Aktualisierung der Datenschutzerklärung</H2>
            <p>
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer
              Datenschutzerklärung zu informieren. Wir passen die
              Datenschutzerklärung an, sobald die Änderungen der von uns
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </p>
            <p className="mt-2">
              Sofern wir in dieser Datenschutzerklärung Adressen und
              Kontaktinformationen von Unternehmen und Organisationen angeben,
              bitten wir zu beachten, dass die Adressen sich über die Zeit
              ändern können und bitten die Angaben vor Kontaktaufnahme zu
              prüfen.
            </p>
          </div>
          <div className="mt-8">
            <H2>Rechte der betroffenen Personen</H2>
            <p>
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
              die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="mt-2 list-disc pl-4">
              <li>
                <span className="font-bold">Widerspruchsrecht:</span>&nbsp;Sie
                haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                betreffenden personenbezogenen Daten, die aufgrund von Art. 6
                Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
                gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
                Werden die Sie betreffenden personenbezogenen Daten verarbeitet,
                um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht.
              </li>
              <li>
                <span className="font-bold">
                  Widerrufsrecht bei Einwilligungen:
                </span>
                &nbsp;Sie haben das Recht, erteilte Einwilligungen jederzeit zu
                widerrufen.
              </li>
              <li>
                <span className="font-bold">Auskunftsrecht:</span>&nbsp;Sie
                haben das Recht, eine Bestätigung darüber zu verlangen, ob
                betreffende Daten verarbeitet werden und auf Auskunft über diese
                Daten sowie auf weitere Informationen und Kopie der Daten
                entsprechend den gesetzlichen Vorgaben.
              </li>
              <li>
                <span className="font-bold">Recht auf Berichtigung:</span>
                &nbsp;Sie haben entsprechend den gesetzlichen Vorgaben das
                Recht, die Vervollständigung der Sie betreffenden Daten oder die
                Berichtigung der Sie betreffenden unrichtigen Daten zu
                verlangen.
              </li>
              <li>
                <span className="font-bold">
                  Recht auf Löschung und Einschränkung der Verarbeitung:
                </span>
                &nbsp;Sie haben nach Maßgabe der gesetzlichen Vorgaben das
                Recht, zu verlangen, dass Sie betreffende Daten unverzüglich
                gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen
                Vorgaben eine Einschränkung der Verarbeitung der Daten zu
                verlangen.
              </li>
              <li>
                <span className="font-bold">
                  Recht auf Datenübertragbarkeit:
                </span>
                &nbsp;Sie haben das Recht, Sie betreffende Daten, die Sie uns
                bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in
                einem strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten oder deren Übermittlung an einen anderen
                Verantwortlichen zu fordern.
              </li>
              <li>
                <span className="font-bold">
                  Beschwerde bei Aufsichtsbehörde:
                </span>
                &nbsp;Sie haben unbeschadet eines anderweitigen
                verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das
                Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in
                dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn
                Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
              </li>
            </ul>
          </div>
          <div className="mb-20 mt-8">
            <H2>Begriffsdefinitionen</H2>
            <p>
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
              Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der
              Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO
              definiert. Die gesetzlichen Definitionen sind verbindlich. Die
              nachfolgenden Erläuterungen sollen dagegen vor allem dem
              Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
            </p>
            <ul className="mt-2 list-disc pl-4">
              <li>
                <span className="font-bold">Personenbezogene Daten:</span>
                &nbsp;“Personenbezogene Daten” sind alle Informationen, die sich
                auf eine identifizierte oder identifizierbare natürliche Person
                (im Folgenden “betroffene Person” beziehen; als identifizierbar
                wird eine natürliche Person angesehen, die direkt oder indirekt,
                insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
                identifiziert werden kann, die Ausdruck der physischen,
                physiologischen, genetischen, psychischen, wirtschaftlichen,
                kulturellen oder sozialen Identität dieser natürlichen Person
                sind.
              </li>
              <li>
                <span className="font-bold">
                  Profile mit nutzerbezogenen Informationen:
                </span>
                &nbsp;Die Verarbeitung von “Profilen mit nutzerbezogenen
                Informationen”, bzw. kurz “Profilen” umfasst jede Art der
                automatisierten Verarbeitung personenbezogener Daten, die darin
                besteht, dass diese personenbezogenen Daten verwendet werden, um
                bestimmte persönliche Aspekte, die sich auf eine natürliche
                Person beziehen (je nach Art der Profilbildung können dazu
                unterschiedliche Informationen betreffend die Demographie,
                Verhalten und Interessen, wie z.B. die Interaktion mit Webseiten
                und deren Inhalten, etc.) zu analysieren, zu bewerten oder, um
                sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten
                oder Produkten, das Klickverhalten auf einer Webseite oder den
                Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies
                und Web-Beacons eingesetzt.
              </li>
              <li>
                <span className="font-bold">Reichweitenmessung:</span>&nbsp;Die
                Reichweitenmessung (auch als Web Analytics bezeichnet) dient der
                Auswertung der Besucherströme eines Onlineangebotes und kann das
                Verhalten oder Interessen der Besucher an bestimmten
                Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit
                Hilfe der Reichweitenanalyse können Webseiteninhaber z.B.
                erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und
                für welche Inhalte sie sich interessieren. Dadurch können sie
                z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer
                Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden
                häufig pseudonyme Cookies und Web-Beacons eingesetzt, um
                wiederkehrende Besucher zu erkennen und so genauere Analysen zur
                Nutzung eines Onlineangebotes zu erhalten.
              </li>
              <li>
                <span className="font-bold">Verantwortlicher:</span>&nbsp;Als
                “Verantwortlicher” wird die natürliche oder juristische Person,
                Behörde, Einrichtung oder andere Stelle, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten entscheidet,
                bezeichnet.
              </li>
              <li>
                <span className="font-bold">Verarbeitung:</span>
                &nbsp;“Verarbeitung” ist jeder mit oder ohne Hilfe
                automatisierter Verfahren ausgeführte Vorgang oder jede solche
                Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der
                Begriff reicht weit und umfasst praktisch jeden Umgang mit
                Daten, sei es das Erheben, das Auswerten, das Speichern, das
                Übermitteln oder das Löschen.
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </>
  );
};

export default DatenschutzPage;

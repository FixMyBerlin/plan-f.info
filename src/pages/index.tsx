import React from 'react';
import {
  Profile,
  ProfileGrid,
  QuoteBox,
  Fundings,
  FoldOut,
  CheckLI,
  CountLI,
  CEO,
  jury,
} from '~/components/StartPage';
import { Layout, Hero, Content } from '~/components/Layout';
import { ButtonLink, TextLink } from '~/components/Link';
import { H1, H2, H3 } from '~/components/Text';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero title="Impulse für die kommunale Fahrradmobilität">
        <FoldOut previewMode="clamp">
          <p>
            Einen Plan zu haben, ist gut. Plan&nbsp;F zu haben, ist sehr gut. F
            wie Fahrrad, Fortschritt und Fachthemen. Plan&nbsp;F unterstützt
            Kommunen bei der Förderung des Radverkehrs. Dafür strukturieren wir
            bestehendes Wissen, Maßnahmen und Leitfäden zur Fahrradmobilität und
            zeigen notwendige Handlungsfelder auf. Ergänzt wird die Übersicht
            durch aktuelle Beispiele aus der kommunalen Praxis, die auf
            städtische und zielgruppenspezifische Besonderheiten eingehen.
            Kommunen erhalten auf diese Weise einen Überblick und konkrete
            Handlungsmöglichkeiten zur Radverkehrsförderung.
          </p>
          <p className="mt-6">
            Im Projekt Plan&nbsp;F werden vier Produkte erarbeitet:
          </p>
          <ol className="mt-6 ml-12 list-decimal">
            <li>Ein komprimiertes und übersichtliches Handbuch</li>
            <li>Eine interaktive Webseite</li>
            <li>
              Ein kommunaler Fahrradcheck (Selbstaudit) inkl.
              Maßnahmenempfehlung
            </li>
            <li>
              Ein interaktiver E-Learningkurs zu den Inhalten der
              Systematisierung und Q&amp;A Sessions
            </li>
          </ol>
          <p className="mt-6">
            Plan&nbsp;F ist ein gemeinschaftliches Projekt von AEM Institute und
            FixMyCity und wird vom Bundesministerium für Digitales und Verkehr
            (BMDV) im Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </p>
        </FoldOut>
      </Hero>
      <section className="pt-1">
        <Content>
          <div className="mt-8">
            <H1>
              Jetzt mit ihrem kommunalen Praxisbeispiel bewerben für den
              Plan&nbsp;F Award
            </H1>
            <p className="mt-6">
              Sie haben in Ihrer Kommune aktuell eine Maßnahme oder ein Projekt
              zur Radverkehrsförderung umgesetzt oder sind gerade in der Planung
              oder Umsetzung? Dann nehmen Sie mit Ihrem guten Beispiel am
              Wettbewerb von Plan&nbsp;F teil.
            </p>
            <div className="mx-auto mt-8 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-sm rounded-tr-sm bg-dark-gray sm:mx-20 sm:rounded-br-[4rem] sm:rounded-tl-[4rem]">
              <p className="p-4 font-apercuMono text-white sm:p-8">
                Gute Praxisbeispiele der kommunalen Radverkehrsförderung bis zum
                31.8.2022 einreichen. Siegerehrung auf der
                Fahrradkommunalkonferenz 2022 in Aachen.
              </p>
            </div>
            <p className="mt-12">
              Ob neue Radschnellverbindungen oder Workshops mit Initiativen, ob
              Bildungsmaßnahmen in Schulen oder ein neu entwickelter Leitfaden:
              Jedes Projekt, ganz gleich in welchem Bereich, ist willkommen.
              Sowohl im kleinen als auch im großen Maßstab umgesetzte Maßnahmen
              sind relevant und haben die Chance, einen Preis zu gewinnen!
            </p>
            <p className="mt-6">
              Die ersten 100 Einreichungen erhalten zudem kostenfrei das
              VELOPLAN-Magazin für ein Jahr (vier Ausgaben).
            </p>
          </div>
          <div>
            <FoldOut foldedText="Welche Themen kann ich einreichen?">
              <div className="mt-6">
                <H2>Themen</H2>
                <p className="mt-6">
                  Wir haben insgesamt neun Handlungsfelder für Ihre Ideen und
                  Maßnahmen definiert, zu denen Sie weitere Informationen in dem
                  Bewerbungsformular für den Plan&nbsp;F Award finden:
                </p>
                <ul className="my-6 ml-16 list-inside list-square ">
                  <li>Governance</li>
                  <li>Bildung und Trainings</li>
                  <li>Services</li>
                  <li>Kommunikation und Öffentlichkeitsarbeit</li>
                  <li>Multimodalität und Nahmobilität</li>
                  <li>Infrastruktur</li>
                  <li>Wirtschaft</li>
                  <li>Tourismus- und Freizeitverkehr</li>
                  <li>Verkehrsberuhigung</li>
                </ul>
                <p className="mt-6">
                  Wir freuen uns über Einreichungen von großen wie kleinen
                  Kommunen, ob Einsteiger*innen oder Vorreiter*innen im
                  Radverkehr.
                </p>
                <p className="mt-6">
                  Bewerben Sie sich bis zum 31. August 2022 mit Ihrem Projekt!
                </p>
              </div>
            </FoldOut>
            <div className="pt-14">
              <ButtonLink large to="https://heyflow.id/plan-f-award#start">
                Hier gehts zum Bewerbungsformular
              </ButtonLink>
            </div>
          </div>
          <p className="mt-10">
            Halten Sie für die Bewerbung – soweit vorhanden – folgende
            Informationen bereit:
          </p>
          <ul className="my-2 list-none text-light-gray">
            <CheckLI>Modal Split der Kommune</CheckLI>
            <CheckLI>Zeitraum, Ablauf und Umsetzung der Maßnahme</CheckLI>
            <CheckLI>Beteiligte Akteur*innen</CheckLI>
            <CheckLI>Beteiligungsprozess</CheckLI>
            <CheckLI>
              Aufwand: Finanziell und Personal Evaluationsergebnisse
            </CheckLI>
          </ul>
          <p>
            Der Bewerbung können Sie abschließend relevante Dokumente beifügen,
            die Ihre Maßnahmen betreffen, wie z. B.:
          </p>
          <ul className="my-2 list-none text-light-gray">
            <CheckLI>2 bis 5 Bilder von der Maßnahme</CheckLI>
            <CheckLI>Pressemittteilungen, Plakate, Broschüren, etc.</CheckLI>
            <CheckLI>
              Berichte, Planungsdokumente, entstandene Leitfäden,
              Verkehrstechnischer Erläuterungsbericht etc.
            </CheckLI>
          </ul>
          <p className="mt-10">
            Die Sieger*innen des Wettbewerbs werden auf der
            Fahrradkommunalkonferenz in Aachen am 22. November 2022 geehrt.
          </p>
          <p className="mt-6">
            Um Ihnen die Bewerbung zu erleichtern, haben wir in einem PDF
            Dokument alle notwendigen Schritte und Fragen festgehalten. Das PDF
            können Sie hier herunterladen.
          </p>
          <div className="mt-6">
            <ButtonLink large external to="anleitung_bewerbung.pdf">
              Anleitung zur Bewerbung Plan&nbsp;F Award
            </ButtonLink>
          </div>
          <div className="mt-24">
            <H2>Unsere Schirmfrau</H2>
            <div className="mt-9">
              <Profile profile={CEO} preload />
              <div className="mr-20">
                <QuoteBox>{CEO.quote}</QuoteBox>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <H2>Unsere Jury</H2>
            <div className="mt-3">
              <p>
                Die Jury besteht aus Expert*innen aus Kommunen, von
                Arbeitsgemeinschaften Fahrradfreundlicher Kommunen oder Städte,
                des ADFC, von changing cities, des VCD, der Agora Verkehrswende
                und der Wissenschaft.
              </p>
            </div>
            <div className="mt-9">
              <FoldOut
                foldedText="Alle Jury Mitglieder anzeigen"
                unfoldedText="Jury Mitglieder ausblenden"
                previewMode="blend"
              >
                <ProfileGrid profiles={jury} />
              </FoldOut>
            </div>
          </div>
        </Content>
      </section>
      <section className="mt-16 bg-pastel-purple pb-8">
        <Content>
          <div className="pt-14">
            <H2>Das sind die Preise</H2>
            <ol className="my-8 list-none">
              <CountLI value={1}>
                Das erstplatzierte Projekt gewinnt ein Plan&nbsp;F Audit mit
                Maßnahmenempfehlung. Das Audit besteht aus mehreren Workshops,
                die gemeinsam vor Ort in Ihrer Kommune vom 17. bis 21. Oktober
                2022 mit Fahrradprofessorin Ineke Spapé und ihren Studierenden
                aus Breda (NL), dem Team vom AEM Institute sowie Studierenden
                aus Deutschland durchgeführt wird. Das Vorgehen orientiert sich
                an dem ehemaligen NRVP-Projekt FreshBrains unter
                Berücksichtigung der Systematisierung von Plan&nbsp;F.
              </CountLI>
              <CountLI value={2}>
                Das zweitplatzierte Projekt gewinnt ein Plan&nbsp;F Online Audit
                von Studierenden unter der Anleitung des Teams vom AEM
                Institute.
              </CountLI>
              <CountLI value={3}>
                Das drittplatzierte Projekt gewinnt ein Plan&nbsp;F Online Audit
                in einem selbst gewählten Handlungsfeld.
              </CountLI>
            </ol>
            <p className="mt-6">
              Neben den drei bestplatzierten Projekten werden auf der
              Fahrradkommunalkonferenz außerdem die besten Maßnahmen pro
              Handlungsfeld geehrt. Auch hier gibt es tolle Preise, wie zum
              Beispiel coole Plan&nbsp;F Sachpreise oder ein mobilogisch-Abo zu
              gewinnen.
            </p>
          </div>
          <div className="mt-14">
            <FoldOut foldedText="Wie läuft das Audit ab?">
              <H2>Ablauf Plan&nbsp;F Audit mit Maßnahmenempfehlung</H2>
              <p className="mt-6">
                Die Studierenden sind eine Woche zu Gast in Ihrer Kommune und
                entwickeln in fachlicher Begleitung durch Plan&nbsp;F neue Ideen
                zur Verbesserung der Radmobilität, angepasst an Ihre
                spezifischen Bedürfnisse und Gegebenheiten vor Ort. Zu Beginn
                der Aktionswoche stellt die Kommunalverwaltung kurz die
                wesentlichen Knackpunkte der Radverkehrsförderung vor. Die
                Studierenden bauen auf diesen auf und entwickeln eigene Visionen
                mit dem Ziel, die Fahrradmobilität in kurzer Zeit wesentlich zu
                verbessern – von der klassischen Planung bis zu
                Guerilla-Aktionen. Dabei wird Radverkehr grundsätzlich als
                Gesamtsystem gedacht – mit unterschiedlichen Zielgruppen,
                Handlungsfeldern und Maßnahmen, die weit über die einfache
                Infrastruktur hinausgehen.
              </p>
              <p>
                Die für Ihre Kommune maßgeschneiderten Ergebnisse des Plan F
                Audits werden in einer Broschüre mit Planungen, Visualisierungen
                und Texten aufbereitet und am Ende der Woche der Stadtverwaltung
                sowie interessiertem Publikum (z. B. aus der Politik, Verbänden
                oder weitere beteiligte Akteur*innen) präsentiert.
              </p>
              <div className="mt-8">
                <H3>Mehrwert für alle Beteiligten</H3>
                <p className="mt-6">
                  Durch das Plan&nbsp;F Audit entsteht ein deutlicher Mehrwert
                  für alle Beteiligten – Ihre Kommune erhält innovative und
                  fachliche Unterstützung und wird so in kurzer Zeit (noch)
                  fahrradfreundlicher. Die Studierenden wiederum lernen aus der
                  kommunalen Praxis und erproben gleichzeitig die Anwendung der
                  Systematisierung von Plan&nbsp;F – die besten Voraussetzungen
                  also für einen gemeinsamen neuen Weg der kommunalen
                  Radverkehrsförderung.
                </p>
                <p>
                  Das Plan&nbsp;F Audit ist angelehnt an das NRVP-Projekt
                  FreshBrains. Studierende aus Deutschland und den Niederlanden
                  haben im Rahmen dieses Projekts bereits in Kassel, Chemnitz,
                  Mönchengladbach, Wuppertal, Bonn, und Dortmund ein
                  Fahrradaudit durchgeführt.
                  {/* <TextLink to="http://nrvp.de/22122">
                    Weiterführende Informationen zu dem Projekt.
                  </TextLink> */}
                </p>
                <p className="mt-6">
                  Aufruf:&nbsp;
                  <TextLink external to="Aufruf_Studierende_PlanF_Audit.pdf">
                    Gesucht: Studierende für das Plan F Audit mit
                    Maßnahmenempfehlung
                  </TextLink>
                </p>
              </div>
            </FoldOut>
          </div>
        </Content>
      </section>
      <section className="mt-8">
        <Content>
          <H2>Orientierung und Vorbild für andere Kommunen</H2>
          <p className="mt-4">
            Die besten Praxisbeispiele in den unterschiedlichen Handlungsfeldern
            der kommunalen Radverkehrsförderung werden zudem in unserem
            Handlungsleitfaden sowie auf der Webseite von Plan&nbsp;F
            veröffentlicht. Die guten Beispiele aus der kommunalen Praxis sollen
            die vielfältigen Handlungsmöglichkeiten in der Radverkehrsförderung
            veranschaulichen und dienen anderen Kommunen künftig als
            Orientierung und Vorbild.
          </p>
          <p className="mt-20">
            Bewerben Sie sich bis zum 31. August 2022 mit Ihrem Projekt!
          </p>
          <div className="mt-6">
            <ButtonLink large to="https://heyflow.id/plan-f-award#start">
              Hier gehts zum Bewerbungsformular
            </ButtonLink>
          </div>
        </Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </Layout>
  );
};

export default IndexPage;

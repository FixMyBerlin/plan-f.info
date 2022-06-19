import React from 'react';
import { FoldOut } from '~/components/common';
import { Profile, ProfileGrid } from '~/components/StartPage/Profile';
import { QuoteBox } from '~/components/StartPage/QuoteBox';
import { Layout, Hero } from '~/components/Layout';
import { CEO, jury } from '~/data/profiles';
import { ButtonLink } from '~/components/Link';
import { H1, H2 } from '~/components/Text';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero title="Impulse für die kommunale Fahrradmobilität">
        <FoldOut previewMode="clamp">
          <p>
            Einen Plan zu haben, ist gut. Plan F zu haben, ist sehr gut. F wie
            Fahrrad, Fortschritt und Fachthemen. Plan F unterstützt Kommunen bei
            der Förderung des Radverkehrs. Dafür strukturieren wir bestehendes
            Wissen, Maßnahmen und Leitfäden zur Fahrradmobilität und zeigen
            mögliche Handlungsfelder auf. Ergänzt wird die Übersicht durch
            aktuelle Beispiele aus der kommunalen Praxis, die auf städtische und
            zielgruppenspezifische Besonderheiten eingehen. Kommunen erhalten
            auf diese Weise einen Überblick und konkrete Handlungsmöglichkeiten
            zur Radverkehrsförderung. Plan F ist ein gemeinschaftliches Projekt
            von AEM Institute und FixMyCity und wird vom Bundesministerium für
            Digitales und Verkehr (BMDV) im Rahmen des Nationalen
            Radverkehrsplan (NRVP) gefördert. Weiterführende Informationen zum
            Projekt.
          </p>
        </FoldOut>
      </Hero>
      <div className="px-layout py-12">
        <h1 className="text-4xl font-medium">
          Jetzt mit ihrem Praxisbeispiel bewerben für den Plan F Award
        </h1>
        <div className="mt-6">
          <p>
            Sie haben in Ihrer Kommune aktuell eine Maßnahme oder ein Projekt
            zur Radverkehrsförderung umgesetzt oder sind gerade in der Planung
            oder Umsetzung? Dann nehmen Sie mit Ihrem guten Beispiel am
            Wettbewerb von Plan F teil.
          </p>
          <div className="mx-20 mt-8 rounded-br-[4rem] rounded-tl-[4rem] rounded-bl-sm rounded-tr-sm bg-dark-gray text-white">
            <p className="p-8">
              Gute Praxisbeispiele der kommunalen Radverkehrsförderung bis zum
              31.8.2022 einreichen. Siegerehrung auf der
              Fahrradkommunalkonferenz 2022 in Aachen.
            </p>
          </div>
          <p className="mt-6">
            Ob neue Radschnellverbindungen oder Workshops mit Initiativen, ob
            Bildungsmaßnahmen in Schulen oder ein neu entwickelter Leitfaden:
            Jedes Projekt, ganz gleich in welchem Bereich, ist willkommen.
            Sowohl im kleinen als auch im großen Maßstab umgesetzte Maßnahmen
            sind relevant und haben die Chance, einen Preis zu gewinnen!
          </p>
          <div className="mt-6">
            <FoldOut foldedText="Welche Themen kann ich einreichen ?">
              <div>
                <H1>Themen</H1>
                <p className="mt-6">
                  Wir haben insgesamt neun Handlungsfelder für Ihre Ideen und
                  Maßnahmen definiert, zu denen Sie weitere Informationen auf
                  dieser Website finden:
                </p>
                <ul className="my-6 ml-16 list-inside list-square">
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
            <div className="py-6">
              <ButtonLink large to="">
                Hier gehts zum Bewerbungsformular
              </ButtonLink>
            </div>
          </div>
          <p className="mt-6">
            Halten Sie für die Bewerbung – soweit vorhanden – folgende
            Informationen bereit:
          </p>
          <ul className="my-2 list-inside list-square">
            <li>Modal Split der Kommune</li>
            <li>Zeitraum, Ablauf und Umsetzung der Maßnahme</li>
            <li>Beteiligte Akteur*innen</li>
            <li>Beteiligungsprozess</li>
            <li>Aufwand: Finanziell und Personal Evaluationsergebnisse</li>
          </ul>
          <p>
            Der Bewerbung können Sie abschließend relevante Dokumente beifügen,
            die Ihre Maßnahmen betreffen, wie z. B.:
          </p>
          <ul className="my-2 list-inside list-square">
            <li>2 bis 5 Bilder von der Maßnahme</li>
            <li>Pressemittteilungen, Plakate, Broschüren, etc.</li>
            <li>
              Berichte, Planungsdokumente, entstandene Leitfäden,
              Verkehrstechnischer Erläuterungsbericht etc.
            </li>
          </ul>
          <p>
            Die Sieger*innen des Wettbewerbs werden auf der
            Fahrradkommunalkonferenz in Aachen am 22. November 2022 geehrt.
          </p>
        </div>
        <H1>Unsere Schirmfrau</H1>
        <div className="mt-6">
          <Profile profile={CEO} />
          <div className="mr-20">
            <QuoteBox>{CEO.quote}</QuoteBox>
          </div>
        </div>
        <H1>Unsere Jury</H1>
        <div className="mt-6">
          <p>
            Die Jury besteht aus Expert*innen aus Kommunen, von
            Arbeitsgemeinschaften Fahrradfreundlicher Kommunen oder Städte, des
            ADFC, von changing cities, des VCD, der Agora Verkehrswende und der
            Wissenschaft.
          </p>
        </div>
        <div className="mt-12">
          <FoldOut
            foldedText="Alle Jury Mitglieder anzeigen"
            unfoldedText="Jury Mitglieder ausblenden"
            previewMode="blend"
          >
            <ProfileGrid profiles={jury} />
          </FoldOut>
        </div>
      </div>
      <div className="bg-pastel-purple px-layout py-12">
        <H1>Das sind die Preise</H1>
        <ul className="my-6 list-inside list-square">
          <li>
            Das erstplatzierte Projekt gewinnt ein Plan F Audit mit
            Maßnahmenempfehlung. Das Audit besteht aus mehreren Workshops, die
            gemeinsam vor Ort in Ihrer Kommune vom 17. bis 21. Oktober 2022 mit
            Fahrradprofessorin Ineke Spapé und ihren Studierenden aus Breda
            (NL), dem Team vom AEM Institute sowie Studierenden aus Deutschland
            durchgeführt wird. Das Vorgehen orientiert sich an dem ehemaligen
            NRVP-Projekt FreshBrains unter Berücksichtigung der Systematisierung
            von Plan F.
          </li>
          <li>
            Das zweitplatzierte Projekt gewinnt ein Plan F Online Audit von
            Studierenden unter der Anleitung des Teams vom AEM Institute.
          </li>
          <li>
            Das drittplatzierte Projekt gewinnt ein Plan F Online Audit in einem
            selbst gewählten Handlungsfeld.
          </li>
        </ul>
        <FoldOut>
          <p className="mt-6">
            Neben den drei bestplatzierten Projekten werden auf der
            Fahrradkommunalkonferenz außerdem die besten Maßnahmen pro
            Handlungsfeld geehrt. Auch hier gibt es tolle Preise, wie zum
            Beispiel coole Plan F Sachpreise oder ein Veloplan-Abo zu gewinnen.
          </p>
          <H1>Ablauf Plan F Audit mit Maßnahmenempfehlung</H1>
          <p className="mt-6">
            Die Studierenden sind eine Woche zu Gast in Ihrer Kommune und
            entwickeln in fachlicher Begleitung durch Plan F neue Ideen zur
            Verbesserung der Radmobilität, angepasst an Ihre spezifischen
            Bedürfnisse und Gegebenheiten vor Ort. Zu Beginn der Aktionswoche
            stellt die Kommunalverwaltung kurz die wesentlichen Knackpunkte der
            Radverkehrsförderung vor. Die Studierenden bauen auf diesen auf und
            entwickeln eigene Visionen mit dem Ziel, die Fahrradmobilität in
            kurzer Zeit wesentlich zu verbessern – von der klassischen Planung
            bis zu Guerilla-Aktionen. Dabei wird Radverkehr grundsätzlich als
            Gesamtsystem gedacht – mit unterschiedlichen Zielgruppen,
            Handlungsfeldern und Maßnahmen, die weit über die einfache
            Infrastruktur hinausgehen.
          </p>
          <p>
            Die für Ihre Kommune maßgeschneiderten Ergebnisse der FreshBrains
            werden in einer Broschüre mit Planungen, Visualisierungen und Texten
            aufbereitet und am Ende der Woche der Stadtverwaltung sowie
            interessiertem Publikum (z. B. aus der Politik, Verbänden oder
            weitere beteiligte Akteur*innen) präsentiert.
          </p>
          <h2 className="mt-12 text-2xl font-bold">
            Mehrwert für alle Beteiligten
          </h2>
          <p>
            Durch das Plan F Audit entsteht ein deutlicher Mehrwert für alle
            Beteiligten – Ihre Kommune erhält innovative und fachliche
            Unterstützung und wird so in kurzer Zeit (noch) fahrradfreundlicher.
            Die Studierenden wiederum lernen aus der kommunalen Praxis und
            erproben gleichzeitig die Anwendung der Systematisierung von Plan F
            – die besten Voraussetzungen also für einen gemeinsamen neuen Weg
            der kommunalen Radverkehrsförderung,
          </p>
          <p>
            Das Plan F Audit ist angelehnt an das NRPV-Projekt FreshBrains.
            Studierende aus Deutschland und den Niederlanden haben im Rahmen
            dieses Projekts bereits in Kassel, Chemnitz, Mönchengladbach,
            Wuppertal, Bonn, und Dortmund ein Fahrradaudit durchgeführt.
            Weiterführende Informationen zu dem Projekt finden Sie unter:
            nrvp.de/22122
          </p>
        </FoldOut>
      </div>
      <div className="px-layout py-12">
        <H1>Orientierung und Vorbild für andere Kommunen</H1>
        <p className="mt-6">
          Die besten Praxisbeispiele in den unterschiedlichen Handlungsfeldern
          der kommunalen Radverkehrsförderung werden zudem in unserem
          Handlungsleitfaden sowie auf der Webseite von Plan F veröffentlicht.
          Die guten Beispiele aus der kommunalen Praxis sollen die vielfältigen
          Handlungsmöglichkeiten in der Radverkehrsförderung veranschaulichen
          und dienen anderen Kommunen künftig als Orientierung und Vorbild.
        </p>
        <p className="mt-24">
          Bewerben Sie sich bis zum 31. August 2022 mit Ihrem Projekt!
        </p>
        <div className="mt-8 mb-20">
          <ButtonLink large to="">
            Hier gehts zum Bewerbungsformular
          </ButtonLink>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

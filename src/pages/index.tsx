import { PageProps } from 'gatsby';
import React from 'react';
import { FoldOut } from '~/components/common';
import { Profile } from '~/components/common/Profile/Profile';
import { Layout, Hero } from '~/components/Layout';
import { QuoteBox } from '~/components/common/QuoteBox';
import { profiles } from '~/data/profiles';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
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
      <div className="px-[20vw] py-12">
        <h1 className="text-4xl font-medium">
          Jetzt mit ihrem Praxisbeispiel bewerben für den Plan F Award
        </h1>
        <p className="mt-6">
          Sie haben in Ihrer Kommune aktuell eine Maßnahme oder ein Projekt zur
          Radverkehrsförderung umgesetzt oder sind gerade in der Planung oder
          Umsetzung? Dann nehmen Sie mit Ihrem guten Beispiel am Wettbewerb von
          Plan F teil.
        </p>
        <div className="mt-8 rounded-br-[4rem] rounded-tl-[4rem] rounded-bl-md rounded-tr-md bg-dark-gray text-xl text-white">
          <p className="p-8">
            Gute Praxisbeispiele der kommunalen Radverkehrsförderung bis zum
            31.8.2022 einreichen. Siegerehrung auf der Fahrradkommunalkonferenz
            2022 in Aachen.
          </p>
        </div>
        <p className="mt-6">
          Ob neue Radschnellverbindungen oder Workshops mit Initiativen, ob
          Bildungsmaßnahmen in Schulen oder ein neu entwickelter Leitfaden:
          Jedes Projekt, ganz gleich in welchem Bereich, ist willkommen. Sowohl
          im kleinen als auch im großen Maßstab umgesetzte Maßnahmen sind
          relevant und haben die Chance, einen Preis zu gewinnen!
        </p>
        <div className="mt-6">
          <FoldOut
            foldedText="Welche Themen kann ich einreichen ?"
            previewMode="blend"
          >
            <div>
              <h1 className="text-4xl font-bold">Themen</h1>
              <p className="mt-6">
                Wir haben insgesamt neun Handlungsfelder für Ihre Ideen und
                Maßnahmen definiert, zu denen Sie weitere Informationen auf
                dieser Website finden:
              </p>
              <ul className="my-8 ml-6 list-square">
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
        </div>
        <h1 className="mt-12 text-4xl font-bold">Unsere Schirmfrau</h1>
        <div className="mt-6">
          <Profile profile={profiles.r_peters} />
          <div className="mr-20">
            <QuoteBox color="lime-green" mirror>
              {profiles.r_peters.quote}
            </QuoteBox>
          </div>
        </div>
        <h1 className="mt-12 text-4xl font-bold">Unsere Jury</h1>
        <div className="mt-6">
          <p>
            Die Jury besteht aus Expert*innen aus Kommunen, von
            Arbeitsgemeinschaften Fahrradfreundlicher Kommunen oder Städte, des
            ADFC, von changing cities, des VCD, der Agora Verkehrswende und der
            Wissenschaft.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

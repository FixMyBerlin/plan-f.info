import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { H3, P } from '~/components/Text';

const motivationArticle = () => {
  const title =
    'Welches Budget sollte ich für die Förderung der Fahrradmobilität ansetzen?';

  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <P>
            Das Budget für die Radverkehrsförderung hängt von verschiedenen
            Faktoren ab, wie beispielsweise der Größe und Geografie der Stadt
            oder Gemeinde, der Anzahl der zu implementierenden Maßnahmen, der
            Qualität und dem Umfang der Radinfrastruktur und anderen Maßnahmen
            sowie dem gewünschten Zeitrahmen für die Umsetzung.
          </P>
          <P>
            Als grobe Orientierung können folgende Empfehlungen herangezogen
            werden:
          </P>
          <ul className="ml-6 flex list-disc flex-col gap-4 pl-2">
            <li>
              Das Bundesministerium für Digitales und Verkehr (BMDV) empfiehlt
              im Nationalen Radverkehrsplan 3.0 einen Durchschnittswert von 30
              Euro pro Person und Jahr. Dieser Wert gilt als gemeinsamer
              Zielwert von Bund, Ländern und Kommunen.
            </li>
            <li>
              Der Allgemeine Deutsche Fahrrad-Club (ADFC) empfiehlt, mindestens
              10 Prozent des Verkehrsbudgets für den Ausbau der Radinfrastruktur
              auszugeben.
            </li>
            <li>
              Beispiele von bestimmten Städten (Ausgaben in Euro pro
              Einwohner*in (Statista, 2018; Agora Verkehrswende, 2022))
              <ul className="ml-6 flex list-disc flex-col gap-2 pl-2">
                <li className="mt-4">München: 2,30 Euro (Jahr: 2018)</li>
                <li>Aachen: 88,5 Euro (Jahr: 2022)</li>
                <li>Berlin: 4,70 Euro (Jahr: 2018)</li>
                <li>Amsterdam: 11 Euro (Jahr: 2018)</li>
                <li>Kopenhagen: 35 Euro (Jahr: 2018)</li>
              </ul>
            </li>
          </ul>
          <P>
            Es ist jedoch wichtig zu betonen, dass die Höhe des Budgets nicht
            allein ausschlaggebend für den Erfolg der Radverkehrsplanung ist.
            Eine sorgfältige Planung, eine effektive Koordination der Akteure
            und eine regelmäßige Evaluation der umgesetzten Maßnahmen sind
            ebenso entscheidend für eine erfolgreiche Radverkehrsförderung.
            Zudem sind in Städten mit gut ausgebauter Radverkehrsinfrastruktur
            hohe Budgets, allein durch schon den Unterhalt, unumgänglich.
          </P>
          <P>
            Wer Interesse hat, weitere Hintergrundinformationen zu den
            Finanzbedarfen und der ökonomischen Bewertung kommunaler
            Verkehrssysteme zu erhalten, kann sich hier informieren:
          </P>
          <H3>BMDV (2023): Förderung und Finanzierung des Radverkehrs: </H3>
          <LinkButtonWithArrow
            button
            href="https://bmdv.bund.de/SharedDocs/DE/Artikel/StV/Radverkehr/finanzielle-foerderung-des-radverkehrs.html"
          >
            BMDV (2023)
          </LinkButtonWithArrow>
          <H3>
            Universität Kassel (2018): Ökonomische Bewertung kommunaler
            Verkehrssysteme (CostTool):
          </H3>

          <LinkButtonWithArrow
            button
            href="https://www.uni-kassel.de/fb14bau/institute/institut-fuer-verkehrswesen-ifv/verkehrsplanung-und-verkehrssysteme/forschung/it-gestuetzte-tools/costtool"
          >
            Universität Kassel (2018)
          </LinkButtonWithArrow>
        </Content>
      </Section>
    </>
  );
};

export default motivationArticle;

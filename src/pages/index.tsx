import React from 'react';
import {
  Profile,
  ProfileGrid,
  QuoteBox,
  Fundings,
  FoldOut,
  CEO,
  jury,
  FotoCopyright,
  fotos,
  icons,
} from '~/components/StartPage';
import { Layout, Hero, Content, HelmetSeo } from '~/components/Layout';
import { ButtonLink, TextLink } from '~/components/Link';
import { H1, H2, H3 } from '~/components/Text';

const IndexPage: React.FC = () => {
  const title = 'Impulse für die kommunale Fahrradmobilität';
  return (
    <Layout>
      <HelmetSeo title={title} />
      <Hero title={title}>
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
              Plan F Check: Passgenaue Handlungsempfehlungen durch
              Selbstevaluation von Kommunen
            </li>
            <li>
              Ein interaktiver E-Learningkurs zu den Inhalten der
              Systematisierung und Q&amp;A Sessions
            </li>
          </ol>
          <p className="mt-6">
            Plan&nbsp;F ist ein gemeinschaftliches Projekt von Fair Spaces und
            FixMyCity und wird vom Bundesministerium für Digitales und Verkehr
            (BMDV) im Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </p>
        </FoldOut>
      </Hero>
      <section className="mt-8">
        <Content>
          <H1>Die 9 Handlungsfelder der kommunalen Radverkehrsförderung</H1>

          <div className="flex flex-row">
            <icons.governance className="mr-2 h-12 w-12" /> <H2>Governance</H2>
          </div>
          <FoldOut className="pb-4">
            <p>
              Das Handlungsfeld Governance schließt alle Maßnahmen der
              Radverkehrsförderung ein, die sich auf einer politischen,
              konzeptionellen und organisatorischen Ebene befinden.
            </p>
            <p>
              Dabei geht es sowohl um politische Entscheidungen, rechtliche
              Grundlagen, Finanzierung und Verantwortlichkeiten in der
              Verwaltung als auch um Konzepte, wie z. B. Radverkehrs- oder
              Stadtentwicklungskonzepte, Organisation und Zusammenarbeit,
              Informationen und Beteiligung, Monitoring und Evaluation.
            </p>
            <p className="pt-2">
              Um die Radmobilität in einem Gesamtsystem zu verbessern, ist es
              wichtig, dass Kommunen auch das Thema Wohnen angehen und
              beispielsweise Stellplatzschlüssel für Fahrräder einführen oder
              Abstellanlagen fördern. Auch die Förderung von gemeinnützigen
              Institutionen und sozialem Engagement, welches einen Betrag zu
              einer verbesserten Radmobilität leistet, sind gute Maßnahmen in
              dem Handlungsfeld Governance.
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.bildung className="mr-2 h-12 w-12" />
            <H2>Bildung und Trainings</H2>
          </div>
          <FoldOut className="pb-4">
            <p>
              Um die Radmobilität langfristig zu erhöhen, ist es wichtig, Kinder
              und Jugendliche bereits früh mit der Nutzung des Fahrrads vertraut
              zu machen. Maßnahmen wie Mobilitätsbildung, Fahrradkurse oder
              Serviceangebote z. B. zur Reparatur, in Schulen, Kitas oder
              Jugendclubs tragen dazu bei, dass das Fahrrad ein
              selbstverständlicher Bestandteil der Mobilitätskultur wird.
            </p>
            <p className="pt-2">
              Aber auch für Erwachsene sind Bildungs- und Trainingsangebote
              wichtig. Es gibt viele Personen, die nicht Fahrradfahren, weil sie
              es nie gelernt haben oder sich, z. B. mit zunehmendem Alter,
              unsicher fühlen. (Weiter-) Bildung beinhaltet zudem nicht nur das
              Erlernen des Fahrradfahrens, sondern auch die Vermittlung der
              Vorteile des Radfahrens sowohl für Jugendliche als auch für ältere
              Menschen.
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.infrastruktur className="mr-2 h-12 w-12" />
            <H2>Infrastruktur</H2>
          </div>
          <FoldOut className="pb-4">
            Das Handlungsfeld Infrastruktur schließt alle Maßnahmen ein, die der
            Verbesserung der Radinfrastrukturanlagen dienen. Dabei geht es um
            den fließenden Radverkehr, z. B. Radwege, Einrichtung von
            Fahrradstraßen, Brücken oder sichere Kreuzungen, die Beschilderung
            des Fahrradnetzes als auch um Abstellanlagen für den ruhenden
            Verkehr. Um die Nutzbarkeit der Radmobilität für alle Zielgruppen zu
            erhöhen, muss eine geeignete Radinfrastruktur so ausgelegt sein,
            dass sich alle Personen sicher fühlen. Infrastrukturen, um die
            Multimodalität zu fördern, sind im Handlungsfeld 6 „Multimodalität
            und Nahmobilität“ aufgeführt.
          </FoldOut>
          <div className="flex flex-row">
            <icons.kommunikation className="mr-2 h-12 w-12" />
            <H2>Kommunikation und Öffentlichkeitsarbeit</H2>
          </div>
          <FoldOut className="pb-4">
            <p>
              Das Handlungsfeld Kommunikation und Öffentlichkeitsarbeit schließt
              alle Maßnahmen ein, die das Fahrrad als Verkehrsmittel bewerben
              und wichtige Informationen, zum Beispiel zu radverkehrsbezogenen
              Angeboten oder neue sowie weniger bekannte Verkehrsregeln,
              verbreiten. Dazu gehören z. B. Maßnahmen wie Kampagnen und
              Veranstaltungen sowie einfache Pressemitteilungen. Kommunen können
              sich auch ein Branding als „Fahrradstadt“ auferlegen und darüber
              hinaus selbst als Vorbilder auftreten, beispielsweise durch eine
              Zertifizierung der Kommunalverwaltung als fahrradfreundlicher
              Arbeitgeber.
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.services className="mr-2 h-12 w-12" />
            <H2>Services</H2>
          </div>
          <FoldOut className="pb-4">
            <p>
              Radverkehrsbezogene Serviceangebote, wie Reparaturstationen sowie
              Bike- Sharing oder verschiedene Apps (z. B. zur Routenführung oder
              Ampelschaltung), sind wichtige Bausteine, um den Radverkehr zu
              fördern und zugänglicher zu gestalten.
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.multimodalitaet className="mr-2 h-12 w-12" />
            <H2>Multimodalität und Nahmobilität</H2>
          </div>
          <FoldOut className="pb-4">
            <p>
              In dem Handlungsfeld Multimodalität und Nahmobilität dreht sich
              alles darum, den Radverkehr besser mit anderen Verkehrsmitteln zu
              verknüpfen sowie in Einklang mit anderen Formen der Nahmobilität
              zu bringen. Multimodalität kann beispielsweise durch Maßnahmen
              verbessert werden, welche die Mitnahme des Fahrrads in
              öffentlichen Verkehrsmitteln oder den Umstieg (Bike & Ride,
              Mobility Hubs, Abstellanlagen an ÖPNV- Haltestellen etc.) zu
              anderen Verkehrsmitteln erleichtern.
            </p>
            <p>
              Zusätzlich ist es wichtig, geeignete Maßnahmen umzusetzen, die ein
              gutes Miteinander der verschiedenen Nahmobilitätsformen
              (Fußverkehr, Radverkehr, E-Scooter) fördern.
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.wirtschaft className="mr-2 h-12 w-12" />
            <H2>Wirtschaft</H2>{' '}
          </div>
          <FoldOut className="pb-4">
            <p>
              Wirtschafts- und Lieferverkehr macht einen großen Teil des
              Verkehrsaufkommens aus. Stadtlogistikkonzepte oder Förderangebote
              für Unternehmen können dazu beitragen, dass ein Teil der
              Lieferfahrzeuge durch geeignete Fahrräder (z. B. Lastenräder)
              ersetzt wird.
            </p>
            <p>
              Das Handlungsfeld Wirtschaft integriert auch Maßnahmen, die den
              Kundenverkehr im Einzelhandel adressieren und die Radmobilität
              diesbezüglich fördern (z. B. durch bestimmte Vorgaben, wie z. B.
              Stellplatzschlüssel für Fahrräder).
            </p>
          </FoldOut>
          <div className="flex flex-row">
            <icons.touristik className="mr-2 h-12 w-12" />
            <H2>Tourismus und Freizeitverkehr</H2>
          </div>
          <FoldOut className="pb-4">
            Das Handlungsfeld Tourismus und Freizeitverkehr schließt
            unterschiedliche kommunale Handlungsmöglichkeiten ein, welche die
            touristische und Freizeitradmobilität fördern. Dazu gehören u. a.
            öffentliche Angebote wie touristische Infrastruktur und Services,
            Informationen als auch Fördermöglichkeiten für die Privatwirtschaft
            (z. B. Abstellanlagen oder E-Ladestationen) oder Bike Parks.
          </FoldOut>
          <div className="flex flex-row">
            <icons.verkehrsberuhigung className="mr-2 h-12 w-12" />
            <H2>Verkehrsberuhigung</H2>
          </div>
          <FoldOut className="pb-4">
            Das Handlungsfeld Verkehrsberuhigung zeigt Maßnahmen auf, welche
            durch die Reduzierung des Kfz-Verkehrs zu einer Verbesserung der
            Radmobilität beitragen. Dazu gehören beispielsweise
            Geschwindigkeitsreduzierungen, Fahrverbote für Kfz oder die
            Reduzierung von Kfz-Stellplätzen.
          </FoldOut>
        </Content>
      </section>
      <section className="mt-16 bg-pastel-purple pb-16 pt-8">
        <Content>
          <div className="pb-6">
            <H1>Plan F Award 2022</H1>
            <p>
              Es haben sich insgesamt 66 Projekte aus unterschiedlichen Kommunen
              in ganz Deutschland für den Plan F Award 2022 beworben. Kleine und
              große Kommunen aus ländlichen sowie urbanen Regionen waren
              vertreten und bilden dabei die große Vielfalt deutscher Kommunen
              und deren unterschiedliche Herausforderungen und Möglichkeiten in
              der Radverkehrsförderung ab. Wir haben im kleinen als auch im
              großen Maßstab geplante und umgesetzte Maßnahmen aus den neun
              Handlungsfeldern der Radverkehrsförderung erhalten, die allesamt
              dazu beitragen, das Radfahren angenehmer und zugänglicher zu
              gestalten und den Radverkehr zu fördern.
            </p>
            <QuoteBox>
              Unserer Jury hat die besten Praxisbeispiele pro Handlungsfeld
              sowie drei Gesamtsieger*innen des Plan F Award 2022 gekürt. Die
              Siegerehrung und Preisverleihung fand auf der
              Fahrradkommunalkonferenz am 22. November 2022 in Aachen statt.
            </QuoteBox>
          </div>
          <div>
            <H2>
              Unsere Sieger*innen in den neun Handlungsfeldern der kommunalen
              Radverkehrsförderung
            </H2>
          </div>
          <div className="pb-6">
            <H2>Governance</H2>
            <H3>
              1. Zweckverband LANDFOLGE Garzweiler: Rheinisches
              Radverkehrsrevier
            </H3>
            <FoldOut className="pb-4">
              <p>
                Im Rheinischen Revier stoßen die für die Verflechtung zu den
                umgebenden Ballungsräumen notwendigen Infrastrukturen an ihre
                Kapazitätsgrenzen. Durch eine koordinierte, übergreifende und
                insbesondere durchgängige Gesamtentwicklung eines innovativen
                Radverkehrsnetzes im Rheinischen Revier werden Qualität und
                Quantität der Radinfrastruktur erhöht, so dass die Attraktivität
                und Bedeutung des Radverkehrs als Mobilitätsform für den Alltag
                steigen.
              </p>
              <p className="pt-2">
                Der Zweckverband hat dafür ein regionales Radverkehrskonzept
                erstellt, welches in den kommenden Jahren umgesetzt werden soll.
                Ziel ist es, durch die interkommunale Radverkehrsförderung eine
                Alternative zum Pkw zu schaffen und die Lebensqualität in der
                Region zu verbessern. Die Stärke des entstehenden regionalen
                Radverkehrsnetzes liegt dabei sowohl in der Schaffung von
                Synergien zwischen dem Alltagsverkehr und touristischen Routen
                als auch in einer engen Verzahnung des Radverkehrs mit anderen
                Verkehrsträgern und Mobilitätskonzepten.
              </p>
              <QuoteBox>
                Der Zweckverband LANDFOLGE Garzweiler belegt mit dem Rheinischen
                Radverkehrsrevier den 3. Platz (Gesamtwertung) des Plan F Awards
                2022 und hat das{' '}
                <TextLink to="#dritter">Plan F Online-Audit</TextLink> in einem
                Handlungsfeld gewonnen.
              </QuoteBox>
              <FotoCopyright data={fotos.g1} />
            </FoldOut>
            <H3>
              2. Freie und Hansestadt Hamburg: Leitfaden Fahrradparken im
              Quartier
            </H3>
            <FoldOut className="pb-4">
              Die Freie und Hansestadt Hamburg hat einen Leitfaden
              „Fahrradparken im Quartier“ entwickelt. Damit Fahrräder für
              möglichst viele alltägliche Wege genutzt werden, müssen sie am
              Wohn- und Arbeitsort sicher und witterungsgeschützt abgestellt
              werden können sowie schnell und bequem verfügbar sein. Wie gute
              Fahrradabstellanlagen im oder am Gebäude aussehen können und
              welche Lösungen in unterschiedlichen städtebaulichen
              Quartierstypologien zu empfehlen sind, zeigt der Hamburger
              Leitfaden „Fahrradparken im Quartier“. Adressiert wird die
              Nachrüstung von Fahrradabstellanlagen im Bestand. Darauf aufbauend
              hat Hamburg ein Förderprogramm aufgelegt, das den formulierten
              Anspruch an die Qualität der Anlagen in die Umsetzung bringt.
              <FotoCopyright data={fotos.g2} />
            </FoldOut>
            <H3>
              3. Region Hannover: Social2Mobility II: Fahrradmobilität und
              soziale Teilhabe ermöglichen
            </H3>
            <FoldOut className="pb-4">
              <p>
                Erklärtes Ziel des Projekts „Social2Mobility“ ist es, das
                Fahrrad in der Region Hannover zu einem kostengünstigen,
                zuverlässigen und sicheren Alltagsbegleiter für Personen mit
                geringen finanziellen Mitteln werden zu lassen. Dazu werden in
                drei Kommunen der Region Hannover verschiedene Maßnahmen zur
                Fahrradmobilität und Teilhabe umgesetzt und wissenschaftlich
                evaluiert. Die Maßnahmen umfassen dabei unter anderem die
                Stärkung selbstorganisierter Fahrradwerkstätten, Fahrradkurse,
                Informationskampagnen, Fahrradaktivitäten durch soziale
                Einrichtungen, Nutzung von Bildungs- und Teilhabeleistungen
                sowie Dialog und Vernetzung. Fahrradmobilität soll damit soziale
                Teilhabe ermöglichen.
              </p>

              <FotoCopyright data={fotos.g3} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Bildung und Trainings</H2>
            <H3>1. Landkreis Osnabrück: Bike to School</H3>
            <FoldOut className="pb-4">
              Mit der Kampagne „Bike to School“ wurden im Herbst 2020 und
              Frühjahr 2021 im Landkreis Osnabrück Schüler*innen ab der fünften
              Klasse sowie das Schulpersonal motiviert, ihre Schulwege mit dem
              Rad zurückzulegen. Die App-basierte Kampagne rief dazu auf, Teams
              zu bilden und mit dem Rad zur Schule zu fahren. Die mit der App
              aufgezeichneten Schulradfahrten generierten für das Team und die
              Schule Punkte, die in einem Ranking in der App dargestellt wurden.
              Dabei wurde technisch sichergestellt, dass nur Radfahrten zur
              Schule in die Punkteberechnung einflossen. Punkte-Booster für das
              Team verbesserten die Platzierung: Fuhr das gesamte Team häufig
              Fahrrad, wurde das mit Boostern belohnt. Durch diesen
              spielerischen Ansatz motivierten eifrige Teilnehmer*innen ihre
              Teammitglieder zum häufigeren Radfahren. Gleichzeitig lag der
              Fokus nicht auf reinem Kilometersammeln, sondern auf regelmäßigen
              Fahrten, um möglichst viele Personen zur Teilnahme zu motivieren.
              Am Ende erhielten die bestplatzierten Schulen Geldpreise, die für
              die Anschaffung von z. B. Spiel- oder Sportgeräten für die
              Schüler*innen genutzt werden können.
              <FotoCopyright data={fotos.b1} />
            </FoldOut>
            <H3>2. Bad Honnef: FahrRADMOMENTE - Schulaktion</H3>
            <FoldOut className="pb-4">
              <p>
                Wer auf das Fahrrad zu sprechen kommt, redet viel von
                Verkehrssicherheit, Radverkehrsanlagen oder Förderprojekten.
                Dabei erzählt jede einzelne Fahrt mit dem Fahrrad eine
                Geschichte, die es zu entdecken gilt. Diese zu erfahren und
                gleichzeitig für das Radfahren zu begeistern, war Ziel des
                Projekts in Bad Honnef. An drei Schulen hat die Stadt deshalb
                kurz vor den Sommerferien mit allen fünften Klassen jeweils eine
                Aktion durchgeführt, um solchen Radfahr-Geschichten auf die Spur
                zu kommen. Dabei wurde unter anderem deutlich, dass die
                Schüler*innen das Rad hauptsächlich in der Freizeit und weniger
                im Alltag nutzen.
              </p>
              <p>
                Die Schulaktion war ein Element der Radkommunikationskampagne
                „FahrRADMOMENTE“.
              </p>
              <FotoCopyright data={fotos.b2} />
            </FoldOut>
            <H3>3. Aachen: FahrRad Kampagne</H3>
            <FoldOut className="pb-4">
              <p>
                Die städtische Kampagne „FahrRad“ des Fachbereichs
                Stadtentwicklung, -planung und Mobilitätsinfrastruktur der Stadt
                Aachen bietet seit dem Schulhalbjahr 2015/2016 eine umfangreiche
                Mobilitäts- und Verkehrserziehung für Grundschüler*innen auf dem
                Gelände der Feuerwehr Aachen an. In dem sogenannten Floriansdorf
                lernen Kinder, was im Straßenverkehr wichtig ist: Ganz allgemein
                werden Informationen über Verkehrszeichen, verkehrssicheres
                Fahrrad und zu dem Verhalten und genereller Sicherheit im
                Straßenverkehr vermittelt. Es gibt verschiedene Übungen wie
                Spurgassen, Ballsport, Rampen, Wippen, Kreisel, Schneckenrennen
                und Vieles mehr, mit denen die Kinder mit viel Spaß das
                Fahrradfahren im Floriansdorf üben. Zusätzlich gibt es auch
                theoretischen Unterricht Ganz allgemein werden Informationen
                über Verkehrszeichen, verkehrssicheres Fahrrad und zu dem
                Verhalten und genereller Sicherheit im Straßenverkehr vermittelt
                unter anderem zu Abbiegesituationen.
              </p>
              <p className="pt-2">
                Damit die Kinder einen Eindruck vom Straßenverkehr bekommen, hat
                die Stadtverwaltung in dem Schonraum auf dem Feuerwehrgelände
                Verkehrsschilder aufgestellt und Radwege sowie Aufstellflächen
                markiert. Außerdem steht seit diesem Jahr eine Ampelanlage zur
                Verfügung.
              </p>
              <FotoCopyright data={fotos.b2} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Infrastruktur</H2>
            <H3>1. Verbandsgemeinde Wallmerod: Wäller ALLEn-Weg</H3>
            <FoldOut className="pb-4">
              <p>
                Mobilität soll für alle sein, deshalb hat die Gemeinde Wallmerod
                den ersten barrierefreien Radweg in Rheinland-Pfalz gebaut. Ob
                auf dem Fahrrad, im Rollstuhl oder mit Kinderwagen, jede*r soll
                die Möglichkeit bekommen, sich frei und klimaneutral bewegen zu
                können. Gerade im ländlichen Raum, wo die Radwege eher mit
                Schotterwegen in Verbindung gebracht werden, ist dies eine
                großartige Möglichkeit, sich aktiv für den Klimaschutz
                einzusetzen. Der Wäller ALLEen-Weg erstreckt sich über eine
                Länge von 12 km und verbindet dabei zwei Verbandsgemeinden und
                verschiedenste Arbeitgeber*innen, sodass eine
                Alltagstauglichkeit gegeben ist. Spezielle Beschilderungen und
                Rastplatzanlagen laden Menschen mit und ohne Einschränkungen
                ein, die klimaneutrale Fortbewegung fernab vom Pkw-Verkehr zu
                genießen.
              </p>
              <QuoteBox>
                Die Verbandsgemeinde Wallmerod ist belegt mit dem
                Wäller-ALLEnweg den 1. Platz (Gesamtwertung) des Plan F Awards
                2022 und hat das <TextLink to="#erster">Plan F Audit</TextLink>{' '}
                gewonnen, welches vom 17. - 21. Oktober vor Ort durchgeführt
                wurde.
              </QuoteBox>
              <p className="pt-6">
                In einem kurzen{' '}
                <TextLink
                  newWindow
                  to="
                https://www.facebook.com/watch/?v=5382383398456066"
                >
                  Video
                </TextLink>{' '}
                beantwortet die Verbandsgemeinde die drei häufigsten Fragen zu
                dem neuen Radweg:
              </p>
              <FotoCopyright data={fotos.i1} />
              <FotoCopyright data={fotos.i12} />
            </FoldOut>
            <H3>2. Köln: Rück- und Umbau freilaufender Rechtsabbieger</H3>
            <FoldOut className="pb-4">
              <p>
                In der Stadt Köln gibt es ca. 310 signalisierte Knotenpunkte,
                die mit mindestens einem freilaufenden Rechtsabbieger
                ausgestattet sind. An mehreren freilaufenden Rechtsabbiegern ist
                es in der Vergangenheit häufig zu Konflikten und Unfällen mit
                nicht- motorisierten Verkehrsteilnehmer*innen zum Teil mit
                Todesfolge gekommen. Daher hat der Rat der Stadt Köln eine
                Überprüfung, Überplanung, bis hin zum Umbau aller in Köln
                vorhandenen sogenannten freilaufenden Rechtsabbieger
                beschlossen. Ziel der Maßnahme ist die Erhöhung der
                Verkehrssicherheit für den Radverkehr. Seit 2019 wurden anhand
                eines Baukastensystems mehr als 35 freilaufende Rechtsabbieger
                verkehrssicher umgestaltet. Das eigens erstellte Baukastensystem
                enthält eine Vielzahl von Maßnahmen die kurz-, mittel- oder
                langfristig anwendbar sind und dadurch die Planer*innen beim
                Umbau unterstützen.
              </p>
              <FotoCopyright data={fotos.i2} />
            </FoldOut>
            <H3>3. Erfurt: Südknoten</H3>
            <FoldOut className="pb-4">
              <p>
                Der Erfurter Südknoten ist ein komplexer Verkehrsknoten, welcher
                dem Generalverkehrsplan von 1968 entstammt. Heute kreuzen dort
                zwei Bundesstraßen, die wiederum zwei Autobahnen verknüpfen. Die
                Ziele der ursprünglichen Verkehrsplanung richteten sich auf
                einen störungsfreien und leistungsstarken Kfz-Verkehr aus. Die
                Belange des Rad- und Fußverkehrs sind nicht mitgedacht, die
                Führung entspricht bei weitem nicht den heutigen Standards. Aus
                diesem Grund wurde eine neue, barrierefreie oberirdische
                Fußgänger-Querung errichtet und barrierefreie, direkte und
                übersichtliche Wege über den Knoten für Radfahrende geschaffen.
                Gleichzeitig wurde Platz für eine zukünftige Stadtbahnline
                geschaffen und somit die Verkehrssituation an die Anforderungen
                des 21. Jahrhunderts angepasst.
              </p>
              <FotoCopyright data={fotos.i3} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Kommunikation und Öffentlichkeitsarbeit</H2>
            <H3>1. Aachen: Kommunikation rund um den Radentscheid</H3>
            <FoldOut className="pb-4">
              <p>
                Im Jahr 2019 wurde das Bürger*innenbegehren Radentscheid durch
                die Stadt Aachen angenommen mit dem Ziel der Umsetzung bis 2027.
                Die Umsetzung des Radentscheids erfordert, den Straßenraum
                grundlegend neu aufzuteilen. Der Radentscheid eröffnet damit die
                Chance, Stadt zu gestalten und Potentiale der Nachhaltigkeit im
                öffentlichen Raum zu heben. Ein permanenter Baustein dabei ist
                die Kommunikation zu aktuellen Meilensteinen, Herausforderungen
                und zur Zielerreichung. Dafür gibt es neben einem regelmäßigen
                Austausch zwischen dem Team des Radentscheids und der Stadt,
                jährlichen Tätigkeitsberichten und Kampagnen auch eine
                Jahresveranstaltung für den Dialog zwischen Verwaltung, Team
                Radentscheid und der Stadtgesellschaft.
              </p>
              <QuoteBox>
                Die Stadt Aachen belegt mit der Kommunikation rund um den
                Radentscheid den 2. Platz (Gesamtwertung) des Plan F Awards 2022
                und hat das{' '}
                <TextLink to="#zweiter">Plan F Online-Audit</TextLink> gewonnen.
              </QuoteBox>
              <p>
                Das Video zur Jahresveranstaltung Radentscheid 2022 gibt es{' '}
                <TextLink
                  to="
                https://www.youtube.com/watch?v=MPveXoqAnjc&ab_channel=StadtAachen"
                  external
                  newWindow
                >
                  hier
                </TextLink>
              </p>
              <FotoCopyright data={fotos.k1} />
            </FoldOut>
            <H3>
              2. Oberursel: Orscheler Neubürgerinnen und Neubürger Radtour
            </H3>
            <FoldOut className="pb-4">
              <p>
                Erst eine Runde mit dem Rad, dann eine Erfrischung bei der
                Feuerwehr mit Wasser, Saft und Obst sowie ein Gespräch mit der
                Bürgermeisterin. Dieses immer weiter ausgebaute Programm bietet
                seit 2017 die Stadt Oberursel an und zeigt gleichzeitig, welches
                Potential die Stadt für Radfahrer*innen bietet. Mittlerweile
                werden Neubürger*innen zu einer von drei möglichen Radtouren
                eingeladen, bei der sie die Stadt und deren Radwege kennenlernen
                können. Zudem bieten die Radtouren die Gelegenheit, andere
                Neubürger*innen zu treffen. Die Stadt nutzt dabei diese
                besondere Möglichkeit, den Radverkehr zu stärken, denn
                Lebensumbrüche, wie z.B. ein Umzug, bieten die Chance, eingeübte
                Verhaltensweisen zu verändern.
              </p>
              <FotoCopyright data={fotos.k2} />
            </FoldOut>
            <H3>3. Wiesbaden: Mit der App DB Rad+ aufs Rad steigen</H3>
            <FoldOut className="pb-4">
              <p>
                Ein Kaffee für 25 km oder eine Eintrittskarte für 60km? Mit der
                App „DB Rad+“ der Deutschen Bahn kann man jetzt
                Fahrrad-Kilometer sammeln und bei Partner*innen in der Stadt
                gegen Belohnungen eintauschen. Und je mehr in die Pedale treten,
                desto mehr lohnt es sich für alle Radfahrer*innen in Wiesbaden.
                Seit einem Jahr wird die App in Kooperation mit @deutschebahn
                angeboten. In dieser Zeit wurden fast 100.000 Routen
                aufgezeichnet, 428.000 Kilometer gesammelt und 2.320 Prämien
                eingelöst. Wer mit der App Kilometer sammelt, kann sie gegen
                Rabatte bei Partner*innen einlösen oder einen Cappuccino, einen
                Apfel oder auch den Eintritt ins Museum Wiesbaden bezahlen.
              </p>
              <FotoCopyright data={fotos.k3} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Services</H2>
            <H3>1. Gelsenkirchen: Fahrradservicestationen</H3>
            <FoldOut className="pb-4">
              <p>
                Die Stadt hat insgesamt 50 Fahrradservicestationen eingerichtet,
                welche Radfahrende unterwegs die Möglichkeit geben, kleine
                Reparaturen an ihren Fahrrädern zu erledigen. Die kleinen
                Do-it-yourself-Stationen bieten Werkzeuge, eine Luftpumpe und
                eine Fahrradhalterung. Die Gelsenkirchener*innen können diese
                Servicestationen an fast sämtlichen Tankstellen im Stadtgebiet
                sowie weiteren Standorten finden.
              </p>
              <p className="pt-2">
                Um sicherzustellen, dass die Fahrradservicestationen laufend
                ihrem Qualitätsstandard entsprechen und Nutzer*innen kein
                kaputtes oder fehlendes Werkzeug vorfinden, wurde die Wartung
                dieser vertraglich vereinbart. Zusätzlich gibt es einen
                Mängelmelder der Stadt Gelsenkirchen, sodass Schadensmeldungen
                unkompliziert und direkt bei den zuständigen Stellen eingehen
                und Mängel schnell behoben werden können.
              </p>
              <FotoCopyright data={fotos.s1} />
            </FoldOut>
            <H3>2. Adelsdorf: Mängelerkennung Radwegweisung</H3>
            <FoldOut className="pb-4">
              <p>
                Radwegweiser werden leider nicht regelmäßig gewartet - das führt
                zu Fehlinformationen für Radfahrende!
              </p>
              <p className="pt-2">
                Um dem entgegenzuwirken und Radfahrende in Adelsdorf nicht auf
                eine falsche Fährte zu leiten, hat die Kommune an jedem
                Radwegweiser einen Aufkleber mit einem QR-Code angebracht.
                Radfahrende können so unkompliziert per Smartphone Mängel
                melden, welche die Gemeinde direkt an die entsprechende
                Dienststelle weiterleitet, damit diese schnellst behoben werden.
              </p>
            </FoldOut>
            <H3> 3. Kaufungen: E-Lastenradverleihsystem</H3>
            <FoldOut className="pb-4">
              <p>
                Das Kaufunger E-Lastenradverleihsystem ist in den Probebetrieb
                gestartet! Alle Kaufunger*innen können sich nun kostenlos eines
                der 17 Lastenräder ausleihen und damit alles Mögliche
                transportieren: Kinder, Großeltern, Waschmaschine, den
                Flohmarktstand, den Wocheneinkauf, die Werkzeugkiste,
                Papierakten/Ordner oder oder oder...
              </p>
              <p className="pt-2">
                Alle Kaufunger*innen können sich kostenlos E-Lastenräder
                ausleihen und umweltfreundlich und kräfteschonend Einkäufe und
                kleinere und größere Transporte erledigen oder Kinder und sogar
                Erwachsene chauffieren!
              </p>
              <p className="pt-2">
                Die Flotte besteht aus: 10 einspurigen Lastenrädern, 3
                dreispurigen Schwerlastenrädern, 2 Rikschas, 1 zweisitziges
                vierrädriges Schwerlastenrad (noch nicht im Verleih), 1 Gespann
                bestehend aus einspurigem Lastenrad und einem dreispurigen
                Schwerlast- Anhänger (Der Anhänger kann auch als Handwagen
                genutzt werden.)
              </p>
              <FotoCopyright data={fotos.s3} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Multimodalität und Nahmobilität</H2>
            <p className="pb-2">
              Im Handlungsfeld Multimodalität und Nahmobilität gab es leider
              keinen ersten Platz. Unsere Jury hat jedoch zwei zweite Plätze
              ausgewählt. Für den ersten Platz hat es bei beiden Projekten noch
              an kleineren Punkten gefehlt.
            </p>
            <H3>2. Fellbach: Automatisiertes Fahrradparkhaus</H3>
            <FoldOut className="pb-4">
              <p>
                Das Fahrradparkhaus vereint bewährte Paternoster-Technik mit
                ansprechender Architektur bei geringem Platzverbrauch und mit
                einem innovativen Zugangssystem per App. Einfach und
                unkompliziert, ohne große Suche nach einem Parkplatz, ganz ohne
                Fahrradschloss und trotzdem gut gesichert: So können Fahrräder
                und Pedelecs seit Dezember 2021 am Fellbacher Bahnhof abgestellt
                werden. Denn in der „Fellbach.go! radbox“, dem neuen
                Fahrradparkhaus, finden 76 Räder einen trockenen Abstellplatz -
                und das ganz automatisch. Nutzer*innen müssen dafür nur die App
                auf ihrem Smartphone bedienen. Das Projekt wurde mit Mitteln des
                Europäischen Fonds für Regionalentwicklung (EFRE) und des Landes
                Baden-Württemberg gefördert. Kooperationspartner im Rahmen des
                RegioWIN-Projekts „Regionale Mobilitätspunkte“ sind der Verband
                Region Stuttgart (VRS), der Verkehrsverbund Stuttgart (VVS) und
                die Stadt Fellbach.
              </p>
              <FotoCopyright data={fotos.m1} />
            </FoldOut>
            <H3>2. Verkehrsverbund Rhein-Neckar GmbH: VRNradbox</H3>
            <FoldOut className="pb-4">
              <p>
                Hochwertige und sichere Fahrradabstellanlagen an
                ÖPNV-Haltestellen sowie Bahnhöfen sind zentral, um die
                Verknüpfung zwischen Fahrrad und öffentlichen Verkehrsmitteln zu
                fördern und intermodale Wegeketten zu stärken.
              </p>
              <p className="pt-2">
                Der Verkehrsverbund Rhein-Neckar hat eigene abschließbare
                Fahrradboxen inklusive Ladevorrichtung für E-Bikes aufgestellt.
                Die VRNradboxen sollen künftig auf das gesamte VRN-Gebiet
                ausgeweitet werden. Nutzende werden online über die aktuelle
                Auslastung informiert, der Zugang erfolgt über ein eigenes
                Buchungssystem. So kann das Fahrrad trocken und sicher am
                Bahnhof abgestellt werden.
              </p>
              <FotoCopyright data={fotos.m2} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Wirtschaft</H2>
            <p>
              Im Handlungsfeld Wirtschaft haben wir keine Einreichung erhalten,
              die unsere Jury mit dem Plan F Award auszeichnen wollte.
            </p>
          </div>
          <div className="pb-6">
            <H2>Tourismus und Freizeitverkehr</H2>
            <H3>1. Morsbach: Fahrrad-Schnitzeljagd</H3>
            <FoldOut className="pb-4">
              <p>
                Bei dieser werden genau wie bei einer klassischen Schnitzeljagd
                Hinweise verfolgt, um am Ende das Ziel zu erreichen - nur eben
                mit dem Fahrrad. Die Morsbacher Fahrrad-Schnitzeljagd fand im
                Zeitraum der Aktion STADTRADELN vom 4. Bis 24. September 2022
                statt.
              </p>
              <p className="pt-2">
                Um an der Fahrrad-Schnitzeljagd teilzunehmen, brauchte es
                lediglich ein verkehrssicheres Fahrrad und eine Prise
                Entdeckerdrang! Die Teilnehmer*innen hatten die Aufgabe, entlang
                der eigens angelegten Route die Stationsschilder zu finden. Die
                Schilder waren während des gesamten Aktionszeitraums angebracht
                und verrieten nicht nur einen Teil des zu lösenden Wortpuzzles,
                sondern auch den Weg zur nächsten Station. Wer die
                Wortpuzzleteile in die richtige Reihenfolge brachte, erhielt mit
                etwas Geschick das Lösungswort. Unter allen Teilnehmer*innen
                wurden am Ende der Aktion tolle Preise verlost, die von lokalen
                Betrieben gesponsert wurden.
              </p>
              <FotoCopyright data={fotos.t1} />
            </FoldOut>
            <H3>2. Erfurt: Radring</H3>
            <FoldOut className="pb-4">
              <p>
                Der vielfältige ländlich geprägte Raum rund um Erfurt soll mit
                dem Fahrrad erlebbar gemacht werden. Mittels sieben Radialen
                kann die 110 km lange Rundtour vom Zentrum aus erreicht und von
                wenig bis sehr ambitionierten Radfahrenden in einer oder
                mehreren Etappen bewältigt werden.
              </p>
              <p className="pt-2">
                Mit geringem baulichem und finanziellem Aufwand wurde eine neue
                Freizeitroute geschaffen, die der einheimischen Bevölkerung neue
                Blickwinkel auf ihre Stadt eröffnet und zugleich den
                thüringischen Tourismus stärken soll. Darüber hinaus profitiert
                auch der Alltagsradverkehr, denn der Rundweg schafft eine gute
                Anbindung der angrenzenden Landkreise an die Stadt Erfurt!
              </p>
              <FotoCopyright data={fotos.t2} />
            </FoldOut>
          </div>
          <div className="pb-6">
            <H2>Verkehrsberuhigung</H2>
            <H3>1. Neuss: Fahrradachse Innenstadt</H3>
            <FoldOut className="pb-4">
              <p>
                Zur Reduzierung des MIV in der Neusser Innenstadt hat die Stadt
                verschiedene Erschließungsstraßen im Rahmen eines neunmonatigen
                Verkehrsversuches in Fahrradstraßen umgewandelt. Die neue
                Fahrradachse durch die Innenstadt soll den Radverkehr fördern
                und die Verkehrssicherheit insbesondere für Schüler*innen
                verbessern.
              </p>
              <p className="pt-2">
                Der Verkehrsversuch endete am 31. März 2022. Nun möchte die
                Stadt Neuss ein Konzept für eine dauerhaft autoreduzierte
                Innenstadt entwickeln.
              </p>
              <FotoCopyright data={fotos.v1} />
            </FoldOut>
            <H3>2. Friesoythe: Ausbau der Innenstadt und Radverkehrskonzept</H3>
            <FoldOut className="pb-4">
              <p>
                Mobilität ohne eigenes Auto ist in der Stadt bereits Realität.
                Das Ziel der Familienstadt Friesoythe ist es, die Begegnung
                aller Generationen in der Innenstadt zu ermöglichen. Dafür wurde
                vier Straßen und ein Knotenpunkt in der Innenstadt umgestaltet.
                Die Fahrbahn und Nebenanlagen wurden optisch einheitlich
                gestaltet und lediglich durch die Straßenausstattung getrennt.
                In Verbindung mit den reduzierten Geschwindigkeiten wird so eine
                Begegnungszone in der Innenstadt von Friesoythe geschaffen.
              </p>
              <p className="pt-2">
                Für Strecken, die nicht mit dem Rad zu bewältigen sind, wird der
                kreisweite Carsharing-Dienst moobil+ angeboten.
              </p>
              <p className="pt-2">
                Interessierte Anwohner*innen haben sich frühzeitig in den
                Planungsprozess eingebracht. Im Ergebnis führte dieses zu einer
                Art Mix aus Geschäftsstraße und Fußgänger*innenzone. Die
                intensive Beteiligung des Beirates für Menschen mit
                Beeinträchtigungen spiegelt sich in der gestalterischen
                Umsetzung wider, welche versucht den verschiedenen Belangen der
                Barrierefreiheit nachzukommen. Durch den Verzicht auf Bordsteine
                erfährt die Innenstadt ein einheitliches Erscheinungsbild. Es
                wurden Leitlinien durch Kleinpflasterstreifen sowie taktile
                Elemente an Überquerungsstellen eingesetzt, welche wichtige
                Orientierungshilfen für Sehbehinderte sowie blinde Menschen
                bieten. Zudem ist eine Vielzahl von Geschäften ohne Stufen
                erreichbar.
              </p>
              <FotoCopyright data={fotos.v2} />
            </FoldOut>
          </div>
          <div className="pt-4">
            <H2>Alle Einreichungen</H2>
            Hier finden sie die Mappe aller eingereichten Projekte zum Download:
            <p className="pt-6">
              <ButtonLink large newWindow to="Projektmappe_PlanfAward.pdf">
                Projektmappe mit allen Bewerbungen
              </ButtonLink>
            </p>
          </div>
        </Content>
        <Content>
          <div className="pt-12">
            <H2>
              Unsere Gesamtsieger*innen des Plan F Award gewannen je ein Plan F
              Audit
            </H2>
            <p>
              Unsere drei Gesamtsieger*innen haben je ein individuelles{' '}
              <span className="font-bold">
                Plan F Audit mit Maßnahmenempfehlung
              </span>{' '}
              gewonnen. Hier finden Sie Eindrücke und Ergebnisse unseres Vor-Ort
              Audits, welches wir vom 17. - 21. Oktober 2022 in der
              Verbandgemeinde Wallmerod durchgeführt haben. In Aachen und
              Garzweiler, unsere Plätze 2 & 3, führen wir je ein Online-Audit
              durch.
            </p>
          </div>
          <div className="pt-6">
            <H3 id="erster">
              1. Platz: Plan F Audit für die Verbandsgemeinde Wallmerod
            </H3>
            <FoldOut className="pb-4">
              <p>
                Vom 17. - 21. Oktober fand das Plan F Audit - Hauptgewinn des
                Plan F Awards 2022 - in der Verbandsgemeinde Wallmerod in
                Rheinland-Pfalz statt. Das Team von Fair Spaces war gemeinsam
                mit Professor Ineke Spapé und ihren Studierenden von der
                Universität Breda sowie Studierenden aus ganz Deutschland fünf
                Tage vor Ort und hat einen Adhoc-Radaktionsplan für die
                Verbandsgemeinde erstellt. Das Vorgehen orientiert sich an dem
                ehemaligen NRVP-Projekt FreshBrains unter Berücksichtigung der
                Systematisierung von Plan F.
              </p>
              <p className="pt-2">
                Wir haben vor Ort mit der Verwaltung und der lokalen Bevölkerung
                gesprochen und Herausforderungen, Wünsche und Anregungen für den
                Radverkehr in Wallmerod erfahren. In der Woche wurden drei
                konkrete Problemstellungen bearbeitet, die besonders wichtig für
                einen zukunftsfähigen Radverkehr in der ländlichen Gemeinde in
                Rheinland-Pfalz sind.
              </p>
              <ul className="my-6 ml-16 list-inside list-square ">
                <li>Radwegenetz</li>
                <li>Radweg Wallmerod-Hundsangen</li>
                <li>Fahrradkultur</li>
              </ul>
              <p>
                Unsere Studierenden, die „FreshBrains“, haben dafür ihre
                kreativen Ideen mit unseren Plan F Handlungsfeldern für eine
                ganzheitliche Radverkehrsförderung kombiniert und in fünf Tagen
                wertvolle radverkehrsfördernde Maßnahmen für eine
                fahrradfreundliche Verbandsgemeinde erarbeitet.
              </p>
              <p>
                Als kleines Highlight der Woche fand am Mittwoch eine
                Guerillaaktion statt, wo es bunt in der Verbandsgemeinde wurde!
                Wir haben gezeigt, wie ein fuß- und fahrradfreundliches Dorf
                aussehen kann - mit weniger Autoverkehr und mehr Aufenthalts-
                und Lebensqualität für die Bürger*innen - mit fahrenden
                Radwegen, einem flexiblen Pop-Up Zebrastreifen, selbst gemachten
                Hinweisschilder und Plakaten. Wir kamen mit Eltern, Großeltern,
                Kindern und Senior*innen ins Gespräch.
              </p>
              <p className="pt-2">
                Die Ergebnisse der Woche wurden am letzten Tag der Verwaltung,
                beteiligten Akteur*innen und der interessierten Öffentlichkeit
                im Rathaus der Verbandsgemeinde präsentiert. Die Gemeinde erhält
                abschließend ein Poster, welches die Ergebnisse inklusive
                Maßnahmenempfehlungen zur Verbesserung der Radmobilität in
                Wallmerod enthält.
              </p>
            </FoldOut>
            <H3 id="zweiter">
              2. Platz: Plan F Online-Audit für die Stadt Aachen
            </H3>
            <FoldOut className="pb-4">
              <p>
                Das Online-Audit für die Stadt Aachen findet seit dem 24.
                Oktober 2022 statt und wird von den Studierenden des
                Masterstudiengangs Radverkehr in intermodalen Verkehrsnetzen an
                der TH Wildau unter der Anleitung der Radverkehrsprofessur
                Christian Rudolph und des Teams von Fair Spaces durchgeführt.
                Unter Berücksichtigung der Systematisierung der Plan F
                Handlungsfelder der kommunalen Radverkehrsförderung erstellen
                die Studierenden einen Adhoc-Radaktionsplan inklusive
                Maßnahmenempfehlung. Dabei nehmen sie insbesondere die
                Handlungsfelder Governance, Infrastruktur sowie Kommunikation &
                Öffentlichkeitsarbeit ins Visier und erarbeiten Lösungsansätze
                für die Verbesserung der Fahrradmobilität in der Stadt Aachen.
                Die Ergebnisse werden der Verwaltung in der
                Abschlussveranstaltung am 14. Dezember 2022 präsentiert.
              </p>
            </FoldOut>
            <H3 id="dritter">
              3. Platz: Plan F Online-Audit in einem Handlungsfeld für
              Zweckverband LANDFOLGE Garzweiler
            </H3>
            <FoldOut className="pb-4">
              <p>
                Das Online-Audit für die Stadt Garzweiler wird von dem Team von
                Fair Spaces in dem selbst gewählten Handlungsfeld Kommunikation
                und Öffentlichkeitsarbeit durchgeführt. Die Stadt erhält
                individuelle Maßnahmenempfehlungen explizit in diesem
                Handlungsfeld, um ihr Projekt „Rheinisches Radrevier“ zu den
                Menschen in der Region zu bringen.
              </p>
            </FoldOut>
          </div>
          <div className="pt-12">
            <H2>Plan F Audit: Mehrwert für alle Beteiligten </H2>
            <p>
              Durch das Plan F Audit entsteht ein deutlicher Mehrwert für alle
              Beteiligten - Ihre Kommune erhält innovative und fachliche
              Unterstützung und wird so in kurzer Zeit (noch)
              fahrradfreundlicher. Die Studierenden wiederum lernen aus der
              kommunalen Praxis und erproben gleichzeitig die Anwendung der
              Systematisierung von Plan F - die besten Voraussetzungen also für
              einen gemeinsamen neuen Weg der kommunalen Radverkehrsförderung.
            </p>
            <p className="pt-2">
              Das Plan F Audit ist angelehnt an das NRVP-Projekt FreshBrains.
              Studierende aus Deutschland und den Niederlanden haben im Rahmen
              dieses Projekts bereits in Kassel, Chemnitz, Mönchengladbach,
              Wuppertal, Bonn, und Dortmund ein Fahrradaudit durchgeführt.
              Weiterführende Informationen zu dem Projekt finden Sie{' '}
              <TextLink
                to="https://www.mobilitaetsforum.bund.de/DE/Themen/Wissenspool/Projekte/Projektbeispiele/Projekte/19730_freshbrains_fahrradaudits_durch_niederla.html?cms_submit=Suchen&cms_templateQueryString=freshbrains"
                newWindow
              >
                hier
              </TextLink>
              .
            </p>
            <p className="pt-2">
              Haben Sie auch Interesse an einem solchen Audit bei sich in der
              Kommune? Dann sprechen Sie uns an unter:{' '}
              <TextLink to="mailto:kontakt@plan-f.info">
                kontakt@plan-f.info
              </TextLink>
              .
            </p>
          </div>
        </Content>
      </section>
      <section>
        <Content>
          <div className="mt-8">
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
      <section className="pt-20">
        <Content>
          <H1>Orientierung und Vorbild für andere Kommunen</H1>
          <p>
            Alle Siegerprojekte vom Plan F Award 2022 aus den unterschiedlichen
            Handlungsfeldern werden zudem in unserem Handbuch sowie auf der
            Webseite von Plan F veröffentlicht. Die guten Beispiele aus der
            kommunalen Praxis sollen die vielfältigen Handlungsmöglichkeiten in
            der Radverkehrsförderung veranschaulichen und dienen anderen
            Kommunen künftig als Orientierung und Vorbild.
          </p>
          <div className="pt-6 pb-6">
            <H2>Was steht noch aus? Die nächsten Schritte im Projekt</H2>
            <H3 className="!text-pastel-purple">Frühjahr 2023:</H3>
            <H3>Plan F Webseite</H3>
            <p className="pb-2">
              Die Plan F Systematisierung der Handlungsfelder der kommunalen
              Radverkehrsförderung inklusive Maßnahmen und guter Praxisbeispiele
              werden zurzeit durch das Team von Fair Spaces und FixMyCity
              aufbereitet. Kommunen finden hier wichtige Informationen zu
              Maßnahmen und Möglichkeiten für eine ganzheitliche
              Radverkehrsförderung.
            </p>
            <H3>Handbuch</H3>
            <p className="pb-2">
              Wir erstellen ein Plan F Handbuch, welches einen Überblick über
              die neun Handlungsfelder gibt und einen Eindruck der besten
              Praxisbeispiele der kommunalen Radverkehrsförderung. Das Handbuch
              wird als Printvision sowie digital verfügbar sein.
            </p>
            <H3>E-Learningkurs</H3>
            <p className="pb-6">
              Zu den neun Handlungsfeldern der Radverkehrsförderung wird ein
              E-Learningkurs konzipiert, welcher die Inhalte der Systematik
              vermittelt.
            </p>
            <H3 className="!text-pastel-purple">Sommer 2023:</H3>
            <H3>
              Plan F Check - Passgenaue Handlungsempfehlungen durch
              Selbstevaluation von Kommunen
            </H3>
            <p>
              Ein kommunaler Fahrradcheck zur Selbstevaluation und passgenauen
              Handlungsempfehlungen wird von Fair Spaces zusammen mit FixMyCity
              entwickelt.
            </p>
          </div>
          <p className="pt-6">
            Sie haben sich nicht für den Plan F Award beworben, aber in Ihrer
            Kommune wird ebenfalls ein gutes Projekt oder eine Maßnahme
            umgesetzt und sie möchten, dass andere Kommunen davon lernen können?
            Schreiben Sie uns gern eine E-Mail dazu an{' '}
            <TextLink to="mailto:kontakt@plan-f.info">
              kontakt@plan-f.info
            </TextLink>
            .
          </p>
        </Content>
      </section>
      <div className="object-left pt-28 pb-6">
        <Fundings />
      </div>
    </Layout>
  );
};

export default IndexPage;

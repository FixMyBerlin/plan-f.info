import { ArrowRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React from 'react';
import SendCommunityEntryLink from '~/components/CommunityEntries/SendCommunityEntryLink';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  CEO,
  FoldOut,
  Profile,
  ProfileGrid,
  fotos,
  jury,
} from '~/components/AwardPage';
import { AwardWinnerCard } from '~/components/AwardPage/AwardWinnerCard/AwardWinnerCard';
import { H3 } from '~/components/Text';
import { planfProseClasses } from '~/components/core/articleProseClasses';
import { Link } from '~/components/core/links/Link';
import { YouTubePreview } from '~/components/core/links/YouTubePreview';
import projectPdf from './Projektmappe_PlanfAward.pdf';

const awardWinnerTopics = {
  Governance: [
    {
      cardTitle:
        '1. Zweckverband LANDFOLGE Garzweiler: Rheinisches Radverkehrsrevier',
      foldOut: (
        <>
          <p>
            Im Rheinischen Revier stoßen die für die Verflechtung zu den
            umgebenden Ballungsräumen notwendigen Infrastrukturen an ihre
            Kapazitätsgrenzen. Durch eine koordinierte, übergreifende und
            insbesondere durchgängige Gesamtentwicklung eines innovativen
            Radverkehrsnetzes im Rheinischen Revier werden Qualität und
            Quantität der Radinfrastruktur erhöht, so dass die Attraktivität und
            Bedeutung des Radverkehrs als Mobilitätsform für den Alltag steigen.
          </p>
          <p>
            Der Zweckverband hat dafür ein regionales Radverkehrskonzept
            erstellt, welches in den kommenden Jahren umgesetzt werden soll.
            Ziel ist es, durch die interkommunale Radverkehrsförderung eine
            Alternative zum Pkw zu schaffen und die Lebensqualität in der Region
            zu verbessern. Die Stärke des entstehenden regionalen
            Radverkehrsnetzes liegt dabei sowohl in der Schaffung von Synergien
            zwischen dem Alltagsverkehr und touristischen Routen als auch in
            einer engen Verzahnung des Radverkehrs mit anderen Verkehrsträgern
            und Mobilitätskonzepten.
          </p>
          <blockquote>
            Der Zweckverband LANDFOLGE Garzweiler belegt mit dem Rheinischen
            Radverkehrsrevier den 3. Platz (Gesamtwertung) des Plan F Awards
            2022 und hat das Plan F Online-Audit in einem Handlungsfeld
            gewonnen.
          </blockquote>
        </>
      ),
      media: [fotos.g1],
    },
    {
      cardTitle:
        '2. Freie und Hansestadt Hamburg: Leitfaden Fahrradparken im Quartier',
      foldOut: (
        <p>
          Die Freie und Hansestadt Hamburg hat einen Leitfaden „Fahrradparken im
          Quartier“ entwickelt. Damit Fahrräder für möglichst viele alltägliche
          Wege genutzt werden, müssen sie am Wohn- und Arbeitsort sicher und
          witterungsgeschützt abgestellt werden können sowie schnell und bequem
          verfügbar sein. Wie gute Fahrradabstellanlagen im oder am Gebäude
          aussehen können und welche Lösungen in unterschiedlichen
          städtebaulichen Quartierstypologien zu empfehlen sind, zeigt der
          Hamburger Leitfaden „Fahrradparken im Quartier“. Adressiert wird die
          Nachrüstung von Fahrradabstellanlagen im Bestand. Darauf aufbauend hat
          Hamburg ein Förderprogramm aufgelegt, das den formulierten Anspruch an
          die Qualität der Anlagen in die Umsetzung bringt.
        </p>
      ),

      media: [fotos.g2],
    },
    {
      cardTitle:
        '3. Region Hannover: Social2Mobility II: Fahrradmobilität und soziale Teilhabe ermöglichen',
      foldOut: (
        <p>
          Erklärtes Ziel des Projekts „Social2Mobility“ ist es, das Fahrrad in
          der Region Hannover zu einem kostengünstigen, zuverlässigen und
          sicheren Alltagsbegleiter für Personen mit geringen finanziellen
          Mitteln werden zu lassen. Dazu werden in drei Kommunen der Region
          Hannover verschiedene Maßnahmen zur Fahrradmobilität und Teilhabe
          umgesetzt und wissenschaftlich evaluiert. Die Maßnahmen umfassen dabei
          unter anderem die Stärkung selbstorganisierter Fahrradwerkstätten,
          Fahrradkurse, Informationskampagnen, Fahrradaktivitäten durch soziale
          Einrichtungen, Nutzung von Bildungs- und Teilhabeleistungen sowie
          Dialog und Vernetzung. Fahrradmobilität soll damit soziale Teilhabe
          ermöglichen.
        </p>
      ),
      media: [fotos.g3],
    },
  ],
  'Bildung und Trainings': [
    {
      cardTitle: '1. Landkreis Osnabrück: Bike to School',
      foldOut: (
        <>
          <p>
            Mit der Kampagne „Bike to School“ wurden im Herbst 2020 und Frühjahr
            2021 im Landkreis Osnabrück Schüler*innen ab der fünften Klasse
            sowie das Schulpersonal motiviert, ihre Schulwege mit dem Rad
            zurückzulegen. Die App-basierte Kampagne rief dazu auf, Teams zu
            bilden und mit dem Rad zur Schule zu fahren. Die mit der App
            aufgezeichneten Schulradfahrten generierten für das Team und die
            Schule Punkte, die in einem Ranking in der App dargestellt wurden.
            Dabei wurde technisch sichergestellt, dass nur Radfahrten zur Schule
            in die Punkteberechnung einflossen. Punkte-Booster für das Team
            verbesserten die Platzierung: Fuhr das gesamte Team häufig Fahrrad,
            wurde das mit Boostern belohnt. Durch diesen spielerischen Ansatz
            motivierten eifrige Teilnehmer*innen ihre Teammitglieder zum
            häufigeren Radfahren. Gleichzeitig lag der Fokus nicht auf reinem
            Kilometersammeln, sondern auf regelmäßigen Fahrten, um möglichst
            viele Personen zur Teilnahme zu motivieren. Am Ende erhielten die
            bestplatzierten Schulen Geldpreise, die für die Anschaffung von z.
            B. Spiel- oder Sportgeräten für die Schüler*innen genutzt werden
            können.
          </p>
          <p>Bild</p>
        </>
      ),
      media: [fotos.b1],
    },
    {
      cardTitle: '2. Bad Honnef: FahrRADMOMENTE – Schulaktion',
      foldOut: (
        <>
          <p>
            Wer auf das Fahrrad zu sprechen kommt, redet viel von
            Verkehrssicherheit, Radverkehrsanlagen oder Förderprojekten. Dabei
            erzählt jede einzelne Fahrt mit dem Fahrrad eine Geschichte, die es
            zu entdecken gilt. Diese zu erfahren und gleichzeitig für das
            Radfahren zu begeistern, war Ziel des Projekts in Bad Honnef. An
            drei Schulen hat die Stadt deshalb kurz vor den Sommerferien mit
            allen fünften Klassen jeweils eine Aktion durchgeführt, um solchen
            Radfahr-Geschichten auf die Spur zu kommen. Dabei wurde unter
            anderem deutlich, dass die Schüler*innen das Rad hauptsächlich in
            der Freizeit und weniger im Alltag nutzen.
          </p>
          <p>
            Die Schulaktion war ein Element der Radkommunikationskampagne
            „FahrRADMOMENTE“.
          </p>
        </>
      ),
      media: [fotos.b2],
    },
    {
      cardTitle: '3. Aachen: FahrRad Kampagne',
      foldOut: (
        <>
          <p>
            Die städtische Kampagne „FahrRad“ des Fachbereichs Stadtentwicklung,
            -planung und Mobilitätsinfrastruktur der Stadt Aachen bietet seit
            dem Schulhalbjahr 2015/2016 eine umfangreiche Mobilitäts- und
            Verkehrserziehung für Grundschüler*innen auf dem Gelände der
            Feuerwehr Aachen an. In dem sogenannten Floriansdorf lernen Kinder,
            was im Straßenverkehr wichtig ist: Ganz allgemein werden
            Informationen über Verkehrszeichen, verkehrssicheres Fahrrad und zu
            dem Verhalten und genereller Sicherheit im Straßenverkehr
            vermittelt. Es gibt verschiedene Übungen wie Spurgassen, Ballsport,
            Rampen, Wippen, Kreisel, Schneckenrennen und Vieles mehr, mit denen
            die Kinder mit viel Spaß das Fahrradfahren im Floriansdorf üben.
            Zusätzlich gibt es auch theoretischen Unterricht Ganz allgemein
            werden Informationen über Verkehrszeichen, verkehrssicheres Fahrrad
            und zu dem Verhalten und genereller Sicherheit im Straßenverkehr
            vermittelt unter anderem zu Abbiegesituationen.
          </p>
          <p>
            Damit die Kinder einen Eindruck vom Straßenverkehr bekommen, hat die
            Stadtverwaltung in dem Schonraum auf dem Feuerwehrgelände
            Verkehrsschilder aufgestellt und Radwege sowie Aufstellflächen
            markiert. Außerdem steht seit diesem Jahr eine Ampelanlage zur
            Verfügung.{' '}
          </p>
        </>
      ),
      media: [fotos.b2],
    },
  ],
  Infrastruktur: [
    {
      cardTitle: '1. Verbandsgemeinde Wallmerod: Wäller ALLEn-Weg',
      foldOut: (
        <>
          <p>
            Mobilität soll für alle sein, deshalb hat die Gemeinde Wallmerod den
            ersten barrierefreien Radweg in Rheinland-Pfalz gebaut. Ob auf dem
            Fahrrad, im Rollstuhl oder mit Kinderwagen, jede*r soll die
            Möglichkeit bekommen, sich frei und klimaneutral bewegen zu können.
            Gerade im ländlichen Raum, wo die Radwege eher mit Schotterwegen in
            Verbindung gebracht werden, ist dies eine großartige Möglichkeit,
            sich aktiv für den Klimaschutz einzusetzen. Der Wäller ALLEen-Weg
            erstreckt sich über eine Länge von 12 km und verbindet dabei zwei
            Verbandsgemeinden und verschiedenste Arbeitgeber*innen, sodass eine
            Alltagstauglichkeit gegeben ist. Spezielle Beschilderungen und
            Rastplatzanlagen laden Menschen mit und ohne Einschränkungen ein,
            die klimaneutrale Fortbewegung fernab vom Pkw-Verkehr zu genießen.
          </p>
          <blockquote>
            Die Verbandsgemeinde Wallmerod ist belegt mit dem Wäller-ALLEnweg
            den 1. Platz (Gesamtwertung) des Plan F Awards 2022 und hat das{' '}
            <a href="#erster">Plan F Audit</a> gewonnen, welches vom 17. – 21.
            Oktober vor Ort durchgeführt wurde.
          </blockquote>
          <p>
            In einem kurzen Video beantwortet die Verbandsgemeinde die drei
            häufigsten Fragen zu dem neuen Radweg:{' '}
            <a href="https://www.facebook.com/watch/?v=5382383398456066">
              https://www.facebook.com/watch/?v=5382383398456066
            </a>
          </p>
        </>
      ),
      media: [fotos.i1, fotos.i12],
    },
    {
      cardTitle: '2. Köln: Rück- und Umbau freilaufender Rechtsabbieger',
      foldOut: (
        <p>
          In der Stadt Köln gibt es ca. 310 signalisierte Knotenpunkte, die mit
          mindestens einem freilaufenden Rechtsabbieger ausgestattet sind. An
          mehreren freilaufenden Rechtsabbiegern ist es in der Vergangenheit
          häufig zu Konflikten und Unfällen mit nicht-motorisierten
          Verkehrsteilnehmer*innen zum Teil mit Todesfolge gekommen. Daher hat
          der Rat der Stadt Köln eine Überprüfung, Überplanung, bis hin zum
          Umbau aller in Köln vorhandenen sogenannten freilaufenden
          Rechtsabbieger beschlossen. Ziel der Maßnahme ist die Erhöhung der
          Verkehrssicherheit für den Radverkehr. Seit 2019 wurden anhand eines
          Baukastensystems mehr als 35 freilaufende Rechtsabbieger
          verkehrssicher umgestaltet. Das eigens erstellte Baukastensystem
          enthält eine Vielzahl von Maßnahmen die kurz-, mittel- oder
          langfristig anwendbar sind und dadurch die Planer*innen beim Umbau
          unterstützen.
        </p>
      ),
      media: [fotos.i2],
    },
    {
      cardTitle: '3.  Erfurt: Südknoten',
      foldOut: (
        <p>
          Der Erfurter Südknoten ist ein komplexer Verkehrsknoten, welcher dem
          Generalverkehrsplan von 1968 entstammt. Heute kreuzen dort zwei
          Bundesstraßen, die wiederum zwei Autobahnen verknüpfen. Die Ziele der
          ursprünglichen Verkehrsplanung richteten sich auf einen störungsfreien
          und leistungsstarken Kfz-Verkehr aus. Die Belange des Rad- und
          Fußverkehrs sind nicht mitgedacht, die Führung entspricht bei weitem
          nicht den heutigen Standards. Aus diesem Grund wurde eine neue,
          barrierefreie oberirdische Fußgänger-Querung errichtet und
          barrierefreie, direkte und übersichtliche Wege über den Knoten für
          Radfahrende geschaffen. Gleichzeitig wurde Platz für eine zukünftige
          Stadtbahnline geschaffen und somit die Verkehrssituation an die
          Anforderungen des 21. Jahrhunderts angepasst.
        </p>
      ),
      media: [fotos.i3],
    },
  ],
  'Kommunikation und Öffentlichkeitsarbeit': [
    {
      cardTitle: '1. Aachen: Kommunikation rund um den Radentscheid',
      foldOut: (
        <>
          <p>
            Im Jahr 2019 wurde das Bürger*innenbegehren Radentscheid durch die
            Stadt Aachen angenommen mit dem Ziel der Umsetzung bis 2027. Die
            Umsetzung des Radentscheids erfordert, den Straßenraum grundlegend
            neu aufzuteilen. Der Radentscheid eröffnet damit die Chance, Stadt
            zu gestalten und Potentiale der Nachhaltigkeit im öffentlichen Raum
            zu heben. Ein permanenter Baustein dabei ist die Kommunikation zu
            aktuellen Meilensteinen, Herausforderungen und zur Zielerreichung.
            Dafür gibt es neben einem regelmäßigen Austausch zwischen dem Team
            des Radentscheids und der Stadt, jährlichen Tätigkeitsberichten und
            Kampagnen auch eine Jahresveranstaltung für den Dialog zwischen
            Verwaltung, Team Radentscheid und der Bürger*innenschaft.
          </p>
          <blockquote>
            Die Stadt Aachen belegt mit der Kommunikation rund um den
            Radentscheid den 2. Platz (Gesamtwertung) des Plan F Awards 2022 und
            hat das <a href="#zweiter">Plan F Online-Audit</a> gewonnen.
          </blockquote>
          <p>
            Das Video zur Jahresveranstaltung Radentscheid 2022 gibt es hier:{' '}
            <a href="https://www.youtube.com/watch?v=MPveXoqAnjc&ab_channel=StadtAachen">
              https://www.youtube.com/watch?v=MPveXoqAnjc&ab_channel=StadtAachen
            </a>
          </p>
        </>
      ),
      media: [fotos.k1],
    },
    {
      cardTitle: '2. Oberursel: Orscheler Neubürgerinnen und Neubürger Radtour',
      foldOut: (
        <p>
          Erst eine Runde mit dem Rad, dann eine Erfrischung bei der Feuerwehr
          mit Wasser, Saft und Obst sowie ein Gespräch mit der Bürgermeisterin.
          Dieses immer weiter ausgebaute Programm bietet seit 2017 die Stadt
          Oberursel an und zeigt gleichzeitig, welches Potential die Stadt für
          Radfahrer*innen bietet. Mittlerweile werden Neubürger*innen zu einer
          von drei möglichen Radtouren eingeladen, bei der sie die Stadt und
          deren Radwege kennenlernen können. Zudem bieten die Radtouren die
          Gelegenheit, andere Neubürger*innen zu treffen. Die Stadt nutzt dabei
          diese besondere Möglichkeit, den Radverkehr zu stärken, denn
          Lebensumbrüche, wie z.B. ein Umzug, bieten die Chance, eingeübte
          Verhaltensweisen zu verändern.
        </p>
      ),
      media: [fotos.k2],
    },
    {
      cardTitle: '3. Wiesbaden: Mit der App DB Rad+ aufs Rad steigen',
      foldOut: (
        <p>
          Ein Kaffee für 25 km oder eine Eintrittskarte für 60km? Mit der App
          „DB Rad+“ der Deutschen Bahn kann man jetzt Fahrrad-Kilometer sammeln
          und bei Partner*innen in der Stadt gegen Belohnungen eintauschen. Und
          je mehr in die Pedale treten, desto mehr lohnt es sich für alle
          Radfahrer*innen in Wiesbaden. Seit einem Jahr wird die App in
          Kooperation mit @deutschebahn angeboten. In dieser Zeit wurden fast
          100.000 Routen aufgezeichnet, 428.000 Kilometer gesammelt und 2.320
          Prämien eingelöst. Wer mit der App Kilometer sammelt, kann sie gegen
          Rabatte bei Partner*innen einlösen oder einen Cappuccino, einen Apfel
          oder auch den Eintritt ins Museum Wiesbaden bezahlen.
        </p>
      ),
      media: [fotos.k3],
    },
  ],
  Services: [
    {
      cardTitle: '1. Gelsenkirchen: Fahrradservicestationen',
      foldOut: (
        <>
          <p>
            Die Stadt hat insgesamt 50 Fahrradservicestationen eingerichtet,
            welche Radfahrende unterwegs die Möglichkeit geben, kleine
            Reparaturen an ihren Fahrrädern zu erledigen. Die kleinen
            Do-it-yourself-Stationen bieten Werkzeuge, eine Luftpumpe und eine
            Fahrradhalterung. Die Gelsenkirchener*innen können diese
            Servicestationen an fast sämtlichen Tankstellen im Stadtgebiet sowie
            weiteren Standorten finden.
          </p>
          <p>
            Um sicherzustellen, dass die Fahrradservicestationen laufend ihrem
            Qualitätsstandard entsprechen und Nutzer*innen kein kaputtes oder
            fehlendes Werkzeug vorfinden, wurde die Wartung dieser vertraglich
            vereinbart. Zusätzlich gibt es einen Mängelmelder der Stadt
            Gelsenkirchen, sodass Schadensmeldungen unkompliziert und direkt bei
            den zuständigen Stellen eingehen und Mängel schnell behoben werden
            können.
          </p>
        </>
      ),
      media: [fotos.s1],
    },
    {
      cardTitle: '2. Adelsdorf: Mängelerkennung Radwegweisung',
      foldOut: (
        <>
          <p>
            Radwegweiser werden leider nicht regelmäßig gewartet – das führt zu
            Fehlinformationen für Radfahrende!
          </p>
          <p>
            Um dem entgegenzuwirken und Radfahrende in Adelsdorf nicht auf eine
            falsche Fährte zu leiten, hat die Kommune an jedem Radwegweiser
            einen Aufkleber mit einem QR-Code angebracht. Radfahrende können so
            unkompliziert per Smartphone Mängel melden, welche die Gemeinde
            direkt an die entsprechende Dienststelle weiterleitet, damit diese
            schnellst behoben werden.
          </p>
        </>
      ),
      media: [fotos.s2],
    },
    {
      cardTitle: '3. Kaufungen: E-Lastenradverleihsystem',
      foldOut: (
        <>
          <p>
            Das Kaufunger E-Lastenradverleihsystem ist in den Probebetrieb
            gestartet! Alle Kaufunger*innen können sich nun kostenlos eines der
            17 Lastenräder ausleihen und damit alles Mögliche transportieren:
            Kinder, Großeltern, Waschmaschine, den Flohmarktstand, den
            Wocheneinkauf, die Werkzeugkiste, Papierakten/Ordner oder oder oder…
          </p>
          <p>
            Alle Kaufunger*innen können sich kostenlos E-Lastenräder ausleihen
            und umweltfreundlich und kräfteschonend Einkäufe und kleinere und
            größere Transporte erledigen oder Kinder und sogar Erwachsene
            chauffieren!
          </p>
          <p>
            Die Flotte besteht aus: 10 einspurigen Lastenrädern, 3 dreispurigen
            Schwerlastenrädern, 2 Rikschas, 1 zweisitziges vierrädriges
            Schwerlastenrad (noch nicht im Verleih), 1 Gespann bestehend aus
            einspurigem Lastenrad und einem dreispurigen Schwerlast-Anhänger
            (Der Anhänger kann auch als Handwagen genutzt werden.)
          </p>
        </>
      ),
      media: [fotos.s3],
    },
  ],
  'Multimodalität und Nahmobilität': [
    {
      specialText:
        'Im Handlungsfeld Multimodalität und Nahmobilität gab es leider keinen ersten Platz. Unsere Jury hat jedoch zwei zweite Plätze ausgewählt. Für den ersten Platz hat es bei beiden Projekten noch an kleineren Punkten gefehlt.',
    },
    {
      cardTitle: '2. Fellbach: Automatisiertes Fahrradparkhaus',
      foldOut: (
        <p>
          Das Fahrradparkhaus vereint bewährte Paternoster-Technik mit
          ansprechender Architektur bei geringem Platzverbrauch und mit einem
          innovativen Zugangssystem per App. Einfach und unkompliziert, ohne
          große Suche nach einem Parkplatz, ganz ohne Fahrradschloss und
          trotzdem gut gesichert: So können Fahrräder und Pedelecs seit Dezember
          2021 am Fellbacher Bahnhof abgestellt werden. Denn in der
          „Fellbach.go! radbox“, dem neuen Fahrradparkhaus, finden 76 Räder
          einen trockenen Abstellplatz – und das ganz automatisch. Nutzer*innen
          müssen dafür nur die App auf ihrem Smartphone bedienen. Das Projekt
          wurde mit Mitteln des Europäischen Fonds für Regionalentwicklung
          (EFRE) und des Landes Baden-Württemberg gefördert. Kooperationspartner
          im Rahmen des RegioWIN-Projekts „Regionale Mobilitätspunkte“ sind der
          Verband Region Stuttgart (VRS), der Verkehrsverbund Stuttgart (VVS)
          und die Stadt Fellbach.
        </p>
      ),
      media: [fotos.m1],
    },
    {
      cardTitle: '2. Verkehrsverbund Rhein-Neckar GmbH: VRNradbox',
      foldOut: (
        <>
          <p>
            Hochwertige und sichere Fahrradabstellanlagen an ÖPNV-Haltestellen
            sowie Bahnhöfen sind zentral, um die Verknüpfung zwischen Fahrrad
            und öffentlichen Verkehrsmitteln zu fördern und intermodale
            Wegeketten zu stärken.
          </p>
          <p>
            Der Verkehrsverbund Rhein-Neckar hat eigene abschließbare
            Fahrradboxen inklusive Ladevorrichtung für E-Bikes aufgestellt. Die
            VRNradboxen sollen künftig auf das gesamte VRN-Gebiet ausgeweitet
            werden. Nutzende werden online über die aktuelle Auslastung
            informiert, der Zugang erfolgt über ein eigenes Buchungssystem. So
            kann das Fahrrad trocken und sicher am Bahnhof abgestellt werden.
          </p>
        </>
      ),
      media: [fotos.m2],
    },
  ],
  'Tourismus und Freizeitverkehr': [
    {
      cardTitle: '1. Morsbach: Fahrrad-Schnitzeljagd',
      foldOut: (
        <>
          <p>
            Die Stadt hat insgesamt 50 Fahrradservicestationen eingerichtet,
            welche Radfahrende unterwegs die Möglichkeit geben, kleine
            Reparaturen an ihren Fahrrädern zu erledigen. Die kleinen
            Do-it-yourself-Stationen bieten Werkzeuge, eine Luftpumpe und eine
            Fahrradhalterung. Die Gelsenkirchener*innen können diese
            Servicestationen an fast sämtlichen Tankstellen im Stadtgebiet sowie
            weiteren Standorten finden.
          </p>
          <p>
            Um sicherzustellen, dass die Fahrradservicestationen laufend ihrem
            Qualitätsstandard entsprechen und Nutzer*innen kein kaputtes oder
            fehlendes Werkzeug vorfinden, wurde die Wartung dieser vertraglich
            vereinbart. Zusätzlich gibt es einen Mängelmelder der Stadt
            Gelsenkirchen, sodass Schadensmeldungen unkompliziert und direkt bei
            den zuständigen Stellen eingehen und Mängel schnell behoben werden
            können.
          </p>
        </>
      ),
      media: [fotos.m1],
    },
    {
      cardTitle: '2. Erfurt: Radring',
      foldOut: (
        <>
          <p>
            Der vielfältige ländlich geprägte Raum rund um Erfurt soll mit dem
            Fahrrad erlebbar gemacht werden. Mittels sieben Radialen kann die
            110 km lange Rundtour vom Zentrum aus erreicht und von wenig bis
            sehr ambitionierten Radfahrenden in einer oder mehreren Etappen
            bewältigt werden.
          </p>
          <p>
            Mit geringem baulichem und finanziellem Aufwand wurde eine neue
            Freizeitroute geschaffen, die der einheimischen Bevölkerung neue
            Blickwinkel auf ihre Stadt eröffnet und zugleich den thüringischen
            Tourismus stärken soll. Darüber hinaus profitiert auch der
            Alltagsradverkehr, denn der Rundweg schafft eine gute Anbindung der
            angrenzenden Landkreise an die Stadt Erfurt!
          </p>
        </>
      ),
      media: [fotos.t2],
    },
  ],
  Verkehrsberuhigung: [
    {
      cardTitle: '1. Neuss: Fahrradachse Innenstadt',
      foldOut: (
        <>
          <p>
            Zur Reduzierung des MIV in der Neusser Innenstadt hat die Stadt
            verschiedene Erschließungsstraßen im Rahmen eines neunmonatigen
            Verkehrsversuches in Fahrradstraßen umgewandelt. Die neue
            Fahrradachse durch die Innenstadt soll den Radverkehr fördern und
            die Verkehrssicherheit insbesondere für Schüler*innen verbessern.
          </p>
          <p>
            Der Verkehrsversuch endete am 31. März 2022. Nun möchte die Stadt
            Neuss ein Konzept für eine dauerhaft autoreduzierte Innenstadt
            entwickeln.
          </p>
        </>
      ),
      media: [fotos.v1],
    },
    {
      cardTitle: '2. Friesoythe: Ausbau der Innenstadt und Radverkehrskonzept',
      foldOut: (
        <>
          <p>
            Mobilität ohne eigenes Auto ist in der Stadt bereits Realität. Das
            Ziel der Familienstadt Friesoythe ist es, die Begegnung aller
            Generationen in der Innenstadt zu ermöglichen. Dafür wurde vier
            Straßen und ein Knotenpunkt in der Innenstadt umgestaltet. Die
            Fahrbahn und Nebenanlagen wurden optisch einheitlich gestaltet und
            lediglich durch die Straßenausstattung getrennt. In Verbindung mit
            den reduzierten Geschwindigkeiten wird so eine Begegnungszone in der
            InncardTnstadt von Friesoythe geschaffen.
          </p>
          <p>
            Für Strecken, die nicht mit dem Rad zu bewältigen sind, wird der
            kreisweite Carsharing-Dienst moobil+ angeboten.
          </p>
          <p>
            Interessierte Anwohner*innen haben sich frühzeitig in den
            Planungsprozess eingebracht. Im Ergebnis führte dieses zu einer Art
            Mix aus Geschäftsstraße und Fußgänger*innenzone. Die intensive
            Beteiligung des Beirates für Menschen mit Beeinträchtigungen
            spiegelt sich in der gestalterischen Umsetzung wider, welche
            versucht den verschiedenen Belangen der Barrierefreiheit
            nachzukommen. Durch den Verzicht auf Bordsteine erfährt die
            Innenstadt ein einheitliches Erscheinungsbild. Es wurden Leitlinien
            durch Kleinpflasterstreifen sowie taktile Elemente an
            Überquerungsstellen eingesetzt, welche wichtige Orientierungshilfen
            für Sehbehinderte sowie blinde Menschen bieten. Zudem ist eine
            Vielzahl von Geschäften ohne Stufen erreichbar.
          </p>
        </>
      ),
      media: [fotos.v2],
    },
  ],
  Wirtschaft: [
    {
      specialText:
        'Im Handlungsfeld Wirtschaft haben wir keine Einreichung erhalten, die unsere Jury mit dem Plan F Award auszeichnen wollte.',
    },
  ],
};

const awardWinner2022 = [
  {
    cardTitle: '2. Platz: Plan F Online-Audit für die Stadt Aachen',
    foldOut: (
      <p>
        Das Online-Audit für die Stadt Aachen findet seit dem 24. Oktober 2022
        statt und wird von den Studierenden des Masterstudiengangs Radverkehr in
        intermodalen Verkehrsnetzen an der TH Wildau unter der Anleitung der
        Radverkehrsprofessur Christian Rudolph und des Teams von Fair Spaces
        durchgeführt. Unter Berücksichtigung der Systematisierung der Plan F
        Handlungsfelder der kommunalen Radverkehrsförderung erstellen die
        Studierenden einen Adhoc-Radaktionsplan inklusive Maßnahmenempfehlung.
        Dabei nehmen sie insbesondere die Handlungsfelder Governance,
        Infrastruktur sowie Kommunikation & Öffentlichkeitsarbeit ins Visier und
        erarbeiten Lösungsansätze für die Verbesserung der Fahrradmobilität in
        der Stadt Aachen. Die Ergebnisse werden der Verwaltung in der
        Abschlussveranstaltung am 14. Dezember 2022 präsentiert.
      </p>
    ),
    id: 'zweiter',
  },
  {
    cardTitle:
      '3. Platz: Plan F Online-Audit in einem Handlungsfeld Zweckverband LANDFOLGE Garzweiler',
    foldOut: (
      <p>
        Das Online-Audit für die Stadt Garzweiler wird von dem Team von Fair
        Spaces in dem selbst gewählten Handlungsfeld Kommunikation und
        Öffentlichkeitsarbeit durchgeführt. Die Stadt erhält individuelle
        Maßnahmenempfehlungen explizit in diesem Handlungsfeld, um ihr Projekt
        „Rheinisches Radrevier“ zu den Menschen in der Region zu bringen.
      </p>
    ),
    id: 'dritter',
  },
];

const title = 'Plan F Award 2022';

const AwardPage: React.FC = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={planfProseClasses}>
        <Content>
          <p>
            Es haben sich insgesamt 66 Projekte aus unterschiedlichen Kommunen
            in ganz Deutschland für den Plan F Award 2022 beworben. Kleine und
            große Kommunen aus ländlichen sowie urbanen Regionen waren vertreten
            und bilden dabei die große Vielfalt deutscher Kommunen und deren
            unterschiedliche Herausforderungen und Möglichkeiten in der
            Radverkehrsförderung ab. Wir haben im kleinen als auch im großen
            Maßstab geplante und umgesetzte Maßnahmen aus den neun
            Handlungsfeldern der Radverkehrsförderung erhalten, die allesamt
            dazu beitragen, das Radfahren angenehmer und zugänglicher zu
            gestalten und den Radverkehr zu fördern.
          </p>
          <blockquote>
            Unserer Jury hat die besten Praxisbeispiele pro Handlungsfeld sowie
            drei Gesamtsieger*innen des Plan F Award 2022 gekürt. Die
            Siegerehrung und Preisverleihung fand auf der
            Fahrradkommunalkonferenz am 22. November 2022 in Aachen statt.
          </blockquote>
        </Content>
      </Section>
      <Section className={planfProseClasses}>
        <Content>
          <h2>
            Unsere Sieger*innen in den neun Handlungsfeldern der kommunalen
            Radverkehrsförderung
          </h2>

          {/* awardwinner der 9 Handlungsfelder */}

          <div className="divide mt-8 flex flex-col gap-5 divide-y-2 border-b-2 border-t-2 py-4">
            {Object.keys(awardWinnerTopics).map((topic) => (
              <div key={topic}>
                <h2>{topic}</h2>
                {awardWinnerTopics[topic].map(
                  ({ cardTitle, media, foldOut, specialText }) => {
                    if (specialText) return <p>{specialText}</p>;
                    return (
                      <AwardWinnerCard
                        key={cardTitle}
                        title={cardTitle}
                        media={media}
                      >
                        {foldOut}
                      </AwardWinnerCard>
                    );
                  }
                )}
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* Projektmappe */}

      <Section>
        <Content>
          <div className={planfProseClasses}>
            <h3>
              Projektmappe Plan F Award 2022 mit allen eingereichten Projekten
              zum herunterladen:
            </h3>
          </div>
          <Link blank button="black" href={projectPdf}>
            <span className="flex gap-2">
              <ArrowRightIcon className="h4 w-4" />
              Projektmappe herunterladen
            </span>
          </Link>
        </Content>
      </Section>

      {/* Gesamtsieger*innen */}

      <Section className={planfProseClasses}>
        <Content>
          <h2>
            Unsere Gesamtsieger*innen des Plan F Award 2022 gewannen je ein Plan
            F Audit
          </h2>
          <p>
            Unsere drei Gesamtsieger*innen haben je ein individuelles{' '}
            <strong>Plan F Audit mit Maßnahmenempfehlung</strong> gewonnen. Hier
            finden Sie Eindrücke und Ergebnisse unseres Vor-Ort Audits, welches
            wir vom 17. - 21. Oktober 2022 in der Verbandgemeinde Wallmerod
            durchgeführt haben. In Aachen und Garzweiler, unsere Plätze 2 & 3,
            führen wir je ein Online-Audit durch.
          </p>
        </Content>
      </Section>
      <Section
        className={clsx('rounded-b-none bg-purple-300 pb-8', planfProseClasses)}
      >
        <Content>
          {/* 1. */}

          <h3 id="erster">
            1. Platz: Plan F Audit für die Verbandsgemeinde Wallmerod
          </h3>

          <p>
            Vom 17. - 21. Oktober 2022 fand das Plan F Audit - Hauptgewinn Plan
            F Awards 2022 - in der Verbandsgemeinde Wallmerod in Rheinland-Pfalz
            statt. Das Team von Fair Spaces war gemeinsam mit Professor Ineke
            Spapé und ihren Studierenden von der Universität Breda sowie
            Studierenden aus ganz Deutschland fünf Tage vor Ort und hat einen
            Adhoc-Radaktionsplan für die Verbandsgemeinde erstellt. Das Vorgehen
            orientiert sich an dem ehemaligen NRVP-Projekt FreshBrains unter
            Berücksichtigung der Systematisierung von Plan F.
          </p>
          <p>
            Wir haben vor Ort mit der Verwaltung und der lokalen Bevölkerung
            gesprochen und Herausforderungen, Wünsche und Anregungen für den
            Radverkehr in Wallmerod erfahren. In der Woche wurden drei konkrete
            Problemstellungen bearbeitet, die besonders wichtig für einen
            zukunftsfähigen Radverkehr in der ländlichen Gemeinde in
            Rheinland-Pfalz sind.
          </p>
          <ul>
            <li>Radwegenetz</li>
            <li>Radweg Wallmerod-Hundsangen</li>
            <li>Fahrradkultur</li>
          </ul>
          <p>
            Unsere Studierenden, die „FreshBrains“, haben dafür ihre kreativen
            Ideen mit unseren Plan F Handlungsfeldern für eine ganzheitliche
            Radverkehrsförderung kombiniert und in fünf Tagen wertvolle
            radverkehrsfördernde Maßnahmen für eine fahrradfreundliche
            Verbandsgemeinde erarbeitet.
          </p>
          <p>
            Als kleines Highlight der Woche fand am Mittwoch eine Guerillaaktion
            statt, wo es bunt in der Verbandsgemeinde wurde! Wir haben gezeigt,
            wie ein fuß- und fahrradfreundliches Dorf aussehen kann - mit
            weniger Autoverkehr und mehr Aufenthalts- und Lebensqualität für die
            Bürger*innen - mit fahrenden Radwegen, einem flexiblen Pop-Up
            Zebrastreifen, selbst gemachten Hinweisschilder und Plakaten. Wir
            kamen mit Eltern, Großeltern, Kindern und Senior*innen ins Gespräch.
          </p>
          <p>
            Die Ergebnisse der Woche wurden am letzten Tag der Verwaltung,
            beteiligten Akteur*innen und der interessierten Öffentlichkeit im
            Rathaus der Verbandsgemeinde präsentiert. Die Gemeinde erhält
            abschließend ein Poster, welches die Ergebnisse inklusive
            Maßnahmenempfehlungen zur Verbesserung der Radmobilität in Wallmerod
            enthält.
          </p>
          <YouTubePreview
            link="https://www.youtube.com/watch?v=pqtAmXkCeEU"
            image={
              <StaticImage
                src="./../../components/AwardPage/assets/award/planf-award-video.jpg"
                alt="Video: Plan F Audit für die Verbandsgemeinde Wallmerod"
                className="aspect-video"
              />
            }
          />
        </Content>
      </Section>
      <Section className={clsx(planfProseClasses)}>
        <Content>
          {/* 2. und 3. Platz */}
          {awardWinner2022.map(({ foldOut, cardTitle, id }) => (
            <FoldOut key={id} headline={<H3 id={id}>{cardTitle}</H3>}>
              {foldOut}
            </FoldOut>
          ))}
          <h2>Plan F Audit: Mehrwert für alle Beteiligten </h2>
          <p>
            Durch das Plan F Audit entsteht ein deutlicher Mehrwert für alle
            Beteiligten - Ihre Kommune erhält innovative und fachliche
            Unterstützung und wird so in kurzer Zeit (noch) fahrradfreundlicher.
            Die Studierenden wiederum lernen aus der kommunalen Praxis und
            erproben gleichzeitig die Anwendung der Systematisierung von Plan F
            - die besten Voraussetzungen also für einen gemeinsamen neuen Weg
            der kommunalen Radverkehrsförderung.
          </p>
          <p>
            Das Plan F Audit ist angelehnt an das NRVP-Projekt FreshBrains.
            Studierende aus Deutschland und den Niederlanden haben im Rahmen
            dieses Projekts bereits in Kassel, Chemnitz, Mönchengladbach,
            Wuppertal, Bonn, und Dortmund ein Fahrradaudit durchgeführt.
            Weiterführende Informationen zu dem Projekt finden Sie{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mobilitaetsforum.bund.de/DE/Themen/Wissenspool/Projekte/Projektbeispiele/Projekte/19730_freshbrains_fahrradaudits_durch_niederla.html?cms_submit=Suchen&cms_templateQueryString=freshbrains"
            >
              hier
            </a>
            .
          </p>
          <p>
            Haben Sie auch Interesse an einem solchen Audit bei sich in der
            Kommune? Dann sprechen Sie uns an unter:{' '}
            <a href="mailto:kontakt@plan-f.info">kontakt@plan-f.info</a>.
          </p>
        </Content>
      </Section>

      {/* Jury */}

      <Section>
        <Content>
          <div className={planfProseClasses}>
            <h2>Unsere Schirmfrau</h2>
          </div>
          <Profile profile={CEO} preload />
          <div className={planfProseClasses}>
            <blockquote>{CEO.quote}</blockquote>
            <h2>Unsere Jury</h2>
            <p>
              Die Jury besteht aus Expert*innen aus Kommunen, von
              Arbeitsgemeinschaften Fahrradfreundlicher Kommunen oder Städte,
              des ADFC, von changing cities, des VCD, der Agora Verkehrswende
              und der Wissenschaft.
            </p>
          </div>
          <FoldOut
            foldedText="Alle Jury Mitglieder anzeigen"
            unfoldedText="Jury Mitglieder ausblenden"
            previewMode="blend"
          >
            <ProfileGrid profiles={jury} />
          </FoldOut>
        </Content>
      </Section>

      <Section>
        <Content>
          <div className={planfProseClasses}>
            <h1>Orientierung und Vorbild für andere Kommunen</h1>
            <p>
              Alle Siegerprojekte vom Plan F Award 2022 aus den
              unterschiedlichen Handlungsfeldern sind in unserem Handbuch sowie
              auf der Webseite von Plan F veröffentlicht. Weitere Informationen
              zu den Projekten können dort nachgelesen werden. Die guten
              Beispiele aus der kommunalen Praxis veranschaulichen die
              vielfältigen Handlungsmöglichkeiten in der Radverkehrsförderung
              und dienen anderen Kommunen als Orientierung und Vorbild.
            </p>
            <p>
              Sie haben sich nicht für den Plan F Award 2022 beworben, aber in
              Ihrer Kommune wird ebenfalls ein gutes Projekt oder eine Maßnahme
              umgesetzt und sie möchten, dass andere Kommunen davon lernen
              können? Dann reichen Sie über diesen Button Ihr Beispiel ein.
            </p>
          </div>
          <SendCommunityEntryLink />
        </Content>
      </Section>
    </>
  );
};

export default AwardPage;

export const Head: HeadFC = () => <MetaTags title={title} />;

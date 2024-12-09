import { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';
import { useTimeStore } from '../store/timeStore';
import { Star } from '../types/constellation';
import orionImage from '../images/orion.jpg';
import ursaImage from '../images/ursa_major.jpg';
import cygnusImage from '../images/cygnus.jpg';

interface InfoPanelProps {
  constellation: {
    id: string;
    name: string;
    latinName: string;
    mythology: string;
  };
  selectedStar: Star | null;
}

export function InfoPanel({ constellation, selectedStar }: InfoPanelProps) {
  const { currentTime, setTime } = useTimeStore();
  const [showStory, setShowStory] = useState(false);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(new Date(e.target.value));
  };
  const getVisualizationImage = (id: string) => {
    switch (id) {
      case 'ORI':
        return orionImage;;
      case 'UMA':  // Add this case
        return ursaImage;
      case 'CYG':
        return cygnusImage;
      default:
        return null;
    }
  };
  const getConstellationStory = (id: string) => {
    switch (id) {
      case 'ORI':
        return {
          basicInfo: {
            title: "Orion: The Hunter's Legacy",
            content: `Orion is one of the most recognizable constellations in the night sky, 
            spanning over 594 square degrees. Its distinctive "belt" of three bright stars 
            - Alnitak, Alnilam, and Mintaka - makes it easily identifiable. The constellation 
            contains two first-magnitude stars: Betelgeuse and Rigel, marking the hunter's 
            shoulder and foot respectively.`
          },
          hero: {
            identity: `Orion was a legendary hunter of extraordinary size and strength, 
            born to Poseidon and Euryale. As a demigod, he possessed superhuman abilities 
            and was considered the most handsome of the earthborn. His tale appears prominently 
            in Homer's Odyssey, where he continues his eternal hunt in the underworld. He is 
            also referenced in the Iliad as part of the divine craftsmanship on Achilles' 
            shield, and in the Aeneid his constellation brings storms to Aeneas's fleet.`,
            literaryAppearances: [
              {
                work: "Odyssey",
                plot: `In Book XI, Odysseus encounters Orion's shade in the underworld, 
                where the great hunter continues his pursuits, chasing game across the 
                asphodel meadows with his bronze club, demonstrating how his essential 
                nature persists even in death.`
              },
              {
                work: "Metamorphoses",
                plot: `Ovid tells how Orion boasted he could slay any creature on Earth, 
                leading to his death by a scorpion sent by Gaia. Some versions say Artemis 
                shot him with arrows, either for his hubris or to protect a maiden.`
              },
              {
                work: "Iliad",
                plot: `In Book XVIII, Orion appears as one of the constellations that 
                Hephaestus crafts on Achilles' shield, alongside the Pleiades and the Bear, 
                symbolizing the cosmic order that encompasses even the greatest of heroes.`
              },
              {
                work: "Aeneid",
                plot: `In Book I, the setting of the constellation Orion brings a terrible 
                storm that scatters Aeneas's fleet, showing how celestial bodies influence 
                the fates of mortals.`
              }
            ],
            characteristics: [
              "Exceptional hunting prowess",
              "Overwhelming pride and hubris",
              "Unmatched physical strength",
              "Complex relationship with divine figures"
            ]
          },
          naming: `The constellation's designation as Orion memorializes both the hunter's 
          tragic fate and his eternal glory. After his death - either by Artemis's arrows 
          or a scorpion's sting - Zeus placed him among the stars at Artemis's request, 
          eternally pursuing the Pleiades across the night sky. His placement near 
          Scorpius, which rises as Orion sets, perpetuates the cosmic chase.`
        };
      case 'UMA':
        return {
          basicInfo: {
            title: "Ursa Major: The Great Bear",
            content: `Ursa Major is the third largest constellation in the night sky, covering 
            1280 square degrees. Its most recognizable feature is the Big Dipper asterism, 
            formed by seven bright stars. This pattern has been used for navigation throughout 
            human history.`
          },
          hero: {
            identity: `Callisto was a nymph of remarkable beauty who served as a hunting 
            companion to Artemis. As daughter of King Lycaon of Arcadia, she caught Zeus's 
            eye, leading to her transformation into a bear by Hera's jealousy. Her constellation 
            plays a crucial role in the Odyssey and Aeneid as a navigation guide for both 
            Odysseus and Aeneas in their journeys.`,
            literaryAppearances: [
              {
                work: "Metamorphoses",
                plot: `In Book II, Ovid recounts how Zeus seduced Callisto in Artemis's form, 
                leading to Hera's vengeful transformation of her into a bear. Later, her son 
                Arcas nearly kills her while hunting, before Zeus places both in the sky.`
              },
              {
                work: "Fasti",
                plot: `Ovid revisits Callisto's story, emphasizing her emotional journey and 
                the pain of being unable to communicate with her son after her transformation.`
              },
              {
                work: "Odyssey",
                plot: `In Book V, Calypso instructs Odysseus to keep the Bear on his left 
                hand as he sails, using Callisto's constellation as a celestial guide for 
                his journey home.`
              },
              {
                work: "Aeneid",
                plot: `In Book III, Aeneas and his fleet use the Great Bear for navigation, 
                showing how Callisto's celestial form guides heroes across the Mediterranean.`
              }
            ],
            characteristics: [
              "Devoted follower of Artemis",
              "Victim of divine machinations",
              "Maternal devotion transcending physical form",
              "Symbol of transformation and eternal preservation"
            ]
        },
        naming: `The constellation's name as Ursa Major ("Great Bear") commemorates 
        Callisto's transformation and Zeus's act of mercy. By placing her in the sky, 
        Zeus not only saved her from death but granted her immortality among the stars. 
        Her son Arcas became the nearby constellation Ursa Minor, forever linking mother 
        and child in the celestial sphere. The constellation's prominence and eternal 
        circumpolar nature in northern latitudes reflects both Callisto's significance 
        and her eternal vigil in the night sky.`
      };

    case 'CYG':
      return {
        basicInfo: {
          title: "Cygnus: The Celestial Swan",
          content: `Cygnus forms a distinctive cross pattern in the summer sky, often called 
          the Northern Cross. Its brightest star, Deneb, forms part of the Summer Triangle 
          asterism along with Vega and Altair. The constellation lies along the Milky Way.`
        },
        hero: {
          identity: `The constellation embodies multiple heroic figures: primarily Zeus in 
          his swan form, and Orpheus after his death. The swan's appearance in the Iliad 
          connects to themes of divine transformation, while in Orestes it relates to 
          Zeus's seduction of Leda, which led to the birth of Helen, a crucial figure 
          in the Trojan cycle.`,
          literaryAppearances: [
            {
              work: "Metamorphoses",
              plot: `Ovid recounts how Orpheus, after failing to retrieve Eurydice from 
              the underworld, was torn apart by Maenads and transformed into a swan, 
              placed among the stars near his lyre.`
            },
            {
              work: "Homeric Hymns",
              plot: `The hymns recount Zeus's transformation into a swan to seduce Leda, 
              leading to the birth of Helen of Troy and the Dioscuri, setting in motion 
              the events of the Trojan War.`
            },
            {
              work: "Orestes",
              plot: `The chorus references Leda and the swan, connecting this divine 
              transformation to Helen's birth and thus to the fate of Orestes and his 
              family, showing how Zeus's actions as the swan continue to influence 
              mortal affairs.`
            },
            {
              work: "Iliad",
              plot: `While not directly featuring the swan, the epic's themes of divine 
              intervention and transformation echo the constellation's mythology, particularly 
              in scenes where gods take different forms to influence events.`
            }
          ],
          characteristics: [
            "Divine transformation and disguise",
            "Connection to music and poetry",
            "Symbol of pure love and devotion",
            "Representation of spiritual transcendence"
          ]
        },
        naming: `The constellation Cygnus embodies multiple layers of mythological 
        significance. Its primary identification as a swan relates to Zeus's transformation 
        when pursuing Leda, representing divine love and intervention in mortal affairs. 
        The alternative association with Orpheus connects it to the power of art and music 
        to transcend death. The swan's placement along the Milky Way, appearing to fly 
        down the river of stars, reinforces its role as a symbol of the soul's journey 
        and transformation. This rich mythological heritage makes Cygnus one of the most 
        poetically significant constellations in classical literature.`
      };
      default:
        return null;
    };
  };

  const story = getConstellationStory(constellation.id);
  const visualizationImage = getVisualizationImage(constellation.id);

  return (
    <>
      {!showStory && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 backdrop-blur-md">
          {/* Original bottom panel content */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-6 h-6" />
              <input
                type="datetime-local"
                value={currentTime.toISOString().slice(0, 16)}
                onChange={handleTimeChange}
                className="bg-transparent border border-white/20 rounded px-3 py-1"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{constellation.name}</h2>
                {story && (
                  <button
                    onClick={() => setShowStory(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 
                             rounded-full transition-all duration-300 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <span>See Visualization and Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed mt-2">
                {constellation.mythology}
              </p>
              
              {selectedStar && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold">{selectedStar.name}</h3>
                  <p className="text-gray-300 mt-1">
                    Magnitude: {selectedStar.magnitude.toFixed(2)} | 
                    RA: {selectedStar.ra.toFixed(2)}° | 
                    Dec: {selectedStar.dec.toFixed(2)}°
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showStory && story && (
        <div className="fixed inset-y-0 right-0 w-1/3 bg-black/50 text-white backdrop-blur-md 
                        shadow-2xl overflow-y-auto z-50 border-l border-white/10
                        slide-enter">
          <div className="relative p-8">
            <button
              onClick={() => setShowStory(false)}
              className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full 
                       transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Basic Information Section */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 
                           bg-clip-text text-transparent mb-4">
                {story.basicInfo.title}
              </h2>
              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 
                           transition-colors duration-300">
                <p className="text-gray-300 leading-relaxed">
                  {story.basicInfo.content}
                </p>
              </div>
            </section>

            {visualizationImage && (
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Visualization</h2>
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 
                             transition-colors duration-300">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={visualizationImage}
                      alt={`${constellation.name} visualization`}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Hero Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">The Hero's Tale</h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-3">Identity</h3>
                  <p className="text-gray-300">{story.hero.identity}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-3">Literary Appearances</h3>
                  {story.hero.literaryAppearances.map((appearance, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h4 className="text-lg font-medium text-blue-400 mb-2">
                        {appearance.work}
                      </h4>
                      <p className="text-gray-300">{appearance.plot}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-medium mb-3">Key Characteristics</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {story.hero.characteristics.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Naming Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Celestial Legacy
              </h2>
              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 
                           transition-colors duration-300">
                <p className="text-gray-300 leading-relaxed">
                  {story.naming}
                </p>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoPanel;
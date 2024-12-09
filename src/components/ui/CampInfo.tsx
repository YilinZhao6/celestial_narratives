import { X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import TrojansImage from '../../images/trojans.jpg';
interface CampInfoProps {
  camp: 'greek' | 'trojan';
  onClose: () => void;
}

export function CampInfo({ camp, onClose }: CampInfoProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showHeroDetails, setShowHeroDetails] = useState(false);

  const campInfo = {
    greek: {
      title: "Greek Camp (L4)",
      description: `The Greek Camp, located at Jupiter's L4 Lagrange point, consists of asteroids named after Greek heroes of the Trojan War. These asteroids lead Jupiter in its orbit by 60°. Notable members include Achilles, Hektor, and Ajax. The camp represents the largest known collection of Jupiter Trojans.`,
      heroes: [
        {
          name: "Achilles",
          asteroidInfo: "Discovered in 1906, Achilles (588) was the first Jupiter Trojan asteroid ever found. It has a diameter of approximately 130 kilometers.",
          identity: "Prince of Phthia, son of the sea nymph Thetis and King Peleus, leader of the Myrmidons.",
          epicPlots: {
            iliad: "Greatest Greek warrior in the Trojan War. Withdrew from battle after dispute with Agamemnon. Returned to avenge Patroclus' death, killed Hector, and was later killed by Paris' arrow to his heel.",
            odyssey: "Appears as a shade in the Underworld, lamenting that he would rather be a slave among the living than king of the dead.",
            other: "Featured in Cyclic Epic 'Achilleid' about his early life and training with Chiron."
          },
          characteristics: ["Unmatched warrior skill", "Pride and wrath", "Deep loyalty to friends", "Tragic fate", "Semi-divine nature"]
        },
        {
          name: "Hektor",
          asteroidInfo: "Despite representing Troy's greatest hero, Hektor (624) is ironically located in the Greek camp. It is the largest known Jupiter Trojan with a diameter of 225 kilometers.",
          identity: "Crown prince of Troy, eldest son of King Priam and Queen Hecuba, commander of Trojan forces.",
          epicPlots: {
            iliad: "Troy's greatest warrior, defender of the city. Killed Patroclus, was later killed by Achilles in single combat. His body was dragged around Troy before being returned to Priam.",
            aeneid: "Appears in Aeneas' dream, warning him to flee Troy as the city falls.",
            other: "His death is considered the turning point that sealed Troy's fate."
          },
          characteristics: ["Duty-bound defender", "Family devotion", "Tragic hero", "Honor-driven warrior", "Patriotic leader"]
        },
        {
          name: "Ajax",
          asteroidInfo: "Ajax (1404) orbits in the Greek camp, measuring approximately 80 kilometers in diameter.",
          identity: "King of Salamis, son of Telamon, known as Ajax the Greater to distinguish him from Ajax the Lesser.",
          epicPlots: {
            iliad: "Second greatest Greek warrior after Achilles. Fought Hector to a draw in single combat. Defended Greek ships from Trojan fire.",
            odyssey: "His shade refuses to speak to Odysseus in the Underworld, still angry over the arms of Achilles dispute.",
            other: "In Ajax by Sophocles, he goes mad with rage after losing Achilles' arms to Odysseus, then commits suicide."
          },
          characteristics: ["Immense strength", "Stubborn pride", "Shield master", "Tragic end", "Silent dignity"]
        }
      ],
      otherAsteroids: [
        { name: "Nestor (659)", description: "Named after the wise king who participated in the Trojan War" },
        { name: "Agamemnon (911)", description: "Named after the leader of the Greek forces" },
        { name: "Odysseus (1143)", description: "Named after the crafty hero of the Iliad and Odyssey" },
        { name: "Diomedes (1437)", description: "Named after the great Greek warrior who wounded Ares" },
        { name: "Mentor (3451)", description: "Named after Odysseus's trusted advisor" }
      ]
    },
    trojan: {
      title: "Trojan Camp (L5)",
      description: `The Trojan Camp, positioned at Jupiter's L5 Lagrange point, contains asteroids named after Trojan heroes. These asteroids follow Jupiter in its orbit by 60°. The camp includes asteroids named after Aeneas, Patroclus, and other defenders of Troy.`,
      heroes: [
        {
          name: "Patroclus",
          asteroidInfo: "Patroclus (617) forms a binary system with Menoetius, making it unique among known Jupiter Trojans.",
          identity: "Son of Menoetius, closest friend and companion of Achilles, Greek warrior.",
          epicPlots: {
            iliad: "Wore Achilles' armor to rally Greek troops. Initially successful in pushing back Trojans, but was killed by Hector. His death drove Achilles back to battle.",
            other: "Various post-Homeric sources explore his deep relationship with Achilles."
          },
          characteristics: ["Loyal friend", "Compassionate heart", "Warrior spirit", "Tragic catalyst", "Beloved companion"]
        },
        {
          name: "Aeneas",
          asteroidInfo: "Aeneas (1172) orbits in the Trojan camp, symbolic of its namesake's survival of Troy's fall.",
          identity: "Prince of Troy, son of Venus and Anchises, legendary founder of Roman lineage.",
          epicPlots: {
            iliad: "Protected by gods multiple times, prophesied to survive Troy's fall and lead survivors.",
            aeneid: "Led Trojan survivors to Italy, founding what would become the Roman people. Journeyed through many trials and to the underworld.",
            other: "Featured in many Roman myths as the link between Trojan and Roman civilization."
          },
          characteristics: ["Duty-driven leader", "Pious nature", "Destined survivor", "Roman forefather", "Divine protection"]
        },
        {
          name: "Deiphobus",
          asteroidInfo: "Deiphobus (1867) orbits among other Trojan asteroids, discovered in the 20th century.",
          identity: "Prince of Troy, son of Priam and Hecuba, married Helen after Paris' death.",
          epicPlots: {
            iliad: "Prominent Trojan warrior who fought alongside Hector.",
            aeneid: "Appears to Aeneas in the underworld, showing wounds of betrayal by Helen during Troy's fall.",
            other: "His marriage to Helen after Paris' death made him a key target during Troy's fall."
          },
          characteristics: ["Valiant warrior", "Tragic fate", "Royal blood", "Helen's last husband", "Betrayed hero"]
        }
      ],
      otherAsteroids: [
        { name: "Priamus (884)", description: "Named after Priam, the king of Troy during the Trojan War" },
        { name: "Anchises (1173)", description: "Named after the father of Aeneas" },
        { name: "Troilus (1208)", description: "Named after one of Priam's sons" },
        { name: "Paris (3317)", description: "Named after the Trojan prince who sparked the war by taking Helen" },
        { name: "Antenor (2207)", description: "Named after one of the wisest of the Trojan elders who advocated returning Helen to the Greeks to avoid war" }
      ]
    }
  };

  const combinedInfo = {
    title: "Jupiter Trojan Asteroids",
    overview1: "The Jupiter Trojans are a remarkable collection of asteroids sharing Jupiter's orbit around the Sun. They occupy two stable regions called Lagrange points: the Greek Camp at L4 (leading Jupiter by 60°) and the Trojan Camp at L5 (trailing by 60°).",
    overview2: "This orbital arrangement has remained stable for billions of years, with both camps serving as cosmic time capsules from the early Solar System. The asteroids range from small fragments to impressive bodies over 100 kilometers in diameter.",
    overview3: "These dark, reddish asteroids are rich in organic compounds and water ice, preserving primitive materials from our Solar System's formation. The largest among them, 624 Hektor, spans 225 kilometers - though like its namesake, this Trojan hero's asteroid seems to have found itself in the Greek camp!"
  };

  const info = campInfo[camp];

  return (
    <>
      {!showDetails && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/70 text-white backdrop-blur-md">
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-blue-400">{info.title}</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 text-sm text-blue-400 hover:text-blue-300"
                >
                  <span>Learn more about the heroically named asteroids</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:text-blue-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{info.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {info.heroes.map((hero) => (
                <div key={hero.name} className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{hero.name}</h3>
                  <p className="text-sm text-gray-400">{hero.identity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showDetails && !showHeroDetails && (
        <div className="fixed right-0 top-0 w-1/3 h-screen bg-gradient-to-l from-black/95 via-black/90 to-black/80 text-white backdrop-blur-md shadow-2xl slide-enter">
          <div className="relative p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {combinedInfo.title}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 rotate-180 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm text-blue-400 group-hover:text-blue-300">Back to overview</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="space-y-8 pr-4 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              <section className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Overview</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{combinedInfo.overview1}</p>
                  <p className="text-gray-300 leading-relaxed">{combinedInfo.overview2}</p>
                  <p className="text-gray-300 leading-relaxed">{combinedInfo.overview3}</p>
                </div>
              </section>
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-300">Heroic Namesakes</h3>
                  <button
                    onClick={() => setShowHeroDetails(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <span>Read hero stories</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Greek Camp Heroes</h4>
                    <div className="space-y-4">
                    {campInfo.greek.heroes.map((hero) => (
                      <div 
                        key={hero.name} 
                        className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <h4 className="text-lg font-semibold mb-3 text-blue-300">{hero.name}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{hero.identity}</p>
                      </div>
                    ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Trojan Camp Heroes</h4>
                    <div className="space-y-4">
                    {campInfo.trojan.heroes.map((hero) => (
                      <div 
                        key={hero.name} 
                        className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <h4 className="text-lg font-semibold mb-3 text-blue-300">{hero.name}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{hero.identity}</p>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {showHeroDetails && (
        <div className="fixed right-0 top-0 w-1/3 h-screen bg-gradient-to-l from-black/95 via-black/90 to-black/80 text-white backdrop-blur-md shadow-2xl">
          <div className="relative p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Heroic Namesakes
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowHeroDetails(false)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300 group"
            >
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm text-blue-400 group-hover:text-blue-300">Back to overview</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="space-y-8 pr-4 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
          <section className="bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Naming Tradition and Heroes in the Wrong Side</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-300 leading-relaxed">
              As astronomers continued discovering asteroids hiding in Jupiter's Lagrange points, they continued naming them after heroes of the Trojan War and began referring to them as "Trojan asteroids." ("Trojan asteroids" would eventually refer to asteroids inhabiting any planet's stable Lagrange points, though names from The Iliad are reserved for Jupiter's Trojans.) It later became convention to name Jupiter's L4 asteroids after Greek characters and Jupiter's L5 asteroids after Trojan characters, so L4 and L5 became the "Greek camp" and the "Trojan camp" respectively.
            </p>
            <p className="text-gray-300 leading-relaxed">
              However, this naming convention wasn't established from the start, leading to some interesting anomalies in the camps. The most notable examples are Hektor, Troy's greatest warrior, being located in the Greek camp, and Patroclus, Achilles' Greek companion, residing in the Trojan camp.
            </p>
            <div className="bg-blue-500/10 p-4 rounded-lg mt-4">
              <p className="text-gray-300 leading-relaxed italic">
                "Palisa apparently did not foresee this tradition, for his naming of first three asteroids led to a Greek 'spy' residing in the Trojan camp (Patroclus) and a confused Trojan (Hektor) who probably wandered into the Greek camp hoping to order some of their famous custom-built wooden horses."
                <span className="text-blue-300 text-sm block mt-2">— NASA</span>
              </p>
            </div>
          </div>
          <img 
            src={TrojansImage}
            alt="Jupiter Trojan Asteroids Illustration" 
            className="w-full h-auto rounded-lg mb-4 object-cover"
          />
        </section>
          <section>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Greek Camp Heroes</h3>
            {campInfo.greek.heroes.map((hero) => (
              <div 
                key={hero.name}
                className="mb-4"
              >
                <details className="group">
                <summary className="flex items-center justify-between cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">{hero.name}</h4>
                  <ArrowRight className="w-5 h-5 text-blue-400 rotate-90 transform group-open:rotate-[270deg] transition-transform duration-300" />
                </summary>
                  <div className="mt-4 ml-4 space-y-4 text-sm">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="text-blue-300 font-medium mb-2">Asteroid & Identity</h5>
                      <p className="text-gray-300 mb-2">{hero.asteroidInfo}</p>
                      <p className="text-gray-300">{hero.identity}</p>
                    </div>
                  
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="text-blue-300 font-medium mb-2">Epic Tales</h5>
                      {Object.entries(hero.epicPlots).map(([epic, plot]) => (
                        <div key={epic} className="mb-2">
                          <span className="text-blue-400 font-medium capitalize">{epic}: </span>
                          <span className="text-gray-300">{plot}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="text-blue-300 font-medium mb-2">Characteristics</h5>
                      <div className="flex flex-wrap gap-2">
                        {hero.characteristics.map((trait) => (
                          <span key={trait} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Other Notable Greek Camp Asteroids</h3>
            <div className="bg-white/5 rounded-lg p-4 space-y-3">
              {campInfo.greek.otherAsteroids.map((asteroid) => (
                <div key={asteroid.name} className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 mr-3"></span>
                  <div>
                    <span className="text-blue-300 font-medium">{asteroid.name}</span>
                    <p className="text-gray-400 text-sm">{asteroid.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Trojan Camp Heroes</h3>
          {campInfo.trojan.heroes.map((hero) => (
            <div 
              key={hero.name}
              className="mb-4"
            >
              <details className="group">
              <summary className="flex items-center justify-between cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-blue-300">{hero.name}</h4>
                <ArrowRight className="w-5 h-5 text-blue-400 rotate-90 transform group-open:rotate-[270deg] transition-transform duration-300" />
              </summary>
                <div className="mt-4 ml-4 space-y-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-blue-300 font-medium mb-2">Asteroid & Identity</h5>
                    <p className="text-gray-300 mb-2">{hero.asteroidInfo}</p>
                    <p className="text-gray-300">{hero.identity}</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-blue-300 font-medium mb-2">Epic Tales</h5>
                    {Object.entries(hero.epicPlots).map(([epic, plot]) => (
                      <div key={epic} className="mb-2">
                        <span className="text-blue-400 font-medium capitalize">{epic}: </span>
                        <span className="text-gray-300">{plot}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="text-blue-300 font-medium mb-2">Characteristics</h5>
                    <div className="flex flex-wrap gap-2">
                      {hero.characteristics.map((trait) => (
                        <span key={trait} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Other Notable Trojan Camp Asteroids</h3>
          <div className="bg-white/5 rounded-lg p-4 space-y-3">
            {campInfo.trojan.otherAsteroids.map((asteroid) => (
              <div key={asteroid.name} className="flex items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 mr-3"></span>
                <div>
                  <span className="text-blue-300 font-medium">{asteroid.name}</span>
                  <p className="text-gray-400 text-sm">{asteroid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
)}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </>
  );
}
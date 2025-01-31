import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([
    // Gods
    {
      name: "Bohové",
      id: "bohove",
      image: "/bohove.png",
      description: "Řecká mytologie je plná bohů. Rozdělují se na mnoho skupin, nejznámějšímí jsou Olympané, kteří všem vládnou s Diem v čele. Existuje však mnoho dalších bohů, co existovali před nebo při vládě Olympanů.",
      characters: [
        { name: "Zeus", id: "zeus", image: "/zeus.png" },
        { name: "Poseidón", id: "poseidon", image: "/poseidon.png" },
        { name: "Héra", id: "hera", image: "/hera.png" },
        { name: "Árés", id: "ares", image: "/ares.png" },
        { name: "Athéna", id: "athena", image: "/athena.png" },
        { name: "Apollón", id: "apollon", image: "/apollon.png" },
        { name: "Afrodita", id: "afrodita", image: "/afrodita.png" },
        { name: "Hermés", id: "hermes", image: "/hermes.png" },
        { name: "Artemis", id: "artemis", image: "/artemis.png" },
        { name: "Hefaistós", id: "hefaistos", image: "/hefaistos.png" },
        { name: "Démétér", id: "demeter", image: "/demeter.png" },
        { name: "Hádés", id: "hades", image: "/hades.png" },
        { name: "Hestia", id: "hestia", image: "/hestia.png" },
        { name: "Dionýsos", id: "dionysos", image: "/dionysos.png" },
        { name: "Chaos", id: "chaos", image: "/chaos.png" },
        { name: "Erebos", id: "erebos", image: "/erebos.png" },
        { name: "Gaia", id: "gaia", image: "/gaia.png" },
        { name: "Úranos", id: "uranos", image: "/uranos.png" },
        { name: "Nyx", id: "nyx", image: "/nyx.png" },
        { name: "Pontos", id: "pontos", image: "/pontos.png" },
        { name: "Tartaros", id: "tartaros", image: "/tartaros.png" },
        { name: "Múzy", id: "muzy", image: "/muzy.png" },
        { name: "Pan", id: "pan", image: "/pan.png" },
        { name: "Grácie", id: "gracie", image: "/gracie.png" },
        { name: "Moiry", id: "moiry", image: "/moiry.png" },
        { name: "Adónis", id: "adonis", image: "/adonis.png" },
        { name: "Charón", id: "charon", image: "/charon.png" },
        { name: "Thanatos", id: "thanatos", image: "/thanatos.png" },
      ],
    },
    // Titans
    {
      name: "Titáni",
      id: "titani",
      image: "/titani.png",
      description: "Mezi titány řadíme staré bohy, kteří jsou potomci Urana a Gaii a vládli před nástupem olympských bohů. V čele stál Kronos, který svrhnul Urana, než ho také svrhnul jeho vlastní syn Zeus. Nastala velká válka mezi Titány a Olympany, kterou byla vláda Titánů nadobro ukončena.",
      characters: [
        { name: "Kronos", id: "kronos", image: "/kronos.png" },
        { name: "Ókeanos", id: "okeanos", image: "/okeanos.png" },
        { name: "Atlas", id: "atlas", image: "/atlas.png" },
        { name: "Prométheus", id: "prometheus", image: "/prometheus.png" },
        { name: "Hyperión", id: "hyperion", image: "/hyperion.png" },
        { name: "Rhea", id: "rhea", image: "/rhea.png" },
        { name: "Styx", id: "styx", image: "/styx.png" },
        { name: "Létó", id: "leto", image: "/leto.png" },
        { name: "Iapetos", id: "iapetos", image: "/iapetos.png" },
        { name: "Koios", id: "koios", image: "/koios.png" },
        { name: "Krios", id: "krios", image: "/krios.png" },
        { name: "Mnémosyné", id: "mnemosyne", image: "/mnemosyne.png" },
        { name: "Foibé", id: "foibe", image: "/foibe.png" },
        { name: "Téthys", id: "tethys", image: "/tethys.png" },
        { name: "Theia", id: "theia", image: "/theia.png" },
        { name: "Themis", id: "themis", image: "/themis.png" },
      ],
    },
    // Heroes
    {
      name: "Hrdinové",
      id: "hrdinove",
      image: "/hrdinove.png",
      description: "Hrdinové byli v řecké mytologii lidé, kteří za svůj život vykonali nějaké speciální nadlidské činy a byli spojeni se sílou a odvahou. Často byli také potomky některých bohů.",
      characters: [
        { name: "Perseus", id: "perseus", image: "/perseus.png" },
        { name: "Odysseus", id: "odysseus", image: "/odysseus.png" },
        { name: "Achilles", id: "achilles", image: "/achilles.png" },
        { name: "Orfeus", id: "orfeus", image: "/orfeus.png" },
        { name: "Héraklés", id: "herakles", image: "/herakles.png" },
        { name: "Théseus", id: "theseus", image: "/theseus.png" },
      ],
    },
    // Creatures
    {
      name: "Nadlidské stvoření",
      id: "stvoreni",
      image: "/stvoreni.png",
      description: "Nadlidské stvoření v řecké mytologii se nepočítala jako bohové, ale také se nedala zařadit mezi lidi, jelikož měla nadlidské rysy a schopnosti.",
      characters: [
        { name: "Kentauři", id: "kentauri", image: "/kentauri.png" },
        { name: "Dryády", id: "dryady", image: "/dryady.png" },
        { name: "Najády", id: "najady", image: "/najady.png" },
        { name: "Satyrové", id: "satyrove", image: "/satyrove.png" },
        { name: "Sirény", id: "sireny", image: "/sireny.png" },
        { name: "Sfinx", id: "sfinx", image: "/sfinx.png" },
        { name: "Obři", id: "obri", image: "/obri.png" },
        { name: "Gorgony", id: "gorgony", image: "/gorgony.png" },
        { name: "Harpyje", id: "harpyje", image: "/harpyje.png" },
      ],
    },
  ]);

  return { categories }
})

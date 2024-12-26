import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref([
    { 
      name: "Zeus", 
      id: "zeus", 
      image: "/zeus.png", 
      symbols: ["Blesk", "Orel", "Egida", "Dub", "Býk"], 
      father: ["kronos"], 
      mother: ["rhea"], 
      children: ["afrodita", "apollon", "ares", "artemis", "athena", "dionysos", "hefaistos", "hermes", "herakles", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Harmonia", "Mínós", "Nemesis", "Pandia", "Persefona", "Rhadamanthys", "Hóry"], 
      home: ["Hora Olymp"], 
      partners: ["hera", "leto", "mnemosyne", "themis", "Métis", "Európa", "Íó", "Semelé", "Nemesis", "Persefona", "Danaé", "Thálie", "Kallistó", "Ganymédés", "Dióna", "Alkméné"], 
      siblings: ["hestia", "hades", "hera", "poseidon", "demeter", "Cheirón"],
      info: [
        "Zeus je jedním z dvanácti Olympanů. Je to bůh oblohy a hromu, král všech ostatních bohů a lidí a je tak vnímán jako hlavní postava řecké mytologie.", 
        "Většinou bývá zobrazen s žezlem v jedné ruce a s bleskem v druhé, obě symbolizují jeho autoritu. Homérem byl často popisován jako \"nositel egidy\", což je obrovský štít, který s sebou občas nosil.", 
        "Často byl spojován s moudrostí, vědomím, autoritou, osudem, bitvami a mocí."
      ],
      bio: [
        "Je paradoxně nejstarším i nejmladším synem titánů Krona a Rhei. Kronos, který svrhnul svého otce Urana, se dozvěděl, že jeden z jeho potomků ho také svrhne a tak je začal hned po narození polykat. Takto bylo spolknuto jeho pět sourozenců. Zeus by byl také spolykán, ale Rhea místo toho dala Kronovi zabalený kámen a Dia schovala v jeskyni na krétské hoře Ida.",
        "V této jeskyni byl vychován nymfami a poznal svou první manželku, Métis - bohyni rozumu. Díky jejím radám se přestrojil jako olympijský nosič pohárů a přiměl Krona, aby vypil otrávené víno. Z tohoto vína zvracel natolik, že vyzvracel Diovy sourozence, kteří byli připraveni na pomstu.",
        "Tímto začala válka mezi Titány a Olympskými bohy, která skončila nevyhnutelným svržením Krona.", 
        "Po svržení svého otce byl čas rozdělit svět mezi jeho tři syny. Udělali to formou losování, Poseidón dostal moře, Hádés podsvětí a Zeus nebe. Poté byl korunován jako vládce všech bohů."
      ],
      facts: [
        "Měl dohromady 26 dětí.", 
        "Svou první manželku spolykal, když se dozvěděl, že jeho dítě by pro něj mohlo být hrozbou. Tímto dítětem byla bohyně moudrosti Athéna, která se nakonec narodila z Diova čela.", 
        "Je jednou z nejvíce nevěrných postav z celé řecké mytologie."
      ]
    },
    {
      name: "Poseidón",
      id: "poseidon",
      image: "/poseidon.jpg",
      symbols: ["Trojzubec", "Ryba", "Delfín", "Kůň", "Býk"],
      father: ["kronos"],
      mother: ["rhea"],
      children: ["Agénór", "Areión", "Bélos", "Benthesikyme", "Chrýsáór", "Nauplios", "Néleus", "Orion", "Pegas", "Polyfémos", "Rhodé", "theseus", "Tritón"],
      home: ["Hora Olymp"],
      partners: ["Kainis", "Medúsa", "demeter", "Amymóné", "Aithra", "Amfitríta"],
      siblings: ["hestia", "hades", "hera", "demeter", "zeus", "Cheirón"],
      info: [
        "Poseidón je jeden z dvanácti Olympanů. Je to velice vznětlivý a násilný bůh moře, což způsobilo jeho mnohé spory s ostatními bohy a lidmi.",
        "Jeho nejznámějším symbolem je jeho trojzubec, s kterým je často zobrazován, ačkoli jeho syn Tritón ho má také."
      ],
      bio: [
        "Je jedním z šesti dětí titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byl po narození spolykán svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidal ve válce proti Titánům.",
        "Po válce s Titány si Poseidón, Zeus a Hádés losovali části světa, kterým budou vládnout. Poseidón si vylosoval moře a stal se tak jeho bohem.",
        "Poseidónova vznětlivost tvořila časté spory mezi ním a ostatními bohy i lidmi. Příkladem je jeho spor s Diem, když nevydržel jeho arogantní chování a tak se spojil s Hérou a Athénou, ale Zeus tento spor vyhrál.", 
        "Jeho spor s Athénou začal, když od ní chtěl získat Athény a řekl, že by pro ně byl mnohem víc užitečný. Svým trojzubcem uděřil do skály a vytovřil tak proud mořské vody, který vytryskl v chrámu Erechtheion. Athéna zasadila olivovník a první král Athén se rozhodl, že bude více užitečný, jelikož z něj získají olivy, olej a dřevo, Athéna tak tento spor vyhrála."
      ],
      facts: [
        "Když se Démétér přeměnila na kobylu, protože o Poseidóna neměla zájem, přeměnil se na hřebce a zplodili Despoinu a Areióna.",
        "Říká se, že svým trojzubcem Poseidón vytvořil prvního koně."
      ]
    },
    {
      name: "Héra",
      id: "hera",
      image: "/hera.png",
      symbols: ["Královské žezlo", "Diadém"],
      father: ["kronos"],
      mother: ["rhea"],
      children: ["ares", "Eileithýia", "Eris", "Hébé", "hefaistos"],
      home: ["Hora Olymp"],
      partners: ["zeus"],
      siblings: ["demeter", "hestia", "hades", "poseidon", "zeus", "Cheirón"],
      info: [
        "Héra je jednou z dvanácti Olympanů a manželkou Dia, je tedy také královnou Olympu. Je bohyní manželství a je spojována s rodinou a blahobytem žen a dětí. Toto je poněkud ironické, jelikož její manželství s Diem bylo nešťastné a mnohokrát ji podvedl."
      ],
      bio: [
        "Je jednou z šesti dětí titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
        "Hera byla Diem obelstěna, aby si ho vzala. Věděl, že miluje zvířata a tak se přeměnil na kukačku, která potřebovala pomoc. Přeměnil se zpátky poté, co si ho Héra vzala k prsu, aby ho zahřála. Héra se styděla za to, že bylo takto zneužita a tak odsouhlasila sňatek.",
        "Toto manželství však bylo nešťastné a Zeus ji mnohokrát podvedl. Dokonce ji podváděl s lidmi a nymfami, což ji rozčílilo mnohem víc, protože oproti ní to byly podřadné bytosti. Byla velice pomstychtivá a když její pomsta proti Diovi dopadla špatně, rozhodla se, že svůj hněv bude mířit spíše na jeho partnerky a děti."
      ],
      facts: ["Podle jedné z bájí vznikla Mléčná dráha, když se po obloze rozstříklo Héřino mateřské mléko poté, co od svého prsa oddělila malého Hérakla."]
    },
    {
      name: "Árés",
      id: "ares",
      image: "/ares.jpg",
      symbols: ["Meč", "Oštěp", "Štít", "Helma", "Válečný vůz"],
      father: ["zeus"],
      mother: ["hera"],
      children: ["Amazonky", "Anterós", "Adrasteia", "Deimos", "Enyaliós", "Erós", "Fobos", "Flegyas", "Harmonia", "Oenomaus", "Thrax"],
      home: ["Hora Olymp"],
      partners: ["afrodita", "Kalliopé", "Otréré"],
      siblings: ["afrodita", "apollon", "artemis", "athena", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Árés je jedním z dvanácti Olympanů. Je to bůh války, narozdíl od Athény však představuje pouze její ničivou schopnost a je zosobněním čistého násilí a brutality. Kvůli tomuto nebyl milován bohy ani lidmi kromě Afrodity, s kterou měl mnoho dětí.",
        "Vetšinou je zobrazován s helmou a oštěpem, řídí válečný vůz se čtyřmi koni a je doprovázený psy a supy."
      ],
      bio: [
        "Árés byl nejstarším synem Dia a Héry. Jelikož byl bohem války, byl všemi nenáviděný, dokonce i Zeus ho nazval nejvíce nenávistným bohem ze všech poté, co byl v boji s Diomédem zraněn.",
        "Je ještě mnohokrát poražen, například behem Trójské války, kde ho Athéna porazila pomocí jednoho kamene a pak se mu vysmívala a chlubila se výhrou.",
        "Jeho nejznámější ženou byla bohyně lásky Afrodita, která během jejich vztahu byla vdaná za jeho bratra Hefaista. Ten na ně vyzrál tak, že vytvořil bronzovou síť, kterou dal na postel, ve které spolu měli ležet. Když se nechali chytit, vtrhnul do pokoje s dalšími olympskými bohy a oběma se jim smáli několik dní.",
        "Toto však pár nezastavilo a později spolu měli mnoho dětí."
      ],
      facts: [
        "Byl nenáviděný mnoha lidmi, ale mezi bojovníky (např. ve Spartě) byl respektován a vnímán jako ztělesnění odvahy a strategie."
      ]
    },
    {
      name: "Athéna",
      id: "athena",
      image: "/athena.jpg",
      symbols: ["Sovy", "Olivovník", "Hadi", "Egida", "Brnění", "Helma", "Oštěp", "Hlava gorgony"],
      father: ["zeus"],
      mother: ["Métis"],
      home: ["Hora Olymp"],
      siblings: ["afrodita", "apollon", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Athéna je jednou z dvanácti Olympanů. Je bohyní války a moudrosti a také milovanou patronkou Athén.",
        "Je také jednou z panenských bohyní, neměla tedy nikdy žádné partnery nebo děti. Díky její moudrosti všichni hrdinové žádali o její pomoc a rady.",
        "Často je zobrazována s přísnou tvaří, neusmívajícími rty a celá její postava vyzařuje autoritou. Bývá oděna v chitonu nebo v plné zbroji. Uprostřed její egidy bývá gorgonská hlava, která symbolizuje dárek od Persea: hlavu Medúsy."
      ],
      bio: [
        "Když Zeus zjistil, že jeho dítě s Métis by ho mohlo svrhnout, zachoval se jako svůj otec a rozhodl se svou těhotnou manželku spolknout. Když nastal čas porodu, cítil hrozné bolesti hlavy, které nedokázal vydžet a tak ho Hefaistós udeřil svou sekerou a v tu chvíli Athéna vyskočila z jeho čela plně ozbrojená s mohutným výkřikem. V tu chvíli byl Zeus na svou dceru velice pyšný.",
        "V mládí měla přítele jménem Pallas, kterého si vážila ze všeho nejvíce. Jednoho dne, když trénovali bojová cvičení ho omylem zabila. Chtěla zachovat jeho památku a tak si přidala jeho jméno ke svému a mezi mnoha lidmi je známá jako Pallas Athéna.",
        "S Poseidónem měla velice veřejný spor, protože Poseidón chtěl, aby mu předala Athény a řekl, že by pro ně byl mnohem užitečnější. Svým trojzubcem uděřil do skály a vytovřil tak proud mořské vody, který vytryskl v chrámu Erechtheion. Athéna zasadila olivovník a první král Athén se rozhodl, že bude více užitečný, jelikož z něj získají olivy, olej a dřevo, Athéna tak tento spor vyhrála."
      ],
      facts: [
        "Připisuje se jí vznik flétny a trubky.",
        "Kromě sov, které symbolizují moudrost, byla také spojována s hady, kteří symbolizují transformaci, znovuzrození a schopnost se orientovat v obtížných situacích."
      ]
    },
    {
      name: "Apollón",
      id: "apollon",
      image: "/apollon.jpg",
      symbols: ["Lyra", "Luk a šípy", "Vavřínový věnec", "Krajta", "Havran"],
      father: ["zeus"],
      mother: ["leto"],
      children: ["Aristaios", "Asklépios", "orfeus", "Tróilos"],
      home: ["Hora Olymp"],
      partners: ["Dafné", "Hyakinthos", "Kassandra", "Korónis", "Kyparissos"],
      siblings: ["afrodita", "athena", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Apollón je jedním z Olympanů. Je bohem světla, hudby, poezie, léčení, pohrom, proroctví, vědění, řádu, krásy, lukostřelby a zemědělství. Je ztělesněním harmonie, rozumu a umírněnosti. V mytologii se objevuje skoro tolik, jako sám Zeus."
      ],
      bio: [
        "Apollónova matka Létó svým vztahem s Diem rozčílila Héru, která na ni seslala draka Pýthóna. Ten jí pronásledoval ve všech zemích a zakázal jí rodit na pevné zemi. Nikdo ji nechtěl přijmout kromě ostrova Délos, kde Létó porodila Artemidu přitom, co balancovala své tělo na větvi olivovníku. Artemis poté pomohla své matce porodit Apollóna.",
        "Byl krmený jenom nektarem a ambrózií, díky kterým plně vyrostl jen za čtyři dny a byl připravený na pomstu. Došel přímo na Parnas k Pýthónovi a zranil ho svými šípy. Tomu se podařilo uprchnout a ukrýt se ve svatyni Gaii v Delfách. Apollóna to rozzuřilo a dovolil si posvátnost tohoto místa pošpinit Pýthónovou krví. Zeus nařídil Apollónovi, aby se očistil. Po této očistě se vrátil do Delf a získal svatyni ve svém jméně."
      ],
      facts: [
        "Svou lyru získal od mladšího bratra Hermése jako omluvu za to, že mu ukradl jeho dobytek."
      ]
    },
    {
      name: "Afrodita",
      id: "afrodita",
      image: "/afrodita.jpg",
      symbols: ["Hřebenatka", "Delfín", "Růže", "Myrta", "Hrdlička", "Vrabec", "Zrcadlo", "Opasek", "Labuť"],
      father: ["uranos"],
      children: ["Aineiás", "Anterós", "Deimós", "Erós", "Fobos", "Harmonia", "Pothos", "Himerós", "Hermafrodítos", "Rhodos", "Eryx", "Peithó", "Priapos"],
      home: ["Hora Olymp"],
      partners: ["Adónis", "Anchísés", "ares", "dionysos", "hefaistos", "hermes", "poseidon"],
      siblings: ["apollon", "athena", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Afrodita je jednou z Olympanů. Je bohyní lásky, krásy a sexuálního uspokojení. Je zobrazována jako nádherná, nenasytná a zároveň nedosažitelná. Sice byla vdaná za Hefaista, ale měla vztahy se skoro všemi Olympany a mnoha lidmi."
      ],
      bio: [
        "Narození Afrodity má dvě verze. V jedné verzi byla Afrodita dcerou a Dia a titánky Dióny. V té druhé mnohem známější verzi jejímu narození předchází kastrace Urana jeho synem Kronem. Uranovy varlata tak padají do moře a Afrodita je zrozena z hřebenatky nahá, více nádherná než cokoliv, co kdy kdo viděl.",
        "Afrodita byla tak nádherná, že jenom tři panenské bohyně jí dokázaly odolat. Toto byl na Olympu problém, protože ji ihned všichni chtěli pro sebe a tak ji Zeus provdal za Hefaista, jednoho z nejošklivějších Olympanů. Toto však problém nevyřešilo, protože Afrodita neměla v plánu být věrná.",
        "Jejím nejznámějším milencem byl bůh války Árés. Hélios je však zahlédl a informoval o tom Hefaista. Ten na ně vyzrál tak, že vytvořil bronzovou síť, kterou dal na postel, ve které spolu měli ležet. Když se nechali chytit, vtrhnul do pokoje s dalšími olympskými bohy a oběma se jim smáli několik dní. Přesto spolu však měli mnoho dětí."
      ],
      facts: [
        "Když zjistila, že Hippolytos preferoval Artemidu, přiměla jeho nevlastní matku, aby se do něj zamilovala, což skončilo smrtí obou."
      ]
    },
    {
      name: "Hermés",
      id: "hermes",
      image: "/hermes.jpg",
      symbols: ["Petasos", "Talaria", "Kaduceus", "Lyra", "Brašna"],
      father: ["zeus"],
      mother: ["Maia"],
      children: ["Abdéros", "Autolykos", "Angelia", "Eurodos", "Hermafrodítos", "pan", "Týché", "Myrtilos"],
      home: ["Hora Olymp"],
      partners: ["afrodita", "Peithó", "Dryopé", "Hekaté", "Herse", "Chioné"],
      siblings: ["afrodita", "apollon", "athena", "artemis", "ares", "dionysos", "hefaistos", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Hermés je jedním z Olympanů. Je jejich poslem a zvěstovatelem a je jediným olympským bohem, který dokáže překročit hranici mezi živými a mrtvými. Je to bůh cest, stád, obchodu a zlodějů, sám je taky pěkný šejdíř.",
        "Bývá zobrazován jako atletický mladík, kterého jde poznat pomocí jeho helmy (petasos) a jeho okřídlených sandálů (talaria). Jeho okřídlená hůlka propletená dvěma hady mohla lidi uspávat nebo probouzet, často se plete s Aeskulapovou holí a proto se často nesprávně používá jako symbol medicíny."
      ],
      bio: [
        "Hermés se narodil za úsvitu v jeskyni na hoře Kyllini a již v poledne se mu povedlo vynalézt lyru, na které zahrál oslavnou hymnu o svém narození. Pro vytvoření téti lyry zabil želvu, poté jí z krunýře vydlabal tělo a natáhl na něj sedm strun z ovčích střev, aby uctil Plejády.",
        "Když Apollón zjistil, kdo ukradl jeho dobytek, byl velice rozzuřený a nejspíš by to pro Hermése dopadlo špatně, kdyby ho neuklidnil krásnou písní doprovázenou jeho lyrou. Tuto lyru Apollónovi daroval a on mu za to odpustil a sliboval, že bude navždy jeho nejbližsím přítelem. Jako důkaz mu daroval kouzelný kaduceus, který se stal jedním z Hermésových symbolů.",
        "Přesto, že je spojovaný s plodností, se nikdy neoženil. Měl však docela dost partnerek, tou nejznámější byla bohyně lásky Afrodita."
      ],
      facts: [
        "Byl uctíván jako bůh snů a staří Řekové věřili, že jim posílá sny s proroctvím."
      ]
    },
    {
      name: "Artemis",
      id: "artemis",
      image: "/artemis.jpg",
      symbols: ["Luk a šípy", "Měsíc", "Jelen", "Lovecký pes"],
      father: ["zeus"],
      mother: ["leto"],
      home: ["Hora Olymp"],
      siblings: ["afrodita", "apollon", "athena", "ares", "dionysos", "hefaistos", "herakles", "hermes", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Artemis je jednou z Olympanů. Je bohyní lovu, měsíce a cudnosti. Je jednou ze tří panenských bohyní Olympu, velmi chránila svou nevinnost i nevinnost svých kněžek.",
        "Skoro vždy je zobrazována jako mladá lovkyně s toulcem plným šípy a lukem v ruce, nosící krátkou tuniku v doprovodu nějakého zvířete."
      ],
      bio: [
        "Artemidina matka Létó svým vztahem s Diem rozčílila Héru, která na ni seslala draka Pýthóna. Ten jí pronásledoval ve všech zemích a zakázal jí rodit na pevné zemi. Nikdo ji nechtěl přijmout kromě ostrova Délos, kde Létó porodila Artemidu přitom, co balancovala své tělo na větvi olivovníku. Artemis poté pomohla své matce porodit Apollóna.",
        "Smrtelnice Niobé se chlubila svými 14 potomky, říkala, že narozdíl od Létó porodila celý Olymp. Tohle se Artemidě a Apollónovi nelíbilo a chtěli bránit svou matku. Všechny potomky Niobé zabili, Apollón se postaral o její syny a Artemis o její dcery.",
        "Když byla Artemis malá dívka, poprosila svého otce Dia, aby jí navždy zachoval její dívčí status. Tak zůstala stejně jako Athéna a Hestia navždy cudnou a neztratila své panenství, které bránila ještě více než ony."
      ],
      facts: [
        "Když ji Aktaión spatřil nahou, přeměnila ho na jelena. Samozřejmě byl hned potom roztrhán na kusy svými psy.",
        "Je asociována s porodem, ale žádné děti nikdy neměla."
      ]
    },
    {
      name: "Hefaistós",
      id: "hefaistos",
      image: "/hefaistos.jpg",
      symbols: ["Kladivo", "Kovadlina", "Kleště"],
      father: ["zeus"],
      mother: ["hera"],
      children: ["Eukleia", "Euthénia", "Eufémé", "Filofrosyné", "Erichthónios", "Kabeirové", "Palikové"],
      home: ["Hora Olymp"],
      partners: ["afrodita", "Aglaia", "gaia"],
      siblings: ["afrodita", "apollon", "athena", "artemis", "ares", "dionysos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        'Hefaistós je jedním z Olympanů. Je bohem kovářů a ohně, říkalo se mu „nebeský umělec", ale byl spojován i s dalšími řemeslníky a se sopkami.',
        "Je asi nejvýznačnějším členem všech Olympanů. Je ošklivý, vousatý, ochromený a nemá dokonalou fyzickou kondici jako ostatní bohové. Téměř vždy je zobrazován s kladivem a kovadlinou."
      ],
      bio: [
        "Hefaistós byl synem Dia a Héry. Není jasné, jestli se narodil ochromený nebo byl ochromen, když ho Zeus svrhl z Olympu za to, že se zastal své matky v hádce.",
        "Existují také zdroje, které uvádí, že Hefaistós je pouze synem Héry, která ho porodila partenogenezí, aby se pomstila Diovi za Athénu. Héra byla po porodu Hefaistovým vzhledem a jeho samotnou existencí tak znechucená, že ho vyhodila z Olympu.",
        "Hefaistós se jí později pomstill. Vytvořil pro ni nádherný zlatý trůn, který ihned přijala. Jakmile se na něj posadila, byla spoutána nespočetným množstvím velmi jemných provazů, které byly neviditelné pro každého kromě jejich tvůrce. Nikdo ho nedokázal přemluvit, aby ji propustil. Učinil tak až poté, co ho Dionýsos opil."
      ],
      facts: [
        "Je považován za nejošklivějšího Olympana v kontrastu se svou manželkou Afroditou, bohyní lásky.",
        "Postavil všechna nádherná bronzová sídla, ve kterých žili ostatní Olympané."
      ]
    },
    {
      name: "Démétér",
      id: "demeter",
      image: "/demeter.jpg",
      symbols: ["Žezlo", "Roh hojnosti", "Chléb", "Pšenice", "Kukuřice", "Pochodeň"],
      father: ["kronos"],
      mother: ["rhea"],
      children: ["Arión", "Persefona", "Plútos", "Filomelos", "Chrysothemis", "Despoina", "Eubúleus"],
      home: ["Hora Olymp"],
      partners: ["Íasión", "poseidon", "zeus"],
      siblings: ["hera", "hestia", "hades", "poseidon", "zeus", "Cheirón"],
      info: [
        "Démétér byla jednou z původních 12 Olympanů. Je bohyní obilí a zemědělství. Byla známá především jako dárkyně potravy a obilí, také se starala a životní cykly rostlin a roční období.",
        "Bývá zobrazována jako plně oděná žena, která buď královsky sedí nebo hrdě stojí s napřaženou rukou. Někdy bývá zobrazována se svou dcerou Persefonou, která je jí vždy nablízku. Jsou si velice podobné, dokonce mají i stejné symboly."
      ],
      bio: [
        "Je jednou z šesti dětí titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
        "Ve svých raných letech se Démétér zamilovala do Íasióna a na svatbě Kadma a Harmonie ho svedla. Diovi nepřišlo vhodné, aby měla vztah s pouhým smrtelníkem a tak ho zasáhl bleskem. Démétér už byla v té době těhotná s dvojčaty: Ploutonem, bohem bohatství a Filomelem, patronem orání.",
        "Nejdůležitějším dítětem Démétér je však Persefona a její unesení Hádem. Hádés se do Persefony zamiloval a když jednoho dne sbírala s přítelkyněmi květiny, nalákal jí nádherným krásně vonícím narcisem a poté ji unesl svým vozem. Po deseti dnech se toto Démétér dozvěděla a šla truchlit mezi smrtleníky přestrojená za stařenu. Během této doby však začala zanedbávat své povinnosti jako bohyně plodnosti a zemědělství. Země začala chátrat a Zeus si uvědomil, že to takhle nemůže pokračovat a Persefona musí být navrácena.",
        "Do podsvětí byl poslán Hermés, aby Persefonu navrátil matce, ale zjisil, že Persefona už snědla semínko granátového jablka, což ji zavázalo k podsvětí. Zeus věděl, že by mu to Démétér neodpustila a tak nastal kompromis: Persefona by každý rok strávila jednu třetinu s Hádem a zbylé dvě s Démétér."
      ],
      facts: [
        "Její truchlení Persefony je důvodem, proč existují zimní měsíce."
      ]
    },
    {
      name: "Hádés",
      id: "hades",
      image: "/hades.jpg",
      symbols: ["Kerberos", "Roh hojnosti", "Cypřiš", "Žezlo", "Klíče"],
      father: ["kronos"],
      mother: ["rhea"],
      children: ["Makaria", "Zagreus"],
      home: ["Podsvětí"],
      partners: ["Persefona", "Leuké", "Minté"],
      siblings: ["hestia", "hera", "poseidon", "demeter", "zeus", "Cheirón"],
      info: [
        "Hádés je bohem podsvětí, místa, kam se lidské duše dostávájí po smrti. Svůj domov téměř nikdy neopouštěl.",
        "Bývá zobrazován jen zřídka, jelikož je to strašidelná postava, která všem naháněla hrůzu. Většinou bývá vyobrazen s plnovousem, truchlivým pohledem a svou přilbou. Obvykle vedle něj stojí Kerberos, jeho tříhlavý pes, který střeží bránu do podsvětí."
      ],
      bio: [
        "Je jedním z šesti dětí titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byl po narození spolykán svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidal ve válce proti Titánům.",
        "Po válce s Titány si Hádés, Zeus a Poseidón losovali části světa, kterým budou vládnout. Hádés si vylosoval podsvětí a stal se tak jeho bohem.",
        "Hádés neměl mnoho partnerek, nejdůležitější z nich je Persefona a její unesení. Hádés se do Persefony zamiloval a když jednoho dne sbírala s přítelkyněmi květiny, nalákal jí nádherným krásně vonícím narcisem a poté ji unesl svým vozem. Po deseti dnech se toto dozvěděla její matka Démétér, která šla truchlit mezi smrtleníky přestrojená za stařenu. Během této doby však začala zanedbávat své povinnosti jako bohyně plodnosti a zemědělství. Země začala chátrat a Zeus si uvědomil, že to takhle nemůže pokračovat a Persefona musí být navrácena.",
        "Do podsvětí byl poslán Hermés, aby Persefonu navrátil matce, ale zjisil, že Persefona už snědla semínko granátového jablka, což ji zavázalo k podsvětí. Zeus věděl, že by mu to Démétér neodpustila a tak nastal kompromis: Persefona by každý rok strávila jednu třetinu s Hádem a zbylé dvě s Démétér.", 
        "Je možné, že Hádés a Persefona spolu neměli žádné děti, ale říká se, že Zagreus byl jejich syn. O Makarii se také říká, že byla Hádova dcera, ale o matce žádné zmínky nejsou."
      ],
      facts: [
        "V rané řecké mytologii byl považován za boha bohatství a hojnosti, které se pojily k bohatsví nacházejícím se v hlubinách země."
      ]
    },
    {
      name: "Hestia",
      id: "hestia",
      image: "/hestia.jpg",
      symbols: ["Oheň", "Krb", "Konvice"],
      father: ["kronos"],
      mother: ["rhea"],
      home: ["Hora Olymp", "Delfy"],
      siblings: ["hades", "hera", "poseidon", "demeter", "zeus", "Cheirón"],
      info: [
        "Hestia je jednou z původních dvanácti Olympanů. Je bohyní krbu. Byla čistá a mírumilovná, ale jelikož se vždy potřebovala doma starat o ohniště, nevyskytuje se v mnoha bájích a proto byla později nahrazena divočejším Dionýsem.",
        "Existuje velmi málo vyobrazení Hestie. Obvykle je zobrazena jako skromná žena se závojem. Občas stojí u ohně nebo drží květiny či hůl."
      ],
      bio: [
        "Je jednou z šesti dětí titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
        "Oheň je očišťující živel a Hestia byla proto uctívána jako panenská bohyně, stejně jako Athéna a Artemis. Říká se, že tak učinila, aby udržela mír na Olympu. Apollón a Poseidón si ji oba chtěli vzít a měla obavy, že volba jednoho z nich by mohla vytvořit nějaký konflikt. Hestia tak přísahala věčné panenství položením své ruky na Diovo čelo. Jako odměnu jí Zeus udělil ústřední místo v domě a nejbohatší část božských darů od lidí."
      ],
      facts: [
        "Při Olympijských hrách sportovci v její svatyni zapalovali pochodně s jejím posvátným ohněm, který pak nosili do svých domovských měst, šířili tak ducha jednoty a sportu."
      ]
    },
    {
      name: "Dionýsos",
      id: "dionysos",
      image: "/dionysos.jpg",
      symbols: ["Tyrsus", "Borovice", "Borová šiška"],
      father: ["zeus"],
      mother: ["Semelé"],
      children: ["Déianeira", "Oinopión", "Fthonos", "Kómos", "Hymén", "Thoás", "Stafylos"],
      home: ["Hora Olymp"],
      partners: ["Ariadna"],
      siblings: ["afrodita", "apollon", "athena", "artemis", "ares", "hefaistos", "hermes", "herakles", "muzy", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Dionýsos je bohem plodnosti a vína, později byl považován i za patrona umění. Stvořil víno a rozšířil vinařství. Jeho spojení s vínem ukazovala i jeho dvojí povaha: uměl přinášet božskou radost a extázi, ale na druhou stranu jeho hněv byl brutální, což odráželo dvě strany vína.",
        "V raném řeckém umění byl zobrazován jako vousatý muž, ale později byl zobrazován jako maldý a zženštilý.",
        "Není jedním z původních Olympanů, ale později v bájích nahradil Hestii, která se v nich kvůli své povinnosti k ohništi nemohla moc vyskytovat."
      ],
      bio: [
        "Dionýsos byl synem Dia a Semelé. Je tak jediným bohem, jehož matkou je smrtlenice. Semelé byla ráda, že je milenkou boha, i když nevěděla, který bůh to je. Brzy se to rozkřiklo a Héra byla opět rozzuřená nevěrností svého manžela. Vydala se za Semelé a přesvědčila ji, aby požádala svého milence vidět takového, jaký je. Když ji znovu navštívil, přesvědčila ho, aby přísahal, že jí splní její jedno přání. Poté ho požádala, aby ukázal svou pravou podobu. Byl nešťastný, protože věděl, co se stane, ale i tak její přání splnil a po zjevení jeho pravé podoby Semelé okamžitě shořela na popel. Diovi se podařilo zachránit Dionýsa a zašít si ho do stehna do té doby, než byl připravený se narodit. Když se narodil z Dia, propůjčilo mu to jeho nesmrtelnost.",
        "Héra, která stále zuřila, nechala Titány Dionýsa roztrhat na kusy, ale Rhea ho pak přivedla zpátky k životu. Zeus ho pak pro jeho bezpečí poslal na výchovu k horským nymfám."
      ],
      facts: [
        "Je jednou z mála postav, které se povedlo přivést mrtvého zpátky z podsvětí. Svou matku Semelé takto přivedl zpátky na Olymp."
      ]
    },
    {
      name: "Chaos",
      id: "chaos",
      image: "/chaos.jpg",
      children: ["gaia", "tartaros", "nyx", "erebos", "Erós"],
      info: [
        "Chaos byl v řecké mytologii tím úplně prvním, co kdy bylo. Je to všechen prázdný prostor, který existoval při počátku času. Byl však něcím více než jenom prázdnotou, byl prvotním rysem vesmíru, hmoty, energie a všeho, co z něj dále vzešlo. Je personifikován jako žena."
      ],
      bio: [
        "Podle Hesióda je Chaos něco mnohem hmatatelnějšího než jenom úplné bezedno. Také naznačuje, že Chaos je nějakým obydlím pro Titány a je tedy nějakým místem mezi Zemí a Tartarem.",
        "Mnozí ale tvrdí, že Chaos je na počátku všeho a stojí za vším stvořením. Právě z něj takto vyšli tři prvotní bohové, Gaia (země), Erós (láska) a Tartaros (podsvětí). Gaia se takto později stala matkou všeho krásného na Zemi.",
      ],
    },
    {
      name: "Erebos",
      id: "erebos",
      image: "/erebos.jpg",
      mother: ["chaos"],
      children: ["Aithér", "Hémerá", "Hypnos", "Geras", "moiry", "thanatos"],
      partners: ["nyx"],
      siblings: ["gaia", "tartaros", "nyx", "Erós"],
      info: [
        "Erebos je jedním z prvotních bohů, co se vynořili z Chaosu. Je to zosobnění temnoty a stínů, představuje hluboké a neznámé aspekty vesmíru."
      ],
      bio: [
        "Jako prvotní bůh patří mezi první bytosti, které ve vesmíru existovaly. Po svém zrození z Chaosu symbolizoval počáteční stav temnoty, který předcházel existenci světla. Jeho přítomnost připravila svět pro vznik dalších bohů a prvků.",
        "Se svou sestrou Nyx, která symbolizovala noc, měli mnoho potomků, kteří měli ve vesmíru také velmi důležité role. Patřili k nim Aithér (horní vzduch), Hémerá (den), Hypnos (spánek), Geras (stáří), Moiry (sudičky) a Thanatos (smrt)."
      ]
    },
    {
      name: "Gaia",
      id: "gaia",
      image: "/gaia.jpg",
      mother: ["chaos"],
      children: ["Eurybia", "Forkýs", "Kétó", "Kyklopové", "Meliády", "Erínye", "Néreus", "Hekatoncheirové", "obri", "pontos", "Titáni", "Thaumás", "Týfón", "uranos"],
      partners: ["uranos", "pontos", "tartaros"],
      siblings: ["erebos", "tartaros", "nyx", "Erós"],
      info: [
        "Gaia je zosobněním Země a matkou všeho, co se na ní nachází. Přivedla na svět Úrana, s kterým pak přivedla na svět mnoho dalších dětí, zejména Titány, kteří jsou rodiči většiny Olympanů.",
        "Vzbouřila se proti vládě všech tří vládců (Úranos, Kronos, Zeus), ale nakonec se musela smířit s Diovou vládou."
      ],
      bio: [
        "Bez jakéhokoliv partnera napřed Gaia zplodila tři potomky: Úranos (nebe), Úrea (hory) a Pontos (moře). Se svým synem Úranem poté měla dalších 18 potomků, 12 z nich byli Titáni.",
        "Úranos své děti tak nenáviděl, že při narození je hned zastrčil zpět do lůna Gaii. Gaia byla tímto zničená, později si vytvořila adamantový srp a požádala své děti o pomoc. Kronos, který svého otce nenáviděl, byl jediný, který se jí nebál pomoct. Schoval se tedy na jiném místě v jejím lůně a když chtěl ještě v tu stejnou noc jeho otec opět mít styk s Gaiou, napřáhl ruku a srpem mu usekl genitálie.",
        "Kronos se tak stal vládcem vesmíru, ale po nějaké době začal vládnout stejně, jako svůj otec. Při válce mezi Olympany a Titány se Gaia tedy přidala na stranu Olympanů a poradila Diovi, aby vytvořil spojenství s kyklopy a hekatonchéiry, které Kronos uvěznil v Tartaru.",
        "Gaie se však nelíbilo, že Zeus po své výhře také uvěznil její potomky (Titány) v Tartaru a tak na něj poslala obry, kteří začali další dlouhou válku. Tuto válku však opět vyhráli Olympané, což rozčílilo Gaiu, která se spářila se svým bratrem Tartarem a zplodili spolu Týfóna, draka s ohnivým dechem. Porazil všechny Olympany, skoro i Dia, který ho nakonec porazil s pomocí svých blesků.",
        "Po této bitvě Gaia přijala porážku a Dia jako nejvyššího vůdce všch bohů. Jako důkaz ho varovala, že jeho první dítě s manželkou Métis je předurčeno k jeho svržení."
      ],
    },
    {
      name: "Úranos",
      id: "uranos",
      image: "/uranos.jpg",
      mother: ["gaia"],
      children: ["afrodita", "koios", "krios", "hyperion", "kronos", "iapetos", "rhea", "themis", "tethys", "mnemosyne", "foibe", "theia", "Hekatoncheirové", "Erínye", "obri", "Kyklopové", "Meliády"],
      partners: ["gaia"],
      siblings: ["Úrea", "pontos"],
      info: [
        "Uran byl zosobnění nebes a vládce vesmíru, než byl svržen svým synem Kronem."
      ],
      bio: [
        "Bez jakéhokoliv partnera Gaia zplodila tři potomky, jedním z nich byl právě Úranos. Poté s ním zplodila dalších 18 potomků, 12 z nich byli Titáni.",
        "Úranos své děti tak nenáviděl, že při narození je hned zastrčil zpět do lůna Gaii. Gaia byla tímto zničená, zatímco se radoval, ona trpěla hroznou bolestí. Později si vytvořila adamantový srp a požádala své děti o pomoc. Kronos, který svého otce nenáviděl, byl jediný, který se jí nebál pomoct. Schoval se tedy na jiném místě v jejím lůně a když chtěl ještě v tu stejnou noc jeho otec opět mít styk s Gaiou, napřáhl ruku a srpem mu usekl genitálie.",
        "Jakmile Kronos Úrana vykastroval a jeho krev se dotkla Země, Gaia zplodila mnoho dalších potomků: Erínye, obry a Meliády. Jeho pohlavní orgány, které byly vrženy do moře, zplodily z hřebenatky jeho dceru Afroditu, bohyni lásky."
      ],
    },
    {
      name: "Nyx",
      id: "nyx",
      image: "/nyx.jpg",
      mother: ["chaos"],
      children: ["Aithér", "Hémerá", "Hypnos", "Geras", "moiry", "thanatos", "Eris", "charon"],
      partners: ["erebos"],
      siblings: ["gaia", "erebos", "tartaros", "Erós"],
      info: [
        "Nyx je jednou z prvotních bohů, co se vynořili z Chaosu. Je ztělesněním tajemné a hluboké noci, jedním ze základních prvků vesmíru."
      ],
      bio: [
        "Jako prvotní bohyně patří mezi první bytosti, které ve vesmíru existovaly. Její zjevení z Chaosu znamenalo počátek řádu a struktury ve vesmíru. Jako zosobnění noci měla Nyx klíčovou roli v cyklické povaze času a přirozeném řádu světa.",
        "Se svým bratrem Erebem, který symbolizoval rozplývající se temnotu, měli mnoho potomků, kteří měli ve vesmíru také velmi důležité role. Patřili k nim Aithér (horní vzduch), Hémerá (den), Hypnos (spánek), Geras (stáří), Moiry (sudičky) a Thanatos (smrt).",
        "Podle Hesióda Nyx sídlí v Tartaru, hluboké části podsvětí, která je považována za místo trestu pro lidské duše. Její přítomnost se syny Hypnem a Thanatem zdůrazňuje její spojení s temnými stránkami života."
      ],
    },
    {
      name: "Pontos",
      id: "pontos",
      image: "/pontos.jpg",
      mother: ["gaia"],
      children: ["Eurybia", "Forkýs", "Kétó", "Néreus", "Thaumás"],
      partners: ["gaia"],
      siblings: ["Eurybia", "Forkýs", "Kétó", "Kyklopové", "Meliády", "Erínye", "Néreus", "Hekatoncheirové", "obri", "Titáni", "Thaumás", "Týfón", "uranos"],
      info: [
        "Pontos je jedním z prvotních bohů. Ztělesňuje rozsáhlé moře. Představuje jeho živelné síly, hloubku, moc a tajemství. Předchází Olympanům a je tak jednou ze základních postav řecké mytologie.",
        "Bývá zobrazován jako majestátní postava s atributy, které ukazují jeho nadvládu nad mořem, jako trojzubce nebo roucho, které připomína mořské vlny.",
        "Jako ztělesnění moře Řeky inspiroval k plavbě, objevování nových míst a respektování rozlehlých vod, které je obklopovaly,"
      ],
      bio: [
        "Patří mezi jednu z prvních bytostí, co ve vesmíru existovaly. Byl zrozen přímo z Gaii bez jakéhokoliv otce a jeho existence symbolizuje jeden z nejzákladnějších prvků světa.",
        "Se svou matkou měl však později potomky, kteří patří mezi významné mořské bohy. Mezi ně patří Forkýs, bůh nebezpečných hlubin nebo Eurybia, bohyně vlády nad mořem. Ti rozšiřují jeho vliv a moc nad mořskými živly."
      ],
    },
    {
      name: "Tartaros",
      id: "tartaros",
      image: "/tartaros.jpg",
      mother: ["chaos"],
      children: ["Týfón"],
      partners: ["gaia"],
      siblings: ["erebos", "gaia", "nyx", "Erós"],
      info: [
        "Tartaros je jedním z prvotních bohů, co se vynořili z Chaosu. Je ztělesněním mohutné propasti s železnými zdmi, která je tak hluboko pod zemí, jak je nebe nad ní.",
        "Jako místo to bylo v mnohem hloubější části podsvětí, než kde sídlil Hádés a bylo využíváno jako ten nejhorší trest pro ty nejhorší duše. Byli tu také vězněni různí bohové po prohrané válce."
      ],
      bio: [
        "Jako prvotní bůh patří mezi první bytosti, které ve vesmíru existovaly. Jeho zjevení z Chaosu vytvořilo místo, které bylo opakem nebe v každém ohledu.",
        "Gaie se nelíbilo, když Zeus po výhře ve válce s Titány její potomky uvěznil a tak na něj poslala obry, kteří začali další dlouhou válku. Tuto válku vyhráli Olympané, což rozčílilo Gaiu a tak se spářila s Tartarem a zplodili spolu Týfóna, draka s ohnivým dechem. Porazil všechny Olympany, skoro i Dia, který ho nakonec porazil s pomocí svých blesků."
      ],
    },
    {
      name: "Múzy",
      id: "muzy",
      image: "/muzy.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Pan",
      id: "pan",
      image: "/pan.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Grácie",
      id: "gracie",
      image: "/gracie.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Moiry",
      id: "moiry",
      image: "/moiry.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Adónis",
      id: "adonis",
      image: "/adonis.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Charón",
      id: "charon",
      image: "/charon.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Seléné",
      id: "selene",
      image: "/selene.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Thanatos",
      id: "thanatos",
      image: "/thanatos.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Kronos",
      id: "kronos",
      image: "/kronos.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Okeanos",
      id: "okeanos",
      image: "/okeanos.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Atlas",
      id: "atlas",
      image: "/atlas.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Prometheus",
      id: "prometheus",
      image: "/prometheus.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Hyperión",
      id: "hyperion",
      image: "/hyperion.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Rhea",
      id: "rhea",
      image: "/rhea.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Styx",
      id: "styx",
      image: "/styx.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Létó",
      id: "leto",
      image: "/leto.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Iapetos",
      id: "iapetos",
      image: "/iapetos.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Koios",
      id: "koios",
      image: "/koios.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Krios",
      id: "krios",
      image: "/krios.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Mnémosyné",
      id: "mnemosyne",
      image: "/mnemosyne.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Foibé",
      id: "foibe",
      image: "/foibe.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Téthys",
      id: "tethys",
      image: "/tethys.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Theia",
      id: "theia",
      image: "/theia.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Themis",
      id: "themis",
      image: "/themis.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Perseus",
      id: "perseus",
      image: "/perseus.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Odysseus",
      id: "odysseus",
      image: "/odysseus.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Achilles",
      id: "achilles",
      image: "/achilles.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Orfeus",
      id: "orfeus",
      image: "/orfeus.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Héraklés",
      id: "herakles",
      image: "/herakles.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Théseus",
      id: "theseus",
      image: "/theseus.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Kentauři",
      id: "kentauri",
      image: "/kentauri.jpg",
      info: [
        "Kentauři jsou napůl muži a napůl koně. Mají hlavu a torzo muže, ale tělo koně.",
        "Nejznámějším kentaurem je Cheirón. Většina kentaurů byla zobrazována jako divoké bytosti, Cheirón byl však moudrý a civilizovaný. Byl nesmrtelný, ale Héraklés ho omylem zranil šípem potaženým krví bílé hydry, který mu způsobil velké bolesti.",
        "Když Héraklés prosil Dia, aby propustil Promethea, požadoval za to oběť. Cheirón se tedy obětoval, aby zachránil nejen jeho, ale i sebe od své bolesti."
      ]
    },
    {
      name: "Dryády",
      id: "dryady",
      image: "/dryady.jpg",
      info: [
        "Dryády jsou nymfy nebo duše stromů, které na sebe berou podobu krásných žen.",
        "Dříve tímto názvem byly myšleny specificky nymfy dubových stromů, ale význam se později rozšířil ke všem typům stromů. Podle těchto stromů se pak dryády dělily na různé skupiny.",
        "Mezi dryády patřily také hamadryády, při jejichž narození se také narodil strom, ke kterému byla věčně vázaná jejich duše."
      ]
    },
    {
      name: "Najády",
      id: "najady",
      image: "/najady.jpg",
      info: [
        "Najády jsou vodní nymfy nebo duše v podobě krásných žen, které se vyskytují u studánek, pramenů, potoků, řek a dalších sladkovodních ploch.",
        "Byly často uctívané v místních kultech jako nezbytné pro lidi. Lidé při obřadech dosažení plnoletosti věnovali své dětské vlasy místní najádě jara. Na některých místech se jejich vodám připisovaly rituální očisty s léčebnými účinky. Rituálně se v nich topila zvířata."
      ],
    },
    {
      name: "Nymfy",
      id: "nymfy",
      image: "/nymfy.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Satyrové",
      id: "satyrove",
      image: "/satyrove.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Sirény",
      id: "sireny",
      image: "/sireny.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Sfinx",
      id: "sfinx",
      image: "/sfinx.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Obři",
      id: "obri",
      image: "/obri.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Gorgony",
      id: "gorgony",
      image: "/gorgony.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
    {
      name: "Harpyje",
      id: "harpyje",
      image: "/harpyje.jpg",
      symbols: [],
      father: [],
      mother: [],
      children: [],
      home: [],
      partners: [],
      siblings: [],
      info: [],
      bio: [],
      facts: []
    },
  ]);

  return { characters };
})
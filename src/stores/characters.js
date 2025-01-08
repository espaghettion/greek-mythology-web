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
        "Je paradoxně nejstarším i nejmladším synem Titánů Krona a Rhei. Kronos, který svrhnul svého otce Urana, se dozvěděl, že jeden z jeho potomků ho také svrhne a tak je začal hned po narození polykat. Takto bylo spolknuto jeho pět sourozenců. Zeus by byl také spolykán, ale Rhea místo toho dala Kronovi zabalený kámen a Dia schovala v jeskyni na krétské hoře Ida.",
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
      image: "/poseidon.png",
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
        "Je jedním z šesti dětí Titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byl po narození spolykán svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidal ve válce proti Titánům.",
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
        "Je jednou z šesti dětí Titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
        "Hera byla Diem obelstěna, aby si ho vzala. Věděl, že miluje zvířata a tak se přeměnil na kukačku, která potřebovala pomoc. Přeměnil se zpátky poté, co si ho Héra vzala k prsu, aby ho zahřála. Héra se styděla za to, že bylo takto zneužita a tak odsouhlasila sňatek.",
        "Toto manželství však bylo nešťastné a Zeus ji mnohokrát podvedl. Dokonce ji podváděl s lidmi a nymfami, což ji rozčílilo mnohem víc, protože oproti ní to byly podřadné bytosti. Byla velice pomstychtivá a když její pomsta proti Diovi dopadla špatně, rozhodla se, že svůj hněv bude mířit spíše na jeho partnerky a děti."
      ],
      facts: ["Podle jedné z bájí vznikla Mléčná dráha, když se po obloze rozstříklo Héřino mateřské mléko poté, co od svého prsa oddělila malého Hérakla."]
    },
    {
      name: "Árés",
      id: "ares",
      image: "/ares.png",
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
      image: "/athena.png",
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
        "V mládí měla přítele jménem Pallás, kterého si vážila ze všeho nejvíce. Jednoho dne, když trénovali bojová cvičení ho omylem zabila. Chtěla zachovat jeho památku a tak si přidala jeho jméno ke svému a mezi mnoha lidmi je známá jako Pallás Athéna.",
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
      image: "/apollon.png",
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
      image: "/afrodita.png",
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
        "Narození Afrodity má dvě verze. V jedné verzi byla Afrodita dcerou a Dia a Titánky Dióny. V té druhé mnohem známější verzi jejímu narození předchází kastrace Urana jeho synem Kronem. Uranovy varlata tak padají do moře a Afrodita je zrozena z hřebenatky nahá, více nádherná než cokoliv, co kdy kdo viděl.",
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
      image: "/hermes.png",
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
        "Hermés se narodil za úsvitu v jeskyni na hoře Kyllini předčasně vyspělý a již v poledne se mu povedlo vynalézt lyru, na které zahrál oslavnou hymnu o svém narození. Pro vytvoření téti lyry zabil želvu, poté jí z krunýře vydlabal tělo a natáhl na něj sedm strun z ovčích střev, aby uctil Plejády.",
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
      image: "/artemis.png",
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
      image: "/hefaistos.png",
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
      image: "/demeter.png",
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
        "Je jednou z šesti dětí Titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
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
      image: "/hades.png",
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
        "Je jedním z šesti dětí Titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byl po narození spolykán svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidal ve válce proti Titánům.",
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
      image: "/hestia.png",
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
        "Je jednou z šesti dětí Titánů Krona a Rhei a stejně jako všechny ostatní kromě Dia byla po narození spolykána svým otcem. Poté, co Zeus zachránil své sourozence, se k němu přidala ve válce proti Titánům.",
        "Oheň je očišťující živel a Hestia byla proto uctívána jako panenská bohyně, stejně jako Athéna a Artemis. Říká se, že tak učinila, aby udržela mír na Olympu. Apollón a Poseidón si ji oba chtěli vzít a měla obavy, že volba jednoho z nich by mohla vytvořit nějaký konflikt. Hestia tak přísahala věčné panenství položením své ruky na Diovo čelo. Jako odměnu jí Zeus udělil ústřední místo v domě a nejbohatší část božských darů od lidí."
      ],
      facts: [
        "Při Olympijských hrách sportovci v její svatyni zapalovali pochodně s jejím posvátným ohněm, který pak nosili do svých domovských měst, šířili tak ducha jednoty a sportu."
      ]
    },
    {
      name: "Dionýsos",
      id: "dionysos",
      image: "/dionysos.png",
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
      image: "/chaos.png",
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
      image: "/erebos.png",
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
      image: "/gaia.png",
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
      image: "/uranos.png",
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
      image: "/nyx.png",
      mother: ["chaos"],
      children: ["Aithér", "Apaté", "Hémerá", "Hypnos", "Geras", "moiry", "Nemesis", "thanatos", "Eris", "charon"],
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
      image: "/pontos.png",
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
      image: "/tartaros.png",
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
      image: "/muzy.png",
      symbols: ["Lyra", "Flétna", "Svitky", "Glóbus", "Komická a tragická maska", "Psací tabulka"],
      father: ["zeus"],
      mother: ["mnemosyne"],
      children: ["sireny", "orfeus", "Korybanté", "Hyakinthos", "Linos", "Rhésos"],
      home: ["Hora Olymp", "Hora Helikon"],
      partners: ["apollon", "Pierus", "Oiagros"],
      siblings: ["afrodita", "apollon", "artemis", "athena", "ares", "dionysos", "hefaistos", "herakles", "hermes", "perseus", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Múzy jsou bohyněmi básnické inspirace, zpěvu, tance a paměti. Na jejich milosti závisela všechna tvořivost, moudro a vhled umělců. Nejčastěji se považují za devět dcer Dia a Mnémosyné.",
        "Každá Múza byla spojována s něčím specifickým:",
        'Thálie („Veselá") byla Múzou komedie a často byla zobrazována s komickou maskou.',
        'Úrania („Nebeská") byla Múzou astronomie a bývá zobrazována s glóbem v ruce.',
        'Melpomené („Ta, která zpívá") byla Múzou tragédie a bývá zobrazována s tragickou škraboškou nebo jiným symbolem tragédie.',
        'Polyhymnia („Ta, která zpívá mnoho hymen") byla Múzou hymnických zpěvů a bývá zobrazována se zadumaným pohledem pod závojem.',
        'Erató („Krásná") byla Múzou lyrické poezie a bývá zobrazována s lyrou.',
        'Kalliopé („Ta s krásným hlasem") byla Múzou epické poezie a bývá zobrazována s psací tabulkou.',
        'Kleió („Oslavovatelka") byla Múzou historie a bývá zobrazována se svitkem v ruce.',
        'Euterpé („Ta, která těší") byla Múzou hry na flétnu a proto je zobrazována s aulem (dvojitou flétnou).',
        'Terpsichoré („Ta, která se těší z tance") byla Múzou sborové lyriky a tance, proto je zobrazována tančící a někdy drží lyru.'
      ],
      bio: [
        "Podle Hesióda jsou Múzy dcerami Dia a Mnémosyné, bohyně paměti. Podle Theognida by jejich otec Zeus, ale jejich matka byla Harmonia. Alkmán si zase myslel, že jsou ve skutečnosti dcerami Úrana a Gaii. Někteří básníci se tyto příběhy později pokusili i spojit a navrhli dvě různé generace Múz.",
        "Mělo se za to, že Múzy se narodili v Pierii na úpatí hory Olymp a tak se jim říkalo buď Múzy olympské nebo Múzy pierijské. Hora Helikon však byla místem, které jim leželo na srdci, jelikož se tu s nimi setkal Hesiódos a byl jimi inspirován k napsání své Theogonie."
      ]
    },
    {
      name: "Pan",
      id: "pan",
      image: "/pan.png",
      symbols: ["Koza", "Panova flétna"],
      father: ["hermes"],
      mother: ["Dryopé"],
      children: ["Silénos", "Iynx", "Iambé", "Krotos"],
      home: ["Arkádie"],
      partners: ["Syrinx", "Echó", "Seléné", "Pitys"],
      siblings: ["Abdéros", "Autolykos", "Angelia", "Eurodos", "Hermafrodítos", "Týché", "Myrtilos"],
      info: [
        "Pan byl zčásti člověk a zčásti kozel. Byl bohem divokých hájů, pastýřů a stád.",
        "Jeho hlavním místem uctívání byla Arkádie, kde se narodil a také strávil většinu svých dnů putováním po lesích, pronásledováním nymf, hraním strašidelných melodií na svojí píšťale a podřimováním."
      ],
      bio: [
        "Stejně jako jeho otec Hermés se Pan narodil předčasně vyspělý. Měl kozí nohy a dva rohy, byl hlučné a veselé dítě. Jeho chůva tento názor nesdílela, utekla od něj, jakmile spatřila jeho tvář s vousy a rohy.",
        'Protože bohové většinou vidí věci jinak než smrtelníci, Hermés se rozhodl Pana zabalit do kůží horských zajíců a přinést ho na Olymp. Když ho ostatní viděli, zaradovali se. Z této situace by také mohlo vycházet jeho jméno, které znamená „všichni".',
        "Nymfa Syrinx byla stoupenkyní Artemidy a tak si nejvíc ve svém životě vážila své cudnosti. Jakmile ji Pan zahlédl, jeho cílem se stal přesný opak. Pronásledoval ji celým arkádským lesem. Když už nemohla dál, začala se modlit k říčním nymfám, aby ji zachránily. Nymfy vyslyšely její modlitby a proměnily ji v bažinné rákosí v moment, kdy ji Pan chtěl popadnout.",
        "Když si Pan uvědomil, že objímá rákosí, povzdechl si. Tento vzdech otřásl rostlinami, které začaly vydávat nádhernou melodii. V tu chvíli se rozhodl rákosí nařezat a vytvořit z něj hudební nástroj, svou flétnu, kterou na památku nymfy pojmenoval Syrinx."
      ],
      facts: [
        "Většinu času byl Pan velice příjemný, ale dokázal se opravdu rozčílit a vydat tak strašný výkřik, že každému, kdo ho uslyší, nažene hrůzu a úzkost. Dodnes tento pocit nese jméno vyvinuté z jeho boha: panika."
      ]
    },
    {
      name: "Grácie",
      id: "gracie",
      image: "/gracie.png",
      father: ["zeus"],
      mother: ["Eurynomé"],
      siblings: ["afrodita", "athena", "apollon", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "perseus", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Grácie byly menšími bohyněmi. Byly buď tři nebo jich mohlo být více, záleželo na specifické části Řecka. Jejich jména se podle místa mohla také lišit, ale nejvíce známými jsou Aglaia (nádhera), Eufrosyné (veselí) a Thálie (dobrá nálada).",
        "Všechny byly patronkami různých radostí v životě, jako je zábava, odpočinek, hra a štěstí. Často byly zobrazovány jako tři nahé ženy tančící v kruhu."
      ],
      bio: [
        "Jsou nejčastěji považovány za dcery Dia a Eurynomé, ale občas mohou také být viděny jako dcery Afrodity a Dionýsa nebo dcery Aiglé a Hélia."
      ]
    },
    {
      name: "Moiry",
      id: "moiry",
      image: "/moiry.png",
      symbols: ["Nit", "Hůl", "Svitek", "Nůžky", "Vřeteno", "Kniha osudu"],
      father: ["zeus"],
      mother: ["themis"],
      siblings: ["afrodita", "athena", "apollon", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "gracie", "muzy", "perseus", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Moiry, také nazývané Sudičkami, jsou tři tkalcovské bohyně, které předou každému smrtelníkovi při jeho narození osud. Jejich jména jsou Klóthó (Předoucí), Lachesis (Udělující) a Atropos (Neodvratná).",
        "Každá z nich byla zobrazována jako přadlena a měla jiný úkol, jak už prozrazují jejich jména. Klóthó spřádala nit života, Lachesis určovala její délku a Atropos ji stříhala nůžkami."
      ],
      bio: [
        "V dřívějších bájích jsou považovány za dcery Nyx, která je zplodila bez otce. V pozdějších jsou však považovány za dcery Dia a Themis. Mohou také být považovány za dcery Ananké.",
        "Nedá se říct, jestli do jejich záležtostí měl Zeus co mluvit, protože ani on nedokázal jejich rozhodnutí zrušit. Během Trójské války věděl, že jeho syn Sarpédón zemře, ale i tak s tím nemohl nic udělat, byl to jeho nehybný osud.",
        "Jen jednou byl někdo schopen tento nehybný osud oklamat a byl to Apollón. Když se dozvěděl, že jeho oblíbenec Admétos má zemřít, opil Moiry a přesvědčil je, aby jeho život uštřily, pokud pro ně najde vhodnou náhradu. Tu nenašel, ale Admétova manželka Alkéstis před ně dobrovolně vystoupila a obětovala se za svého manžela."
      ]
    },
    {
      name: "Adónis",
      id: "adonis",
      image: "/adonis.png",
      father: ["Theias"],
      mother: ["Myrrha"],
      partners: ["afrodita", "Persefona"],
      info: [
        "Adónis byl bohem krásy a touhy. Původně byl uctíván ve Fénicii a později ho přejali Řekové."
      ],
      bio: [
        "Podle báje Afrodita proklela jeho matku Myrrhu, aby se zamilovala do svého otce, syrského krále Theia. Přiměla ho s ní souložit devět nocí v naprosté tmě, během kterých byl počat Adónis. Když zjistil, že to byla jeho dcera, pokusil se ji najít a zabít. Prosila bohy, aby jí změnili podobu a tak jí proměnili v myrhovník. V této podobě také porodila Adónise, do kterého se pak Afrodita zamilovala.",
        "Afrodita pověřila Persefonu, aby ho vychovala. Vyrostl v krásného mladého muže a Persefona se tak do něj také zamilovala. Nechtěla ho vrátit Afroditě a tak vznikl spor, který nakonec vyřešil Zeus. Adónis měl každý rok strávit jednu třetinu s oběma bohyněmi a zbylou třetinu s tou, kterou bude chtít. Vybral si Afroditu a stal se z nich šťastný pár, který zplodil dva potomky: Golgos a Beroé.",
        "Adónis byl skvělý lovec a Artemis na něj žárlila. Poslala na něj divokého kance, který ho při jedné z jeho loveckých výprav zabil. V jiné verzi tohoto kance poslal Árés, protože byl milencem Afrodity."
      ]
    },
    {
      name: "Charón",
      id: "charon",
      image: "/charon.png",
      father: ["erebos"],
      mother: ["nyx"],
      home: ["Podsvětí"],
      siblings: ["Aithér", "Apaté", "Hémerá", "Hypnos", "Geras", "moiry", "Nemesis", "Eris", "thanatos"],
      info: [
        "Charón je pochmurný a tajemný převzoník, jehož úkolem je převážet duše mrtvých přes řeky Styx a Acherón do podsvětí. Jako potomek Nyx a Ereba hraje klíčovou roli při přechodu ze světa živých do říše mrtvých a ztělesňuje tuto nevyhnutelnou cestu, kterou musí podstoupit každá duše.",
        "Často je zobrazován jako starý mlčenlivý lodník s plnovousem v rozderaném plášti. Občas je zobrazován jako okřídlený démon s planoucíma očima.",
        "Bylo zvykem zesnulému vložit do úst nebo na oči minci, která byla myšlená jako platba za Cháronovy služby. Ti, kteří si to nemohli dovolit, navždy bloudili po březích řeky a nemohli najít klid.",
        "Charón se objevuje v mnoha mýtech s hrdiny, kteří se vydávají do podsvětí ještě živí. V příběhu o Orfeovi a Eurydicé ho Orfeus pomocí své lyry okouzlí a přesvědčí, aby ho nechal vstoupit do podsvětí, kde se pak pokusí zachránit svou ženu. Héraklés ho zase donutí, aby ho převezl přes řeku Styx, protože potřebuje chytit Kerbera, tříhlavého psa, který střeží bránu do podsvětí."
      ],
    },
    {
      name: "Thanatos",
      id: "thanatos",
      image: "/thanatos.png",
      father: ["erebos"],
      mother: ["nyx"],
      home: ["Podsvětí"],
      siblings: ["Aithér", "Apaté", "Hémerá", "Hypnos", "Geras", "moiry", "Nemesis", "Eris", "charon"],
      info: [
        "Thanatos je v řecké mytologii ztělesněním smrti, jednoho z nejzákladnějších prvků vesmíru, stejně jako jeho sourozenci.",
        "V žádných příbězích nehraje moc velkou roli, většinou byl vytlačen Hádem, bohem podsvětí."
      ],
      bio: [
        "Byl synem Nyx, ztělesněním noci a Ereba, ztělesněním stínů a temnoty. Hypnos, ztělesnění spánku, byl jeho dvojče.",
        "Věřilo se, že Thanatos byl nemilosrdný a tak ho smrtelníci i bohové nenáviděli. Bylo možné ho však přelstit. V jedné báji Zeus řekl Thanatovi, aby spoutal krále Sisyfa v podsvětí, protože jeho čas nastal. Sisyfovi se podrařilo Thanata spoutat a tím ochránil všechny před smrtí, dokud byl bůh smrti spoutaný. Árés ale nebyl spokojený, když v jeho válkách nikdo neumíral a tak Thanata osvobodil a Sisyfa mu vydal."
      ],
    },
    {
      name: "Kronos",
      id: "kronos",
      image: "/kronos.png",
      symbols: ["Srp", "Kosa"],
      father: ["uranos"],
      mother: ["gaia"],
      children: ["zeus", "poseidon", "hades", "demeter", "hera", "hestia", "Cheirón"],
      partners: ["rhea"],
      siblings: ["rhea", "okeanos", "hyperion", "koios", "krios", "iapetos", "mnemosyne", "tethys", "theia", "foibe", "themis", "afrodita", "Hekatoncheirové", "obri", "Kyklopové", "Erínye", "Meliády"],
      info: [
        "Kronos byl nejmladším synem Úrana a Gaii, vůdcem Titánů a krátkou dobu i vládcem celého světa, všech bohů i lidí. Stál za svržením svého tyranského otce, ale později se stal stejně tyranským jako on a byl také svržen svým nejmladším synem Diem.",
        "Jelikož jeho jméno bylo zaměňováno se slovem pro čas (Chronos), byl často zobrazován jako otec času, s nímž ale sdílel několik rysů: vousy, kosu a nemilosrdnost. Občas jsou od sebe skoro k nerozeznání."
      ],
      bio: [
        "Úranos všechny své potomky nenáviděl, proto je nenechal opustit lůno své matky. Gaia byla v strašných bolestech a tak vymyslela plán, jak se Úrana zbavit. Vytvořila adamantový srp a poprosila své děti o pomoc. Kronos byl jediný, koho se nezmocnil strach a tak se rozhodl své matce pomoct.",
        "Gaia tedy dala Kronovi srp a ukryla ho na jiném místě ve svém lůně. Hned příští noc, když chtěl Úranos mít styk s Gaiou, Kronos vytáhl ruku a usekl mu genitálie. Tím byli všichni jeho sourozenci propuštěni a on se stal vládcem všech bohů a lidí.",
        "Když se dostal k moci, oženil se se svou sestrou Rheou a po nějakou dobu se vše zdálo být dokonalé. Gaia byla konečně zbavena břemene a tak začala být více štědrá. Produkovala úrodu a potravu pro všechny lidi a ti tak mohli žít bezstarostné životy.",
        "V určité chvíli Kronos však změnil své způsoby a stal se násilným. Byl znepokojen proroctvím, že ho jedno z jeho dětí svrhne a tak je začal všechny po narození polykat. Když Rhea viděla, že se Kronos mění na jejich otce, šla za Gaiou a poprosila ji o pomoc.",
        "Gaia jí poradila, aby šla na Krétu, kde potom porodila Dia. Kronovi poté dala zabalený kámen, který spolkl místo jejich syna, zatímco Zeus byl vychováván nymfami na Krétě. Když nadešel čas, Diovi se v přestrojení za nosiče poháru povedlo Kronovi podstrčit jedovaté víno, které vyvolalo zvracení. Kronos takto vyzvracel všechny své potomky, kteří byli připraveni na pomstu. Tímto začala dlouhá válka mezi Olympany a Titány, která skončila svržením vlády Titánů."
      ],
    },
    {
      name: "Ókeanos",
      id: "okeanos",
      image: "/okeanos.png",
      father: ["uranos"],
      mother: ["gaia"],
      children: ["Ókeanovny"],
      partners: ["tethys"],
      siblings: ["rhea", "kronos", "hyperion", "koios", "krios", "iapetos", "mnemosyne", "tethys", "theia", "foibe", "themis", "afrodita", "Hekatoncheirové", "obri", "Kyklopové", "Erínye", "Meliády"],
      info: [
        "Ókeanos byl jedním z potomků Úrana a Gaii, je tedy jedním z Titánů. Existuje také verze, ve které je potomkem Gaii a Chaosu.",
        "Byl zobrazován s býčími rohy a hadím ocasem místo nohou. Později se také považoval za boha moře nebo jeho zosobnění."
      ],
      bio: [
        "Ókeanos se oženil se svou sestrou Téthys a měli spolu mnoho dětí, které se nazývaly Ókeanovny. Byli to menší bohové a bohyně řek, pramenů a moře. Ókeanos a Téthys byli tak plodní, že přemnožení jejich potomků způsobilo záplavy a povodně, proto se později rozvedli. Do války mezi Olympany a Titány se nezapojili, Zeus je tedy nechal dál vládnout jejich vodní říši."
      ],
    },
    {
      name: "Atlás",
      id: "atlas",
      image: "/atlas.png",
      symbols: ["Glóbus", "Souhvězdí"],
      father: ["iapetos"],
      mother: ["Klymené"],
      children: ["Plejády", "Hyády", "Hyás", "Kalypsó", "Maira", "Hesperidky"],
      partners: ["Pleioné", "Aithra", "Hesperis"],
      siblings: ["prometheus", "Epimétheus", "Menoitios"],
      info: [
        "Atlás je jedním z nejznámějších Titánů. Byl jejich vůdcem ve válce s Olympany a dostal za to po prohře patřičný test: musel navždy držet nebesa.",
        "Bývá zobrazován jako velký vousatý muž, který se mírně prohýbá a trpí pod tíhou nebes, které jsou zobrazována jako zeměkoule s nejznámějšími souhvězdími."
      ],
      bio: [
        "Podle Hésioda byl Atlás synem titána Iapeta a ókeanovny Klymené. Někteří však tvrdí, že jeho matkou byla jiná ókeanovna jménem Asie. Měl tři bratry (Prométhea, Epiméthea a Menoetia) a nejspíše i tolik žen.",
        "Ve válce Titánů a Olympanů se Iapetovi synové postavili na opačné strany. Prométheus a Epimétheus se rozhodli pomoci Diovi, zatímco Atlás a Menoitios se postavili se stranu Titánů. Atlás se později stal vůdcem Titánů, ale to pro něj nedopadlo dobře, jelikož nakonec dostal ten nejhorší trest ze všech. Byl odsouzen k držení nebes a jelikož se nemohl pohnout a většina neznala jeho sídlo, objevuje se jenom v dvou v mýtech, kde ho potkali řečtí hrdinové.",
        "Prvním z nich byl Héraklés, který dostal za úkol přinést Eurystheovi několik zlatých jablek z Hesperid. Nabídl Atlásovi, že si s ním vymění pozice, aby Titán přinesl jablka od svých dcer a nevytvořil během toho tak velký rozruch. Atlás měl však vlastní plán, jablka chtěl doručit sám a Hérakla nechat v jeho pozici. Héraklés ho však přelstil a poprosil ho, aby se s ním jen na chvíli ještě vyměnil, protože se chtěl dostat do lepší polohy. Samozřejmě se místo toho jenom zmocnil jablek a Atláse už tam nechal.",
        "Druhým a posledním hrdinou, co ho navštívil, byl Perseus. Ten ho poprosil o pohostinství, ale Atlás měl obavy, že to byl jenom další zesměšňující trik a tak ho odmítl. Perseus mu ukázal hlavu Medúsy a přeměnil ho tak na skálu."
      ],
    },
    {
      name: "Prométheus",
      id: "prometheus",
      image: "/prometheus.png",
      symbols: ["Oheň"],
      father: ["iapetos"],
      mother: ["Klymené"],
      children: ["Deukalión"],
      siblings: ["atlas", "Epimétheus", "Menoitios"],
      info: [
        "Prométheus byl syn titána Iapeta a ókeanovny Klymené. Přesto, že byl jedním z titánů, se ve válce proti Olympanům postavil na Diovu stranu. Později se s ním ale začat hádat o jeho nesprávném zacházení s lidmi. Vedlo to k tomu, že bohům ukradl oheň a daroval ho lidem. Za toto byl spoután "
      ],
      bio: [
        "Díky tomu, že se se svým bratrem Epimétheem připojil ve válce na stranu Olympanů unikl krutým trestům, které potkaly jeho ostatní bratry. Když se však Zeus stal vládcem všech bohů, Prométheus měl problémy s jeho vládou a nepřišla mu spravedlivá. Lidé si podle něj zasloužili lepšího vůdce.",
        "Spor mezi Prométheem a Diem začal, když mu Zeus dal za úkol rozdělit býka na dvě části, jednu pro bohy a jednu pro lidi. Prométheus, který byl vždy milovníkem druhých, se ho pokusil oklamat tak, že vytvořil porci kostí obalených tukem a porci nejjemnějšího masa pokrytého vnitřnostmi vola. Zeus si kupodivu vybral kosti a nastavil tak precedens, podle kterého si lidé mohli nechat maso a obětovat bohům kosti.",
        "Dia toto rozzuřilo a za trest se rozhodl před lidmi schovat dar ohně. Prométheovi to přišlo nespravedlivé, tak oheň ukradl a přinesl ho lidem. Zeus na toto zareagoval tak, že pověřil Héfaista, aby vytvořil krásného a prohnaného tvora. Tato bytost byla první žena v dějinách, Pandora. Pandoru brzy po příchodu na Zemi přijal Epimétheus za svou. Jakmile se to stalo, Pandora otevřela nádobu (v pozdějších verzích skříňku), kterou si s sebou přinesla a vypustila tak do světa nejrůznější bolesti a nemoci.",
        "Prométhea Zeus potrestal tak, že ho spoutal na skále, kde mu orel stále ukousával část jater, která zase přes noc dorostla. Trest takto mohl trvat nekonečně dlouho. Héraklés na Prométhea narazil při cestě k Hesperidkám a rozhodl se ho osvobodit. Prométheus mu za to poradil, aby pro zlaté jablka poslal jeho bratra Atláse. Po tomto se Prométheus a Zeus konečně usmířili."
      ]
    },
    {
      name: "Hyperión",
      id: "hyperion",
      image: "/hyperion.png",
      father: ["uranos"],
      mother: ["gaia"],
      children: ["Hélios", "Seléné", "Éós"],
      partners: ["theia"],
      siblings: ["rhea", "kronos", "okeanos", "koios", "krios", "iapetos", "mnemosyne", "tethys", "theia", "foibe", "themis", "afrodita", "Hekatoncheirové", "obri", "Kyklopové", "Erínye", "Meliády"],
      info: [
        "Hyperión byl jedním z potomků Úrana a Gaii, byl tedy jedním z Titánů. Symbolizoval světlo, moudrost a bdělost. Byl otcem slunce, měsíce a úsvitu. V některých textech je slunce zmíněno jako Hélios Hyperión, ale jsou to dva různí bohové, přičemž Hélios je fyzickou podobou slunce.",
        "Byl považován za jeden ze čtyř sloupů, které drží nebe a zemi od sebe a jelikož jeho dcera byla úsvit, považoval se za sloup východu. Ostatními sloupy byli Koios (sloup severu), Krios (sloup jihu) a Iapetos (sloup západu). Tito čtyři Titáni drželi otce Úrana na místě, zatímco ho Kronos vykastroval."
      ],
      bio: [
        "Hyperión se oženil se svou sestrou Theiou a měli spolu tři potomky: Hélia (slunce), Seléné (měsíc) a Éós (úsvit).",
        "Ve válce mezi Olympany a Titány nebyl zmíněn."
      ],
    },
    {
      name: "Rhea",
      id: "rhea",
      image: "/rhea.png",
      father: ["uranos"],
      mother: ["gaia"],
      children: ["zeus", "poseidon", "hades", "demeter", "hera", "hestia", "Cheirón"],
      partners: ["kronos"],
      siblings: ["kronos", "okeanos", "hyperion", "koios", "krios", "iapetos", "mnemosyne", "tethys", "theia", "foibe", "themis", "afrodita", "Hekatoncheirové", "obri", "Kyklopové", "Erínye", "Meliády"],
      info: [
        "Rhea byla dcerou Úrana a Gaii, byla tedy jednou z Titánů. Byla zodpovědná za to, jak věci v Kronově říši plynou.",
        "Často byla symbolizována jako dvojice lvů, kteří táhli nebeský vůz. Tento symbol se často umisťoval na městské brány."
      ],
      bio: [
        "Rhea se oženila se svým bratrem Kronem poté, co vykastroval jejich otce Úrana a osvobodil tak všechny své sourozence. Stal se tak vládcem všech bohů a lidí, ale za nějakou dobu se stal stejným tyranem jako jeho otec.",
        "Měli spolu 6 dětí (Hestia, Hádés, Demétér, Poseidón, Héra a Zeus), Kronos je všechny po narození spolykal kromě Dia, kterého Rhea ukryla na Krétě a dala namísto něj Kronovi zabalený kámen. Díky tomuto byl Zeus vychován nymfami a byl schopný svého otce později svrhnout."
      ]
    },
    {
      name: "Styx",
      id: "styx",
      image: "/styx.png",
      father: ["okeanos"],
      mother: ["tethys"],
      children: ["Níké", "Zélos", "Biá", "Kratos"],
      partners: ["Pallás"],
      siblings: ["Ókeanovny"],
      info: [
        "Styx byla dcerou Ókeana a Téthys, byla tedy jednou z ókeanoven. Byla bohyní řeky Styx.",
        "Řeka Styx byla hranicí mezi Zemí a podsvětím. Achilles byl do této řeky ponořen svou matkou, aby se stal nepřemožitelným. Držela ho však za patu, která se tak stala jeho jedinou slabinou. Tím vznikl výraz Achillova pata."
      ],
      bio: [
        "Během války mezi Titány a Olympany bojovala Styx na straně Olympanů. Na její počest dal Zeus její jméno závazné přísaze, kterou bohové skládali.",
        "Byla manželkou titána Palláse, s kterým měla 4 děti: Níké, Zélos, Biá a Kratos."
      ]
    },
    {
      name: "Létó",
      id: "leto",
      image: "/leto.png",
      father: ["koios"],
      mother: ["foibe"],
      children: ["artemis", "apollon"],
      partners: ["zeus"],
      info: [
        "Létó byla dcerou Koia a Foibé, byla tedy jednou z Titánů. Byla jednou z Diových mnoha milenek, byla také jednou z jeho nejoblíbenějších."
      ],
      bio: [
        "Zeus si vzal Héru, když byla Létó už těhotná. Přesto Héra žárlila a tvořila jí po dobu těhotenství potíže, nakonec ji vyhnala z Olympu.",
        "Když Létó putovala po Zemi, nikdo ji nepustil k sobě domů, protože se báli, že by rozčílili Héru. Héra na ni také poslala draka Pýthóna, který ji pronásledoval a nedovolil jí porodit na pevné půdě.",
        "Nikdo ji nechtěl přijmout kromě ostrova Délos, kde Létó napřed porodila Artemidu přitom, co balancovala své tělo na větvi olivovníku. Artemis jí poté pomohla porodit Apollóna.",
        "Její problémy chvíli pokračovaly, ale její dvě rychle rostoucí děti ji teď mohly chránit. Apollón ve věku čtyř dnů zabil draka Pýthóna a když se obr Tityos pokusil Létó znásilnit, její děti ho zabily. Po tomto se jí povedlo vrátit zpátky na Olymp."
      ],
    },
    {
      name: "Iapetos",
      id: "iapetos",
      image: "/iapetos.png",
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
      image: "/koios.png",
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
      image: "/krios.png",
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
      image: "/mnemosyne.png",
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
      image: "/foibe.png",
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
      image: "/tethys.png",
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
      image: "/theia.png",
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
      image: "/themis.png",
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
      image: "/perseus.png",
      father: ["zeus"],
      mother: ["Danaé"],
      children: ["Gorgofona", "Perses", "Alkaios", "Élektryón", "Heleus", "Méstor", "Autochthe", "Cynurus", "Sthenelos", "Erythra", "Erythras"],
      home: ["Serifos", "Argos", "Mykény"],
      partners: ["Andromeda"],
      siblings: ["afrodita", "athena", "apollon", "artemis", "ares", "dionysos", "hefaistos", "hermes", "herakles", "muzy", "gracie", "Aeakus", "Angelos", "Eileithýia", "Enýó", "Eris", "Ersa", "Hébé", "Helena Trójská", "Litai", "Mínós", "moiry", "Pandia", "Persefona", "Rhadamanthys", "Hóry"],
      info: [
        "Perseus byl synem Dia a Danaé, což z něj dělalo poloboha. Je jedním z nejznámějších hrdinů v řecké mytologii, jeden z jeho hrdinských činů bylo useknutí hlavy Medúsy, jediné z gorgon, která nebyla nesmrtelná. Její hlavu využil jako zbraň v mnoha dalších z jeho dobrodružství."
      ],
      bio: [
        "Zeus zplodil Persea s uvězněnou princeznou Danaé, kterou její otec uvěznil poté, co se od věštce dozvěděl, že ho jeho vnuk svrhne. Dostal se k ní v podobě zlatého deště prasklinami ve stropě její cely. Její otec poté svou dceru i vnuka nechal hodit do moře v dřevěné truhle. Truhla nakonec bezpečně doplula na ostrov Serifos, kterému vládl král Polydektés. Jeho bratr Diktys byl rybář a truhlu chytil do své sítě, poté osvobodil Danaé a Persea. Nabídl jim u něj místo k bydlení a tam Perseus vyrostl do silného mladého muže.",
        "Diktys Danaé a Persea před obyvateli Serifu ukrýval, aby se vyhnul možným konfliktům. Dařilo se mu to pár let, ale když se o nich ostatní konečně dozvěděli, Polydektés se hned zamiloval do Danaé a dokonce ji požádal o ruku. Danaé ho odmítla, to se mu však nelíbilo a v jeho očích byl jedinou překážkou mladý Perseus. Vymyslel tedy plán, jak se Persea zbavit a získat Danaé.",
        "Polydektés předstíral, že požádal o ruku Hippodameiu, dceru krále élidské Písy, Oinomaa. Každý občan Serifu byl povinen jako svatební dar přinést koně. Perseus byl příliš chudý a tak se zeptal Polydekta, jestli nemůže přinést cokoliv jiného. V tu chvíli ho Polydektés požádal o hlavu Medúsy.",
        "Perseus se tedy vydal na cestu za Medúsou, během které potkal mnoho postav, dokonce i Hermése a Athénu, díky jimž byl schopný získat předměty, které mu pomohly v jeho boji proti Medúse. Mezi ně patřil Hádův plášť neviditelnosti, Hermésovy okřídlené sandály a Athénin reflektivní štít. Nakonec se mu povedlo useknout Medúse hlavu a vrátit se s ní na Serifos, ale během této cesty ještě narazil na titána Atlase, kterého přeměnil na skálu. Poté ještě zabil mořskou příšeru jménem Cetus a zachránil Aethiopskou princeznu Andromedu, která mu měla být obětována. Když se vrátil na Serifos a zjistil, že Polydektés obtěžoval jeho matku, použil na něj hlavu Medúsy a Polydektés zkameněl."
      ]
    },
    {
      name: "Odysseus",
      id: "odysseus",
      image: "/odysseus.png",
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
      image: "/achilles.png",
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
      image: "/orfeus.png",
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
      image: "/herakles.png",
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
      image: "/theseus.png",
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
      image: "/kentauri.png",
      info: [
        "Kentauři jsou napůl muži a napůl koně. Mají hlavu a torzo muže, ale tělo koně.",
        "Nejznámějším kentaurem je Cheirón. Většina kentaurů byla zobrazována jako divoké bytosti, Cheirón byl však moudrý a civilizovaný. Byl nesmrtelný, ale Héraklés ho omylem zranil šípem potaženým krví bílé hydry, který mu způsobil velké bolesti.",
        "Když Héraklés prosil Dia, aby propustil Promethea, požadoval za to oběť. Cheirón se tedy obětoval, aby zachránil nejen jeho, ale i sebe od své bolesti."
      ]
    },
    {
      name: "Dryády",
      id: "dryady",
      image: "/dryady.png",
      info: [
        "Dryády jsou nymfy nebo duše stromů, které na sebe berou podobu krásných žen.",
        "Dříve tímto názvem byly myšleny specificky nymfy dubových stromů, ale význam se později rozšířil ke všem typům stromů. Podle těchto stromů se pak dryády dělily na různé skupiny.",
        "Mezi dryády patřily také hamadryády, při jejichž narození se také narodil strom, ke kterému byla věčně vázaná jejich duše."
      ]
    },
    {
      name: "Najády",
      id: "najady",
      image: "/najady.png",
      info: [
        "Najády jsou vodní nymfy nebo duše v podobě krásných žen, které se vyskytují u studánek, pramenů, potoků, řek a dalších sladkovodních ploch.",
        "Byly často uctívané v místních kultech jako nezbytné pro lidi. Lidé při obřadech dosažení plnoletosti věnovali své dětské vlasy místní najádě jara. Na některých místech se jejich vodám připisovaly rituální očisty s léčebnými účinky. Rituálně se v nich topila zvířata."
      ],
    },
    {
      name: "Nymfy",
      id: "nymfy",
      image: "/nymfy.png",
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
      image: "/satyrove.png",
      info: [
        "Satyrové jsou z části lidé a z části kozy, které obývají lesy a hory. Jsou nejvíce známí pro svou lásku k hudbě, tančení a zábavě a kvůli tomu bývají spojováni s Dionýsem, bohem slavností a vína. Jsou ztělesněním bezstarostnosti a symbolem divoké, nezkrocené přírody.",
        "Jsou většinou zobrazováni s horní částí těla člověka a spodní částí těla kozy, také mohou mít malé rohy. Tento vzhled ukazuje její spojení s lidskou i zvířecí říší.",
        "V bájích se často ukazuje jejich spojení s Dionýsem tím, že se účastní jeho rituálů."
      ],
    },
    {
      name: "Sirény",
      id: "sireny",
      image: "/sireny.png",
      father: ["Achelóos"],
      mother: ["muzy"],
      info: [
        "Narozdíl od novějších zobrazení, které začaly zhruba v 8. století našeho letopočtu jako ženy s rybím ocasem, byly sirény v řecké mytologii napůl ženy a napůl ptáci. Svými krásnými písněmi lákaly námořníky na své ostrovy, na kterých poté zemřeli. Jejich osudem bylo zemřít, pokud by někdo někdy přežil jejich písně. Když se to Odysseovi povedlo, vrhly se do moře a utopily se.",
        "Byly dcerami boha Achela a jedné z Múz, ale není jisté, která z nich to byla, jelikož mnoho zdrojů se liší. "
      ],
    },
    {
      name: "Sfinx",
      id: "sfinx",
      image: "/sfinx.png",
      father: ["Orthos"],
      mother: ["Echidna"],
      info: [
        "Sfinx (nebo Sfinga) byla nestvůra, která měla hlavu člověka a tělo lva. Měla také křídla orla a hadí ocas. V řecké mytologii byla považována za ženu a existovala jenom jedna, dcera Ortha a Echidny.",
        'Sídlila za městem Théby a všem, co se snažili vstoupit položila známou otázku: „Který tvor má jeden hlas, ale ráno má čtyři nohy, odpoledne dvě a v noci tři?“ Každého, kdo se pokusil odpovědět, sežrala, než přišel Oidipus, který správně odpověděl „člověk“, který se jako dítě plazí po čtyřech, v dospělosti chodí po dvou a ve stáří potřebuje hůl.',
        "Pak následovala druhá otázka: „Jsou dvě sestry, jedna rodí druhou, ta zase rodí první. Kdo jsou?“ Správná odpověď jsou den a noc, slova, která jsou v řečtině obě ženského rodu.",
        "Poté, co Oidipus na obě otázky odpověděl správně, se Sfinx zabila, buď se shodila ze skály, na které spočívala nebo samu sebe sežrala."
      ],
    },
    {
      name: "Obři",
      id: "obri",
      image: "/obri.png",
      father: ["uranos"],
      mother: ["gaia"],
      info: [
        "Obři, také známí jako Giganti byli potomci Gaii a Úrana. Narodili se, když Kronos Úranovi usekl srpem genitálie a jeho krev oplodnila Gaiu.",
        "Bojovali ve válce proti Olympanům, na které je seslala Gaia, když uvěznili Titány hluboko v Tartaru. Byli silnými soupeři, jelikož na své rodné půdě byli nesmrtelní. Zeus přivolal na pomoc svého syna Hérakla a tuto válku nakonec obři prohráli. Gaia později na Olympany poslala ještě svého potomka s Tartarem, draka Týfóna.",
        "Dříve byli zobrazováni s lidským vzhledem, později jim však byly přidávány různé zvířecí rysy, například křídla, hadí těla nebo lví hlavy."
      ],
    },
    {
      name: "Gorgony",
      id: "gorgony",
      image: "/gorgony.png",
      father: ["Týfón"],
      mother: ["Echidna"],
      info: [
        "Gorgony byly tři sestry známé za své smrtící schopnosti a hrůzostrašný vzhled. Nejvíc známé jsou jejich hlavy, na kterých místo vlasů měly mnoho hadů, ale měly i zvířecí uši, kovové pěsti a šupinaté tělo. Byly tak obludné, že při pohledu na kteroukoliv z nich člověk zkameněl. Jejich jména byla Sthéno, Euryalé a ta nejznámější, Medúsa, která jako jediná z nich byla smrtelná.",
        "Za jejich rodiče se tradičně považují Týfón a Echidna, kterým se říká otec a matka všech příšer. Medúsa však byla občas označována za dceru Forkýse a Kétó",
        "Smrtelnost Medúsy hraje velkou roli v jejím střetu s Perseem, který nakonec vedl k její smrti. S pomocí darů od bohů, tedy okřídlenými sandály, kouzelnou přilbou, která ho dělala neviditelným a reflektivním štítem, pomocí kterého se na ni mohl koukat, se mu povedlo jí useknout hlavu."
      ],
    },
    {
      name: "Harpyje",
      id: "harpyje",
      image: "/harpyje.png",
      info: [
        "Harpyje byly nestvůry s tělem ptáka, ale tváří ženy. Byly ztělesněním bouře a divokých větrů, také nosily zločince za Erínyemi, aby je potrestaly.",
        "Ze začátku byly zobrazovány jako okřídlené ženy a byly tím velice podobné Sirénám, které se ale později také změnily. Později se začaky zobrazovat jako pták s hlavou dívky nebo ženy, to se pak ještě změnilo na hlavu staré ošklivé ženy.",
        "Když Zeus dal thráckému králi Fíneovi dar proroctví, Fíneus ho použil na odhalení božího plánu. Rozzuřený Zeus ho oslepil a posadil na ostrov, kde byla spousta jídla. Žádné jídlo však nebyl schopen sníst, protože mu ho harpyje vždy ukradly."
      ],
    },
  ]);

  return { characters };
})
(() => {
  function initAcademicTreeMap() {
  const graph = {"root": "title:me", "children": {"title:me": ["title:jiantao jiao", "title:nika haghtalab", "wiki:pieter abbeel"], "title:nika haghtalab": ["wiki:ariel d. procaccia", "wiki:avrim blum"], "wiki:avrim blum": ["wiki:ron rivest"], "wiki:ron rivest": ["wiki:robert w. floyd"], "wiki:robert w. floyd": [], "wiki:ariel d. procaccia": ["url:https://www.cs.huji.ac.il/~jeff"], "url:https://www.cs.huji.ac.il/~jeff": ["wiki:michael genesereth"], "wiki:michael genesereth": ["wiki:joel moses"], "wiki:joel moses": ["wiki:marvin minsky"], "wiki:marvin minsky": ["wiki:albert w. tucker"], "wiki:albert w. tucker": ["wiki:solomon lefschetz"], "wiki:solomon lefschetz": ["wiki:william edward story"], "wiki:william edward story": ["wiki:carl neumann"], "wiki:carl neumann": ["wiki:eduard heine", "wiki:friedrich julius richelot"], "wiki:friedrich julius richelot": ["wiki:carl gustav jacob jacobi"], "wiki:carl gustav jacob jacobi": ["wiki:enno dirksen"], "wiki:enno dirksen": ["wiki:bernhard friedrich thibaut", "wiki:johann tobias mayer"], "wiki:johann tobias mayer": ["wiki:abraham gotthelf kästner", "wiki:georg christoph lichtenberg"], "wiki:abraham gotthelf kästner": ["wiki:christian august hausen"], "wiki:christian august hausen": ["wiki:johann christoph wichmannshausen"], "wiki:johann christoph wichmannshausen": ["wiki:otto mencke"], "wiki:otto mencke": ["wiki:jakob thomasius"], "wiki:jakob thomasius": ["wiki:friedrich leibniz"], "wiki:friedrich leibniz": [], "wiki:georg christoph lichtenberg": ["wiki:abraham gotthelf kästner"], "wiki:bernhard friedrich thibaut": ["wiki:abraham gotthelf kästner", "wiki:georg christoph lichtenberg"], "wiki:eduard heine": ["wiki:enno dirksen", "wiki:martin ohm"], "wiki:martin ohm": ["wiki:karl christian von langsdorf"], "wiki:karl christian von langsdorf": ["wiki:abraham gotthelf kästner"], "title:jiantao jiao": ["wiki:tsachy weissman"], "wiki:tsachy weissman": ["url:https://webee.technion.ac.il/people/merhav"], "url:https://webee.technion.ac.il/people/merhav": ["wiki:jacob ziv"], "wiki:jacob ziv": ["wiki:john wozencraft"], "wiki:john wozencraft": ["wiki:robert fano"], "wiki:robert fano": ["wiki:ernst guillemin"], "wiki:ernst guillemin": ["wiki:arnold sommerfeld"], "wiki:arnold sommerfeld": ["wiki:felix klein", "wiki:ferdinand von lindemann"], "wiki:ferdinand von lindemann": ["wiki:felix klein"], "wiki:felix klein": ["wiki:julius plücker", "wiki:rudolf lipschitz"], "wiki:julius plücker": ["wiki:christian ludwig gerling"], "wiki:christian ludwig gerling": ["wiki:carl friedrich gauss"], "wiki:carl friedrich gauss": ["wiki:johann friedrich pfaff"], "wiki:johann friedrich pfaff": ["wiki:abraham gotthelf kästner", "wiki:johann elert bode"], "wiki:johann elert bode": ["wiki:johann georg büsch"], "wiki:johann georg büsch": ["wiki:johann andreas segner"], "wiki:johann andreas segner": ["wiki:georg erhard hamberger"], "wiki:georg erhard hamberger": ["wiki:johann adolph wedel"], "wiki:johann adolph wedel": ["wiki:georg wolfgang wedel"], "wiki:georg wolfgang wedel": ["wiki:werner rolfinck"], "wiki:werner rolfinck": ["wiki:adriaan van den spiegel", "wiki:daniel sennert"], "wiki:adriaan van den spiegel": ["wiki:hieronymus fabricius"], "wiki:hieronymus fabricius": ["wiki:gabriele falloppio"], "wiki:gabriele falloppio": ["wiki:antonio musa brassavola", "wiki:realdo colombo"], "wiki:antonio musa brassavola": ["wiki:giovanni manardo", "wiki:niccolò leoniceno"], "wiki:niccolò leoniceno": ["mgp:127144", "mgp:136726", "mgp:149192"], "mgp:136726": ["wiki:gaetano da thiene (philosopher)", "wiki:sigismondo polcastro"], "wiki:gaetano da thiene (philosopher)": ["wiki:paul of venice"], "wiki:paul of venice": [], "wiki:sigismondo polcastro": [], "wiki:giovanni manardo": ["title:francesco benzi", "wiki:niccolò leoniceno"], "title:francesco benzi": [], "wiki:daniel sennert": ["wiki:jakob martini", "wiki:jan jesenius"], "wiki:jan jesenius": ["wiki:hieronymus fabricius"], "wiki:jakob martini": ["mgp:128105"], "mgp:128105": ["mgp:200006", "wiki:duncan liddel"], "mgp:200006": ["mgp:224249"], "mgp:224249": [], "wiki:duncan liddel": ["wiki:john craig (physician)", "wiki:paul wittich"], "wiki:john craig (physician)": ["wiki:theodor zwinger"], "wiki:theodor zwinger": ["mgp:152906", "wiki:gabriele falloppio", "wiki:petrus ramus", "wiki:thomas platter", "wiki:vittore trincavelli"], "wiki:petrus ramus": ["mgp:131546", "wiki:johannes sturm"], "wiki:johannes sturm": ["wiki:johann winter von andernach", "wiki:nicolas cleynaerts"], "wiki:nicolas cleynaerts": ["wiki:jacobus latomus", "wiki:johannes campensis"], "wiki:jacobus latomus": ["wiki:jan standonck"], "wiki:jan standonck": [], "wiki:johannes campensis": ["mgp:125794", "wiki:johann reuchlin"], "wiki:johann reuchlin": ["wiki:jacob ben jehiel loans", "wiki:john argyropoulos", "wiki:obadiah ben jacob sforno"], "wiki:john argyropoulos": ["wiki:bessarion"], "wiki:bessarion": ["wiki:gemistos plethon"], "wiki:gemistos plethon": ["mgp:134781", "wiki:demetrios kydones"], "wiki:demetrios kydones": ["wiki:neilos kabasilas"], "wiki:neilos kabasilas": ["wiki:gregory palamas"], "wiki:gregory palamas": ["wiki:theodore metochites"], "wiki:theodore metochites": ["wiki:manuel bryennios"], "wiki:manuel bryennios": ["wiki:gregory chioniades"], "wiki:gregory chioniades": ["mgp:204293"], "mgp:204293": ["wiki:nasir al-din al-tusi"], "wiki:nasir al-din al-tusi": ["wiki:athir al-din al-abhari", "wiki:kamal al-din ibn yunus"], "wiki:kamal al-din ibn yunus": ["mgp:287466", "wiki:sharaf al-din al-tusi"], "wiki:sharaf al-din al-tusi": [], "mgp:287466": ["wiki:omar khayyam"], "wiki:omar khayyam": ["wiki:bahmanyar"], "wiki:bahmanyar": ["wiki:avicenna"], "wiki:avicenna": ["mgp:316873", "wiki:abu sahl 'isa ibn yahya al-masihi", "wiki:al-natili"], "wiki:al-natili": [], "wiki:abu sahl 'isa ibn yahya al-masihi": [], "mgp:316873": [], "wiki:athir al-din al-abhari": ["mgp:287479", "wiki:kamal al-din ibn yunus"], "mgp:287479": ["wiki:fakhr al-din al-razi"], "wiki:fakhr al-din al-razi": ["mgp:287466"], "mgp:134781": [], "wiki:jacob ben jehiel loans": [], "mgp:125794": [], "wiki:johann winter von andernach": ["mgp:126571", "wiki:jacques dubois"], "mgp:126571": ["wiki:girolamo aleandro"], "wiki:girolamo aleandro": ["mgp:131446", "mgp:131447"], "mgp:131446": [], "mgp:131447": ["wiki:poliziano"], "wiki:poliziano": ["wiki:cristoforo landino", "wiki:marsilio ficino"], "wiki:marsilio ficino": ["wiki:john argyropoulos"], "wiki:cristoforo landino": ["wiki:george of trebizond"], "wiki:george of trebizond": ["wiki:vittorino da feltre"], "wiki:vittorino da feltre": ["wiki:gasparino barzizza", "wiki:giovanni conversini", "wiki:guarino da verona"], "wiki:gasparino barzizza": ["url:https://www.treccani.it/enciclopedia/giovanni-travesi_(Dizionario-Biografico)"], "url:https://www.treccani.it/enciclopedia/giovanni-travesi_(Dizionario-Biografico)": [], "wiki:giovanni conversini": [], "wiki:guarino da verona": ["wiki:giovanni conversini", "wiki:manuel chrysoloras"], "wiki:manuel chrysoloras": ["wiki:demetrios kydones"], "wiki:jacques dubois": ["mgp:128987", "wiki:françois vatable", "wiki:george hermonymus", "wiki:jacques lefèvre d'étaples", "wiki:janus lascaris", "wiki:jean tagault"], "mgp:128987": [], "wiki:jean tagault": ["title:jean desjardins"], "title:jean desjardins": [], "wiki:george hermonymus": [], "wiki:janus lascaris": ["wiki:bessarion", "wiki:demetrios chalkokondyles"], "wiki:demetrios chalkokondyles": ["wiki:theodorus gaza"], "wiki:theodorus gaza": ["wiki:vittorino da feltre"], "wiki:jacques lefèvre d'étaples": ["wiki:george hermonymus"], "wiki:françois vatable": ["wiki:jacques lefèvre d'étaples"], "mgp:131546": ["wiki:guillaume budé"], "wiki:guillaume budé": ["wiki:george hermonymus", "wiki:janus lascaris"], "mgp:152906": ["wiki:johannes baptista montanus", "wiki:vittore trincavelli"], "wiki:johannes baptista montanus": ["wiki:marcus musurus", "wiki:niccolò leoniceno", "wiki:pietro pomponazzi"], "mgp:149192": ["wiki:vittorino da feltre"], "mgp:127144": ["url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1", "wiki:numisianus"], "wiki:numisianus": ["url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1"], "url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1": ["title:marinus of alexandria"], "title:marinus of alexandria": [], "wiki:marcus musurus": ["wiki:janus lascaris"], "wiki:pietro pomponazzi": ["mgp:136726", "wiki:nicoletto vernia"], "wiki:nicoletto vernia": ["wiki:gaetano da thiene (philosopher)", "wiki:paolo della pergola"], "wiki:paolo della pergola": ["wiki:paul of venice"], "wiki:vittore trincavelli": ["wiki:pietro pomponazzi"], "wiki:paul wittich": ["mgp:127092"], "mgp:127092": ["wiki:johann hommel"], "wiki:johann hommel": ["wiki:erasmus reinhold", "wiki:philip melanchthon"], "wiki:erasmus reinhold": ["wiki:jacob milich"], "wiki:jacob milich": ["wiki:erasmus", "wiki:ulrich zasius"], "wiki:erasmus": ["wiki:alexander hegius von heek", "wiki:jan standonck"], "wiki:alexander hegius von heek": ["wiki:rodolphus agricola", "wiki:thomas à kempis"], "wiki:rodolphus agricola": ["wiki:theodorus gaza"], "wiki:thomas à kempis": ["wiki:florens radewyns", "wiki:geert groote"], "wiki:geert groote": [], "wiki:florens radewyns": [], "wiki:ulrich zasius": [], "wiki:philip melanchthon": ["wiki:johann reuchlin", "wiki:johannes stöffler"], "wiki:johannes stöffler": [], "wiki:obadiah ben jacob sforno": [], "wiki:rudolf lipschitz": ["wiki:martin ohm", "wiki:peter gustav lejeune dirichlet"], "wiki:peter gustav lejeune dirichlet": ["wiki:carl friedrich gauss", "wiki:joseph fourier", "wiki:siméon denis poisson"], "wiki:siméon denis poisson": ["wiki:joseph-louis lagrange", "wiki:pierre-simon laplace"], "wiki:joseph-louis lagrange": ["wiki:giovanni battista beccaria", "wiki:leonhard euler"], "wiki:leonhard euler": ["wiki:johann bernoulli"], "wiki:johann bernoulli": ["wiki:jacob bernoulli", "wiki:nikolaus eglinger"], "wiki:nikolaus eglinger": ["wiki:emmanuel stupanus", "wiki:johann bauhin"], "wiki:emmanuel stupanus": ["wiki:felix platter", "wiki:johann nikolaus stupanus", "wiki:petrus ryff"], "wiki:petrus ryff": ["wiki:felix platter", "wiki:johann nikolaus stupanus", "wiki:theodor zwinger", "wiki:thomas erastus"], "wiki:thomas platter": ["wiki:oswald myconius"], "wiki:oswald myconius": [], "wiki:thomas erastus": ["wiki:luca ghini"], "wiki:luca ghini": [], "wiki:felix platter": ["wiki:guillaume rondelet"], "wiki:guillaume rondelet": ["wiki:johann winter von andernach"], "wiki:johann nikolaus stupanus": ["wiki:theodor zwinger"], "wiki:johann bauhin": ["wiki:emmanuel stupanus", "wiki:leonhart fuchs"], "wiki:leonhart fuchs": [], "wiki:jacob bernoulli": ["wiki:gottfried wilhelm leibniz", "wiki:peter werenfels"], "wiki:peter werenfels": ["mgp:143083"], "mgp:143083": ["mgp:143082"], "mgp:143082": ["wiki:johann jakob grynaeus"], "wiki:johann jakob grynaeus": ["wiki:jakob andreae", "wiki:simon sulzer"], "wiki:simon sulzer": ["wiki:simon grynaeus", "wiki:wolfgang capito"], "wiki:wolfgang capito": ["wiki:erasmus", "wiki:ulrich zasius"], "wiki:simon grynaeus": ["wiki:johann reuchlin", "wiki:philip melanchthon"], "wiki:jakob andreae": ["wiki:jakob beurlin"], "wiki:jakob beurlin": ["mgp:152647"], "mgp:152647": [], "wiki:gottfried wilhelm leibniz": ["mgp:143859", "wiki:christiaan huygens", "wiki:erhard weigel", "wiki:jakob thomasius"], "wiki:erhard weigel": ["title:philipp müller"], "title:philipp müller": ["mgp:144220"], "mgp:144220": ["mgp:127790"], "mgp:127790": ["mgp:184935", "wiki:georg joachim rheticus"], "wiki:georg joachim rheticus": ["mgp:126730", "wiki:nicolaus copernicus"], "mgp:126730": ["mgp:126724"], "mgp:126724": [], "wiki:nicolaus copernicus": ["mgp:126113", "wiki:domenico maria novara da ferrara"], "mgp:126113": [], "wiki:domenico maria novara da ferrara": ["wiki:luca pacioli", "wiki:regiomontanus"], "wiki:regiomontanus": ["wiki:bessarion", "wiki:georg von peuerbach"], "wiki:georg von peuerbach": ["wiki:johannes von gmunden"], "wiki:johannes von gmunden": ["wiki:henry of langenstein"], "wiki:henry of langenstein": ["wiki:nicole oresme"], "wiki:nicole oresme": ["wiki:jean buridan"], "wiki:jean buridan": ["wiki:william of ockham"], "wiki:william of ockham": [], "wiki:luca pacioli": ["title:domenico bragadino"], "title:domenico bragadino": ["wiki:paolo della pergola"], "mgp:184935": [], "mgp:143859": [], "wiki:christiaan huygens": ["wiki:frans van schooten", "wiki:jan jansz de jonge stampioen"], "wiki:frans van schooten": ["wiki:jacobus golius", "wiki:marin mersenne"], "wiki:jacobus golius": ["wiki:thomas van erpe", "wiki:willebrord snellius"], "wiki:willebrord snellius": ["wiki:ludolph van ceulen", "wiki:rudolph snellius"], "wiki:ludolph van ceulen": [], "wiki:rudolph snellius": ["wiki:immanuel tremellius", "wiki:valentin naboth"], "wiki:valentin naboth": ["wiki:erasmus reinhold"], "wiki:immanuel tremellius": ["wiki:thomas cranmer"], "wiki:thomas cranmer": [], "wiki:thomas van erpe": ["wiki:joseph justus scaliger"], "wiki:joseph justus scaliger": ["wiki:adrianus turnebus", "wiki:jean daurat"], "wiki:adrianus turnebus": ["mgp:131546"], "wiki:jean daurat": [], "wiki:jan jansz de jonge stampioen": [], "wiki:giovanni battista beccaria": [], "wiki:pierre-simon laplace": ["wiki:christophe gadbled", "wiki:jean le rond d'alembert"], "wiki:jean le rond d'alembert": ["mgp:294942"], "mgp:294942": ["wiki:pierre varignon"], "wiki:pierre varignon": ["wiki:nicolas malebranche"], "wiki:nicolas malebranche": ["wiki:gottfried wilhelm leibniz"], "wiki:marin mersenne": [], "wiki:christophe gadbled": [], "wiki:joseph fourier": ["wiki:jean-baptiste biot", "wiki:joseph-louis lagrange"], "wiki:jean-baptiste biot": ["wiki:gaspard monge"], "wiki:gaspard monge": [], "wiki:pieter abbeel": ["wiki:andrew ng"], "wiki:andrew ng": ["wiki:michael i. jordan"], "wiki:michael i. jordan": ["wiki:david rumelhart", "wiki:don norman"], "wiki:david rumelhart": ["wiki:william kaye estes"], "wiki:william kaye estes": ["wiki:b. f. skinner"], "wiki:b. f. skinner": ["wiki:william john crozier"], "wiki:william john crozier": ["wiki:jacques loeb"], "wiki:jacques loeb": ["wiki:friedrich goltz"], "wiki:friedrich goltz": ["wiki:hermann von helmholtz"], "wiki:hermann von helmholtz": ["wiki:johannes peter müller"], "wiki:johannes peter müller": ["wiki:august franz josef karl mayer", "wiki:karl rudolphi", "wiki:philipp franz von walther"], "wiki:august franz josef karl mayer": ["wiki:carl friedrich kielmeyer"], "wiki:carl friedrich kielmeyer": ["wiki:georg christoph lichtenberg", "wiki:johann friedrich blumenbach", "wiki:johann friedrich gmelin"], "wiki:johann friedrich blumenbach": ["wiki:christian gottlob heyne", "wiki:ernst gottfried baldinger"], "wiki:ernst gottfried baldinger": ["wiki:christoph mangold", "wiki:ernst anton nicolai"], "wiki:ernst anton nicolai": ["wiki:friedrich hoffmann", "wiki:johann heinrich schulze"], "wiki:johann heinrich schulze": [], "wiki:friedrich hoffmann": [], "wiki:christoph mangold": ["wiki:georg erhard hamberger"], "wiki:christian gottlob heyne": ["title:johann august bach", "wiki:johann august ernesti"], "wiki:johann august ernesti": ["wiki:johann matthias gesner"], "wiki:johann matthias gesner": ["title:georg nikolaus köhler", "title:johann zuckermantel", "wiki:johann franz buddeus"], "title:johann zuckermantel": [], "title:georg nikolaus köhler": [], "wiki:johann franz buddeus": ["title:caspar sagittarius"], "title:caspar sagittarius": [], "title:johann august bach": [], "wiki:johann friedrich gmelin": ["wiki:ferdinand christoph oetinger", "wiki:philipp friedrich gmelin"], "wiki:philipp friedrich gmelin": ["wiki:burchard mauchart"], "wiki:burchard mauchart": ["mgp:76482", "title:john thomas woolhouse"], "mgp:76482": ["wiki:elias rudolph camerarius sr."], "wiki:elias rudolph camerarius sr.": ["wiki:georg balthasar metzger"], "wiki:georg balthasar metzger": ["mgp:182088", "mgp:182089", "wiki:emmanuel stupanus"], "mgp:182089": ["wiki:werner rolfinck"], "wiki:realdo colombo": ["wiki:andreas vesalius"], "wiki:andreas vesalius": ["wiki:gemma frisius", "wiki:johann winter von andernach", "wiki:johannes baptista montanus"], "wiki:gemma frisius": ["mgp:125892", "wiki:franciscus monachus"], "mgp:125892": ["wiki:martinus dorpius"], "wiki:martinus dorpius": ["mgp:125897"], "mgp:125897": [], "wiki:franciscus monachus": [], "mgp:182088": ["wiki:johann nikolaus stupanus"], "title:john thomas woolhouse": ["title:thomas woolhouse"], "title:thomas woolhouse": [], "wiki:ferdinand christoph oetinger": ["wiki:michael alberti"], "wiki:michael alberti": ["wiki:georg wolfgang wedel"], "wiki:karl rudolphi": ["wiki:christian ehrenfried weigel"], "wiki:christian ehrenfried weigel": ["wiki:johann christian polycarp erxleben"], "wiki:johann christian polycarp erxleben": ["wiki:abraham gotthelf kästner"], "wiki:philipp franz von walther": ["wiki:georg joseph beer", "wiki:johann peter frank"], "wiki:georg joseph beer": ["wiki:joseph barth"], "wiki:joseph barth": ["wiki:anton von störck"], "wiki:anton von störck": ["wiki:gerard van swieten"], "wiki:gerard van swieten": ["wiki:bernhard siegfried albinus", "wiki:herman boerhaave"], "wiki:bernhard siegfried albinus": ["title:johannes jacobus rau", "wiki:bernhardus albinus", "wiki:herman boerhaave"], "wiki:bernhardus albinus": ["wiki:charles drelincourt (physician)", "wiki:lucas schacht", "wiki:theodor craanen"], "wiki:charles drelincourt (physician)": ["wiki:jean riolan the younger"], "wiki:jean riolan the younger": ["title:simon piètre"], "title:simon piètre": [], "wiki:lucas schacht": ["wiki:franciscus sylvius"], "wiki:franciscus sylvius": ["wiki:adolphus vorstius", "wiki:emmanuel stupanus", "wiki:otto heurnius"], "wiki:adolphus vorstius": ["wiki:adriaan van den spiegel"], "wiki:otto heurnius": ["wiki:johannes heurnius", "wiki:pierre du moulin"], "wiki:johannes heurnius": ["wiki:hieronymus fabricius", "wiki:petrus ramus"], "wiki:pierre du moulin": [], "wiki:theodor craanen": ["title:johannes de bruyn", "wiki:henricus regius", "wiki:johannes clauberg"], "title:johannes de bruyn": ["title:jacob ravensberg"], "title:jacob ravensberg": [], "wiki:henricus regius": ["wiki:adriaan van den spiegel", "wiki:cesare cremonini (philosopher)", "wiki:lazare rivière", "wiki:nicolaus mulerius", "wiki:santorio santorio"], "wiki:nicolaus mulerius": [], "wiki:lazare rivière": [], "wiki:cesare cremonini (philosopher)": [], "wiki:santorio santorio": [], "wiki:johannes clauberg": ["wiki:johannes de raey"], "wiki:johannes de raey": ["wiki:adriaan heereboord"], "wiki:adriaan heereboord": ["wiki:franco burgersdijk"], "wiki:franco burgersdijk": [], "wiki:herman boerhaave": ["wiki:burchard de volder"], "wiki:burchard de volder": ["wiki:franciscus sylvius"], "title:johannes jacobus rau": ["wiki:charles drelincourt (physician)", "wiki:frederik ruysch"], "wiki:frederik ruysch": ["wiki:franciscus sylvius", "wiki:johannes van horne"], "wiki:johannes van horne": ["title:willem van der straaten", "wiki:marco aurelio severino"], "title:willem van der straaten": [], "wiki:marco aurelio severino": [], "wiki:johann peter frank": ["wiki:georg matthäus gattenhof"], "wiki:georg matthäus gattenhof": ["wiki:albrecht von haller"], "wiki:albrecht von haller": ["wiki:bernhard siegfried albinus", "wiki:herman boerhaave", "wiki:jacob b. winslow", "wiki:james douglas (physician)", "wiki:johann bernoulli"], "wiki:james douglas (physician)": [], "wiki:jacob b. winslow": ["wiki:joseph guichard duverney"], "wiki:joseph guichard duverney": [], "wiki:don norman": ["wiki:r. duncan luce"], "wiki:r. duncan luce": ["wiki:irvin cohen"], "wiki:irvin cohen": ["wiki:oscar zariski"], "wiki:oscar zariski": ["wiki:guido castelnuovo"], "wiki:guido castelnuovo": ["wiki:giuseppe veronese"], "wiki:giuseppe veronese": ["wiki:luigi cremona"], "wiki:luigi cremona": ["wiki:francesco brioschi"], "wiki:francesco brioschi": ["wiki:antonio maria bordoni"], "wiki:antonio maria bordoni": ["wiki:vincenzo brunacci"], "wiki:vincenzo brunacci": ["wiki:pietro paoli"], "wiki:pietro paoli": ["wiki:gregorio fontana"], "wiki:gregorio fontana": []}, "edgeProbabilities": {"wiki:ron rivest\u0000wiki:robert w. floyd": 1.0, "wiki:avrim blum\u0000wiki:ron rivest": 1.0, "title:nika haghtalab\u0000wiki:avrim blum": 1.0, "wiki:jakob thomasius\u0000wiki:friedrich leibniz": 1.0, "wiki:otto mencke\u0000wiki:jakob thomasius": 1.0, "wiki:johann christoph wichmannshausen\u0000wiki:otto mencke": 1.0, "wiki:christian august hausen\u0000wiki:johann christoph wichmannshausen": 1.0, "wiki:abraham gotthelf kästner\u0000wiki:christian august hausen": 1.0, "wiki:johann tobias mayer\u0000wiki:abraham gotthelf kästner": 1.0, "wiki:georg christoph lichtenberg\u0000wiki:abraham gotthelf kästner": 1.0, "wiki:johann tobias mayer\u0000wiki:georg christoph lichtenberg": 1.0, "wiki:enno dirksen\u0000wiki:johann tobias mayer": 1.0, "wiki:bernhard friedrich thibaut\u0000wiki:abraham gotthelf kästner": 0.5, "wiki:bernhard friedrich thibaut\u0000wiki:georg christoph lichtenberg": 0.5, "wiki:enno dirksen\u0000wiki:bernhard friedrich thibaut": 1.0, "wiki:carl gustav jacob jacobi\u0000wiki:enno dirksen": 1.0, "wiki:friedrich julius richelot\u0000wiki:carl gustav jacob jacobi": 1.0, "wiki:carl neumann\u0000wiki:friedrich julius richelot": 1.0, "wiki:eduard heine\u0000wiki:enno dirksen": 1.0, "wiki:karl christian von langsdorf\u0000wiki:abraham gotthelf kästner": 0.5, "wiki:martin ohm\u0000wiki:karl christian von langsdorf": 0.5, "wiki:eduard heine\u0000wiki:martin ohm": 1.0, "wiki:carl neumann\u0000wiki:eduard heine": 1.0, "wiki:william edward story\u0000wiki:carl neumann": 1.0, "wiki:solomon lefschetz\u0000wiki:william edward story": 1.0, "wiki:albert w. tucker\u0000wiki:solomon lefschetz": 1.0, "wiki:marvin minsky\u0000wiki:albert w. tucker": 1.0, "wiki:joel moses\u0000wiki:marvin minsky": 1.0, "wiki:michael genesereth\u0000wiki:joel moses": 1.0, "url:https://www.cs.huji.ac.il/~jeff\u0000wiki:michael genesereth": 1.0, "wiki:ariel d. procaccia\u0000url:https://www.cs.huji.ac.il/~jeff": 1.0, "title:nika haghtalab\u0000wiki:ariel d. procaccia": 1.0, "title:me\u0000title:nika haghtalab": 1.0, "wiki:johann friedrich pfaff\u0000wiki:abraham gotthelf kästner": 1.0, "wiki:gaetano da thiene (philosopher)\u0000wiki:paul of venice": 0.5, "mgp:136726\u0000wiki:gaetano da thiene (philosopher)": 1.0, "mgp:136726\u0000wiki:sigismondo polcastro": 1.0, "wiki:niccolò leoniceno\u0000mgp:136726": 0.7, "wiki:antonio musa brassavola\u0000wiki:niccolò leoniceno": 1.0, "wiki:giovanni manardo\u0000wiki:niccolò leoniceno": 1.0, "wiki:giovanni manardo\u0000title:francesco benzi": 1.0, "wiki:antonio musa brassavola\u0000wiki:giovanni manardo": 1.0, "wiki:gabriele falloppio\u0000wiki:antonio musa brassavola": 1.0, "wiki:hieronymus fabricius\u0000wiki:gabriele falloppio": 1.0, "wiki:adriaan van den spiegel\u0000wiki:hieronymus fabricius": 1.0, "wiki:werner rolfinck\u0000wiki:adriaan van den spiegel": 1.0, "wiki:jan jesenius\u0000wiki:hieronymus fabricius": 1.0, "wiki:daniel sennert\u0000wiki:jan jesenius": 1.0, "mgp:200006\u0000mgp:224249": 0.5, "mgp:128105\u0000mgp:200006": 0.5, "wiki:jacobus latomus\u0000wiki:jan standonck": 0.5, "wiki:nicolas cleynaerts\u0000wiki:jacobus latomus": 0.5, "wiki:kamal al-din ibn yunus\u0000wiki:sharaf al-din al-tusi": 1.0, "wiki:avicenna\u0000wiki:al-natili": 0.5, "wiki:avicenna\u0000wiki:abu sahl 'isa ibn yahya al-masihi": 0.5, "wiki:avicenna\u0000mgp:316873": 0.5, "wiki:bahmanyar\u0000wiki:avicenna": 1.0, "wiki:omar khayyam\u0000wiki:bahmanyar": 0.7, "mgp:287466\u0000wiki:omar khayyam": 0.5, "wiki:kamal al-din ibn yunus\u0000mgp:287466": 0.5, "wiki:nasir al-din al-tusi\u0000wiki:kamal al-din ibn yunus": 1.0, "wiki:athir al-din al-abhari\u0000wiki:kamal al-din ibn yunus": 1.0, "wiki:fakhr al-din al-razi\u0000mgp:287466": 0.5, "mgp:287479\u0000wiki:fakhr al-din al-razi": 1.0, "wiki:athir al-din al-abhari\u0000mgp:287479": 0.5, "wiki:nasir al-din al-tusi\u0000wiki:athir al-din al-abhari": 0.7, "mgp:204293\u0000wiki:nasir al-din al-tusi": 0.7, "wiki:gregory chioniades\u0000mgp:204293": 1.0, "wiki:manuel bryennios\u0000wiki:gregory chioniades": 0.5, "wiki:theodore metochites\u0000wiki:manuel bryennios": 0.9, "wiki:gregory palamas\u0000wiki:theodore metochites": 0.5, "wiki:neilos kabasilas\u0000wiki:gregory palamas": 0.5, "wiki:demetrios kydones\u0000wiki:neilos kabasilas": 1.0, "wiki:gemistos plethon\u0000wiki:demetrios kydones": 0.5, "wiki:gemistos plethon\u0000mgp:134781": 0.9, "wiki:bessarion\u0000wiki:gemistos plethon": 1.0, "wiki:john argyropoulos\u0000wiki:bessarion": 0.5, "wiki:johann reuchlin\u0000wiki:john argyropoulos": 0.5, "wiki:johann reuchlin\u0000wiki:jacob ben jehiel loans": 1.0, "wiki:johannes campensis\u0000wiki:johann reuchlin": 0.5, "wiki:johannes campensis\u0000mgp:125794": 1.0, "wiki:nicolas cleynaerts\u0000wiki:johannes campensis": 0.5, "wiki:johannes sturm\u0000wiki:nicolas cleynaerts": 0.5, "wiki:girolamo aleandro\u0000mgp:131446": 0.5, "wiki:marsilio ficino\u0000wiki:john argyropoulos": 0.5, "wiki:poliziano\u0000wiki:marsilio ficino": 1.0, "wiki:gasparino barzizza\u0000url:https://www.treccani.it/enciclopedia/giovanni-travesi_(Dizionario-Biografico)": 1.0, "wiki:vittorino da feltre\u0000wiki:gasparino barzizza": 1.0, "wiki:vittorino da feltre\u0000wiki:giovanni conversini": 1.0, "wiki:manuel chrysoloras\u0000wiki:demetrios kydones": 1.0, "wiki:guarino da verona\u0000wiki:manuel chrysoloras": 1.0, "wiki:guarino da verona\u0000wiki:giovanni conversini": 1.0, "wiki:vittorino da feltre\u0000wiki:guarino da verona": 1.0, "wiki:george of trebizond\u0000wiki:vittorino da feltre": 0.5, "wiki:cristoforo landino\u0000wiki:george of trebizond": 1.0, "wiki:poliziano\u0000wiki:cristoforo landino": 1.0, "mgp:131447\u0000wiki:poliziano": 1.0, "wiki:girolamo aleandro\u0000mgp:131447": 0.5, "mgp:126571\u0000wiki:girolamo aleandro": 0.5, "wiki:johann winter von andernach\u0000mgp:126571": 0.5, "wiki:jacques dubois\u0000mgp:128987": 0.5, "wiki:jean tagault\u0000title:jean desjardins": 1.0, "wiki:jacques dubois\u0000wiki:jean tagault": 1.0, "wiki:johann winter von andernach\u0000wiki:jacques dubois": 0.5, "wiki:jacques dubois\u0000wiki:george hermonymus": 1.0, "wiki:janus lascaris\u0000wiki:bessarion": 0.5, "wiki:theodorus gaza\u0000wiki:vittorino da feltre": 1.0, "wiki:demetrios chalkokondyles\u0000wiki:theodorus gaza": 1.0, "wiki:janus lascaris\u0000wiki:demetrios chalkokondyles": 0.5, "wiki:jacques dubois\u0000wiki:janus lascaris": 1.0, "wiki:jacques lefèvre d'étaples\u0000wiki:george hermonymus": 1.0, "wiki:jacques dubois\u0000wiki:jacques lefèvre d'étaples": 1.0, "wiki:françois vatable\u0000wiki:jacques lefèvre d'étaples": 0.5, "wiki:jacques dubois\u0000wiki:françois vatable": 1.0, "wiki:johannes sturm\u0000wiki:johann winter von andernach": 1.0, "wiki:petrus ramus\u0000wiki:johannes sturm": 1.0, "wiki:guillaume budé\u0000wiki:george hermonymus": 0.5, "wiki:guillaume budé\u0000wiki:janus lascaris": 1.0, "mgp:131546\u0000wiki:guillaume budé": 0.5, "wiki:petrus ramus\u0000mgp:131546": 0.5, "wiki:theodor zwinger\u0000wiki:petrus ramus": 1.0, "mgp:149192\u0000wiki:vittorino da feltre": 0.5, "wiki:niccolò leoniceno\u0000mgp:149192": 0.5, "url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1\u0000title:marinus of alexandria": 1.0, "wiki:numisianus\u0000url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1": 1.0, "mgp:127144\u0000wiki:numisianus": 1.0, "mgp:127144\u0000url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1": 0.9, "wiki:niccolò leoniceno\u0000mgp:127144": 0.5, "wiki:johannes baptista montanus\u0000wiki:niccolò leoniceno": 0.5, "wiki:marcus musurus\u0000wiki:janus lascaris": 1.0, "wiki:johannes baptista montanus\u0000wiki:marcus musurus": 1.0, "wiki:nicoletto vernia\u0000wiki:gaetano da thiene (philosopher)": 0.5, "wiki:paolo della pergola\u0000wiki:paul of venice": 0.5, "wiki:nicoletto vernia\u0000wiki:paolo della pergola": 0.5, "wiki:pietro pomponazzi\u0000wiki:nicoletto vernia": 1.0, "wiki:pietro pomponazzi\u0000mgp:136726": 0.5, "wiki:johannes baptista montanus\u0000wiki:pietro pomponazzi": 0.5, "mgp:152906\u0000wiki:johannes baptista montanus": 0.5, "wiki:vittore trincavelli\u0000wiki:pietro pomponazzi": 1.0, "mgp:152906\u0000wiki:vittore trincavelli": 0.5, "wiki:theodor zwinger\u0000mgp:152906": 0.5, "wiki:theodor zwinger\u0000wiki:vittore trincavelli": 1.0, "wiki:john craig (physician)\u0000wiki:theodor zwinger": 0.5, "wiki:duncan liddel\u0000wiki:john craig (physician)": 1.0, "wiki:erasmus\u0000wiki:jan standonck": 0.5, "wiki:rodolphus agricola\u0000wiki:theodorus gaza": 0.5, "wiki:alexander hegius von heek\u0000wiki:rodolphus agricola": 0.9, "wiki:thomas à kempis\u0000wiki:geert groote": 0.5, "wiki:thomas à kempis\u0000wiki:florens radewyns": 0.5, "wiki:alexander hegius von heek\u0000wiki:thomas à kempis": 0.5, "wiki:erasmus\u0000wiki:alexander hegius von heek": 1.0, "wiki:jacob milich\u0000wiki:erasmus": 0.5, "wiki:jacob milich\u0000wiki:ulrich zasius": 0.5, "wiki:erasmus reinhold\u0000wiki:jacob milich": 1.0, "wiki:johann hommel\u0000wiki:erasmus reinhold": 0.5, "wiki:philip melanchthon\u0000wiki:johannes stöffler": 1.0, "wiki:philip melanchthon\u0000wiki:johann reuchlin": 0.5, "wiki:johann reuchlin\u0000wiki:obadiah ben jacob sforno": 1.0, "wiki:johann hommel\u0000wiki:philip melanchthon": 0.5, "mgp:127092\u0000wiki:johann hommel": 1.0, "wiki:paul wittich\u0000mgp:127092": 0.9, "wiki:duncan liddel\u0000wiki:paul wittich": 1.0, "mgp:128105\u0000wiki:duncan liddel": 1.0, "wiki:jakob martini\u0000mgp:128105": 1.0, "wiki:daniel sennert\u0000wiki:jakob martini": 1.0, "wiki:werner rolfinck\u0000wiki:daniel sennert": 1.0, "wiki:georg wolfgang wedel\u0000wiki:werner rolfinck": 1.0, "wiki:johann adolph wedel\u0000wiki:georg wolfgang wedel": 1.0, "wiki:georg erhard hamberger\u0000wiki:johann adolph wedel": 1.0, "wiki:johann andreas segner\u0000wiki:georg erhard hamberger": 1.0, "wiki:johann georg büsch\u0000wiki:johann andreas segner": 1.0, "wiki:johann elert bode\u0000wiki:johann georg büsch": 1.0, "wiki:johann friedrich pfaff\u0000wiki:johann elert bode": 1.0, "wiki:carl friedrich gauss\u0000wiki:johann friedrich pfaff": 1.0, "wiki:christian ludwig gerling\u0000wiki:carl friedrich gauss": 1.0, "wiki:julius plücker\u0000wiki:christian ludwig gerling": 1.0, "wiki:felix klein\u0000wiki:julius plücker": 1.0, "wiki:thomas platter\u0000wiki:oswald myconius": 1.0, "wiki:theodor zwinger\u0000wiki:thomas platter": 1.0, "wiki:theodor zwinger\u0000wiki:gabriele falloppio": 1.0, "wiki:petrus ryff\u0000wiki:theodor zwinger": 1.0, "wiki:thomas erastus\u0000wiki:luca ghini": 1.0, "wiki:petrus ryff\u0000wiki:thomas erastus": 1.0, "wiki:guillaume rondelet\u0000wiki:johann winter von andernach": 1.0, "wiki:felix platter\u0000wiki:guillaume rondelet": 1.0, "wiki:petrus ryff\u0000wiki:felix platter": 1.0, "wiki:johann nikolaus stupanus\u0000wiki:theodor zwinger": 0.5, "wiki:petrus ryff\u0000wiki:johann nikolaus stupanus": 1.0, "wiki:emmanuel stupanus\u0000wiki:petrus ryff": 1.0, "wiki:emmanuel stupanus\u0000wiki:johann nikolaus stupanus": 1.0, "wiki:emmanuel stupanus\u0000wiki:felix platter": 1.0, "wiki:nikolaus eglinger\u0000wiki:emmanuel stupanus": 1.0, "wiki:johann bauhin\u0000wiki:emmanuel stupanus": 1.0, "wiki:johann bauhin\u0000wiki:leonhart fuchs": 1.0, "wiki:nikolaus eglinger\u0000wiki:johann bauhin": 1.0, "wiki:johann bernoulli\u0000wiki:nikolaus eglinger": 1.0, "wiki:wolfgang capito\u0000wiki:ulrich zasius": 0.5, "wiki:wolfgang capito\u0000wiki:erasmus": 0.5, "wiki:simon sulzer\u0000wiki:wolfgang capito": 0.5, "wiki:simon grynaeus\u0000wiki:johann reuchlin": 0.5, "wiki:simon grynaeus\u0000wiki:philip melanchthon": 0.5, "wiki:simon sulzer\u0000wiki:simon grynaeus": 0.5, "wiki:johann jakob grynaeus\u0000wiki:simon sulzer": 1.0, "wiki:jakob beurlin\u0000mgp:152647": 0.5, "wiki:jakob andreae\u0000wiki:jakob beurlin": 0.5, "wiki:johann jakob grynaeus\u0000wiki:jakob andreae": 1.0, "mgp:143082\u0000wiki:johann jakob grynaeus": 1.0, "mgp:143083\u0000mgp:143082": 1.0, "wiki:peter werenfels\u0000mgp:143083": 1.0, "wiki:jacob bernoulli\u0000wiki:peter werenfels": 1.0, "wiki:gottfried wilhelm leibniz\u0000wiki:jakob thomasius": 0.5, "mgp:126730\u0000mgp:126724": 0.5, "wiki:georg joachim rheticus\u0000mgp:126730": 1.0, "wiki:nicolaus copernicus\u0000mgp:126113": 0.5, "wiki:jean buridan\u0000wiki:william of ockham": 1.0, "wiki:nicole oresme\u0000wiki:jean buridan": 1.0, "wiki:henry of langenstein\u0000wiki:nicole oresme": 1.0, "wiki:johannes von gmunden\u0000wiki:henry of langenstein": 1.0, "wiki:georg von peuerbach\u0000wiki:johannes von gmunden": 1.0, "wiki:regiomontanus\u0000wiki:georg von peuerbach": 1.0, "wiki:regiomontanus\u0000wiki:bessarion": 1.0, "wiki:domenico maria novara da ferrara\u0000wiki:regiomontanus": 1.0, "title:domenico bragadino\u0000wiki:paolo della pergola": 1.0, "wiki:luca pacioli\u0000title:domenico bragadino": 1.0, "wiki:domenico maria novara da ferrara\u0000wiki:luca pacioli": 1.0, "wiki:nicolaus copernicus\u0000wiki:domenico maria novara da ferrara": 0.9, "wiki:georg joachim rheticus\u0000wiki:nicolaus copernicus": 1.0, "mgp:127790\u0000wiki:georg joachim rheticus": 0.7, "mgp:127790\u0000mgp:184935": 0.5, "mgp:144220\u0000mgp:127790": 1.0, "title:philipp müller\u0000mgp:144220": 1.0, "wiki:erhard weigel\u0000title:philipp müller": 1.0, "wiki:gottfried wilhelm leibniz\u0000wiki:erhard weigel": 1.0, "wiki:gottfried wilhelm leibniz\u0000mgp:143859": 0.5, "wiki:willebrord snellius\u0000wiki:ludolph van ceulen": 1.0, "wiki:valentin naboth\u0000wiki:erasmus reinhold": 0.5, "wiki:rudolph snellius\u0000wiki:valentin naboth": 1.0, "wiki:immanuel tremellius\u0000wiki:thomas cranmer": 0.5, "wiki:rudolph snellius\u0000wiki:immanuel tremellius": 1.0, "wiki:willebrord snellius\u0000wiki:rudolph snellius": 1.0, "wiki:jacobus golius\u0000wiki:willebrord snellius": 1.0, "wiki:joseph justus scaliger\u0000wiki:adrianus turnebus": 1.0, "wiki:joseph justus scaliger\u0000wiki:jean daurat": 1.0, "wiki:thomas van erpe\u0000wiki:joseph justus scaliger": 0.5, "wiki:jacobus golius\u0000wiki:thomas van erpe": 1.0, "wiki:frans van schooten\u0000wiki:jacobus golius": 1.0, "wiki:christiaan huygens\u0000wiki:frans van schooten": 1.0, "wiki:christiaan huygens\u0000wiki:jan jansz de jonge stampioen": 0.7, "wiki:gottfried wilhelm leibniz\u0000wiki:christiaan huygens": 1.0, "wiki:jacob bernoulli\u0000wiki:gottfried wilhelm leibniz": 1.0, "wiki:johann bernoulli\u0000wiki:jacob bernoulli": 1.0, "wiki:leonhard euler\u0000wiki:johann bernoulli": 1.0, "wiki:joseph-louis lagrange\u0000wiki:leonhard euler": 1.0, "wiki:joseph-louis lagrange\u0000wiki:giovanni battista beccaria": 1.0, "wiki:siméon denis poisson\u0000wiki:joseph-louis lagrange": 1.0, "wiki:adrianus turnebus\u0000mgp:131546": 0.5, "wiki:frans van schooten\u0000wiki:marin mersenne": 0.5, "wiki:nicolas malebranche\u0000wiki:gottfried wilhelm leibniz": 0.5, "wiki:pierre varignon\u0000wiki:nicolas malebranche": 0.5, "mgp:294942\u0000wiki:pierre varignon": 0.5, "wiki:jean le rond d'alembert\u0000mgp:294942": 0.5, "wiki:pierre-simon laplace\u0000wiki:jean le rond d'alembert": 1.0, "wiki:pierre-simon laplace\u0000wiki:christophe gadbled": 1.0, "wiki:siméon denis poisson\u0000wiki:pierre-simon laplace": 1.0, "wiki:peter gustav lejeune dirichlet\u0000wiki:siméon denis poisson": 1.0, "wiki:jean-baptiste biot\u0000wiki:gaspard monge": 1.0, "wiki:joseph fourier\u0000wiki:jean-baptiste biot": 1.0, "wiki:joseph fourier\u0000wiki:joseph-louis lagrange": 1.0, "wiki:peter gustav lejeune dirichlet\u0000wiki:joseph fourier": 1.0, "wiki:peter gustav lejeune dirichlet\u0000wiki:carl friedrich gauss": 1.0, "wiki:rudolf lipschitz\u0000wiki:peter gustav lejeune dirichlet": 1.0, "wiki:rudolf lipschitz\u0000wiki:martin ohm": 1.0, "wiki:felix klein\u0000wiki:rudolf lipschitz": 1.0, "wiki:ferdinand von lindemann\u0000wiki:felix klein": 1.0, "wiki:arnold sommerfeld\u0000wiki:ferdinand von lindemann": 1.0, "wiki:arnold sommerfeld\u0000wiki:felix klein": 1.0, "wiki:ernst guillemin\u0000wiki:arnold sommerfeld": 1.0, "wiki:robert fano\u0000wiki:ernst guillemin": 1.0, "wiki:john wozencraft\u0000wiki:robert fano": 1.0, "wiki:jacob ziv\u0000wiki:john wozencraft": 1.0, "url:https://webee.technion.ac.il/people/merhav\u0000wiki:jacob ziv": 1.0, "wiki:tsachy weissman\u0000url:https://webee.technion.ac.il/people/merhav": 1.0, "title:jiantao jiao\u0000wiki:tsachy weissman": 1.0, "title:me\u0000title:jiantao jiao": 1.0, "wiki:ernst anton nicolai\u0000wiki:johann heinrich schulze": 1.0, "wiki:ernst anton nicolai\u0000wiki:friedrich hoffmann": 1.0, "wiki:ernst gottfried baldinger\u0000wiki:ernst anton nicolai": 1.0, "wiki:christoph mangold\u0000wiki:georg erhard hamberger": 1.0, "wiki:ernst gottfried baldinger\u0000wiki:christoph mangold": 1.0, "wiki:johann friedrich blumenbach\u0000wiki:ernst gottfried baldinger": 1.0, "wiki:johann matthias gesner\u0000title:johann zuckermantel": 0.7, "wiki:johann matthias gesner\u0000title:georg nikolaus köhler": 0.7, "wiki:johann franz buddeus\u0000title:caspar sagittarius": 1.0, "wiki:johann matthias gesner\u0000wiki:johann franz buddeus": 1.0, "wiki:johann august ernesti\u0000wiki:johann matthias gesner": 0.5, "wiki:christian gottlob heyne\u0000wiki:johann august ernesti": 1.0, "wiki:christian gottlob heyne\u0000title:johann august bach": 1.0, "wiki:johann friedrich blumenbach\u0000wiki:christian gottlob heyne": 1.0, "wiki:carl friedrich kielmeyer\u0000wiki:johann friedrich blumenbach": 1.0, "wiki:andreas vesalius\u0000wiki:johann winter von andernach": 0.5, "wiki:martinus dorpius\u0000mgp:125897": 0.5, "mgp:125892\u0000wiki:martinus dorpius": 0.5, "wiki:gemma frisius\u0000mgp:125892": 0.5, "wiki:gemma frisius\u0000wiki:franciscus monachus": 1.0, "wiki:andreas vesalius\u0000wiki:gemma frisius": 1.0, "wiki:andreas vesalius\u0000wiki:johannes baptista montanus": 0.5, "wiki:realdo colombo\u0000wiki:andreas vesalius": 0.5, "wiki:gabriele falloppio\u0000wiki:realdo colombo": 0.5, "mgp:182089\u0000wiki:werner rolfinck": 0.5, "wiki:georg balthasar metzger\u0000mgp:182089": 0.5, "mgp:182088\u0000wiki:johann nikolaus stupanus": 0.5, "wiki:georg balthasar metzger\u0000mgp:182088": 0.5, "wiki:elias rudolph camerarius sr.\u0000wiki:georg balthasar metzger": 1.0, "mgp:76482\u0000wiki:elias rudolph camerarius sr.": 1.0, "wiki:georg balthasar metzger\u0000wiki:emmanuel stupanus": 1.0, "wiki:burchard mauchart\u0000mgp:76482": 1.0, "title:john thomas woolhouse\u0000title:thomas woolhouse": 0.9, "wiki:burchard mauchart\u0000title:john thomas woolhouse": 1.0, "wiki:philipp friedrich gmelin\u0000wiki:burchard mauchart": 1.0, "wiki:johann friedrich gmelin\u0000wiki:philipp friedrich gmelin": 1.0, "wiki:michael alberti\u0000wiki:georg wolfgang wedel": 1.0, "wiki:ferdinand christoph oetinger\u0000wiki:michael alberti": 1.0, "wiki:johann friedrich gmelin\u0000wiki:ferdinand christoph oetinger": 1.0, "wiki:carl friedrich kielmeyer\u0000wiki:johann friedrich gmelin": 1.0, "wiki:carl friedrich kielmeyer\u0000wiki:georg christoph lichtenberg": 1.0, "wiki:august franz josef karl mayer\u0000wiki:carl friedrich kielmeyer": 1.0, "wiki:johannes peter müller\u0000wiki:august franz josef karl mayer": 1.0, "wiki:johann christian polycarp erxleben\u0000wiki:abraham gotthelf kästner": 1.0, "wiki:christian ehrenfried weigel\u0000wiki:johann christian polycarp erxleben": 1.0, "wiki:karl rudolphi\u0000wiki:christian ehrenfried weigel": 1.0, "wiki:johannes peter müller\u0000wiki:karl rudolphi": 1.0, "wiki:jean riolan the younger\u0000title:simon piètre": 1.0, "wiki:charles drelincourt (physician)\u0000wiki:jean riolan the younger": 1.0, "wiki:bernhardus albinus\u0000wiki:charles drelincourt (physician)": 1.0, "wiki:franciscus sylvius\u0000wiki:emmanuel stupanus": 1.0, "wiki:adolphus vorstius\u0000wiki:adriaan van den spiegel": 0.5, "wiki:franciscus sylvius\u0000wiki:adolphus vorstius": 1.0, "wiki:johannes heurnius\u0000wiki:petrus ramus": 1.0, "wiki:johannes heurnius\u0000wiki:hieronymus fabricius": 1.0, "wiki:otto heurnius\u0000wiki:johannes heurnius": 1.0, "wiki:otto heurnius\u0000wiki:pierre du moulin": 1.0, "wiki:franciscus sylvius\u0000wiki:otto heurnius": 1.0, "wiki:lucas schacht\u0000wiki:franciscus sylvius": 1.0, "wiki:bernhardus albinus\u0000wiki:lucas schacht": 1.0, "title:johannes de bruyn\u0000title:jacob ravensberg": 1.0, "wiki:theodor craanen\u0000title:johannes de bruyn": 1.0, "wiki:henricus regius\u0000wiki:nicolaus mulerius": 1.0, "wiki:henricus regius\u0000wiki:lazare rivière": 1.0, "wiki:henricus regius\u0000wiki:cesare cremonini (philosopher)": 1.0, "wiki:henricus regius\u0000wiki:santorio santorio": 1.0, "wiki:henricus regius\u0000wiki:adriaan van den spiegel": 1.0, "wiki:theodor craanen\u0000wiki:henricus regius": 1.0, "wiki:adriaan heereboord\u0000wiki:franco burgersdijk": 1.0, "wiki:johannes de raey\u0000wiki:adriaan heereboord": 1.0, "wiki:johannes clauberg\u0000wiki:johannes de raey": 1.0, "wiki:theodor craanen\u0000wiki:johannes clauberg": 1.0, "wiki:bernhardus albinus\u0000wiki:theodor craanen": 1.0, "wiki:bernhard siegfried albinus\u0000wiki:bernhardus albinus": 1.0, "wiki:burchard de volder\u0000wiki:franciscus sylvius": 1.0, "wiki:herman boerhaave\u0000wiki:burchard de volder": 1.0, "wiki:bernhard siegfried albinus\u0000wiki:herman boerhaave": 1.0, "title:johannes jacobus rau\u0000wiki:charles drelincourt (physician)": 1.0, "wiki:frederik ruysch\u0000wiki:franciscus sylvius": 1.0, "wiki:johannes van horne\u0000title:willem van der straaten": 1.0, "wiki:johannes van horne\u0000wiki:marco aurelio severino": 1.0, "wiki:frederik ruysch\u0000wiki:johannes van horne": 1.0, "title:johannes jacobus rau\u0000wiki:frederik ruysch": 0.5, "wiki:bernhard siegfried albinus\u0000title:johannes jacobus rau": 1.0, "wiki:gerard van swieten\u0000wiki:bernhard siegfried albinus": 1.0, "wiki:gerard van swieten\u0000wiki:herman boerhaave": 1.0, "wiki:anton von störck\u0000wiki:gerard van swieten": 1.0, "wiki:joseph barth\u0000wiki:anton von störck": 1.0, "wiki:georg joseph beer\u0000wiki:joseph barth": 1.0, "wiki:philipp franz von walther\u0000wiki:georg joseph beer": 1.0, "wiki:albrecht von haller\u0000wiki:herman boerhaave": 1.0, "wiki:albrecht von haller\u0000wiki:bernhard siegfried albinus": 1.0, "wiki:albrecht von haller\u0000wiki:james douglas (physician)": 1.0, "wiki:jacob b. winslow\u0000wiki:joseph guichard duverney": 1.0, "wiki:albrecht von haller\u0000wiki:jacob b. winslow": 1.0, "wiki:albrecht von haller\u0000wiki:johann bernoulli": 1.0, "wiki:georg matthäus gattenhof\u0000wiki:albrecht von haller": 1.0, "wiki:johann peter frank\u0000wiki:georg matthäus gattenhof": 1.0, "wiki:philipp franz von walther\u0000wiki:johann peter frank": 1.0, "wiki:johannes peter müller\u0000wiki:philipp franz von walther": 1.0, "wiki:hermann von helmholtz\u0000wiki:johannes peter müller": 1.0, "wiki:friedrich goltz\u0000wiki:hermann von helmholtz": 1.0, "wiki:jacques loeb\u0000wiki:friedrich goltz": 1.0, "wiki:william john crozier\u0000wiki:jacques loeb": 1.0, "wiki:b. f. skinner\u0000wiki:william john crozier": 1.0, "wiki:william kaye estes\u0000wiki:b. f. skinner": 1.0, "wiki:david rumelhart\u0000wiki:william kaye estes": 1.0, "wiki:michael i. jordan\u0000wiki:david rumelhart": 1.0, "wiki:pietro paoli\u0000wiki:gregorio fontana": 0.7, "wiki:vincenzo brunacci\u0000wiki:pietro paoli": 1.0, "wiki:antonio maria bordoni\u0000wiki:vincenzo brunacci": 1.0, "wiki:francesco brioschi\u0000wiki:antonio maria bordoni": 1.0, "wiki:luigi cremona\u0000wiki:francesco brioschi": 1.0, "wiki:giuseppe veronese\u0000wiki:luigi cremona": 1.0, "wiki:guido castelnuovo\u0000wiki:giuseppe veronese": 1.0, "wiki:oscar zariski\u0000wiki:guido castelnuovo": 1.0, "wiki:irvin cohen\u0000wiki:oscar zariski": 1.0, "wiki:r. duncan luce\u0000wiki:irvin cohen": 1.0, "wiki:don norman\u0000wiki:r. duncan luce": 1.0, "wiki:michael i. jordan\u0000wiki:don norman": 1.0, "wiki:andrew ng\u0000wiki:michael i. jordan": 1.0, "wiki:pieter abbeel\u0000wiki:andrew ng": 1.0, "title:me\u0000wiki:pieter abbeel": 1.0}, "nodeProbabilities": {"title:me": 1.0, "title:nika haghtalab": 1.0, "wiki:avrim blum": 1.0, "wiki:ron rivest": 1.0, "wiki:robert w. floyd": 1.0, "wiki:ariel d. procaccia": 1.0, "url:https://www.cs.huji.ac.il/~jeff": 1.0, "wiki:michael genesereth": 1.0, "wiki:joel moses": 1.0, "wiki:marvin minsky": 1.0, "wiki:albert w. tucker": 1.0, "wiki:solomon lefschetz": 1.0, "wiki:william edward story": 1.0, "wiki:carl neumann": 1.0, "wiki:friedrich julius richelot": 1.0, "wiki:carl gustav jacob jacobi": 1.0, "wiki:enno dirksen": 1.0, "wiki:johann tobias mayer": 1.0, "wiki:abraham gotthelf kästner": 1.0, "wiki:christian august hausen": 1.0, "wiki:johann christoph wichmannshausen": 1.0, "wiki:otto mencke": 1.0, "wiki:jakob thomasius": 1.0, "wiki:friedrich leibniz": 1.0, "wiki:georg christoph lichtenberg": 1.0, "wiki:bernhard friedrich thibaut": 1.0, "wiki:eduard heine": 1.0, "wiki:martin ohm": 1.0, "wiki:karl christian von langsdorf": 0.5, "title:jiantao jiao": 1.0, "wiki:tsachy weissman": 1.0, "url:https://webee.technion.ac.il/people/merhav": 1.0, "wiki:jacob ziv": 1.0, "wiki:john wozencraft": 1.0, "wiki:robert fano": 1.0, "wiki:ernst guillemin": 1.0, "wiki:arnold sommerfeld": 1.0, "wiki:ferdinand von lindemann": 1.0, "wiki:felix klein": 1.0, "wiki:julius plücker": 1.0, "wiki:christian ludwig gerling": 1.0, "wiki:carl friedrich gauss": 1.0, "wiki:johann friedrich pfaff": 1.0, "wiki:johann elert bode": 1.0, "wiki:johann georg büsch": 1.0, "wiki:johann andreas segner": 1.0, "wiki:georg erhard hamberger": 1.0, "wiki:johann adolph wedel": 1.0, "wiki:georg wolfgang wedel": 1.0, "wiki:werner rolfinck": 1.0, "wiki:adriaan van den spiegel": 1.0, "wiki:hieronymus fabricius": 1.0, "wiki:gabriele falloppio": 1.0, "wiki:antonio musa brassavola": 1.0, "wiki:niccolò leoniceno": 1.0, "mgp:136726": 0.85, "wiki:gaetano da thiene (philosopher)": 0.925, "wiki:paul of venice": 0.6815312499999999, "wiki:sigismondo polcastro": 0.85, "wiki:giovanni manardo": 1.0, "title:francesco benzi": 1.0, "wiki:daniel sennert": 1.0, "wiki:jan jesenius": 1.0, "wiki:jakob martini": 1.0, "mgp:128105": 1.0, "mgp:200006": 0.5, "mgp:224249": 0.25, "wiki:duncan liddel": 1.0, "wiki:john craig (physician)": 1.0, "wiki:theodor zwinger": 1.0, "wiki:petrus ramus": 1.0, "wiki:johannes sturm": 1.0, "wiki:nicolas cleynaerts": 0.5, "wiki:jacobus latomus": 0.25, "wiki:jan standonck": 0.3533203125, "wiki:johannes campensis": 0.25, "wiki:johann reuchlin": 0.521484375, "wiki:john argyropoulos": 0.30694580078125, "wiki:bessarion": 0.8080640338361263, "wiki:gemistos plethon": 0.8080640338361263, "wiki:demetrios kydones": 0.799383130092705, "wiki:neilos kabasilas": 0.799383130092705, "wiki:gregory palamas": 0.3996915650463525, "wiki:theodore metochites": 0.19984578252317625, "wiki:manuel bryennios": 0.17986120427085864, "wiki:gregory chioniades": 0.08993060213542932, "mgp:204293": 0.08993060213542932, "wiki:nasir al-din al-tusi": 0.06295142149480051, "wiki:kamal al-din ibn yunus": 0.06295142149480051, "wiki:sharaf al-din al-tusi": 0.06295142149480051, "mgp:287466": 0.036983960128195305, "wiki:omar khayyam": 0.018491980064097652, "wiki:bahmanyar": 0.012944386044868356, "wiki:avicenna": 0.012944386044868356, "wiki:al-natili": 0.006472193022434178, "wiki:abu sahl 'isa ibn yahya al-masihi": 0.006472193022434178, "mgp:316873": 0.006472193022434178, "wiki:athir al-din al-abhari": 0.04406599504636036, "mgp:287479": 0.02203299752318018, "wiki:fakhr al-din al-razi": 0.02203299752318018, "mgp:134781": 0.7272576304525137, "wiki:jacob ben jehiel loans": 0.521484375, "mgp:125794": 0.25, "wiki:johann winter von andernach": 1.0, "mgp:126571": 0.5, "wiki:girolamo aleandro": 0.25, "mgp:131446": 0.125, "mgp:131447": 0.125, "wiki:poliziano": 0.125, "wiki:marsilio ficino": 0.125, "wiki:cristoforo landino": 0.125, "wiki:george of trebizond": 0.125, "wiki:vittorino da feltre": 0.6703170835971832, "wiki:gasparino barzizza": 0.6703170835971832, "url:https://www.treccani.it/enciclopedia/giovanni-travesi_(Dizionario-Biografico)": 0.6703170835971832, "wiki:giovanni conversini": 0.6703170835971832, "wiki:guarino da verona": 0.6703170835971832, "wiki:manuel chrysoloras": 0.6703170835971832, "wiki:jacques dubois": 0.5, "mgp:128987": 0.25, "wiki:jean tagault": 0.5, "title:jean desjardins": 0.5, "wiki:george hermonymus": 0.578125, "wiki:janus lascaris": 0.7744140625, "wiki:demetrios chalkokondyles": 0.38720703125, "wiki:theodorus gaza": 0.5311176300048828, "wiki:jacques lefèvre d'étaples": 0.5, "wiki:françois vatable": 0.5, "mgp:131546": 0.625, "wiki:guillaume budé": 0.3125, "mgp:152906": 0.5, "wiki:johannes baptista montanus": 0.34375, "mgp:149192": 0.5, "mgp:127144": 0.5, "wiki:numisianus": 0.5, "url:https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0104%3Aentry%3Dquintus-bio-1": 0.5, "title:marinus of alexandria": 0.5, "wiki:marcus musurus": 0.34375, "wiki:pietro pomponazzi": 1.0, "wiki:nicoletto vernia": 1.0, "wiki:paolo della pergola": 0.815, "wiki:vittore trincavelli": 1.0, "wiki:paul wittich": 1.0, "mgp:127092": 0.9, "wiki:johann hommel": 0.9, "wiki:erasmus reinhold": 0.725, "wiki:jacob milich": 0.725, "wiki:erasmus": 0.521875, "wiki:alexander hegius von heek": 0.521875, "wiki:rodolphus agricola": 0.4696875, "wiki:thomas à kempis": 0.2609375, "wiki:geert groote": 0.13046875, "wiki:florens radewyns": 0.13046875, "wiki:ulrich zasius": 0.521875, "wiki:philip melanchthon": 0.5875, "wiki:johannes stöffler": 0.5875, "wiki:obadiah ben jacob sforno": 0.521484375, "wiki:rudolf lipschitz": 1.0, "wiki:peter gustav lejeune dirichlet": 1.0, "wiki:siméon denis poisson": 1.0, "wiki:joseph-louis lagrange": 1.0, "wiki:leonhard euler": 1.0, "wiki:johann bernoulli": 1.0, "wiki:nikolaus eglinger": 1.0, "wiki:emmanuel stupanus": 1.0, "wiki:petrus ryff": 1.0, "wiki:thomas platter": 1.0, "wiki:oswald myconius": 1.0, "wiki:thomas erastus": 1.0, "wiki:luca ghini": 1.0, "wiki:felix platter": 1.0, "wiki:guillaume rondelet": 1.0, "wiki:johann nikolaus stupanus": 1.0, "wiki:johann bauhin": 1.0, "wiki:leonhart fuchs": 1.0, "wiki:jacob bernoulli": 1.0, "wiki:peter werenfels": 1.0, "mgp:143083": 1.0, "mgp:143082": 1.0, "wiki:johann jakob grynaeus": 1.0, "wiki:simon sulzer": 1.0, "wiki:wolfgang capito": 0.5, "wiki:simon grynaeus": 0.5, "wiki:jakob andreae": 1.0, "wiki:jakob beurlin": 0.5, "mgp:152647": 0.25, "wiki:gottfried wilhelm leibniz": 1.0, "wiki:erhard weigel": 1.0, "title:philipp müller": 1.0, "mgp:144220": 1.0, "mgp:127790": 1.0, "wiki:georg joachim rheticus": 0.7, "mgp:126730": 0.7, "mgp:126724": 0.35, "wiki:nicolaus copernicus": 0.7, "mgp:126113": 0.35, "wiki:domenico maria novara da ferrara": 0.63, "wiki:regiomontanus": 0.63, "wiki:georg von peuerbach": 0.63, "wiki:johannes von gmunden": 0.63, "wiki:henry of langenstein": 0.63, "wiki:nicole oresme": 0.63, "wiki:jean buridan": 0.63, "wiki:william of ockham": 0.63, "wiki:luca pacioli": 0.63, "title:domenico bragadino": 0.63, "mgp:184935": 0.5, "mgp:143859": 0.5, "wiki:christiaan huygens": 1.0, "wiki:frans van schooten": 1.0, "wiki:jacobus golius": 1.0, "wiki:willebrord snellius": 1.0, "wiki:ludolph van ceulen": 1.0, "wiki:rudolph snellius": 1.0, "wiki:valentin naboth": 1.0, "wiki:immanuel tremellius": 1.0, "wiki:thomas cranmer": 0.5, "wiki:thomas van erpe": 1.0, "wiki:joseph justus scaliger": 0.5, "wiki:adrianus turnebus": 0.5, "wiki:jean daurat": 0.5, "wiki:jan jansz de jonge stampioen": 0.7, "wiki:giovanni battista beccaria": 1.0, "wiki:pierre-simon laplace": 1.0, "wiki:jean le rond d'alembert": 1.0, "mgp:294942": 0.5, "wiki:pierre varignon": 0.25, "wiki:nicolas malebranche": 0.125, "wiki:marin mersenne": 0.5, "wiki:christophe gadbled": 1.0, "wiki:joseph fourier": 1.0, "wiki:jean-baptiste biot": 1.0, "wiki:gaspard monge": 1.0, "wiki:pieter abbeel": 1.0, "wiki:andrew ng": 1.0, "wiki:michael i. jordan": 1.0, "wiki:david rumelhart": 1.0, "wiki:william kaye estes": 1.0, "wiki:b. f. skinner": 1.0, "wiki:william john crozier": 1.0, "wiki:jacques loeb": 1.0, "wiki:friedrich goltz": 1.0, "wiki:hermann von helmholtz": 1.0, "wiki:johannes peter müller": 1.0, "wiki:august franz josef karl mayer": 1.0, "wiki:carl friedrich kielmeyer": 1.0, "wiki:johann friedrich blumenbach": 1.0, "wiki:ernst gottfried baldinger": 1.0, "wiki:ernst anton nicolai": 1.0, "wiki:johann heinrich schulze": 1.0, "wiki:friedrich hoffmann": 1.0, "wiki:christoph mangold": 1.0, "wiki:christian gottlob heyne": 1.0, "wiki:johann august ernesti": 1.0, "wiki:johann matthias gesner": 0.5, "title:johann zuckermantel": 0.35, "title:georg nikolaus köhler": 0.35, "wiki:johann franz buddeus": 0.5, "title:caspar sagittarius": 0.5, "title:johann august bach": 1.0, "wiki:johann friedrich gmelin": 1.0, "wiki:philipp friedrich gmelin": 1.0, "wiki:burchard mauchart": 1.0, "mgp:76482": 1.0, "wiki:elias rudolph camerarius sr.": 1.0, "wiki:georg balthasar metzger": 1.0, "mgp:182089": 0.5, "wiki:realdo colombo": 0.5, "wiki:andreas vesalius": 0.25, "wiki:gemma frisius": 0.25, "mgp:125892": 0.125, "wiki:martinus dorpius": 0.0625, "mgp:125897": 0.03125, "wiki:franciscus monachus": 0.25, "mgp:182088": 0.5, "title:john thomas woolhouse": 1.0, "title:thomas woolhouse": 0.9, "wiki:ferdinand christoph oetinger": 1.0, "wiki:michael alberti": 1.0, "wiki:karl rudolphi": 1.0, "wiki:christian ehrenfried weigel": 1.0, "wiki:johann christian polycarp erxleben": 1.0, "wiki:philipp franz von walther": 1.0, "wiki:georg joseph beer": 1.0, "wiki:joseph barth": 1.0, "wiki:anton von störck": 1.0, "wiki:gerard van swieten": 1.0, "wiki:bernhard siegfried albinus": 1.0, "wiki:bernhardus albinus": 1.0, "wiki:charles drelincourt (physician)": 1.0, "wiki:jean riolan the younger": 1.0, "title:simon piètre": 1.0, "wiki:lucas schacht": 1.0, "wiki:franciscus sylvius": 1.0, "wiki:adolphus vorstius": 1.0, "wiki:otto heurnius": 1.0, "wiki:johannes heurnius": 1.0, "wiki:pierre du moulin": 1.0, "wiki:theodor craanen": 1.0, "title:johannes de bruyn": 1.0, "title:jacob ravensberg": 1.0, "wiki:henricus regius": 1.0, "wiki:nicolaus mulerius": 1.0, "wiki:lazare rivière": 1.0, "wiki:cesare cremonini (philosopher)": 1.0, "wiki:santorio santorio": 1.0, "wiki:johannes clauberg": 1.0, "wiki:johannes de raey": 1.0, "wiki:adriaan heereboord": 1.0, "wiki:franco burgersdijk": 1.0, "wiki:herman boerhaave": 1.0, "wiki:burchard de volder": 1.0, "title:johannes jacobus rau": 1.0, "wiki:frederik ruysch": 0.5, "wiki:johannes van horne": 0.5, "title:willem van der straaten": 0.5, "wiki:marco aurelio severino": 0.5, "wiki:johann peter frank": 1.0, "wiki:georg matthäus gattenhof": 1.0, "wiki:albrecht von haller": 1.0, "wiki:james douglas (physician)": 1.0, "wiki:jacob b. winslow": 1.0, "wiki:joseph guichard duverney": 1.0, "wiki:don norman": 1.0, "wiki:r. duncan luce": 1.0, "wiki:irvin cohen": 1.0, "wiki:oscar zariski": 1.0, "wiki:guido castelnuovo": 1.0, "wiki:giuseppe veronese": 1.0, "wiki:luigi cremona": 1.0, "wiki:francesco brioschi": 1.0, "wiki:antonio maria bordoni": 1.0, "wiki:vincenzo brunacci": 1.0, "wiki:pietro paoli": 1.0, "wiki:gregorio fontana": 0.7}, "confidenceThreshold": {"min": 0.0, "max": 1.0, "step": 0.01, "default": 0.5}, "baseWidth": 19980, "baseHeight": 1524};
  const svg = document.getElementById("tree-map");
  if (!svg) return;
  const collapsed = new Set();
  let zoom = 1;

  const nodes = Array.from(svg.querySelectorAll(".map-node"));
  const edges = Array.from(svg.querySelectorAll(".map-edge"));
  const edgeLabels = Array.from(svg.querySelectorAll(".map-edge-label"));
  const depthAxis = document.querySelector(".map-depth-axis");
  const depthPositioned = Array.from(document.querySelectorAll(".map-depth-tick, .map-depth-label"));
  const nodesByKey = new Map(nodes.map((node) => [node.dataset.key, node]));
  const fameCards = Array.from(document.querySelectorAll(".fame-card[data-map-key]"));
  const zoomReset = document.getElementById("zoom-reset");
  const clearHighlightButton = document.getElementById("clear-highlight");
  const confidenceFilter = document.getElementById("confidence-filter");
  const confidenceOutput = document.getElementById("confidence-filter-value");
  let minConfidence = Number(confidenceFilter?.value || graph.confidenceThreshold?.default || 0.5);
  let hoverKey = null;
  let selectedKey = null;
  const parents = buildParents();

  function edgeToken(parent, child) {
    return `${parent}\u0000${child}`;
  }

  function formatThreshold(value) {
    return Math.max(0, Math.min(1, Number(value) || 0)).toFixed(2);
  }

  function formatConfidence(value) {
    return `${Math.round(Math.max(0, Math.min(1, Number(value) || 0)) * 100)}%`;
  }

  function nodeConfidence(key) {
    if (key === graph.root) return 1;
    return Number(graph.nodeProbabilities?.[key] || 0);
  }

  function thresholdForValue(value) {
    const min = Number(confidenceFilter?.min ?? graph.confidenceThreshold?.min ?? 0);
    const max = Number(confidenceFilter?.max ?? graph.confidenceThreshold?.max ?? 1);
    const step = Number(confidenceFilter?.step ?? graph.confidenceThreshold?.step ?? 0.01);
    const bounded = Math.max(min, Math.min(max, Number(value) || min));
    return Math.max(min, Math.min(max, Math.floor((bounded - min + 1e-9) / step) * step + min));
  }

  function setConfidenceThreshold(value) {
    minConfidence = thresholdForValue(value);
    if (confidenceFilter) confidenceFilter.value = formatThreshold(minConfidence);
    if (confidenceOutput) confidenceOutput.textContent = formatConfidence(minConfidence);
  }

  function edgePassesConfidence(parent, child) {
    return nodeConfidence(child) + 1e-9 >= minConfidence;
  }

  function buildParents() {
    const parentMap = {};
    for (const [parent, kids] of Object.entries(graph.children)) {
      for (const child of kids || []) {
        if (!parentMap[child]) parentMap[child] = [];
        parentMap[child].push(parent);
      }
    }
    return parentMap;
  }

  function descendantsVisible() {
    const visible = new Set();
    const stack = [graph.root];
    while (stack.length) {
      const key = stack.pop();
      if (visible.has(key)) continue;
      visible.add(key);
      if (collapsed.has(key)) continue;
      for (const child of graph.children[key] || []) {
        if (!edgePassesConfidence(key, child)) continue;
        stack.push(child);
      }
    }
    return visible;
  }

  function collectDescendantBranch(key, visible) {
    const branchNodes = new Set();
    const branchEdges = new Set();
    const stack = [key];
    while (stack.length) {
      const child = stack.pop();
      if (branchNodes.has(child) || !visible.has(child)) continue;
      branchNodes.add(child);
      for (const parent of parents[child] || []) {
        if (!visible.has(parent)) continue;
        if (!edgePassesConfidence(parent, child)) continue;
        branchEdges.add(edgeToken(parent, child));
        stack.push(parent);
      }
    }
    return { branchNodes, branchEdges };
  }

  function clearHighlightClasses() {
    svg.classList.remove("inspecting");
    for (const node of nodes) {
      node.classList.remove("highlight", "selected");
      node.setAttribute("aria-pressed", "false");
    }
    for (const edge of edges) {
      edge.classList.remove("highlight");
    }
    for (const label of edgeLabels) {
      label.classList.remove("highlight");
    }
  }

  function highlightAdjacent(key) {
    const adjacentNodes = new Set([key]);
    svg.classList.add("inspecting");
    for (const edge of edges) {
      const adjacent = edge.dataset.parent === key || edge.dataset.child === key;
      edge.classList.toggle("highlight", adjacent && !edge.classList.contains("hidden"));
      if (adjacent && !edge.classList.contains("hidden")) {
        adjacentNodes.add(edge.dataset.parent);
        adjacentNodes.add(edge.dataset.child);
        edge.parentNode.appendChild(edge);
      }
    }
    for (const label of edgeLabels) {
      const adjacent = label.dataset.parent === key || label.dataset.child === key;
      label.classList.toggle("highlight", adjacent && !label.classList.contains("hidden"));
      if (adjacent && !label.classList.contains("hidden")) label.parentNode.appendChild(label);
    }
    for (const node of nodes) {
      node.classList.toggle("highlight", adjacentNodes.has(node.dataset.key) && !node.classList.contains("hidden"));
    }
  }

  function highlightDescendantBranch(key, visible) {
    const { branchNodes, branchEdges } = collectDescendantBranch(key, visible);
    svg.classList.add("inspecting");
    for (const node of nodes) {
      const isInBranch = branchNodes.has(node.dataset.key) && !node.classList.contains("hidden");
      node.classList.toggle("highlight", isInBranch);
      node.classList.toggle("selected", node.dataset.key === key && isInBranch);
      node.setAttribute("aria-pressed", node.dataset.key === key && isInBranch ? "true" : "false");
    }
    for (const edge of edges) {
      const isInBranch = branchEdges.has(edgeToken(edge.dataset.parent, edge.dataset.child));
      edge.classList.toggle("highlight", isInBranch && !edge.classList.contains("hidden"));
      if (isInBranch && !edge.classList.contains("hidden")) edge.parentNode.appendChild(edge);
    }
    for (const label of edgeLabels) {
      const isInBranch = branchEdges.has(edgeToken(label.dataset.parent, label.dataset.child));
      label.classList.toggle("highlight", isInBranch && !label.classList.contains("hidden"));
      if (isInBranch && !label.classList.contains("hidden")) label.parentNode.appendChild(label);
    }
  }

  function applyHighlight(visible) {
    clearHighlightClasses();
    if (selectedKey && !visible.has(selectedKey)) selectedKey = null;
    if (selectedKey) {
      highlightDescendantBranch(selectedKey, visible);
    } else if (hoverKey && visible.has(hoverKey)) {
      highlightAdjacent(hoverKey);
    }
    if (clearHighlightButton) clearHighlightButton.disabled = !selectedKey;
  }

  function updateHallOfFame(visible) {
    for (const card of fameCards) {
      const key = card.dataset.mapKey || "";
      const isOnMap = nodesByKey.has(key);
      const isVisible = isOnMap && visible.has(key);
      const pathState = isOnMap ? bestPathTo(key) : null;
      const isBelowConfidence = Boolean(pathState && minConfidence > pathState.minConfidence + 1e-9);
      card.classList.toggle("not-on-map", !isOnMap);
      card.classList.toggle("map-hidden", isOnMap && !isVisible);
      const status = card.querySelector(".fame-map-status");
      if (status) {
        if (!isOnMap) {
          status.textContent = "not on map";
        } else if (isVisible) {
          status.textContent = "visible";
        } else if (isBelowConfidence) {
          status.textContent = "below confidence filter";
        } else if (pathState) {
          status.textContent = "hidden by collapsed branch";
        } else {
          status.textContent = "not reachable";
        }
      }
      const button = card.querySelector(".fame-show-map");
      if (button) button.disabled = !isOnMap;
    }
  }

  function updateMap() {
    const visible = descendantsVisible();
    for (const node of nodes) {
      const key = node.dataset.key;
      const isVisible = visible.has(key);
      node.classList.toggle("hidden", !isVisible);
      node.classList.toggle("collapsed", collapsed.has(key));
      const marker = node.querySelector(".map-toggle");
      if (marker) marker.textContent = collapsed.has(key) ? "+" : "-";
    }
    for (const edge of edges) {
      const parent = edge.dataset.parent;
      const child = edge.dataset.child;
      const belowConfidence = !edgePassesConfidence(parent, child);
      edge.classList.toggle("hidden", belowConfidence || !visible.has(parent) || !visible.has(child) || collapsed.has(parent));
    }
    for (const label of edgeLabels) {
      const parent = label.dataset.parent;
      const child = label.dataset.child;
      const belowConfidence = !edgePassesConfidence(parent, child);
      label.classList.toggle("hidden", belowConfidence || !visible.has(parent) || !visible.has(child) || collapsed.has(parent));
    }
    updateHallOfFame(visible);
    applyHighlight(visible);
  }

  function setZoom(nextZoom) {
    zoom = Math.min(2.5, Math.max(0.25, nextZoom));
    svg.setAttribute("width", Math.round(graph.baseWidth * zoom));
    svg.setAttribute("height", Math.round(graph.baseHeight * zoom));
    if (depthAxis) depthAxis.style.width = `${Math.round(graph.baseWidth * zoom)}px`;
    for (const item of depthPositioned) {
      const x = Number(item.dataset.x || 0);
      item.style.left = `${x * zoom}px`;
    }
    if (zoomReset) zoomReset.textContent = `${Math.round(zoom * 100)}%`;
  }

  function selectBranch(key) {
    if (selectedKey === key) {
      selectedKey = null;
    } else {
      selectedKey = key;
    }
    updateMap();
  }

  function toggleCollapse(key) {
    if (!(graph.children[key] || []).length) return;
    if (collapsed.has(key)) collapsed.delete(key);
    else collapsed.add(key);
    updateMap();
  }

  function bestPathTo(target) {
    if (!nodesByKey.has(target)) return null;
    const best = new Map();
    const queue = [graph.root];
    best.set(graph.root, { path: [graph.root], minConfidence: nodeConfidence(graph.root) });
    while (queue.length) {
      const key = queue.shift();
      const state = best.get(key);
      if (!state) continue;
      for (const child of graph.children[key] || []) {
        if (state.path.includes(child)) continue;
        const nextPath = [...state.path, child];
        const nextMinConfidence = Math.min(state.minConfidence, nodeConfidence(child));
        const previous = best.get(child);
        if (!previous || nextMinConfidence > previous.minConfidence || (
          nextMinConfidence === previous.minConfidence && nextPath.length < previous.path.length
        )) {
          best.set(child, { path: nextPath, minConfidence: nextMinConfidence });
          queue.push(child);
        }
      }
    }
    return best.get(target) || null;
  }

  function revealHallEntry(key) {
    const pathState = bestPathTo(key);
    if (!pathState) return;
    for (const ancestor of pathState.path.slice(0, -1)) {
      collapsed.delete(ancestor);
    }
    if (confidenceFilter && minConfidence > pathState.minConfidence) {
      setConfidenceThreshold(pathState.minConfidence);
    }
    selectedKey = key;
    updateMap();
    const node = nodesByKey.get(key);
    if (node) {
      setTimeout(() => node.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" }), 0);
    }
  }

  for (const node of nodes) {
    node.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      const key = node.dataset.key;
      if (event.target.closest(".map-collapse-control")) {
        toggleCollapse(key);
        return;
      }
      selectBranch(key);
    });
    node.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (event.shiftKey) toggleCollapse(node.dataset.key);
      else selectBranch(node.dataset.key);
    });
    node.addEventListener("mouseenter", () => {
      hoverKey = node.dataset.key;
      updateMap();
    });
    node.addEventListener("mouseleave", () => {
      hoverKey = null;
      updateMap();
    });
    node.addEventListener("focus", () => {
      hoverKey = node.dataset.key;
      updateMap();
    });
    node.addEventListener("blur", () => {
      hoverKey = null;
      updateMap();
    });
  }

  for (const card of fameCards) {
    const button = card.querySelector(".fame-show-map");
    const key = card.dataset.mapKey || "";
    button?.addEventListener("click", (event) => {
      event.preventDefault();
      revealHallEntry(key);
    });
  }

  document.getElementById("zoom-in")?.addEventListener("click", () => setZoom(zoom * 1.2));
  document.getElementById("zoom-out")?.addEventListener("click", () => setZoom(zoom / 1.2));
  zoomReset?.addEventListener("click", () => setZoom(1));
  confidenceFilter?.addEventListener("input", () => {
    setConfidenceThreshold(confidenceFilter.value);
    updateMap();
  });
  clearHighlightButton?.addEventListener("click", () => {
    selectedKey = null;
    updateMap();
  });
  document.getElementById("expand-all")?.addEventListener("click", () => {
    collapsed.clear();
    updateMap();
  });
  document.getElementById("collapse-all")?.addEventListener("click", () => {
    collapsed.clear();
    for (const [key, kids] of Object.entries(graph.children)) {
      if (key !== graph.root && kids.length) collapsed.add(key);
    }
    updateMap();
  });

  setConfidenceThreshold(minConfidence);
  setZoom(1);
  updateMap();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAcademicTreeMap);
  } else {
    initAcademicTreeMap();
  }
})();

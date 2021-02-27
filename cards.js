var nr_cards_path = "original_cards/northern/"
var ms_cards_path = "original_cards/monster/"
var ng_cards_path = "original_cards/nilfgaardian/"
var sc_cards_path = "original_cards/scoiatael/"
var ne_cards_path = "original_cards/neutral/"

var card_file_type = ".png"

var types_of_cards = ["CLOSE COMBAT", "RANGED COMBAT", "SIEGE COMBAT", "HERO UNITS", "WEATHER CARDS", "SPECIALS"]

var cards_in_deck = {
    "nr":[],
    "ng":[],
    "ms":[],
    "sc":[],
    "ne":[],
    "ne-nr":[],
    "ne-ng":[],
    "ne-ms":[],
    "ne-sc":[]
}
// JSON.parse(localStorage.getItem("names"));
if(localStorage.getItem("cards_in_deck")!=null)
    cards_in_deck = JSON.parse(localStorage.getItem("cards_in_deck"))
    
const cards_full_collection = {
    "nr":[
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": nr_cards_path + "ballista1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": nr_cards_path + "ballista2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 8,
            "img_path": nr_cards_path + "catapult" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": nr_cards_path + "commando" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": nr_cards_path + "crinfrid" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": nr_cards_path + "crinfrid2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": nr_cards_path + "foot_soldier1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": nr_cards_path + "foot_soldier2" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[1]],
            "strength": 10,
            "img_path": nr_cards_path + "eilhart" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": nr_cards_path + "dijkstra" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": nr_cards_path + "infantry" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": nr_cards_path + "infantry2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": nr_cards_path + "yarpen" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": nr_cards_path + "ves" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": nr_cards_path + "trebuchet1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": nr_cards_path + "trebuchet2" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": nr_cards_path + "thyssen" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 1,
            "img_path": nr_cards_path + "thaler" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": nr_cards_path + "stennis" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": nr_cards_path + "skaggs" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": nr_cards_path + "sile" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": nr_cards_path + "siege_tower" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": nr_cards_path + "siegfried" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 1,
            "img_path": nr_cards_path + "siege_expert3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 1,
            "img_path": nr_cards_path + "siege_expert2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 1,
            "img_path": nr_cards_path + "siege_expert1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 4,
            "img_path": nr_cards_path + "sabrina" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": nr_cards_path + "roche" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": nr_cards_path + "natalis" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 5,
            "img_path": nr_cards_path + "medic" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": nr_cards_path + "keira" + card_file_type
        },
    ],
    "ms":[
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": ms_cards_path + "earth_elemental" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": ms_cards_path + "arachas_behemoth" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": ms_cards_path + "wyvern" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 7,
            "img_path": ms_cards_path + "toad" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ms_cards_path + "werewolf" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "vampire_garkain" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "vampire_fleder" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "vampire_ekimmara" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "vampire_bruxa" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ms_cards_path + "plague_maiden" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ms_cards_path + "nekker3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ms_cards_path + "nekker2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ms_cards_path + "nekker1" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[1]],
            "strength": 10,
            "img_path": ms_cards_path + "leshen" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0], types_of_cards[1]],
            "strength": 8,
            "img_path": ms_cards_path + "kayran" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": ms_cards_path + "imlerith" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 5,
            "img_path": ms_cards_path + "ice_giant" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 2,
            "img_path": ms_cards_path + "harpy" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ms_cards_path + "griffin" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": ms_cards_path + "grave_hag" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": ms_cards_path + "ghoul3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": ms_cards_path + "ghoul2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 1,
            "img_path": ms_cards_path + "ghoul1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": ms_cards_path + "gargoyle" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ms_cards_path + "frightener" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ms_cards_path + "forktail" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ms_cards_path + "foglet" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": ms_cards_path + "fire_elemental" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ms_cards_path + "fiend" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": ms_cards_path + "endrega" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": ms_cards_path + "draug" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ms_cards_path + "crone_whispess" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ms_cards_path + "crone_weavess" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ms_cards_path + "crone_brewess" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": ms_cards_path + "cockatrice" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 2,
            "img_path": ms_cards_path + "celaeno_harpy" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "botchling" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "arachas3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "arachas2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ms_cards_path + "arachas1" + card_file_type
        },
    ],
    "ng":[
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 1,
            "img_path": ng_cards_path + "aux_archers1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 1,
            "img_path": ng_cards_path + "aux_archers2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 6,
            "img_path": ng_cards_path + "assire_var_anahid" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": ng_cards_path + "albrich" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 10,
            "img_path": ng_cards_path + "black_infantry_archer1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 10,
            "img_path": ng_cards_path + "black_infantry_archer2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ng_cards_path + "ceallach" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 4,
            "img_path": ng_cards_path + "cynthia" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[3]],
            "strength": 10,
            "img_path": ng_cards_path + "eggebracht" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 5,
            "img_path": ng_cards_path + "fire_scorpion" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 10,
            "img_path": ng_cards_path + "heavy_fire_scorpion" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 3,
            "img_path": ng_cards_path + "impera_brigade_guard" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[0]],
            "strength": 10,
            "img_path": ng_cards_path + "letho" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 10,
            "img_path": ng_cards_path + "menno" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 3,
            "img_path": ng_cards_path + "morteisen" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ng_cards_path + "nausicaa_cavalry_rider" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 3,
            "img_path": ng_cards_path + "puttkammer" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ng_cards_path + "rainfarn" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 5,
            "img_path": ng_cards_path + "renauld" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 3,
            "img_path": ng_cards_path + "rotten_mangonel" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 7,
            "img_path": ng_cards_path + "shilard" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 6,
            "img_path": ng_cards_path + "siege_engineer" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 0,
            "img_path": ng_cards_path + "siege_tech" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 9,
            "img_path": ng_cards_path + "stefan_skellen" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ng_cards_path + "sweers" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 4,
            "img_path": ng_cards_path + "vanhemar" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ng_cards_path + "vattier" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 6,
            "img_path": ng_cards_path + "vigo" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[2]],
            "strength": 10,
            "img_path": ng_cards_path + "voorhis" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ng_cards_path + "vreemde" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ng_cards_path + "young_emissary1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ng_cards_path + "young_emissary2" + card_file_type
        }
    ],
    "sc":[
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 4,
            "img_path": sc_cards_path + "archer" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 6,
            "img_path": sc_cards_path + "barclay" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": sc_cards_path + "cranmer" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "defender1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "defender2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "defender3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "defender4" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "defender5" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 3,
            "img_path": sc_cards_path + "easnillien" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[3]],
            "strength": 10,
            "img_path": sc_cards_path + "eithne" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": sc_cards_path + "elven_skirmisher1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": sc_cards_path + "elven_skirmisher2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": sc_cards_path + "elven_skirmisher3" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 6,
            "img_path": sc_cards_path + "fidhail" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 0,
            "img_path": sc_cards_path + "healer" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 0,
            "img_path": sc_cards_path + "healer2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 0,
            "img_path": sc_cards_path + "healer3" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[1]],
            "strength": 10,
            "img_path": sc_cards_path + "isengrim" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[3], types_of_cards[1]],
            "strength": 10,
            "img_path": sc_cards_path + "iorveth" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 10,
            "img_path": sc_cards_path + "milva" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 4,
            "img_path": sc_cards_path + "recruit" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 1,
            "img_path": sc_cards_path + "riordain" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[3]],
            "strength": 10,
            "img_path": sc_cards_path + "saesenthessis" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[0]],
            "strength": 6,
            "img_path": sc_cards_path + "scout1" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[0]],
            "strength": 6,
            "img_path": sc_cards_path + "scout2" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[0]],
            "strength": 6,
            "img_path": sc_cards_path + "scout3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 3,
            "img_path": sc_cards_path + "skirmisher1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 3,
            "img_path": sc_cards_path + "skirmisher2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 3,
            "img_path": sc_cards_path + "skirmisher3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 6,
            "img_path": sc_cards_path + "sivney" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "smuggler1" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "smuggler2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": sc_cards_path + "smuggler3" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[1],
            "strength": 2,
            "img_path": sc_cards_path + "toruviel" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 5,
            "img_path": sc_cards_path + "veteran1" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 5,
            "img_path": sc_cards_path + "veteran2" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 6,
            "img_path": sc_cards_path + "yaevinn" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[2],
            "strength": 8,
            "img_path": sc_cards_path + "schirru" + card_file_type
        }
    ],
    "ne":[
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[3]],
            "strength": 0,
            "img_path": ne_cards_path + "avallach" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[1], types_of_cards[3]],
            "strength": 7,
            "img_path": ne_cards_path + "yen" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[3]],
            "strength": 7,
            "img_path": ne_cards_path + "triss" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 7,
            "img_path": ne_cards_path + "villentretenmerth" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 6,
            "img_path": ne_cards_path + "vesemir" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ne_cards_path + "regis" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 5,
            "img_path": ne_cards_path + "zoltan" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[3]],
            "strength": 15,
            "img_path": ne_cards_path + "geralt" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[3]],
            "strength": 15,
            "img_path": ne_cards_path + "ciri" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ne_cards_path + "dandelion" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 0,
            "img_path": ne_cards_path + "cow" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 2,
            "img_path": ne_cards_path + "gaunter_o_dimm" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ne_cards_path + "god_darkness" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ne_cards_path + "god_darkness2" + card_file_type
        },
        {
            "type": "unit",
            "filter": types_of_cards[0],
            "strength": 4,
            "img_path": ne_cards_path + "god_darkness3" + card_file_type
        },
        {
            "type": "unit",
            "filter": [types_of_cards[0], types_of_cards[1]],
            "strength": 6,
            "img_path": ne_cards_path + "olgierd_von_everec" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "clear" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "clear2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "clear3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "fog" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "fog2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "fog3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "frost" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "frost2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "frost3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "rain" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "rain2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "rain3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "scorch" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "scorch2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "scorch3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "horn" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "horn2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "horn3" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "horn4" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "decoy" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "decoy2" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "decoy3" + card_file_type
        }
    ]
}

var cards;

if(localStorage.getItem("cards")!=null)
    cards = JSON.parse(localStorage.getItem("cards"))
else
    cards = Object.assign({}, cards_full_collection);
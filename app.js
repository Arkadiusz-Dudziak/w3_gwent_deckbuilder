var current_faction = 'nr'
var current_filter_left = 'ALL CARDS'
var current_filter_right = 'ALL CARDS'
var types_of_cards = ["CLOSE COMBAT", "RANGED COMBAT", "SIEGE COMBAT", "HERO UNITS", "WEATHER CARDS", "SPECIALS"]

var resources_path = "resources/Gwent_without_Bleeding/"
var leaders_path = "resources/Gwent_without_Bleeding/Leaders/"
var nr_cards_path = "original_cards/northern/"
var ms_cards_path = "original_cards/monster/"
var ng_cards_path = "original_cards/nilfgaardian/"
var sc_cards_path = "original_cards/scoiatael/"
var ne_cards_path = "original_cards/neutral/"

var card_file_type = ".png"

var cards = {
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
            "strength": 1,
            "img_path": ng_cards_path + "aux_archers1" + card_file_type
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
            // "in_deck": 0
        },
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
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "clear" + card_file_type
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
            "img_path": ne_cards_path + "frost" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[4],
            "strength": 0,
            "img_path": ne_cards_path + "rain" + card_file_type
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
            "img_path": ne_cards_path + "horn" + card_file_type
        },
        {
            "type": "special",
            "filter": types_of_cards[5],
            "strength": 0,
            "img_path": ne_cards_path + "decoy" + card_file_type
        }
    ]
}

var leaders = 
{
    "nr":[
        {
            "name" : "Foltest King of Temeria",
            "img_path" : leaders_path + 'Foltest_King_of Temeria.png',
            "ability" : "Pick an Impenetrable Fog card from your deck and play it instantly."
        },
        {
            "name" : "Foltest Lord Commander of the North",
            "img_path" : leaders_path + 'Foltest Lord Commander of the North.png',
            "ability" : "Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play."
        },
        {
            "name" : "Foltest the Siegemaster",
            "img_path" : leaders_path + 'Foltest the Siegemaster.png',
            "ability" : "Doubles the strength of all your Siege units (unless a Commander's Horn is also present on that row)."
        },
        {
            "name" : "Foltest the Steel-Forged",
            "img_path" : leaders_path + 'Foltest the Steel-Forged.png',
            "ability" : "Destroy your enemy's strongest Siege unit(s) if the combined strength of all his or her Siege units is 10 or more."
        }
    ],
    "ng":[
        {
            "name" : "Emhyr var Emreis Emperor of Nilfgaard",
            "img_path" : leaders_path + 'Emhyr var Emreis Emperor of Nilfgaard.png',
            "ability" : "Look at 3 random cards from your opponent's hand."
        },
        {
            "name" : "Emhyr var Emreis His Imperial Majesty",
            "img_path" : leaders_path + 'Emhyr var Emreis His Imperial Majesty.png',
            "ability" : "Pick a Torrential Rain card from your deck and play it instantly."
        },
        {
            "name" : "Emhyr var Emreis the Relentless",
            "img_path" : leaders_path + 'Emhyr var Emreis the Relentless.png',
            "ability" : "Draw a card from your opponent's discard pile."
        },
        {
            "name" : "Emhyr var Emreis the White Flame",
            "img_path" : leaders_path + 'Emhyr var Emreis the White Flame.png',
            "ability" : "Cancel your opponent's Leader Ability."
        }
    ],
    "ms":[
        {
            "name" : "Eredin Bringer of Death",
            "img_path" : leaders_path + 'Eredin Bringer of Death.png',
            "ability" : "Discard 2 cards and draw 1 card of your choice from your deck."
        },
        {
            "name" : "Eredin Commander of the Red Riders",
            "img_path" : leaders_path + 'Eredin Commander of the Red Riders.png',
            "ability" : "Pick any weather card from your deck and play it instantly."
        },
        {
            "name" : "Eredin Destroyer of Worlds",
            "img_path" : leaders_path + 'Eredin Destroyer of Worlds.png',
            "ability" : "Restore a card from your discard pile to your hand."
        },
        {
            "name" : "Eredin King of the Wild Hunt",
            "img_path" : leaders_path + 'Eredin King of the Wild Hunt.png',
            "ability" : "Double the strength of all your Close Combat units (unless a Commander's Horn is also present on that row)."
        }
    ],
    "sc":[
        {
            "name" : "Francesca Findabair Daisy of The Valle",
            "img_path" : leaders_path + 'Francesca Findabair Daisy of The Valle.png',
            "ability" : "Draw an extra card at the beginning of the battle."
        },
        {
            "name" : "Francesca Findabair Pureblood Elf",
            "img_path" : leaders_path + 'Francesca Findabair Pureblood Elf.png',
            "ability" : "Pick a Biting Frost card from your deck and play it instantly."
        },
        {
            "name" : "Francesca Findabair Queen of Dol Blathanna",
            "img_path" : leaders_path + 'Francesca Findabair Queen of Dol Blathanna.png',
            "ability" : "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more."
        },
        {
            "name" : "Francesca Findabair the Beautiful",
            "img_path" : leaders_path + 'Francesca Findabair the Beautiful.png',
            "ability" : "Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row)."
        }
    ]
}
//nr, ng, ms, sc
var default_leaders = [0,0,0,0];
var leaders_picked = {
        'nr': 0,
        'ng': 0,
        'ms': 0,
        'sc': 0
}

function playMusic()
{
    var audio = new Audio('gwent_music.mp3');
    audio.play();
    audio.loop = true;
}

function stopMusic()
{
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
}

function changeFilter(filter, filter_number, column)
{
    var filter_text_1;
    var filters_li_list;
    if(column == 0)
    {
        current_filter_left = filter;
        filter_text_1 = document.getElementById('active-filter-1');
        filter_text_1.innerText = filter;
        filters_li_list = document.getElementById("filters-1").getElementsByTagName("li");
    }
    else
    {
        current_filter_right = filter;
        filter_text_1 = document.getElementById('active-filter-2');
        filter_text_1.innerText = filter;
        filters_li_list = document.getElementById("filters-2").getElementsByTagName("li");
    }
   

    for(let i=0; i<filters_li_list.length; i++)
    {
        if(i==filter_number)
        {
            filters_li_list[i].classList.remove("color");
            filters_li_list[i].classList.add("white");
        }
        else
            filters_li_list[i].classList.remove("white");
    }
    changeDisplayedCards();
}

function choseFaction(faction)
{
    var ul = document.getElementById('faction-picker-ul');
    var list = document.getElementById('faction-picker-ul').getElementsByTagName("li");
    var number = 0;
    current_faction = faction;
    switch(faction)
    {
        case 'nr':
            document.getElementById('faction-name').innerText = "Northern Realms"
            number = 0;
            document.getElementById('faction-perk').innerText = "Draw a card from your deck whenever you win a round."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Northern_Realms_logo.png"/>' 
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'ms':
            document.getElementById('faction-name').innerText = "Monsters"
            number = 1;
            document.getElementById('faction-perk').innerText = "Keps random Unit Card out after each round."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Monsters_logo.png"/>'
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'ng':
            document.getElementById('faction-name').innerText = "Nilfgaard"
            number = 2;
            document.getElementById('faction-perk').innerText = "Wins any round that ends in a draw."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Nilfgaard_logo.png"/>'
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'sc':
            document.getElementById('faction-name').innerText = "Scoia'tael"
            number = 3;
            document.getElementById('faction-perk').innerText = "Decides who takes first turn."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Scoiatael_logo.png"/>'
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
    }
    for(let i=0; i<4; i++)
    {
        
        if(i==number)
        {
            list[i].classList.remove("li-standard-color");
            list[i].classList.add("picked-color-faction");
        }
        else
        {
            list[i].classList.remove("picked-color-faction");
            list[i].classList.add("li-standard-color");
        }
    }

    changeDisplayedCards();
}

function movecard(i)
{
    $("#filtered_card_deck").append(i)
    removeElement(i);
    console.log("movecard ", i)
}

function changeDisplayedCards()
{
    // console.log(current_filter_left);
    if(current_filter_left != "ALL CARDS")
    {
        var filteredCardsNotNeutral = cards[current_faction].filter( x => 
            x.filter == current_filter_left || x.filter[0] == current_filter_left || x.filter[1] == current_filter_left || x.filter[2] == current_filter_left
          );
        var filteredNeutralCards = cards["ne"].filter( x => 
             x.filter == current_filter_left || x.filter[0] == current_filter_left || x.filter[1] == current_filter_left || x.filter[2] == current_filter_left
        );
    }
    else
    {
        filteredCardsNotNeutral = cards[current_faction];
        // filteredCards = cards[current_faction];
        filteredNeutralCards = cards["ne"];
    }
    var filteredCards = filteredCardsNotNeutral.concat(filteredNeutralCards);

    // console.log(filteredCards);
    div_filtered_card_collection = document.getElementById("filtered_card_collection");
    div_filtered_card_collection.innerHTML = '';
    for(let i=0; i<filteredCards.length; i++)
    {
        let card_inside_filtered = document.createElement("Div");
        // card_inside_filtered.addEventListener("click", movecard(), false)
        card_inside_filtered.innerHTML = '<img id="'+i+'" onclick="movecard('+i+')" src="'+filteredCards[i].img_path+'"/>';

        card_inside_filtered.classList.add("card");
        div_filtered_card_collection.appendChild(card_inside_filtered);
    }
}

function setLeader(leader)
{
    // console.log(leader);
    //set leader ability text 
    var leader_ability_text = document.getElementById("leader_ability_text");
    leader_ability_text.innerHTML = leaders[current_faction][leader].ability;
    //set active image of selected leader
    var faction_leaders = document.getElementsByClassName("leader_inside_popup");
    for(let i=0; i<4; i++)
    {
        if(i==leader)
            faction_leaders[i].classList.add("chosen_leader_inside_popup");
        else
            faction_leaders[i].classList.remove("chosen_leader_inside_popup");
    }
    leaders_picked[current_faction] = leader;
    document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leader].img_path+'"/>'
    // nr_leader = leader;
}

function removeElement(id) 
{
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function closeLeaderPopup()
{
    removeElement("popup");
}

function openLeaderPopup()
{
    var popup = document.createElement("Div");
    popup.id = "popup";
    
    var popup_inner = document.createElement("Div");
    popup_inner.id = "popup_inner";
    //add cross icon to close leader popup
    var cross_div_icon = document.createElement("div");
    cross_div_icon.style.float = "right";
    cross_div_icon.style.cursor = "pointer";
    cross_div_icon.innerHTML = '<span onclick="closeLeaderPopup()">X</span>';
    
    popup_inner.appendChild(cross_div_icon);
    //add header
    var header = document.createElement("H1");
    header.classList.add("popup_header");
    var text = document.createTextNode("Choose a Leader");
    header.appendChild(text);
    popup_inner.appendChild(header);
    //4 leader cards for selected faction
    for(let i=0; i<4; i++)
    {
        let divLeadearArt = document.createElement("Div");
        divLeadearArt.classList.add("leader_inside_popup");
        divLeadearArt.innerHTML = '<img src="'+leaders[current_faction][i].img_path+'" onclick="setLeader('+i+')"/>'
        popup_inner.appendChild(divLeadearArt);
    }
    //clear float left styling
    var clearBoth = document.createElement("Div");
    clearBoth.style.clear = "both";
    popup_inner.appendChild(clearBoth);

    var div_leader_ability = document.createElement("Div");
    div_leader_ability.classList.add("popup_header");
    div_leader_ability.innerHTML = '<h2>Leader Ability</h2> <p id="leader_ability_text"></p>';
    popup_inner.appendChild(div_leader_ability);

    popup.appendChild(popup_inner);
    document.getElementsByTagName("body")[0].appendChild(popup);
    console.log(leaders_picked[current_faction]);
    console.log(leaders_picked);
    setLeader(leaders_picked[current_faction])
}


window.onload = function() {
    choseFaction('ms');
    // changeFilter('ALL CARDS', 0)
    changeFilter('ALL CARDS', 0, 0);
    changeFilter('ALL CARDS', 0, 1);
  };
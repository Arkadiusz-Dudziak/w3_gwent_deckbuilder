var current_faction = 'nr'
var current_filter = 'ALL CARDS'

var current_filter_left = 'ALL CARDS'
var current_filter_right = 'ALL CARDS'


var card_style = " max-height: 320px; cursor: pointer; margin: 10px; float:left;"
//nr, ng, ms, sc
var default_leaders = [0,0,0,0];
var leaders_picked = {
        'nr': 0,
        'ng': 0,
        'ms': 0,
        'sc': 0
}

var is_music_being_played = false; 

var total_cards_in_deck = 0;
var number_of_unit_strength = 0;
var number_hero_cards = 0;
var number_of_special_cards = 0;
var number_of_unit_cards = 0;
const max_number_of_special_cards = 10;

var deck_statistics = {
    'nr':
    {
        "total_cards_in_deck": 0,
        "number_of_unit_strength": 0,
        "number_hero_cards": 0,
        "number_of_special_cards": 0,
        "number_of_unit_cards":0
    },
    'ng':
    {
        "total_cards_in_deck": 0,
        "number_of_unit_strength": 0,
        "number_hero_cards": 0,
        "number_of_special_cards": 0,
        "number_of_unit_cards":0
    }, 
    'ms':
    {
        "total_cards_in_deck": 0,
        "number_of_unit_strength": 0,
        "number_hero_cards": 0,
        "number_of_special_cards": 0,
        "number_of_unit_cards":0
    },   
    'sc':
    {
        "total_cards_in_deck": 0,
        "number_of_unit_strength": 0,
        "number_hero_cards": 0,
        "number_of_special_cards": 0,
        "number_of_unit_cards":0
    }        
}


function changeFilter(filter, filter_number, column)
{
    var filter_text_1;
    var filters_li_list;
    current_filter = filter;
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
    changeDisplayedCards(column);
}


function choseFaction(faction)
{
    var ul = document.getElementById('faction-picker-ul');
    var list = document.getElementById('faction-picker-ul').getElementsByTagName("li");
    var number = 0;
    current_faction = faction;

    if(localStorage.getItem("deck_statistics")!=null)
    {
        deck_statistics = JSON.parse(localStorage.getItem("deck_statistics"))
        changeDeckStatistics();
    }

    switch(faction)
    {
        case 'nr':
            document.getElementById('faction-name').innerText = "Northern Realms"
            number = 0;
            $("#favicon").attr("href","Northern_Realms_logo.png");
            document.getElementById('faction-perk').innerText = "Draw a card from your deck whenever you win a round."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Northern_Realms_logo.png"/>' 
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'ms':
            document.getElementById('faction-name').innerText = "Monsters"
            number = 1;
            $("#favicon").attr("href","Monsters_logo.png");
            document.getElementById('faction-perk').innerText = "Keps random Unit Card out after each round."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Monsters_logo.png"/>'
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'ng':
            document.getElementById('faction-name').innerText = "Nilfgaard"
            number = 2;
            $("#favicon").attr("href","Nilfgaard_logo.png");
            document.getElementById('faction-perk').innerText = "Wins any round that ends in a draw."
            document.getElementById('faction-logo').innerHTML = '<img src="'+resources_path+'Rules/Nilfgaard_logo.png"/>'
            document.getElementById('leader-art').innerHTML = '<img src="'+leaders[current_faction][leaders_picked[current_faction]].img_path+'"/>'
            break;
        case 'sc':
            document.getElementById('faction-name').innerText = "Scoia'tael"
            number = 3;
            $("#favicon").attr("href","Scoiatael_logo.png");
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

    changeDisplayedCards(0);
    changeDisplayedCards(1);
    changeDeckStatistics();
}

function getCard(img_path1, faction_name_or_neutral)
{
    const regex = /^(.+[\/\\]original_cards[\/\\])/;
    let r_img_path = img_path1.replace(regex, '');
    r_img_path = "original_cards/" + r_img_path
    // console.log("getCard = ", img_path1, " ", faction_name_or_neutral, " ", r_img_path)
    
    let foundCard = cards_full_collection[faction_name_or_neutral].filter( x => 
        x.img_path == r_img_path
        );

    return foundCard;
}


function getCardId(img_path, faction)
{
    const regex = /^(.+[\/\\]original_cards[\/\\])/;
    let r_img_path = img_path.replace(regex, '');
    r_img_path = "original_cards/" + r_img_path
    // console.log("getCardId")
    let index = cards_full_collection[faction].findIndex( x => x.img_path === img_path );

    return index;
}

function saveChangesToLocalStorage()
{
    localStorage.setItem("deck_statistics", JSON.stringify(deck_statistics));
    localStorage.setItem("cards_in_deck", JSON.stringify(cards_in_deck));
    localStorage.setItem("cards", JSON.stringify(cards));
}

function movecard(i)
{
    let faction_name_or_neutral = i.id.substring(0,2);
    var foundCard;
    let plus_or_minus = 1; // indicates if deck statistics should be added or substracted - 1 added, -1 substracted
    let parent = i.parentNode;
    let parentparent = parent.parentNode;
    let temp_faction_name_or_neutral = faction_name_or_neutral;
    console.log("parent.id = ", parent.id, " ", i.id, "parentParent.id", parentparent.id);

    if(faction_name_or_neutral == "ne")
        temp_faction_name_or_neutral += "-" + current_faction;

    foundCard = getCard(i.src, faction_name_or_neutral);

    if(parent.id=="filtered_card_deck" || parentparent.id =="filtered_card_deck")
    {
        console.log("---> temp_faction_name_or_neutral: ", temp_faction_name_or_neutral);
        
        console.log("filtered_card_deck", foundCard);
        
        cards_in_deck[temp_faction_name_or_neutral] = cards_in_deck[temp_faction_name_or_neutral].filter( x => 
            x.img_path != foundCard[0].img_path
        );
        cards[faction_name_or_neutral] = cards[faction_name_or_neutral].concat(foundCard[0]);

        $("#filtered_card_collection").append(i)
        
        // console.log("movecard: ", i);
        plus_or_minus = -1;
    }
    else
    {
        console.log("filtered_card_collection", foundCard);
        cards[faction_name_or_neutral] = cards[faction_name_or_neutral].filter( x => 
            x.img_path != foundCard[0].img_path
        );
        cards_in_deck[temp_faction_name_or_neutral] = cards_in_deck[temp_faction_name_or_neutral].concat(foundCard[0]);

        $("#filtered_card_deck").append(i)
        plus_or_minus = 1;
    }

    deck_statistics[current_faction].total_cards_in_deck += plus_or_minus;
    deck_statistics[current_faction].number_of_unit_strength += (plus_or_minus*foundCard[0].strength);
    if(foundCard[0].type == "unit")
        deck_statistics[current_faction].number_of_unit_cards += plus_or_minus;
    if(foundCard[0].filter[0] == types_of_cards[3] || foundCard[0].filter[1] == types_of_cards[3] || foundCard[0].filter[2] == types_of_cards[3])
        deck_statistics[current_faction].number_hero_cards += plus_or_minus;
    if(foundCard[0].filter == types_of_cards[4] || foundCard[0].filter == types_of_cards[5])
        deck_statistics[current_faction].number_of_special_cards += plus_or_minus;

    let audio = new Audio("card_sound.wav");
    audio.play();
    
    saveChangesToLocalStorage();
    changeDeckStatistics();
    // removeElement(i);
}


function changeDeckStatistics()
{
    document.getElementById("number_of_cards_in_deck").innerHTML = deck_statistics[current_faction].total_cards_in_deck;
    document.getElementById("number_of_unit_strength").innerHTML = deck_statistics[current_faction].number_of_unit_strength;
    document.getElementById("number_of_unit_cards").innerHTML = deck_statistics[current_faction].number_of_unit_cards;
    document.getElementById("number_hero_cards").innerHTML = deck_statistics[current_faction].number_hero_cards;
    document.getElementById("number_of_special_cards").innerHTML = deck_statistics[current_faction].number_of_special_cards + "/" + max_number_of_special_cards;
    if(deck_statistics[current_faction].number_of_special_cards<=max_number_of_special_cards)
    {
        document.getElementById("number_of_special_cards").style.color = "green";
        document.getElementById("special_icon").classList.remove("red");
        // document.getElementById("special_icon").classList.add("green");
    }
        
    else
    {
        document.getElementById("number_of_special_cards").style.color = "red";
        document.getElementById("special_icon").classList.remove("green");
        document.getElementById("special_icon").classList.add("red");
    }
        
}

function changeDisplayedCards(column)
{
    var cards_to_be_filtered;
    var div_filtered_card_collection;
    var filteredCardsNotNeutral;
    var filteredNeutralCards;
    let temp_faction_neutrals = "ne-"+current_faction
    console.log("##########################");

    if(column == 0)
    {
        current_filter = current_filter_left;
        cards_to_be_filtered = cards;
        cards_to_be_filtered[temp_faction_neutrals] = cards["ne"];
        console.log(cards_to_be_filtered);
        div_filtered_card_collection = document.getElementById("filtered_card_collection");
        div_filtered_card_collection.innerHTML = '';
    }
        
    if(column == 1)
    {
        current_filter = current_filter_right;
        cards_to_be_filtered = cards_in_deck;
        console.log("cards to be filtered - COLUMN 1: ", cards_to_be_filtered);
        console.log(cards_to_be_filtered);
        div_filtered_card_collection = document.getElementById("filtered_card_deck");
        div_filtered_card_collection.innerHTML = '';
    }
        
    if(cards_to_be_filtered[current_faction].length!=0 || cards_to_be_filtered[temp_faction_neutrals].length!=0)
    {
        if(current_filter != "ALL CARDS")
        {
            filteredCardsNotNeutral = cards_to_be_filtered[current_faction].filter( x => 
                x.filter == current_filter || x.filter[0] == current_filter || x.filter[1] == current_filter || x.filter[2] == current_filter
            );
            
            filteredNeutralCards = cards_to_be_filtered[temp_faction_neutrals].filter( x => 
                x.filter == current_filter || x.filter[0] == current_filter || x.filter[1] == current_filter || x.filter[2] == current_filter
            );
        }
        else
        {
            filteredCardsNotNeutral = cards_to_be_filtered[current_faction];
            filteredNeutralCards = cards_to_be_filtered[temp_faction_neutrals];
        }

        var filteredCards = filteredCardsNotNeutral.concat(filteredNeutralCards);

        console.log("filteredCards.length: ", filteredCards.length)
        console.log("div: ", div_filtered_card_collection.id)
        for(let i=0; i<filteredCards.length; i++)
        {
            let card_inside_filtered = document.createElement("Div");
            let card_id;

            if(i<filteredCardsNotNeutral.length)
            {
                card_id = getCardId(filteredCards[i].img_path, current_faction);
                card_inside_filtered.innerHTML = '<img style="'+card_style+'" id="'+current_faction+card_id+'" onclick="movecard('+current_faction+card_id+')" src="'+filteredCards[i].img_path+'"/>';
            }
            else
            {
                card_id = getCardId(filteredCards[i].img_path, "ne");
                card_inside_filtered.innerHTML = '<img style="'+card_style+'" id="'+"ne"+card_id+'" onclick="movecard(ne'+card_id+')" src="'+filteredCards[i].img_path+'"/>';
            }
                
            card_inside_filtered.classList.add("card");
            div_filtered_card_collection.appendChild(card_inside_filtered);
        }
    }
    
}

function setLeader(leader)
{
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

    let audio = new Audio("card_sound.wav");
    audio.play();
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
    cross_div_icon.style.fontSize = "30px";
    cross_div_icon.style.marginRight = "10px";
    cross_div_icon.innerHTML = '<span style="color: red" onclick="closeLeaderPopup()">X</span>';
    
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

    setLeader(leaders_picked[current_faction])
}


window.onload = function() {
    choseFaction('ng');
    // changeFilter('ALL CARDS', 0)
    if(localStorage.getItem("deck_statistics")!=null)
    {
        deck_statistics = JSON.parse(localStorage.getItem("deck_statistics"))
        changeDeckStatistics();
    }
        

    changeFilter('ALL CARDS', 0, 0);
    changeFilter('ALL CARDS', 0, 1);
    console.log("-------------------AFTER LOAD------------------")
  };
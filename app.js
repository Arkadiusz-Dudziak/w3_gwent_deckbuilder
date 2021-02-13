var current_faction = 'nr'
var current_filter = 'ALL CARDS'

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

// function playMusic(play)
// {
//     // var audio = new Audio('gwent_music.mp3');
    
//     // ply.src = "";
//     console.log(play)
//     if(play==1)
//     {
//         if(is_music_being_played==false)
//         {
//             audio.play();
//             audio.loop = true;
//             is_music_being_played = true;
//         }
//     }
//     else
//     {
//         if(is_music_being_played==true)
//         {
//             music_player.src = "";
//             // console.log("pause");
//             // audio.pause();
//             // audio.currentTime = 0;
//         }
//     }
    

// }

// function stopMusic()
// {
//     var sounds = document.getElementsByTagName('audio');
//     for(i=0; i<sounds.length; i++) sounds[i].pause();
// }

function changeFilter(filter, filter_number, column)
{
    var filter_text_1;
    var filters_li_list;
    current_filter = filter;
    if(column == 0)
    {
        filter_text_1 = document.getElementById('active-filter-1');
        filter_text_1.innerText = filter;
        filters_li_list = document.getElementById("filters-1").getElementsByTagName("li");
    }
    else
    {
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

    changeDisplayedCards(0);
    changeDisplayedCards(1);
    changeDeckStatistics();
}

function getCard(img_path, faction_name_or_neutral)
{
    const regex = /^(.+[\/\\]original_cards[\/\\])/;
    let r_img_path = img_path.replace(regex, '');
    r_img_path = "original_cards/" + r_img_path
    // console.log(r_img_path);

    let foundCard = cards[faction_name_or_neutral].filter( x => 
        x.img_path == r_img_path
      );

    return foundCard;
}


function getCardId(img_path, faction)
{
    const regex = /^(.+[\/\\]original_cards[\/\\])/;
    let r_img_path = img_path.replace(regex, '');
    r_img_path = "original_cards/" + r_img_path
    // console.log(r_img_path);
    // console.log(img_path);
    // console.log(cards);
    // console.log(faction)
    let index = cards[faction].findIndex( x => x.img_path === img_path );

    return index;
}

function movecard(i)
{
    let faction_name_or_neutral = i.id.substring(0,2);
    let foundCard = getCard(i.src, faction_name_or_neutral);
    // console.log(foundCard[0])
    //remove moved card from card collection 
    // console.log(cards);
    
    console.log(faction_name_or_neutral);
    cards[faction_name_or_neutral] = cards[faction_name_or_neutral].filter( x => 
        x.img_path != foundCard[0].img_path
      );
    // console.log(cards);
    // var filteredCards = filteredCardsNotNeutral.concat(filteredNeutralCards);
    cards_in_deck[faction_name_or_neutral] = cards_in_deck[faction_name_or_neutral].concat(foundCard[0]);

    // console.log(cards_in_deck);
    $("#filtered_card_deck").append(i)

    deck_statistics[current_faction].total_cards_in_deck++;
    deck_statistics[current_faction].number_of_unit_strength += foundCard[0].strength;
    if(foundCard[0].type == "unit")
        deck_statistics[current_faction].number_of_unit_cards++;
    if(foundCard[0].filter[0] == types_of_cards[3] || foundCard[0].filter[1] == types_of_cards[3] || foundCard[0].filter[2] == types_of_cards[3])
        deck_statistics[current_faction].number_hero_cards++;
    if(foundCard[0].filter == types_of_cards[4] || foundCard[0].filter == types_of_cards[5])
        deck_statistics[current_faction].number_of_special_cards++;
    
    changeDeckStatistics();
    // removeElement(i);
    // console.log("movecard ", i)
}


function changeDeckStatistics()
{
    document.getElementById("number_of_cards_in_deck").innerHTML = deck_statistics[current_faction].total_cards_in_deck;
    document.getElementById("number_of_unit_strength").innerHTML = deck_statistics[current_faction].number_of_unit_strength;
    document.getElementById("number_of_unit_cards").innerHTML = deck_statistics[current_faction].number_of_unit_cards;
    document.getElementById("number_hero_cards").innerHTML = deck_statistics[current_faction].number_hero_cards;
    document.getElementById("number_of_special_cards").innerHTML = deck_statistics[current_faction].number_of_special_cards + "/" + max_number_of_special_cards;
}

function changeDisplayedCards(column)
{
    // console.log("changeDisplayedCards ", current_filter, " column: ", column);
    // console.log("");
    var cards_to_be_filtered;
    var div_filtered_card_collection;
    var filteredCardsNotNeutral;
    var filteredNeutralCards;

    if(column == 0)
    {
        cards_to_be_filtered = cards;
        // console.log("column0: ", cards_to_be_filtered);
        div_filtered_card_collection = document.getElementById("filtered_card_collection");
        div_filtered_card_collection.innerHTML = '';
    }
        
    if(column == 1)
    {
        cards_to_be_filtered = cards_in_deck;
        // console.log("column1: ", cards_to_be_filtered);
        div_filtered_card_collection = document.getElementById("filtered_card_deck");
        div_filtered_card_collection.innerHTML = '';
    }
        
    if(cards_to_be_filtered[current_faction].length!=0)
    {
        // console.log(current_faction);
        // console.log("changeDisplayedCards: ", cards_to_be_filtered[current_faction]);
        if(current_filter != "ALL CARDS")
        {
            // console.log("length of cards_to_be_filtered: ", cards_to_be_filtered[current_faction].length)
            filteredCardsNotNeutral = cards_to_be_filtered[current_faction].filter( x => 
                x.filter == current_filter || x.filter[0] == current_filter || x.filter[1] == current_filter || x.filter[2] == current_filter
            );
            
            filteredNeutralCards = cards_to_be_filtered["ne"].filter( x => 
                x.filter == current_filter || x.filter[0] == current_filter || x.filter[1] == current_filter || x.filter[2] == current_filter
            );
        }
        else
        {
            filteredCardsNotNeutral = cards_to_be_filtered[current_faction];
            filteredNeutralCards = cards_to_be_filtered["ne"];
        }

        var filteredCards = filteredCardsNotNeutral.concat(filteredNeutralCards);

        
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
    // console.log(leaders_picked[current_faction]);
    // console.log(leaders_picked);
    setLeader(leaders_picked[current_faction])
}





window.onload = function() {
    choseFaction('ms');
    // changeFilter('ALL CARDS', 0)
    changeFilter('ALL CARDS', 0, 0);
    changeFilter('ALL CARDS', 0, 1);
  };
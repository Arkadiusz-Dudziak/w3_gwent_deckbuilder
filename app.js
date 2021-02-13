var current_faction = 'nr'
var current_filter_left = 'ALL CARDS'
var current_filter_right = 'ALL CARDS'


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
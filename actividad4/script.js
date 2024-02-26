document.addEventListener('keydown', function(event) {
    const textElement = document.getElementById('text');
    const imageElement = document.getElementById('image');

    switch(event.key) {
        case 'A':
        case 'a':
            textElement.innerText = 'Presionaste A';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonclaw_incantation_elden_ring_wiki_guide_200px.png';
            break;
        case 'S':
        case 's':
            textElement.innerText = 'Presionaste S';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodboon_incantation_elden_ring_wiki_guide_200px.png';
            break;
        case 'D':
        case 'd':
            textElement.innerText = 'Presionaste D';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_lightning_incantation-icon_elden_ring_wiki_guide_200px.png';
            break;
        case 'F':
        case 'f':
            textElement.innerText = 'Presionaste F';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flame_cleanse_me_incantation_elden_ring_wiki_guide_200px.png';
            break;
        case 'G':
        case 'g':
            textElement.innerText = 'Presionaste G';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_flame_incantation_elden_ring_wiki_guide_200px.png';
            break;
        default:
            textElement.innerText = 'Presiona una tecla (A, S, D, F, G)';
            imageElement.src = 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png';
    }
});

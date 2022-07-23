
let first_para = document.createElement("div")
first_para.style.margin = "20px 0px -70px 0px"
let p111 = document.createElement("h3")
p111.innerText = "SHOES"
p111.style.fontWeight = "1000"
let p1111 = document.createElement("P")
p1111.innerText = "Concurrently embodying a function-driven design aesthetic as well as a favorable retention of streetwise appeal, designer men's shoes exhibit countless stylistic opportunities for any wearer. Thoroughly considered low-top lace-ups and slip-on skate shoes echo tech-utilitarianism with futuristic forms and innovative fabrications. Minimalist sensibilities are strengthened through modern staples. Artisanal constructions of classic oxfords, derby lace ups, and loafers are not only rendered in sumptuous leathers, but also feature eye-catching buckles and contrasting panel accents. Seasonal favorites such as sandals and espadrilles defy simple conventions to redefine themselves and their own connotative value. Rugged sophistication is afforded to the wearer via clever Chelsea boots which value comfort as much as they do luxury. With contemporary men's designer shoes it is not a matter of making a statement, but rather understanding what statement you would like to make"
p1111.style.opacity = "0.8"
first_para.append(p111, p1111)
document.getElementById("inmid").append(first_para)


let llArr = [
    'MENS',
    'SHOES',

    'ALL DESIGNERS','032c','1017 ALYX 9SM','11 by Boris Bidjan Saberi',
    '132 5. ISSEY MIYAKE','3.1 Phillip Lim','3MAN','424',
    '44 Label Group','4SDESIGNS','99% IS','A BETTER FEELING','A PERSONAL NOTE 73',
    'A-COLD-WALL*','A. A. Spectrum','A.P.C.','AAPE by A Bathing Ape',
    'Acne Studios','ACRONYM','ADER error','adidas Originals','adidas x Human Made',
    'adidas x Humanrace by Pharrell','Williams','adidas x IVY PARK','Adieu',
    'Advisory Board Crystals','ADYAR','AFFXWRKS','Afield Out','Agnona',
    'Ahluwalia','Ahluwalia &PaulSmith','AïE','AIREI',"Aitor Throup's TheDSA",'Akoni',
    'Alchemist','Alexander McQueen','Alighieri','AMBUSH','AMI Alexandre Mattiussi',
    'Ann Demeulemeester','Another Aspect','APPLIED ART FORMS','Aries','Arnar Már Jónsson',
    'ARTURO OBEGERO','Ashley Williams','Asics','ASPESI','AURALEE',
    'Awake NY','Axel Arigato','Aztech Mountain','Balenciaga','Bally Hike',
    'Balmain','Bao Bao Issey Miyake','BAPE','Barbour','Barena','Bather','BEAMS PLUS',
'BED J.W. FORD',  
'Belstaff',
'Benjamin Edgar',
'Bethany Williams',
'Bianca Saunders',
'Billionaire Boys Club',
'Birkenstock',
'Blackmerle',
'Bless',
'Bleue Burnham',
'BLK DNM',
'Bloke',
'Bode',
'ONNIE CLYDE',
'Boramy Viguier',
'Boris Bidjan Saberi',
'Boss',
'both',
'Bottega Veneta',
'Botter',
'Brain Dead',
'Brioni',
'Brownstone',
'Brunello Cucinelli',
'BRYAN JIMENÈZ',
'Burberry',
'By Walid',
'BYBORRE',
'C.P. Company',
'C2H4',
'Calvin Klein Underwear',
'CALVINLUO',
'Camber USA',
'Camiel Fortgens',
'CamperLab',
'Canada Goose',
'Carhartt Work In Progress',
'Carlota Barrera',
'Carne Bollente',
'CARSON WACH',
'Cartier',
'Casablanca',
'Castañer',
'CAYL',
'CDLP',
'CFCL',
'Champion Reverse Weave',
'Charles Jeffrey Loverboy',
'Chemist Creations',
'Chen Peng',
'Chet Lo',
'Children of the Discordance',
'CHIMI',
'Chin Teo',
'Chopova Lowena',
'Christian Louboutin',
'Clarks Originals',
'Clot',
'CMMN SWDN',
'Coach 1941',
'Collina Strada',
'Come Back as a Flower',
'COMMAS',
'Comme des Garçons Homme',
'Comme des Garçons Homme Deux',
'Comme des Garçons Homme Plus',
'Comme des Garçons Play',
'Comme des Garçons Shirt',
'Comme des Garçons Wallets',
'Commission',
'Common Projects',
'Completedworks',
'Connor McKnight',
'Converse',
'Cornerstone',
'Corridor',
'Côte&Ciel',
'COTTON CITIZEN',
'Courrèges',
'Cowgirl Blue Co',
'Craig Green',
'Crocs',
'Cutler And Gross',
'Dheygere',
'Daniel W. Fletcher',
'Danner',
'Davi Paris',
'De Bonne Facture',
'Dear Letterman',
'Denim Tears',
'Descente ALLTERRAIN',
'DEVÁ STATES',
'DEVEAUX NEW YORK',
'Diemme',
'Diesel',
'Dime',
'Dion Lee',
'District Vision',
'Dita',
'Dolce & Gabbana',
'DOPPIAA',
'Double Rainbouu',
'Doublet',
'Dr. Martens',

'drew house',
'Dries Van Noten',
'Drôle De Monsieur',
'Dsquared2',
'Dunhill',
'Eastwood Danso',
'Eckhaus Latta',
'EDEN power corp',
'Edward Cuming',
'EGONlab',
'Eidos',
'éliou',
'Emanuele Bicocchi',
'Endless Joy',
'Enfants Riches Déprimés',
'Engineered Garments',
'Entire Studios',
'Erdem',
'ERL',
'Ermenegildo Zegna',
'Ermenegildo Zegna Couture',
'Ernest W. Baker',
'Essentials',
'Etro',
'Études',
'Evisu',
'extreme cashmere',
'Eytys',
'F-LAGSTUF-F',
'Factor',
'Faith Connexion',
'FARIS',
'FDMTL',
'Fear of God',
'Fendi',
'Feng Chen Wang',
'FLATLIST EYEWEAR',
'Floyd',
'FPM Milano',
'FRAME',
'Frédérique Constant',
'Frenckenberger',
'Fumito Ganryu',
'Gabriela Hearst',
'Garrett Leight',
'GAUCHERE',
'GCDS',
'Gentle Fullness',
'Georges Wendell',
'Georgia Kemball',
'Gianvito Rossi',
'Gil Rodriguez',
'Gimaguas',
'Giorgio Armani',
'Giuseppe Zanotti',
'Givenchy',
'GmbH',
'Golden Goose',
'Goldwin',
'Good News',
'Goodfight',
'GR10K',
'Gramicci',
'Greg Lauren',
'Grey Ant',
'Gucci',
'Guidi',
'Haider Ackermann',
'Hannah Jewett',
'HANREJ',
'HARAGO',
'Harmony',
'Harris Wharf London',
'Hatton Labs',
'Hed Mayner',
'HELIOT EMIL',
'Helmut Lang',
'Henrik Vibskov',
'Herno',
'Heron Preston',
'Heron Preston for Calvin Klein',
'HH-118389225',
'Holden',
'Holubar',
'Homme Plissé Issey Miyake',
'Honey Fucking Dijon',
'Hood by Air',
'HOPE',
'House of the Very Islands',
'Hugo',
'Human Recreational Services',
'Husbands',
'ICECREAM',
'illesteva',
'IN GOLD WE TRUST PARIS',
'Innerraum',
'Isabel Benenato',
'Isabel Marant',
'Isaia',
'Izzue',
'J.Hannah',
'Jacquemus',
'JACQUES',
'JACQUES MARIE MAGE',
'Jam',
'Jan-Jan Van Essche',
'Jean Paul Gaultier',
'JERIH',
'JieDa',
'Jil Sander',
'JiyongKim',
'John Elliott',
'Johnlawrencesullivan',
'Judy Turner',
'Julius',
'Junya Watanabe',
'Just Cavalli',
'Juun.J',
'JW Anderson',
'Kanghyuk',
'Kanuk',
'KARA',
'Karu Research',
'KASSL Editions',
'Keenkee',
'Kenzo',
'KIDILL',
'Kids Worldwide',
'KidSuper',
'Kiko Kostadinov',
'King & Tuckfield',
'Klättermusen',
'Ksubi',
'Kuboraum',
'Kuro',
'KUSIKOHC',
'LHomme Rouge',
'Label Under Construction',
'Labrum',
'Lacoste',
'Lady White Co.',
'Landlord',
'Lanvin',
'Le Gramme',
'LE17SEPTEMBRE',
'Lemaire',
'Les Tien',

'Levis Made & Crafted',
'Levis Vintage Clothing',
'Lexxola',
'Li-Ning',
'Liam Hodges',
'Liberal Youth Ministry',
'LINDA FARROW',
'Loewe',
'Lorette Colé Duprat',
'LUU DAN',
'Luar',
'Ludovic de Saint Sernin',
'Lukhanyo Mdingi',
'Lunetterie Générale',
'M.A. Martin ',
'Mackage',
'Mackintosh',
'Magliano',
'Mainline:RUS/Fr.CA/DE',
'Maison Kitsuné',
'Maison Margiela',
'Malibu Sandals',
'Manors Golf',
'Marc Jacobs',
'Marc Jacobs Heaven',
'Marcelo Burlon County of Milan',
'Margaret Howell',
'Marine Serre',
'Marni',
'Marsèll',
'Marshall Columbia',
'Martin Asbjørn',
'Martine Ali',
'Martine Rose',
'Maryam Nassir Zadeh',
'Massimo Alba',
'Master-Piece Co',
'mastermind JAPAN',
'mastermind WORLD',
'Matsuda',
'Max Mara',
'Maximilian Davis',
'MCQ', 
'Merrell 1TRL',
'Meta Campania Collective',
'mfpen',
'MHL by Margaret Howell',
'Miharayasuhiro',
'MISBHV',
'Missoni',
'Missoni Sport',
'MM6 Maison Margiela',
'Molly Goddard',
'Moncler',
'Moncler Genius',
'Moncler Grenoble',
'Moose Knuckles x Eckhaus Latta',
'Moschino',
'Moussy Vintage',
'Mowalola',
'Mr. Saturday',
'MSGM',
'Mugler',
'Museum of Peace & Quiet',
'N.Hoolywood',
'Nahmias',
'Naked & Famous Denim',
'Namacheko',
'NAMESAKE',
'Nanamica',
'Nanushka',
'NAPA by Martine Rose',
'Native Sons',
'NEEDLES',
'Neighborhood',
'Neil Barrett',
'NEMEN®',
'New Balance',
'Nicholas Daley',
'Nike Jordan',
'NN07',
'Noah',
'Nobis',
'NOMA t.d.',
'non',
'Noon Goons',
'Norda',
'Norse Projects',
'NotSoNormal',
'Nudie Jeans',
'Numbering',
'Oakley',
'OAMC',
'Off-White',
'Officine Creative',
'Officine Générale',
'Oliver Peoples',
'On',
'Online Ceramics',
'Opening Ceremony',
'Ostrya',
'Ottolinger',
'Our Legacy',
'Outdoor Voices',
'OVERCOAT',
'Paco Rabanne',
'Palm Angels',
'PALMER',
'Palmes',
'Paloma Wool',
'Palomo Spain',
'Panconesi',
'PANGAIA',
'PARADIS PERDUS',
'Parajumpers',
'paria /FARZANEH',
'Pas Normal Studios',
'Paul Smith',
'Paul Smith + Christoph Niemann',
'Paul Smith 50th Anniversary',
'Paul Stuart',
'Pearls Before Swine',
'PEdALED',
'Persol',
'Peter Do',
'Phileo',
'PHIPPS',
'Phlemuns',
'Pierre Hardy',
'Polo Ralph Lauren',
'Port Tanger',
'Post Archive Faction (PAF)',
'Praying',
'PRESIDENTs',
'PROJEKT PRODUKT',
'PS by Paul Smith',
'Psychworld',
'Pyer Moss',
'Quiet Golf',
'R13',
'RAEN',
'Raf Simons',
'rag & bone',
'RAINS',
'Ralph Lauren Purple Label',
'RANDT',
'Rassvet',
'RÄTHEL & WOLF',
'Ray-Ban',
'Recto',
'Red Wing Heritage',
'Reebok by Pyer Moss',
'Reebok Classics',
'Reese Cooper',
'Remi Relief',
'RETROSUPERFUTURE',
'Rhude',
'Rick Owens',
'Rick Owens Drkshdw',
'Ring Jacket',
'rito structure',
'RK',
'RLX Ralph Lauren',
'ROA',
'Rochambeau',
'Rochas Homme',
'ROGIC',
'Rombaut',
'RRL',
's.k. manor hill',
'S.S.Daley',
'sacai',
'Saint Laurent',
'Saintwoods',
'Salie 66',
'Salomon',
'Salvatore Ferragamo',
'Sankuanz',
'Santangelo',
'Santoni',
'Sasquatchfabrix.',
'Satisfy',
'Satta',
'Saturdays NYC',
'Saul Nash',
'SC103',
'Schnayderman',
'Schott',
'Sean Suen',
'Sebago',
'Sebastien Ami.',
'Sébline',
'Second/Layer',
'SEEKINGS',
'Séfr',
'Serapis',
'Sergio Tacchini',
'Shinola',
'Sies Marjan',
'Situationist',
'Sky High Farm Workwear',
'Smythson',
'Snow Peak',
'Soar Running',
'Solid & Striped',
'Solid Homme',
'Sophie Buhai',
'Soulland',
'South2 West8',
'SPENCER BADU',
'Sporty & Rich',
'SSENSE WORKS',
'St-Henri',
'Stay Made',
'Stefan Cooke',
'Stella McCartney',
'Stockholm (Surfboard) Club',
'Stolen Girlfriends Club',
'Stone Island',
'Stone Island Shadow Project',
'Story mfg.',
'Stray Rats',
'Stüssy',
'Stutterheim',
'SUBU',
'Suicoke',
'Sulvam',
'Sunflower',
'Sunnei',
'Sunspel',
'SWEETLIMEJUICE',
'System',
'Taiga Takahashi',
'TAION',
'TAKAHIROMIYASHITA TheSoloist',
'Tanaka',
'Tanner Fletcher',
'Tekla',
'Ten c',
'Teva',
'Thames MMXX.',
'The Conspires',
'The Elder Statesman',
'The Farmers Market Global',
'The North Face',
'The Row',
'The Very Warm',
'The Viridi-anne',
'THEBE MAGUGU',
'Theophilio',
'Theory',
'Thierry Lasry',
'thisisneverthat',
'Thom Browne',
'Tibi',
'Tiger of Sweden',
'Tiger of Sweden Jeans',
'Toga Virilis',
'Tokyo James',
'TOM FORD',

'UNIFORME',
'Valentino',
'Valentino Garavani',
'Vans',
'VEERT',
'Veilance',
'VEJA',
'Vejas Maksimas',
'Versace',
'Versace Jeans Couture',
'Versace Underwear',
'VETEMENTS',
'Vince',
'Virón',
'Visvim',
'VITELLI',
'VIVENDII',
'Vivienne Westwood',
'VTMNTS',
'Vyner Articles',
'WACKO MARIA',
'Wales Bonner',
'WARDROBE.NYC',
'We11done',
'Wekaforé',
'WESTERN HYDRODYNAMIC RESEARCH',
'White Mountaineering',
'Who Decides War by MRDR BRVDO',
'Winnie New Yor',
'Wolford',
'Won Hundred',
'Wood Wood',
'Wooyoungmi',
'WWW.WILLSHOTT',
'Xander Zhou',
'XLIM',
'Y-3',
'Y/Project',
'YMC',
'Yohji Yamamoto',
'Youths in Balaclava',
'Yuichi Toyama',
'Yuki Hashimoto',
'Yves Salomon',
'Yves Salomon - Army',
'Z Zegna',
'ZAYN x ARNETTE',
'ZEGNA',
]


for(let i=0 ;i<llArr.length ;i++){
    let div = document.createElement('div')
    div.innerText = llArr[i]
    document.getElementById("left").append(div)
    if(i===0){
        div.addEventListener("click",function(){
            window.location.href = "../mensAll/mensA.html"
        })
    }
    if(i===1 || i===0){
        div.style.fontWeight = "1000"
        div.style.fontSize = "14px"
        div.style.textDecoration = "underline"
        div.style.marginBottom = "20px"
    }else
    div.style.fontSize = "11px"
}



rArr = [
    'SORT',
'Latest arrivals',
'Trending',
'Price: Low to high',
'Price: High to low',
'COLORS',
'ALL COLORS',
'Black',
'Blue',
'Brown',
'Burgundy',
'Gray',
'Green',
'Navy',
'Orange',
'Pink',
'Purple',
'Red',
'Tan',
'White',
'Yellow',
]

for(let i=0 ;i<rArr.length ;i++){
    let div = document.createElement('div')
    div.innerText = rArr[i]
    if(i===0 || i===5){
        div.style.fontSize = "12px"
        div.style.fontWeight = "900"
        div.style.textDecoration = 'underline'
        div.style.margin = '10px 0 10px 0'
    }else if(i===3){
        div.addEventListener("click",function(){
            lthFun()
        })
    }else if(i===4){
        div.addEventListener("click",function(){
            htlFun()
        })
    }
    else if(i===2){
        div.addEventListener("click",function(){
            trendingFun()
        })
    }
    else if(i===1){
        div.addEventListener("click",function(){
            latestArrivalFun()
        })
    }
    div.style.marginLeft = '30px'
    document.querySelector("#right").append(div)
}



let midProducts = (data) => {

    let cont = document.getElementById("mid_grid")
    cont.innerHTML = null
    data.forEach( (el) => {
        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image

        let name = document.createElement('p')
        name.innerText = `Name : ${el.name}`

        let brand = document.createElement('p')
        brand.innerText = `Brand : ${el.brand}`

        let price = document.createElement('p')
        price.innerText = `Price : $ ${el.price}`

        div.append(img, name, brand, price)
        cont.append(div)
    })
}


function lthFun(){
    let con = document.getElementById("in_mid")
    con.innerHTML = null
    let filter = prArr.sort(function(a,b){
        return a.price < b.price ? -1 : 1;
    })
    console.log(filter)
    midProducts(filter)
    
}
function htlFun(){
    let con = document.getElementById("in_mid")
    con.innerHTML = null
    let filter = prArr.sort(function(a,b){
        return a.price < b.price ? 1 : -1;
    })
    console.log(filter)
    midProducts(filter)
}

let = trendingFun = () => {
    let con = document.getElementById("in_mid")
    con.innerHTML = null
    let filter = prArr.filter(function(el){
        return el.trending === true ;
    })
    if(filter.length < 1){
        let sug_para = document.createElement('h1')
        sug_para.innerText = "NO TRENDING SHOES RIGHT NOW !"
        console.log(sug_para)
        sug_para.style.textAlign = "center"
        sug_para.style.marginTop = "50px"
        sug_para.style.color = "red"
        sug_para.style.paddingTop = "100px"
        con.append(sug_para)
    }else{
        midProducts(filter)
    }
    console.log(filter)
}

let = latestArrivalFun = () => {
    let con = document.getElementById("in_mid")
    con.innerHTML = null
    let filter = prArr.filter(function(el){
        return el.trending === 'yes' ;
    })
    if(filter.length < 1){
    let sug_para = document.createElement('h1')
        sug_para.innerText = "NO TRENDING SHOES RIGHT NOW !"
        console.log(sug_para)
        sug_para.style.textAlign = "center"
        sug_para.style.marginTop = "50px"
        sug_para.style.color = "red"
        sug_para.style.paddingTop = "100px"
        con.append(sug_para)
    }else{
        midProducts(filter)
    }
    console.log(filter)
}





let prArr = [
    
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222798M223014_1/bottega-veneta-black-and-brown-tire-chelsea-boots.jpg',
        name:'brown-black shoes',
        brand:'Black Padel',
        price:790,
        id:'b',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222798M234014_1/bottega-veneta-green-slider-sandal.jpg',
        name:'Green padel krack shoes',
        brand:'Padel',
        price:500,
        id:'c',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221168M236009_1/maison-margiela-white-canvas-high-top-sneakers.jpg',
        name:'White padel krack shoes',
        brand:'Padel',
        price:600,
        id:'d',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221168M231014_1/maison-margiela-green-suede-loafers.jpg',
        name:'White padel krack shoes',
        brand:'brown Padel',
        price:500,
        id:'e',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222270M231013_1/salvatore-ferragamo-black-nilo-loafers.jpg',
        name:'Black padel krack shoes',
        brand:'brown Padel',
        price:700,
        id:'f',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222270M234002_1/salvatore-ferragamo-black-logan-sandals.jpg',
        name:'Black padel krack shoes',
        brand:'brown Padel',
        price:700,
        id:'g',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M236007_1/giuseppe-zanotti-red-kriss-high-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'brown Padel',
        price:800,
        id:'h',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M236001_1/giuseppe-zanotti-black-and-orange-kriss-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE',
        price:855,
        id:'i',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237070_1/giuseppe-zanotti-black-and-yellow-frankie-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE ZANOTTI',
        price:855,
        id:'j',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237073_1/giuseppe-zanotti-silver-frankie-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'brown Padel',
        price:800,
        id:'m',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222799M237063_1/converse-tan-chuck-taylor-all-star-pro-hi-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE',
        price:955,
        id:'l',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237100_1/giuseppe-zanotti-black-and-white-talon-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE ZANOTTI',
        price:895,
        id:'k',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222798M223018_1/bottega-veneta-brown-puddle-boots.jpg',
        name:'brown-black shoes',
        brand:'Brown Padel',
        price:690,
        id:'a',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222798M223014_1/bottega-veneta-black-and-brown-tire-chelsea-boots.jpg',
        name:'brown-black shoes',
        brand:'Black Padel',
        price:790,
        id:'b',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222798M234014_1/bottega-veneta-green-slider-sandal.jpg',
        name:'Green padel krack shoes',
        brand:'Padel',
        price:500,
        id:'c',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221168M236009_1/maison-margiela-white-canvas-high-top-sneakers.jpg',
        name:'White padel krack shoes',
        brand:'Padel',
        price:600,
        id:'d',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221168M231014_1/maison-margiela-green-suede-loafers.jpg',
        name:'White padel krack shoes',
        brand:'brown Padel',
        price:500,
        id:'e',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222270M231013_1/salvatore-ferragamo-black-nilo-loafers.jpg',
        name:'Black padel krack shoes',
        brand:'brown Padel',
        price:700,
        id:'f',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222270M234002_1/salvatore-ferragamo-black-logan-sandals.jpg',
        name:'Black padel krack shoes',
        brand:'brown Padel',
        price:700,
        id:'g',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M236007_1/giuseppe-zanotti-red-kriss-high-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'brown Padel',
        price:800,
        id:'h',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M236001_1/giuseppe-zanotti-black-and-orange-kriss-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE',
        price:855,
        id:'i',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237070_1/giuseppe-zanotti-black-and-yellow-frankie-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE ZANOTTI',
        price:855,
        id:'j',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237073_1/giuseppe-zanotti-silver-frankie-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'brown Padel',
        price:800,
        id:'m',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222799M237063_1/converse-tan-chuck-taylor-all-star-pro-hi-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE',
        price:955,
        id:'l',
        type:'shoes'
    },
    {
        image:'https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222266M237100_1/giuseppe-zanotti-black-and-white-talon-sneakers.jpg',
        name:'Black-brown krack shoes',
        brand:'GIUSUPEE ZANOTTI',
        price:895,
        id:'k',
        type:'shoes'
    },
]

midProducts(prArr)


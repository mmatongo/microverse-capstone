const moreSpeaker = [
    {
        imgsrc: 'img/speaker6.png',
        imgalt: 'Image of Lila Tretikov',
        name: 'Lila Tretikov',
        desc: 'Executive Director of the Wikimedia Foundation',
        spdesc: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    },
    {
        imgsrc: 'img/speaker4.png',
        imgalt: 'Image of Kilnam Chon',
        name: 'Kilnam Chon',
        desc: 'Retired',
        spdesc: `Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of Fame.`,
    },
    {
        imgsrc: 'img/speaker5.png',
        imgalt: 'Image of Julia Leda',
        name: 'Julia Leda',
        desc: 'President of Young Pirates of Europe',
        spdesc: `European ingentration, political democracy and partecipation of youth through online as her major condern, Redas report outlining potential changes to EU copyright law was approved by the Parliament in July.`,
    },
    {
        imgsrc: 'img/speaker3.png',
        imgalt: 'Image of Ryan Merkley',
        name: 'Ryan Merkley',
        desc: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
        spdesc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    },
];

const initialSpeakers = document.getElementsByClassName('speakers')[0];

function defSpeakers() {
    const htmlText = `<article class="speaker">
                      <div class="bgimage">
                        <img class="second" src="img/speaker1.png" alt="Image of Yochai Benkler">
                      </div>
                      <div>
                        <h3>Yochai Benkler</h3>
                        <p class="desc">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
                        <hr class="speakers-line">
                        <p class="speakerdesc">Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.</p>
                      </div>
                    </article>
                    <article class="speaker">
                      <div class="bgimage">
                        <img class="second" src="img/speaker2.png" alt="Image of SohYeong Noh">
                      </div>
                      <div>
                        <h3>SohYeong Noh</h3>
                        <p class="desc">Director of Art Centre Nabi and a board member of CC Korea.</p>
                          <hr class="speakers-line">
                        <p class="speakerdesc">
                        As the main venue for new media art pruduction in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.
                        </p>
                      </div>
                    </article>`;

    return htmlText;
}

function otherSpeakers() {
    const htmlText = `<article class="speaker otherSpeaker hideSpeaker">
                      <div class="bgimage">
                        <img class="second" src="${moreSpeaker[0].imgsrc}" alt="${moreSpeaker[0].imgalt}">
                      </div>
                      <div>
                        <h3>${moreSpeaker[0].name}</h3>
                        <p class="desc">${moreSpeaker[0].desc}</p>
                        <hr class="speakers-line">
                        <p class="speakerdesc">${moreSpeaker[0].spdesc}</p>
                      </div>
                    </article>
                    
                    <article class="speaker otherSpeaker hideSpeaker">
                      <div class="bgimage">
                        <img class="second" src="${moreSpeaker[1].imgsrc}" alt="${moreSpeaker[1].imgalt}">
                      </div>
                      <div>
                        <h3>${moreSpeaker[1].name}</h3>
                        <p class="desc">${moreSpeaker[1].desc}</p>
                        <hr class="speakers-line">
                        <p class="speakerdesc">${moreSpeaker[1].spdesc}</p>
                      </div>
                    </article>
                    <article class="speaker otherSpeaker hideSpeaker">
                      <div class="bgimage">
                        <img class="second" src="${moreSpeaker[2].imgsrc}" alt="${moreSpeaker[2].imgalt}">
                      </div>
                      <div>
                        <h3>${moreSpeaker[2].name}</h3>
                        <p class="desc">${moreSpeaker[2].desc}</p>
                        <hr class="speakers-line">
                        <p class="speakerdesc">${moreSpeaker[2].spdesc}</p>
                      </div>
                    </article>
                    <article class="speaker otherSpeaker hideSpeaker">
                      <div class="bgimage">
                        <img class="second" src="${moreSpeaker[3].imgsrc}" alt="${moreSpeaker[3].imgalt}">
                      </div>
                      <div>
                        <h3>${moreSpeaker[3].name}</h3>
                        <p class="desc">${moreSpeaker[3].desc}</p>
                        <hr class="speakers-line">
                        <p class="speakerdesc">${moreSpeaker[3].spdesc}</p>
                      </div>
                    </article>`;

    return htmlText;
}

function insertHtml() {
    initialSpeakers.innerHTML += defSpeakers();
    initialSpeakers.innerHTML += otherSpeakers();
}

initialSpeakers.onload = insertHtml();

const seeMore = document.querySelector('.more');
const allpeakers = document.querySelectorAll('.otherSpeaker');
let hide = true;

seeMore.addEventListener('click', (e) => {
    if (hide === true) {
        allpeakers.forEach((speaker) => {
            speaker.classList.add('hideSpeaker');
            e.target.innerHTML = '<span class="material-icons-outlined">expand_more</span>';
        });
        hide = false;
        
    } else {
        allpeakers.forEach((speaker) => {
            speaker.classList.remove('hideSpeaker');
            e.target.innerHTML = '<span class="material-icons-outlined">expand_less</span>';
        });
        hide = true;
        
    }
});
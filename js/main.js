/*----- constants -----*/
const rpsLookup = {
    r: {
        imgUrl: 'imgs/rock.png',
        beats: 's'
    },
    p: {
        imgUrl: 'imgs/paper.png',
        beats: 'r'
    },
    s: {
        imgUrl: 'imgs/scissors.png',
        beats: 'p'
    }
};



/*----- app's state (variables) -----*/
let scores, winner, results; 

/*----- cached element references -----*/
// const playerScore = document.querySelector('p-score');

const scoreEls = {
    p: document.querySelector('#p-score'),
    t: document.querySelector('#t-score'),
    c: document.querySelector('#c-score'),
};

const resultEls = {
    p: document.querySelector('#p-results'),
    c: document.querySelector('#c-results')
};

/*----- event listeners -----*/


/*----- functions -----*/



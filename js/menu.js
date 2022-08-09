const breakfast = [
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        type: 'breakfast',
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'    
    },{
        type: 'breakfast',
        title: 'Coffe with algo',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'    
    },{
        type: 'breakfast',
        title: 'Coffe with algo',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'    
    },{
        type: 'breakfast',
        title: 'Coffe with algo',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'    
    },{
        type: 'breakfast',
        title: 'Coffe with algo',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'    
    },
]

const lunch = [
    {
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with vegetables',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with beer',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with beer',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },{
        type: 'lunch',
        title: 'roast with beer',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '21'
    },
]

let offset = 0;
let limit = 7;

let offset2 = 0;
let limit2 = 7;

const breakfastContainer = document.querySelector('.cards__breakfast')
const lunchContainer = document.querySelector('.cards__lunch')

const previousBreakfast = document.querySelector('#breakfast__prev')
const nextBreakfast = document.querySelector('#breakfast__next')

const previousLunch = document.querySelector('#lunch__prev')
const nextLunch = document.querySelector('#lunch__next')
// EVENT

previousBreakfast.addEventListener('click', () => {
    if (offset != 0) {
        offset -= 8;
        removeChildNodes(breakfastContainer);
        generatorCards(offset, limit)
    }
    
});

nextBreakfast.addEventListener('click', () => {
    if (offset <= breakfast.length - 8){
        offset += 8;
        removeChildNodes(breakfastContainer);
        generatorCards(offset, limit)
    }
});

previousLunch.addEventListener('click', () => {
    if (offset2 != 0) {
        offset2 -= 8;
        removeChildNodes(lunchContainer);
        generatorCards2(offset2, limit2)
    }
    
});

nextLunch.addEventListener('click', () => {
    if (offset2 <= lunch.length - 8){
        offset2 += 8;
        removeChildNodes(lunchContainer);
        generatorCards2(offset2, limit2)
    }
});
// FUNCTION

function generatorCard(id) {
    createCard(breakfast[id])
}

function generatorCard2(id) {
    createCard(lunch[id])
}

function generatorCards(offset, limit) {
    for (let i = offset; i <= offset + limit ; i++) {
        generatorCard(i);
    }
}

function generatorCards2(offset, limit) {
    for (let i = offset; i <= offset + limit ; i++) {
        generatorCard2(i);
    }
}

function createCard(card){
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card__container')

    const cardTitle = document.createElement('h5')
    cardTitle.textContent = card.title

    const cardBody = document.createElement('div')
    cardBody.classList.add('card__body')
    
    const cardDescription = document.createElement('p')
    cardDescription.textContent = card.description
    cardDescription.classList.add('body__description')


    const cardSeparator = document.createElement('div')
    cardSeparator.classList.add('body__separator')


    const cardPrice = document.createElement('p')
    cardPrice.textContent = '$'+card.price
    cardPrice.classList.add('body__price')

    cardContainer.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    cardBody.appendChild(cardSeparator)
    cardBody.appendChild(cardPrice)
    cardContainer.appendChild(cardBody)
    if( card.type === 'breakfast'){
        breakfastContainer.appendChild(cardContainer)
    }else if( card.type === 'lunch'){
        lunchContainer.appendChild(cardContainer)
    }

}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

generatorCards(offset, limit)
generatorCards2(offset2, limit2)

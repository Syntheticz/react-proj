
function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
 }
 
 const images = importAll(require.context('../images', false, /\.jpg/));

const data = [{
    id : 1,
    img : images['japan.jpg'],
    name: 'Japan',
    description : "Japan is considered to be one of the safest countries in the world, and has one of the lowest global crime rates. Japanese people often leave their doors unlocked, children are perfectly safe traveling on the subway by themselves, and visitors are able to walk around the cities at night without having to worry."
    },

    {
        id : 2,
        img : images['madrid.jpg'],
        name: 'Madrid',
        description : "Madrid is Spain's capital city and home to some impressive architecture, world-renowned museums and stunning outdoor plazas, including. Madrid is Spain's capital city and home to some impressive architecture, world-renowned museums and stunning outdoor plazas, including Cibeles."
    },
    
    {
        id : 3,
        img : images['america.jpg'],
        name: 'United States',
        description : "The USA is known for its iconic landmarks – The Statue of Liberty, Hollywood Sign, Golden Gate Bridge – but it's also a place of incredible hospitality, wide open spaces and amazing natural beauty. That's 50 states that serve up unique holiday experiences and provide endless options for every type of traveller."
        },
]


export default data;
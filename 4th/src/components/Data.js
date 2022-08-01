import React from 'react'
import Card from './Card';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
 }
 
 const images = importAll(require.context('../images', false, /\.jpg/));
 

 export const data = [
    {
        img : images['card1.jpg'],
        name : "Mr. Whiskers",
        ratings : 5,
        price : 5,
        available : false
        },
    {
        img : images['fluffy.jpg'],
        name : "Mr. Fluffy",
        ratings : 4,
        price : 10,
        available : true
    },
    {
        img : images['Schrödinger.jpg'],
        name : "Schrödinger",
        ratings : 69,
        price : 420,
        available : true,
        },
    {
        img : images['Grumpy.jpg'],
        name : "Mr. Grumpy",
        ratings : 3,
        price : 1,
        available : true
    },

    {
        img : images['curry.jpg'],
        name : "Mr. Curry",
        ratings : 8,
        price : 20,
        available : true
    },
    
]


export default data;
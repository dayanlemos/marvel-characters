import React from 'react';
import axios from 'axios';

const MARVEL_BASE_API = 'http://gateway.marvel.com';
const MARVEL_CHARACTERS_API = '/v1/public/characters';
const MARVEL_PUBLIC_KEY = 'dc1f0549b5d5924f62633bd775ccbe0f';

export const getCharactersAction = (searchTerm) => dispatch => {
    console.log(searchTerm);

    let queryParams = '';

    searchTerm ? queryParams = `&nameStartsWith=${searchTerm}` : queryParams = '';

    axios.get(`${MARVEL_BASE_API}${MARVEL_CHARACTERS_API}?apikey=${MARVEL_PUBLIC_KEY}${queryParams}`).then(res => {
        console.log(res.data.data.results);
        dispatch({
            type: 'GET_CHARACTERS_ACTION',
            payload: res.data.data.results
        });
    });
};

export const getActiveCharacterAction = (characterId) => dispatch => {

    axios.get(`${MARVEL_BASE_API}${MARVEL_CHARACTERS_API}/${characterId}?apikey=${MARVEL_PUBLIC_KEY}`).then(res => {
        console.log(res.data.data.results);
        dispatch({
            type: 'GET_ACTIVE_CHARACTER_ACTION',
            payload: res.data.data.results[0]
        });
    });
};


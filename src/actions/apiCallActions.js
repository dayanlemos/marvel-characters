import React from 'react';
import axios from 'axios';

const MARVEL_BASE_API = 'http://gateway.marvel.com';
const MARVEL_CHARACTERS_API = '/v1/public/characters';
const MARVEL_PUBLIC_KEY = 'dc1f0549b5d5924f62633bd775ccbe0f';

export const getCharactersAction = (searchTerm) => dispatch => {
    let queryParams = '';

    searchTerm ? queryParams = `&nameStartsWith=${searchTerm}` : queryParams = '';

    axios.get(`${MARVEL_BASE_API}${MARVEL_CHARACTERS_API}?apikey=${MARVEL_PUBLIC_KEY}${queryParams}`).then(res => {
        dispatch({
            type: 'GET_CHARACTERS_ACTION',
            payload: res.data.data.results
        });
    });
};

export const getActiveCharacterAction = (characterId) => dispatch => {
    axios.get(`${MARVEL_BASE_API}${MARVEL_CHARACTERS_API}/${characterId}?apikey=${MARVEL_PUBLIC_KEY}`).then(character => {

        let activeCharacter = character.data.data.results[0];
        let seriesList = [];

        axios.get(`${activeCharacter.series.collectionURI}?apikey=${MARVEL_PUBLIC_KEY}`).then(series => {
            seriesList = series.data.data.results;
            activeCharacter.seriesList = seriesList;

            dispatch({
                type: 'GET_ACTIVE_CHARACTER_ACTION',
                payload: activeCharacter
            });
        });
    });
};


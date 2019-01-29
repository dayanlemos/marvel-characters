import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardList from '../../components/CardList/CardList';
import { getCharactersAction } from "../../actions/apiCallActions";

class CardsContainer extends Component {
    componentDidMount() {
        this.getCharacters();
    }

    getCharacters = (searchTerm) => {
        const { getCharactersAction } = this.props;
        getCharactersAction(searchTerm);
    }

    render() {
        return (
            <div>
                <h2>Marvel Characters</h2>
                <hr/>
                <SearchBar onSearch={this.getCharacters} />
                <CardList cards={this.props.cards}/>
            </div>
        )
    }
}

CardsContainer.defaultProps = {
    cards: []
}

const mapStateToProps = state => ({
    cards: state.cardsReducer.characters
});

const mapDispatchToProps = (dispatch) => ({
    getCharactersAction: (searchTerm) => dispatch(getCharactersAction(searchTerm))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
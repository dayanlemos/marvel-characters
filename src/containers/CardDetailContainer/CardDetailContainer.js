import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { getActiveCharacterAction } from '../../actions/apiCallActions';

class CardDetailContainer extends Component {
    componentDidMount() {
        this.setActiveCard();
    }

    setActiveCard = () => {
        const { getActiveCharacterAction } = this.props;
        getActiveCharacterAction();
    };

    render() {
        const { card = {} } = this.props;

        const formValidate = (values) => {
            let errors = {};
            if (!values.name) {
                errors.name = 'Name is a required field';
            } else if (values.name.length < 3) {
                errors.name = 'Name should have at least 3 characters';
            }
            return errors;
        };


        /** TODO
         * this method (save()) should trigger an action with a PUT request to the server.
         * All data needed for the request payload can be taken out from the 'values' param */
        const save = (values, setSubmitting) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        };

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>{card.name}</h2>
                    </div>
                    <div className="col-md-6 text-right">
                        <Link to="/" className="btn btn-link">Back</Link>
                    </div>
                </div>

                <hr/>

                {card.id ?

                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={`${card.thumbnail.path}/detail.${card.thumbnail.extension}`} />
                        </div>
                        <div className="col-md-6">

                            <Formik enableReinitialize={true} initialValues={card} validate={values => formValidate(values)} onSubmit={(values, { setSubmitting }) => save(values, setSubmitting)}>
                                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter the character name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                                            {errors.name && touched.name && errors.name ?
                                                <div className="alert alert-danger" role="alert">
                                                    {errors.name && touched.name && errors.name}
                                                </div> : null}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea rows={3} className="form-control" id="description" name="description" placeholder="Enter the character description" onChange={handleChange} onBlur={handleBlur} value={values.description}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Save</button>
                                    </form>
                                )}
                            </Formik>

                            <hr />

                            <h3>Series</h3>
                            {card.seriesList.map((serie, key) => (
                                <div className="list-group">
                                    <div className="list-group-item">
                                        <h5>{serie.title}</h5>
                                        <p>{serie.description}</p>
                                    </div>
                                </div>
                                ))}

                        </div>
                    </div>

                    : null }
            </div>
        )
    }
}

CardDetailContainer.defaultProps = {
    card: {}
};

const mapStateToProps = state => ({
    card: state.cardsReducer.character
});

const mapDispatchToProps = (dispatch, props) => ({
    getActiveCharacterAction: () => dispatch(getActiveCharacterAction(props.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer);
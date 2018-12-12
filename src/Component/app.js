import React, { Fragment } from 'react';
import { Header, Footer } from './Layout';
import Excercises from './Excercises'

export default class extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Excercises />
                <Footer />
            </Fragment>
        )
    }
}

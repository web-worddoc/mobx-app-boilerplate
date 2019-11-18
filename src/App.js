import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import * as moment from 'moment';
import 'moment/locale/ru';

import { ContentContext } from '@contexts';
import { ThemeStyles } from 'ThemeStyles';
import { GlobalStyles } from 'GlobalStyles';


const propTypes = {
    language: PropTypes.string,
};

const mapStateToProps = ({ App }) => ({
    language: App.language,
});

const App = ({ language }) => {
    const dictionary = require(`locale/${language}.json`);
    moment.locale(language);

    return (
        <ContentContext.Provider value={dictionary}>
            <GlobalStyles/>
            <ThemeStyles/>
        </ContentContext.Provider>
    );
};

App.propTypes = propTypes;

export default inject(mapStateToProps)(observer(App));

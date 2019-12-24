import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import 'moment/locale/ru';


const mapStateToProps = ({ Language }) => ({
    currentLang: Language.current,
});

export const ContentContext = React.createContext(null);

const propTypes = {
    children: PropTypes.node.isRequired,
    currentLang: PropTypes.string.isRequired,
};

export const LanguageProvider = ({ children, currentLang }) =>  {
    const dictionary = require(`@core/dictionary/${currentLang}.json`);

    return (
        <ContentContext.Provider value={dictionary}>
            {children}
        </ContentContext.Provider>
    );
};

LanguageProvider.propTypes = propTypes;

export default inject(mapStateToProps)(LanguageProvider);

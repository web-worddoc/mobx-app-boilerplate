import React, { Component } from 'react';

import { ContentContext } from 'js/contexts';


export const withContext = Comp => {
    return class extends Component {
        render() {
            return (
                <ContentContext.Consumer>
                    {dictionary => (
                        <Comp {...this.props} dictionary={dictionary}/>
                    )}
                </ContentContext.Consumer>
            );
        }
    };
}

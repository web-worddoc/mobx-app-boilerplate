import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

import { paths } from '@core';


const mapStateToProps = ({ Session }) => ({
    isSessionActive: Session.isActive,
});

export const makePrivateRoute = Component => {
    @inject(mapStateToProps)
    class PrivateRoute extends React.Component {
        static propTypes = {
            isSessionActive: PropTypes.bool,
        }

        render() {
            const { isSessionActive, ...rest } = this.props;

            return (
                <>
                    {isSessionActive ? <Component {...rest}/> : isSessionActive === false ? <Redirect to={paths.auth.login.pathname}/> : undefined}
                </>
            );
        }
    }
    return PrivateRoute;
};

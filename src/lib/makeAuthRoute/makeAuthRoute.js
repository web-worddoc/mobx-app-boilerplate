import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

import { paths } from '@core';


const mapStateToProps = ({ Session }) => ({
    isSessionActive: Session.isActive,
});

export const makeAuthRoute = Component => {
    @inject(mapStateToProps)
    class AuthRoute extends React.Component {
        static propTypes = {
            isSessionActive: PropTypes.bool,
        }

        render() {
            const { isSessionActive, ...rest } = this.props;

            return (
                <>
                    {isSessionActive === false ? <Component {...rest}/> : isSessionActive ? <Redirect to={paths.office.admins.pathname}/> : undefined}
                </>
            );
        }
    }
    return AuthRoute;
};

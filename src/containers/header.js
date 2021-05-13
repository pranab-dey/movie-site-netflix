import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../assets/logo.svg';

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} alt='Netflix Logo' src={logo} />
				<Header.ButtonLink to={ROUTES.SIGNIN}>
					Sign In
				</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	);
}

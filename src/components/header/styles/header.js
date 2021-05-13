import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 56px;
	height: 64px;
	padding: 18px 0;

	a {
		display: flex;
	}

	@media (max-width: 1000px) {
		margin: 0 30 px;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	width: 100px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 17px;
	border-radius: 3px;
	padding: 8px 21px;
	text-align: center;
	cursor: pointer;
	letter-spacing: 0.7px;

	&:hover {
		background-color: #c80000;
		color: white;
	}
`;

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.35),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.35)
		),
		url(${({ src }) =>
				src
					? `../images/misc/${src}.jpg`
					: '../images/misc/home-bg.jpg'})
			top left / cover no-repeat;
`;

export const Logo = styled.img`
	width: 108px;
	height: 32px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 40px;
		width: 150px;
	}
`;

import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 660px;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 5px;
	width: 100%;
	margin: auto;
	max-width: 450px;
	padding: 60px 68px 40px;
	margin-bottom: 100px;
`;

export const Error = styled.div`
	background: #e87c03;
	border-radius: 4px;
	font-size: 16px;
	margin: 0 0 16px;
	color: white;
	letter-spacing: 0.5px;
	padding: 15px 20px;
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	width: 100%;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 28px;
`;

export const Text = styled.p`
	color: #737373;
	font-size: 15px;
	font-weight: 500;
	letter-spacing: 0.2px;
`;

export const TextSmall = styled.p`
	font-size: 13px;
	line-height: normal;
	letter-spacing: 0.2px;
	color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	padding: 10px;
	letter-spacing: 0.5px;

	&:hover {
		text-decoration: underline;
	}
`;

export const Input = styled.input`
	background: #333;
	border-radius: 4px;
	border: 0;
	color: #fff;
	height: 50px;
	line-height: 50px;
	padding: 5px 20px;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 30px;
	}
`;

export const Submit = styled.button`
	background: #e50914;
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	margin: 24px 0 12px;
	padding: 16px;
	border: 0;
	color: white;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
	}
`;

import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 8px solid #222;
	text-align: center;
	padding: 165px 45px;
`;

export const Title = styled.h1`
	color: white;
	max-width: 640px;
	font-size: 60px;
	font-weight: bolder;
	margin: auto;
	letter-spacing: 1.5px;

	@media (max-width: 600px) {
		font-size: 40px;
	}
`;

export const SubTitle = styled.h2`
	color: white;
	font-size: 30px;
	font-weight: normal;
	margin: 16px auto;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

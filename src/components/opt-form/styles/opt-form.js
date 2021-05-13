import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: 100%;
	margin-top: 20px;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const Text = styled.p`
	font-size: 20px;
	color: white;
	text-align: center;
	padding: 10px;
	width: 100%;
	font-weight: 400;

	@media (max-width: 600px) {
		font-size: 18px;
		line-height: 20px;
		letter-spacing: 0.3px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
export const Button = styled.button`
	display: flex;
	align-items: center;
	height: 60px;
	background: #e50914;
	color: white;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 20px;
	border: 0;
	cursor: pointer;
	font-weight: bold;
	letter-spacing: 0.5px;

	&:hover {
		background: #c80000;
	}

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 20px;
		margin-top: 2px;

		@media (max-width: 1000px) {
			width: 18px;
		}
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 18px;
		margin-top: 20px;
		font-weight: bold;
	}
`;
export const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 60px;
	box-sizing: border-box;
	font-size: 18px;
	letter-spacing: 0.1px;

	&::placeholder {
		font-size: 18px;
		letter-spacing: 1px;
	}

	&:focus {
		border: none;
		outline: none;
	}
`;

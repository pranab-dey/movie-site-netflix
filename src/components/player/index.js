import React, { useState, useContext, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
import YouTube from 'react-youtube';
import { FeatureContext } from '../card/index';
import movieTrailer from 'movie-trailer';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false);

	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	);
}

Player.Video = function PlayerVideo({ ...restProps }) {
	const { showPlayer, setShowPlayer } = useContext(PlayerContext);
	const { name } = useContext(FeatureContext);
	const [vidID, setVidID] = useState('');
	const opts = {
		height: '400',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};
	useEffect(() => {
		movieTrailer(name, { id: true }).then((response) => {
			setVidID(response);
		});
	}, [name]);

	return showPlayer
		? ReactDOM.createPortal(
				<Overlay
					onClick={() => setShowPlayer(false)}
					data-testid='player'
					{...restProps}>
					<Inner>
						<YouTube videoId={vidID} opts={opts} />
						<Close />
					</Inner>
				</Overlay>,
				document.body
		  )
		: null;
};

Player.Button = function PlayerButton({ ...restProps }) {
	const { setShowPlayer } = useContext(PlayerContext);

	return (
		<Button
			onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
			{...restProps}>
			Play
		</Button>
	);
};

import styled from 'styled-components'

export const StyledUpload = styled.div`
	padding: 20px;
	max-width: 600px;
	text-align: center;
	cursor: pointer;
	outline: none;
	transition: background-image 0.3s;

	background-image: repeating-linear-gradient(
			to right,
			#dedede 0%,
			#dedede 50%,
			transparent 50%,
			transparent 100%
		),
		repeating-linear-gradient(
			to right,
			#dedede 0%,
			#dedede 50%,
			transparent 50%,
			transparent 100%
		),
		repeating-linear-gradient(
			to bottom,
			#dedede 0%,
			#dedede 50%,
			transparent 50%,
			transparent 100%
		),
		repeating-linear-gradient(
			to bottom,
			#dedede 0%,
			#dedede 50%,
			transparent 50%,
			transparent 100%
		);

	background-position: left top, left bottom, left top, right top;
	background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
	background-size: 20px 2px, 20px 2px, 2px 20px, 2px 20px;

	&:hover {
		background-image: repeating-linear-gradient(
				to right,
				#1985d2 0%,
				#1985d2 50%,
				transparent 50%,
				transparent 100%
			),
			repeating-linear-gradient(
				to right,
				#1985d2 0%,
				#1985d2 50%,
				transparent 50%,
				transparent 100%
			),
			repeating-linear-gradient(
				to bottom,
				#1985d2 0%,
				#1985d2 50%,
				transparent 50%,
				transparent 100%
			),
			repeating-linear-gradient(
				to bottom,
				#1985d2 0%,
				#1985d2 50%,
				transparent 50%,
				transparent 100%
			);
	}
`


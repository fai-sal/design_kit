/**
 * External dependencies.
 */
import { FC } from 'react';

const SizeController: FC<{
	id: string;
}> = ({ id }) => (
	<div className="size-control-wrapper">
		<span className="size-control right"></span>
		<span className="size-control bottom"></span>
		<span className="size-control left"></span>
		<span className="size-control top"></span>
		<span className="size-control corner left-top"></span>
		<span className="size-control corner right-top"></span>
		<span className="size-control corner left-bottom"></span>
		<span className="size-control corner right-bottom"></span>
	</div>
);

export default SizeController;

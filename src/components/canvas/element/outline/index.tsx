import { FC } from 'react';
/**
 * Local dependencies.
 */
import SizeController from './sizeController';

const Outline: FC<{
    id: string;
}> = ({ id }) => (
    <div className="outline">
        <SizeController id={id} />
    </div>
);
export default Outline;

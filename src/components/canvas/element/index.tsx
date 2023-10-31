import { FC } from "react"
import { SHAPES } from "../../../shapes"
import { ElementInterface } from "../../../types"

const Element: FC<{
	data: ElementInterface
}> = ({ data }) => {
	const transform = `translate(${data.attributes.position.X}px, ${data.attributes.position.Y}px)`;
	return (
		<div className="element" style={{transform}}>
			{SHAPES[data.name as keyof typeof SHAPES].svg}
		</div>
	)
}


export default Element;

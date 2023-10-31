import { FC } from "react"
import { SHAPES } from "../../../elements/shapes"
import { ElementInterface } from "../../../types"

const Element: FC<{
	data: ElementInterface
}> = ({ data }) => {

	const generateStyle = ()=>{
		return{
			transform :`translate(${data.attributes.position.X}px, ${data.attributes.position.Y}px)`,
			width: data.attributes.size.width,
			height: data.attributes.size.height,
		}
	}

	return (
		<div className="element" style={generateStyle()}>
			{SHAPES[data.name as keyof typeof SHAPES].svg}
		</div>
	)
}


export default Element;

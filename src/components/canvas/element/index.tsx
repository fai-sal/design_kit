import { FC } from "react"
import { SHAPES } from "../../../shapes"
import { ElementInterface } from "../../../types"

const Element: FC<{
	data: ElementInterface
}> = ({ data }) => {
	return (
		SHAPES[data.name as keyof typeof SHAPES].svg
	)
}


export default Element;

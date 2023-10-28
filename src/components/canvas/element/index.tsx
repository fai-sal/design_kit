import { FC } from "react"
import { SHAPES } from "../../../shapes"

const Element: FC<{
	data: object
}> = ({ data }) => {
	return (
		SHAPES[data.name].svg
	)
}


export default Element;

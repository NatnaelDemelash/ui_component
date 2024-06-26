import React from "react"
import { twMerge } from "tailwind-merge"

type PrimaryColors = {
	bg?:string,
	hoverbg?:string,
	focusRing?: string
}

type SecondaryColors = {
	text?:string,
	hoverBorder?:string,
	hoverBg?:string,
	focusRing?:string
}

type TertiaryColors = {
	text?:string,
	hoverText?:string,
	focusRing?:string
}


type BaseButtonProps = React.BaseHTMLAttributes<HTMLButtonElement>

type ButtonProps = BaseButtonProps & {
	variant?: "primary" | "secondary" | "Tertiary"
}

const Button = ({ variant = "primary", ...porps }) => {
	let baseClasses: string =
		"inline-flex items-center justify-center px-4 rounded-md text-sm font-semibold transition-all focus:outline-none focuse:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

	const generateVariantClasses = (variant: string) => {
		switch (variant) {
			case "primary":
				return "border border-transparent py-3 text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500"
			case "secondary":
				return "border-2 border-gray-200 py-[0.688rem] hover:text-white text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 focus:ring-emerald-500"
			case "tertiary":
				return "border border-transparent underline-offset-4 ring-offset-white hover:underline text-emerald-500 hover:text-emerald-700 focus:ring-emerald-500"
			default:
				return ""
		}
	}

	const variantClasses = generateVariantClasses(variant)

	const mergedClassed = twMerge(variantClasses, baseClasses)

	return <button className={mergedClassed} {...porps} />
}

export default Button

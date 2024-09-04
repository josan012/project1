import { MouseEventHandler } from "react"

type CustomButtonProps = {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
    textStyles?: string
    rightIcon?: string
    isDisabled?: boolean
}

type SearchManufacturerProps = {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

type CarProps = {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway: string
    make: string
    model: string
    transmission: string
    year: number
}

export type { CustomButtonProps, SearchManufacturerProps, CarProps }

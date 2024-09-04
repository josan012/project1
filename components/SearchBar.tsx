"use client"
import { useState } from "react"
import { SearchManufacturer } from "."
import Image from "next/image"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
        />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const handleSearch = () => {}
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>

            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    alt="car model"
                    className="absolute w-[20px] h-[20px] ml-4"
                />
            </div>
        </form>
    )
}

export default SearchBar

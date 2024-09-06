"use client"
import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Transition,
} from "@headlessui/react"
import { CustomFilterProps, OptionProps } from "@/types"
import { updateSearchParams } from "@/utils"

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const router = useRouter()
    const [selected, setSelected] = useState(options[0])
    const handleUpdateParams = (e: { title: string; value: string }) => {
        const newPathname = updateSearchParams(
            title,
            e.value.toLocaleLowerCase()
        )

        router.push(newPathname, { scroll: false })
    }

    const selectHandleFilter = (e: OptionProps) => {
        setSelected(e)
        handleUpdateParams(e)
    }

    return (
        <div className="w-fit">
            <Listbox value={selected} onChange={selectHandleFilter}>
                <div className="relative w-fit z-10">
                    <ListboxButton className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"
                            alt="chevron_up-down"
                        />
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions
                            className="custom-filter__options"
                            anchor="bottom"
                        >
                            {options.map((option) => (
                                <ListboxOption
                                    key={option.title}
                                    className="data-[focus]:bg-primary-blue data-[focus]:text-white"
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {option.title}
                                            </span>
                                        </>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter

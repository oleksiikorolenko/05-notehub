// import { useState, useEffect } from "react";
// import { useDebounce } from "use-debounce";

import css from "../SearchBox/SearchBox.module.css";


interface SearchBoxProps{
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    // const [inputValue, setInputValue] = useState('');
    // const [debouncedValue] = useDebounce(inputValue, 500);

    // useEffect(() => {
    //     onSearch(debouncedValue);
    // }, [debouncedValue, onSearch])
    return (
        <input
            className={css.input}
            type="text"
            placeholder="Search notes"
            value={value}
            onChange={handleChange}
        />
    );
};
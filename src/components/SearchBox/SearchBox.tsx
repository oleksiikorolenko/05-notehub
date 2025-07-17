import css from "../SearchBox/SearchBox.module.css"
import type { DebouncedState } from "use-debounce";


interface SearchBoxProps{
    value: string;
    onChange: DebouncedState<(value: string) => void>;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
    return (
        <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    )
}
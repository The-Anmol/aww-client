import { TextInput, NumberInput } from '@mantine/core';

export default function Input({ value, onChange, placeholder, label, optional, type }) {
    switch (type) {
        case "number":
            return <NumberInput value={value} onChange={onChange} placeholder={placeholder} label={label} withAsterisk={!(optional ?? false)} hideControls />
        default:
            return <TextInput value={value} onChange={onChange} placeholder={placeholder} label={label} withAsterisk={!(optional ?? false)} />

    }

}
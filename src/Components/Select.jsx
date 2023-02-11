import { default as ReactSelect } from "react-select";

export default function Select({ label, options, optional = false, isMulti, isDisabled, onChange, styles, defaultValue }) {
    const SelectStyles = {
        control: styles => ({
            ...styles,
            color: "black",
            backgroundColor: "white",
            fontWeight: "600"
        }),
    };

    const getValue = value => options?.filter(option => option?.value?.toString() == value?.toString())

    return (
        <div className={`flex flex-col  gap-1 satoshi ${styles} `} >
            <label className="text-sm flex gap-1 font-medium capitalize">
                {label}
                {!optional && <p className="text-red-400" >*</p>}
            </label>
            <ReactSelect
                className={`text-black satoshi-bold   `}
                defaultValue={getValue(defaultValue)}

                options={options ?? [ {} ]}
                isMulti={isMulti}
                isDisabled={isDisabled}
                onChange={onChange}
                styles={SelectStyles}

                theme={theme => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "#A5D8FF",
                        primary: "#4DABF7",
                    },
                })}
            />
        </div>
    );
}

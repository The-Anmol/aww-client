import { Button as ButtonUI } from "@mantine/core";


export default function Button({ label, onClick }) {
    return (
        <ButtonUI className='bg-blue-400  my-4 mx-auto ' onClick={onClick}>{label}</ButtonUI>
    )

}
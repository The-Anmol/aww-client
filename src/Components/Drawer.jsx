import { useState } from 'react';
import { Drawer as DrawerUI, Group } from '@mantine/core';
import Button from "./Button"

export default function Drawer({ children, title }) {
    const [ opened, setOpened ] = useState(false);
    return (
        <>
            <DrawerUI position="right" opened={opened} onClose={() => setOpened(false)} title={title} padding="lg" size="xl" >
                {children}
            </DrawerUI>
            <Group position="center">
                <Button label={title} onClick={() => setOpened(true)} />
            </Group>
        </>
    );
}
import { Switch, useColorMode, FormLabel } from "@chakra-ui/react"

export const Theme = ({showLabel = false, ...rest}) => {
    const { toggleColorMode, colorMode } = useColorMode();
    
    return (
        <>
            {
                showLabel && (<FormLabel htmlFor="theme-toggle" mb={0}> Habilitar Tema Dark</FormLabel>)
            }
            <Switch 
                id="theme-toggle" 
                size="sm"
                isChecked={colorMode === "dark"} 
                value={colorMode}
                colorScheme="green"
                mr={2}
                onChange={toggleColorMode} 
                {...rest}/>
        </>
    )
}

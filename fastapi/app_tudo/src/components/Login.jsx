import { Flex, useColorMode, useColorModeValue, FormControl, Heading, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = (values) => {
        console.log(values);
    }
    const navigate = useNavigate();
    
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" alignItems="center" background={useColorModeValue("gray.100", "gray.600")} p={20} rounded={6}>
                <Heading mb={5}>Login</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.email}>
                        <Input 
                            placeholder="Informe o E-mail" 
                            background={useColorModeValue("gray.250", "gray.500")}
                            type="email"
                            size="lg"
                            mt={6}
                            {...register("email",{required: "E-mail é obrigatório"})} />
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.senha}>
                        <Input 
                            placeholder="Informe a senha" 
                            background={useColorModeValue("gray.250", "gray.500")}
                            type="password"
                            size="lg"
                            mt={6}
                            {...register("senha",{required: "E-mail é obrigatório"})} />
                        <FormErrorMessage>
                            {errors.senha && errors.senha.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="whatsapp"
                        width="100%"
                        variant="outline"
                        mt={6}
                        mb={6}
                        isLoading={isSubmitting}
                        loadingText="Carregando...">
                        Entrar
                    </Button>
                </form>
            </Flex>
        </Flex>
    )
}

import { Flex, useColorModeValue, FormControl, Heading, Input, FormErrorMessage, Button, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Theme } from "./Theme/Theme";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
    const toast = useToast();
    const onSubmit = async (values) => {
        try {
            await login(values.email, values.senha);
        } catch(error) {
            toast({
                title: "Erro ao logar",
                status: "error",
                isClosable: true,
                duration: 1500
            });
        }
    }
    const navigate = useNavigate();
    const { login } = useAuth();
    
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
                        width="100%"
                        colorScheme="green"
                        variant="outline"
                        mt={6}
                        mb={6}
                        type="submit"
                        isLoading={isSubmitting}
                        loadingText="Carregando...">
                        Entrar
                    </Button>
                </form>
                <Theme showLabel={true}/>
                <Button 
                    width="100%"
                    colorScheme="blue"
                    variant="outline"
                    mt={6}
                    onClick={() => navigate("/cadastro", { replace: true})}
                >
                    Cadastre-se
                </Button>
            </Flex>
        </Flex>
    )
}

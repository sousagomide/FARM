import { Flex, useColorModeValue, FormControl, Heading, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Theme } from "./Theme/Theme";

export const Cadastro = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = (values) => {
        console.log(values);
    }
    const navigate = useNavigate();
    
    return (
        <Flex height="100vh" width="100vw" alignItems="center" justifyContent="center">
            <Flex direction="column" alignItems="center" background={useColorModeValue("gray.100", "gray.600")} p={20} rounded={6} width="100vw">
                <Heading mb={5}>Cadastro</Heading>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
                    <FormControl isInvalid={errors.username}>
                        <Input 
                            placeholder="Informe o usuário" 
                            background={useColorModeValue("gray.250", "gray.500")}
                            type="text"
                            size="lg"
                            mt={6}
                            {...register("username",{required: "Usuário é obrigatório", minLength: {value: 5, message: "Mínimo de 5 caracteres"}, maxLength: {value: 24, message: "Máximo de 24 caracteres"}})} />
                        <FormErrorMessage>
                            {errors.username && errors.username.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.senha}>
                        <Input 
                            placeholder="Informe a senha" 
                            background={useColorModeValue("gray.250", "gray.500")}
                            type="password"
                            size="lg"
                            mt={6}
                            {...register("senha",{required: "E-mail é obrigatório", minLength: {value: 6, message: "Mínimo de 6 caracteres"}, maxLength: {value: 24, message: "Máximo de 24 caracteres"}})} />
                        <FormErrorMessage>
                            {errors.senha && errors.senha.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Flex justifyContent="center" width="100%">
                        <Button
                            width="25vw"
                            colorScheme="green"
                            variant="outline"
                            mt={6}
                            mb={6}
                            type="submit"
                            isLoading={isSubmitting}
                            loadingText="Carregando...">
                            Registrar
                        </Button>
                    </Flex>
                </form>
                <Theme showLabel={true}/>
                <Button 
                    width="25vw"
                    colorScheme="blue"
                    variant="outline"
                    mt={6}
                    onClick={() => navigate("/login", { replace: true})}
                >
                    Login
                </Button>
            </Flex>
        </Flex>
    )
}

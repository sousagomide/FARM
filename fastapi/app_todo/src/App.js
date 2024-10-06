import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Cadastro } from "./components/Cadastro";
import { AuthProvider, AuthConsumer } from "./context/JWTAuthContext";
import { Flex, Spinner } from "@chakra-ui/react";
import { PublicRoute } from "./components/PublicRoute";
import { Authenticated } from "./components/Authenticated";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AuthConsumer>
            {(auth) => !auth.isInitialized ? (
              <Flex
                justifyContent="center"
                alignItems="center"
                height="100vh"
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="green.200"
                  color="green.500"
                  size="xl"
                />
              </Flex>
            ) : (
              <Routes>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}></Route>
                <Route path="/cadastro" element={<PublicRoute><Cadastro /></PublicRoute>}></Route>
                <Route path="/" element={<Authenticated><h1>Home</h1></Authenticated>}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
              </Routes>
            )}            
          </AuthConsumer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

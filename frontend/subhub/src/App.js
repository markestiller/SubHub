import logo from "./logo.svg";
import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
    /** Put your mantine theme override here */
});

function App() {
    return function Demo() {
        return <MantineProvider theme={theme}></MantineProvider>;
    };
}

export default App;

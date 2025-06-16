import Header from "./Header/Header";
import Shop from "./Shop/Shop";
import Footer from "./Footer/Footer";

import {ContextProvider} from "../Context/context";

const App = () => {

    return (
        <>
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </>
    );

}

export default App;
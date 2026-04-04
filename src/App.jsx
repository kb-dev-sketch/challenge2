import Active from "../components/active-state/active";
import AfterState from "../components/afterstate/after-state";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Active />} />
                <Route path="/afterstate" element={<AfterState />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;
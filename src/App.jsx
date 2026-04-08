import Active from "../components/active-state/active";
import AfterState from "../components/afterstate/after-state";
import {Routes,Route} from "react-router-dom";
import { HashRouter } from "react-router-dom";

const App=()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Active />} />
                <Route path="/afterstate" element={<AfterState />} />
                        <Route path="*" element={<Active />} /> {/* fallback */}

                

            </Routes>
        </HashRouter>
    )
}
export default App;
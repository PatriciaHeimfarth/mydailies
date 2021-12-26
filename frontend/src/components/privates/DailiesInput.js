import {Component} from "react";
import DailyInput from "./DailyInput";

class DailiesInput extends Component {
    render() {

        return (
            <div>
                <h1>Dailies Input</h1>
                <DailyInput maxAmount="3" type="Fruit"></DailyInput>
            </div>

        )
    }

}
export default DailiesInput;
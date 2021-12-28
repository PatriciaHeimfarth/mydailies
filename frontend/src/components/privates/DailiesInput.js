import {Component} from "react";
import DailyInput from "./DailyInput";

class DailiesInput extends Component {
    render() {

        return (
            <div>
                <h1>Dailies Input</h1>
                <DailyInput maxAmount="3" type="Fruit" defaultAmount="1.5"></DailyInput>
                <DailyInput maxAmount="1" type="Berries" defaultAmount="0.5"></DailyInput>
            </div>

        )
    }

}
export default DailiesInput;
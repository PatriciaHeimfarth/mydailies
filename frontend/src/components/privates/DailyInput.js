import { Component } from "react";
import Nav from 'react-bootstrap/Nav';

class DailyInput extends Component {

    onInput() {
        var input = document.getElementById("typeinp");
        var currentVal = input.value;
        this.setState({
            value: currentVal
        })
        document.getElementById("amount").value = currentVal;
    }


    render() {

        return (
            <div>
                <div className="d-flex justify-content-center my-4">
                    <label htmlFor="amountInput" className="form-label">Fruit</label>
                    <input id="typeinp" type="range" min="0" max="3" step="0.5" defaultValue="0" onInput={this.onInput.bind(this)} />
                    <output id="amount" name="amount" htmlFor="amountInput">0</output>
                </div>
            </div>

        )
    }

}
export default DailyInput;
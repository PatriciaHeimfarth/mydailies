import { Component } from "react";
 
class DailyInput extends Component {

    onInput() {
        var input = document.getElementById("typeinp");
        var currentVal = input.value;
        this.setState({
            value: currentVal
        })
        document.getElementById("amount").value = currentVal;
        localStorage.setItem(this.props.type, currentVal );

    }


    render() {

        return (
            <div>
                <div className="d-flex justify-content-center my-4">
                    <label htmlFor="amountInput" className="form-label">{this.props.type}</label>
                    <input id="typeinp" type="range" min="0" max={this.props.maxAmount} step="0.5" defaultValue={localStorage.getItem("fruit") || 0} onInput={this.onInput.bind(this)} />
                    <output id="amount" name="amount" htmlFor="amountInput">{localStorage.getItem("fruit") || 0}</output>
                </div>
            </div>

        )
    }

}
export default DailyInput;
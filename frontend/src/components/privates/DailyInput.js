import { Component } from "react";
 
class DailyInput extends Component {

    onInput() {
        let input = document.getElementById(this.props.type);
        let currentVal = input.value;
        this.setState({
            value: currentVal
        })
        document.getElementById(this.props.type +"amount").value = currentVal;
        localStorage.setItem(this.props.type, currentVal );

    }


    render() {

        return (
            <div>
                <div className="d-flex justify-content-center my-4">
                    <label htmlFor={this.props.type}className="form-label">{this.props.type}</label>
                    <input id={this.props.type} type="range" min="0" max={this.props.maxAmount} step="0.5" defaultValue={localStorage.getItem(this.props.type) || 0} onInput={this.onInput.bind(this)} />
                    <output id={this.props.type +"amount"} name={this.props.type +"amount"} htmlFor={this.props.type}>{localStorage.getItem(this.props.type) || 0}</output>
                </div>
            </div>

        )
    }

}
export default DailyInput;
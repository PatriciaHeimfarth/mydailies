import { Component } from "react";
import Nav from 'react-bootstrap/Nav';

class DailyInput extends Component {
    render() {

        return (
            <div>
                <label htmlFor="fruit" className="form-label">Fruit</label>
                <input min="0" max="3" step="0.5" type="range" className="form-range" id="fruit"></input>
            </div>

        )
    }

}
export default DailyInput;
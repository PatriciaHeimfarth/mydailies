import { Component } from "react";
import Nav from 'react-bootstrap/Nav';

class DailyInput extends Component {
    render() {

        return (
            <div>
                <div class="d-flex justify-content-center my-4">
                    <label htmlFor="fruit" className="form-label">Fruit</label>
                    <span class="font-weight-bold blue-text mr-2 mt-1">0</span>
                    <form class="range-field w-50">
                        <input min="0" max="3" step="0.5" id="fruit" className=" form-range border-0" type="range" />
                    </form>
                    <span class="font-weight-bold blue-text ml-2 mt-1">100</span>
                </div>
            </div>

        )
    }

}
export default DailyInput;
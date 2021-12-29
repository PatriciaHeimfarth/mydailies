import { Component } from "react";
import DailyInput from "./DailyInput";
import { getDailies } from "../../actions/dailiesActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DailiesInput extends Component {
    constructor(props) {
        super(props)
        this.props.getDailies();
    }


    render() {

        let dailies = { "dailies": this.props.dailies.dailies.dailies };
        console.log(dailies)
        return (
            <div>
                <h1>Dailies Input</h1>
                {dailies.dailies !== undefined? dailies.dailies.map(element => {
                    return (<DailyInput maxAmount="3" type={element.type} defaultAmount={element.amount}></DailyInput>)

                }) : <div></div>}

            </div>

        )
    }

}
DailiesInput.propTypes = {
    getDailies: PropTypes.func.isRequired,
    dailies: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    dailies: state.dailies
});
export default connect(
    mapStateToProps,
    { getDailies }
)(DailiesInput);
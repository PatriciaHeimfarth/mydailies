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
        const dailiesList = [
            { "type": "Fruit", "maxAmount": 3 },
            { "type": "Berries", "maxAmount": 1 },
            { "type": "Sport", "maxAmount": 90 },
        ]

        let dailies = { "dailies": this.props.dailies.dailies.dailies };
        dailiesList.forEach(d => {
            let found = dailies.dailies.find(e => e.type === d.type);
            found  ? d.amount = found.amount : found = found;
        });
       
        return (
            <div>
                <h1>Dailies Input</h1>
                {dailiesList.map(element => {
                    return (<DailyInput maxAmount={element.maxAmount} type={element.type} defaultAmount={element.amount}></DailyInput>)

                })}

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
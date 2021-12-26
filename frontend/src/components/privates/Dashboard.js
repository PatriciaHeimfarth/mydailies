import {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import DailiesInput from "./DailiesInput";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div style={{ height: "75vh" }}>
                <div>
                    <div>
                        <h4>
                            <b>{user.name.split(" ")[0]}</b>
                            <DailiesInput></DailiesInput>
                        </h4>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
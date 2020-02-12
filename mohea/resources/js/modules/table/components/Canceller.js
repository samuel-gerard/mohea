import React from "react";
import { connect } from "react-redux";
import { cancelAction } from "../redux/actions";

const Canceller = (props) => {
  const cancel = () => {
      props.cancelAction();
  }

  return (
      <div>
          <button onClick={cancel}>Cancel last action</button>
      </div>
  )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch, stateProps) => {
  return {
    cancelAction: () => {
      dispatch(cancelAction())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canceller);

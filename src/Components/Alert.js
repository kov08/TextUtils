import React from 'react'

function Alert(props) {
  return (
    props.alert && <div><div className="alert alert-warning alert-dismissible fade show" role="alert">
        {/* {props.alert} */}
    <strong>{props.alert.msg}</strong>: {props.alert.type}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div></div>
  )
}

export default Alert
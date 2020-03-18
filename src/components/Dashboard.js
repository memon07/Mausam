import React from 'react'
import { connect } from 'react-redux'

function Dashboard(user) {
    console.log(user)
    return (
        <div>
            dd
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, null)(Dashboard)
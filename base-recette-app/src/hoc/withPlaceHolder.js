import React, { Component } from 'react'

const withPlaceHolder = WrappedComponent => (
    class HOC extends Component {
        render() {
            return (
                <WrappedComponent 
                    placeholder='Mon HOC'
                    {...this.props}
                />
            )
        }
    }
)

export default withPlaceHolder
import React from 'react'

class ProfileStatus extends React.Component {
    state= {
        editMode: false,
        status: this.props.status
    }
        activateMode =()  => {
            this.setState({
               editMode: true
        })
    }
        deactivateMode=() => {
                this.setState({
                    editMode: false
                })
            this.props.updateStatus(this.state.status)
        }

     onStatusChange=(e) => {
        this.setState ({
           status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateMode}>{this.props.status || 'g'}</span>
                </div>
                    }
                    {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
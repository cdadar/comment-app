import React, { Component } from 'react'

export default (WrappedCompinent, name) => {
    class LocalStorageActions extends Component {
        constructor() {
            super()
            this.state = { data: null }
        }


        componentWillMount() {
            let data = localStorage.getItem(name)
            try {
                this.setState({ data: JSON.parse(data) })
            } catch (e) {
                this.setState({ data })
            }
        }

        saveData(data) {
            try {
                localStorage.setItem(name, JSON.stringify(data))
            } catch (e) {
                localStorage.setItem(name, `${data}`)
            }
        }

        render() {
            return (
                <WrappedCompinent
                    data={this.state.data}
                    saveData={this.saveData.bind(this)}
                    // 这里的意思是把其他的参数原封不动地传递给被包装的组件
                    {...this.props} />
            )
        }

    }
    return LocalStorageActions
}
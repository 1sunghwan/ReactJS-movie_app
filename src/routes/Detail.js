import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            console.log('비어있음');
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <h2>{location.state.title}</h2>
        } else {
            return null;
        }
    }
}
export default Detail;

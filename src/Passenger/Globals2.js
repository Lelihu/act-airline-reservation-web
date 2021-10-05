import React from 'react';

class Globals2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
    }

    render() {
        let x1 = this.state.x;
        let y1 = this.state.y;
        return (x1,y1);
    }
}
export default Globals2;
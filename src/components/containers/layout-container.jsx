import React, {Component} from 'react';
import Property from '../views/property';


class LayoutContainer extends Component {
    render() {
        return (
            <div className="layout-content">
                <div className="properties">
                    {this.props.sections.map((a) => {
                       return <Property key={a.title} name={a.title} />
                    })}

                </div>
            </div>
        )
    }
}

export default LayoutContainer;

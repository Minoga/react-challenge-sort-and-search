import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    static propTypes() {
        return {
            filterFunction: React.PropTypes.array.isRequired,
        };
    }
    constructor(props) {
        super(props);
        this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
    }
    onSearchFieldChange() {
        this.props.filterFunction(ReactDOM.findDOMNode(this.refs.query).value);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.onSearchFieldChange}
                          placeholder="Search people by name..."
                          ref="query"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

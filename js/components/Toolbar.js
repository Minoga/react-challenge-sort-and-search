import React from 'react';

export default class Toolbar extends React.Component {
    static propTypes() {
        return {
            filterFunction: React.PropTypes.array.isRequired,
        };
    }

    onSortData(field) {
        this.props.filterFunction(field);
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="toolbar">
                    <button className="btn btn-default" onClick={this.onSortData.bind(this, 'name')}>
                        <i className="icon fa fa-sort-alpha-asc"></i>
                        <span>Sort by name</span>
                    </button>
                    <button className="btn btn-default" onClick={this.onSortData.bind(this, 'age')}>
                        <i className="icon fa fa-sort-numeric-desc"></i>
                        <span>Sort by age</span>
                    </button>
                </div>
            </div>
        );
    }
}

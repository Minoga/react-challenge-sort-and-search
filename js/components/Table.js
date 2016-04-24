import React from 'react';
import User from './User';

export default class Table extends React.Component {
    static propTypes() {
        return {
            functionUpdate: React.PropTypes.array.isRequired,
            dataApp: React.PropTypes.array.isRequired,
        };
    }
    constructor(props) {
        super(props);
        this.updateUser = this.updateUser.bind(this);
    }
    updateUser(e) {
        let target = e.target;
        while (target.tagName !== 'TR') {
            target = target.parentNode;
        }
        this.props.functionUpdate(JSON.parse(target.getAttribute('data')));
    }

    render() {
        const data = this.props.dataApp;
        let newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map((item) => {
                return (
                    <User data={item} key={Math.random()} />
                );
            });
        } else {
            newsTemplate = <p>К сожалению пользователей нет</p>;
        }
        return (
            <div className = "col-sm-8 col-md-9 col-lg-10">
                <table className="user-list table table-striped" onClick={this.updateUser}>
                    <tbody>
                        {newsTemplate}
                    </tbody>
                </table>
            </div>
        );
    }
}

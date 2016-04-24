import React from 'react';

export default class ActiveUser extends React.Component {
    static propTypes() {
        return {
            function: React.PropTypes.array.isRequired,
            dataId: React.PropTypes.array.isRequired,
            data: React.PropTypes.array.isRequired,
        };
    }
    showUser() {
        this.props.function(this.props.dataId);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="col-sm-4 col-md-3 col-lg-2">
                <div className="thumbnail">
                    <img src={'images/' + data.image + '.svg'} alt={data.image} />
                    <div className="thumbnail-caption">
                        <h3>{data.name}</h3>
                        <table className="user-info table table-responsive">
                            <tbody>
                                <tr>
                                    <td>Age:</td>
                                    <td>{data.age}</td>
                                </tr>
                                <tr>
                                    <td>Favorite animal:</td>
                                    <td>{data.image}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>
                                        <span>8</span>
                                        <span>{data.phone}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <b>Favorite phrase:</b>
                            <span> </span>
                            <span>{data.phrase}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

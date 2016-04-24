import React from 'react';

export default class User extends React.Component {
    static propTypes() {
        return {
            data: React.PropTypes.array.isRequired,
        };
    }
    render() {
        const data = this.props.data;
        return (
            <tr className={data.disabled ? 'none' : ''} data={JSON.stringify(data)}>
                <td><img src={'images/' + data.image + '.svg'} alt={data.name} /></td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.phone}</td>
            </tr>
        );
    }
}

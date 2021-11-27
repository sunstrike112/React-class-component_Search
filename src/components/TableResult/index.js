import React, { Component } from 'react';
import './TableResult.css'

class index extends Component {
    render() {
        return (
            <table className="tableresult">
                    <tbody>
                        <tr>
                            <td>No</td>
                            {
                                this.props.listDrinks.noOfDrinks.map(noOfDrinks => <td key={`${noOfDrinks}`}>{noOfDrinks}</td>)
                            }
                        </tr>
                        <tr>
                            <td>Id</td>
                            {
                                this.props.listDrinks.idDrinks.map(idDrinks => <td key={`${idDrinks}`}>{idDrinks}</td>)
                            }
                        </tr>
                        <tr>
                            <td>Thumbnail</td>
                            {
                                this.props.listDrinks.thumbnailDrinks.map(thumbnailDrinks => <td key={`${thumbnailDrinks}`}> <img alt={`${thumbnailDrinks}`} src={`${thumbnailDrinks}`}/> </td>)
                            }
                        </tr>
                        <tr>
                            <td>Name</td>
                            {
                                this.props.listDrinks.nameDrinks.map(nameDrinks => <td key={`${nameDrinks}`}>{nameDrinks}</td>)
                            }
                        </tr>
                    </tbody>
            </table>
        );
    }
}

export default index;

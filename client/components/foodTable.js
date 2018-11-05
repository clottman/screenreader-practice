import React from 'react';

export default class FoodTable extends React.Component {
  constructor(props) {
   super(props); 
  }
  
  componentDidMount(){
    this.headerInput.focus();
  }

  render() {
    return <div>
      <h1 tabIndex='-1' ref={(input) => { this.headerInput = input; }} >Foods for Friends</h1>
        <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Favorite Food</th>
                <th>Least Favorite Food</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joe</td>
                <td>Smith</td>
                <td>Hamburgers</td>
                <td>Pancakes</td>
              </tr>
              <tr>
                <td>Theo</td>
                <td>Jones</td>
                <td>Pancakes</td>
                <td>Sausage</td>
              </tr>
              <tr>
                <td>Cassey</td>
                <td>Lottman</td>
                <td>Spaghetti</td>
                <td>Fish</td>
              </tr>
            </tbody>
          </table>
      </div>;
  }
}


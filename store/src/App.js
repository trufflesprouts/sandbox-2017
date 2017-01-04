import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false      
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

class SearchBar extends Component {
  handleChange() {
    this.props.handleUserInput(
      this.filterText.value,
      this.inStockOnly.checked
    )
  }
  render() {
    return (
      <form>
        <input type="text" className="SearchInput" onChange={this.handleChange.bind(this)} ref={(input) => { this.filterText = input; }} placeholder="Search... " defaultValue={this.props.filterText}/>
        <p>
          <input type="checkbox" onChange={this.handleChange.bind(this)} ref={(input) => { this.inStockOnly = input; }} defaultChecked={this.props.inStockOnly}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}


function ProductTable(props) {
  let rows = [];
  let lastCategory = null;
  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1 || (!product.stocked && props.inStockOnly)) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name}/>
    );
    lastCategory = product.category;
  });
  return (
    <table className="ProductTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">
        {props.category}
      </th>
    </tr>
  );
}

function ProductRow(props) {
  let name = props.product.stocked ?
    props.product.name :
    <span style={{color: 'red'}}>
      {props.product.name}
    </span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default App;

import React from 'react';
import {Row, Col} from 'react-bootstrap';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
class NavBar extends React.Component{
	render(){
		return (
			<Row className="bg-primary text-white xs">
				<Col className="m-4"> <h1 > Shopping cart</h1></Col>
				<Col className="d-flex col-3 justify-content-end m-4"> <h1 >${this.props.total_cost}</h1></Col> 
			</Row>
		);
	}
}

function Item(props){
	//console.log(props.items);
	var list = props.items.map((i) => 	<tr>  <td>{i.id}</td><td>{i.name}</td>
											<td>${i.price}</td>
											<td>
												<button className="btn btn-sm btn-outline-dark" 
													onClick={() => props.changeQttHandler(i.id,-1)} >-</button>
												&nbsp;{i.quantity}&nbsp;
												<button className="btn btn-sm btn-outline-dark" 
													onClick={() => props.changeQttHandler(i.id, 1)} >+</button>
											</td>
											<td> ${(i.quantity*i.price).toFixed(2)} </td>
											<td><button className="btn btn-sm btn-outline-dark" 
												onClick={() => props.removeItemHandler(i.id)} >X</button></td>
										</tr>);
	return list;
}

class AddNewItem extends React.Component{
	
	render(){
		return(
			<tr><td>{this.props.items.length+1}</td>
					<td><input autocomplete="off" autofocus="on" value={this.props.new_name} onChange={this.props.addNewName} 
						type="text" name="name" placeholder="Product's name"/></td>
					<td><input value={this.props.new_price} onChange={this.props.addNewPrice}
						type="number" name="price" placeholder="Product's unit price"/></td>
					<td></td>
					<td></td>
					<td><button className="btn btn-sm btn-outline-danger" onClick={() => this.props.addItemHandler()}>Add</button></td>
			</tr>
		);
	}
}

class ItemList extends React.Component{
	render(){
		return(
			<table className="table table-hover xs">
				<tr>
					<th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th><	th>Cancel</th>
				</tr>
				<Item items={this.props.items} removeItemHandler={this.props.removeItemHandler} 
					changeQttHandler={this.props.changeQttHandler} />
				<AddNewItem items={this.props.items} new_name={this.props.new_name} new_price={this.props.new_price}
					addNewName={this.props.addNewName} addNewPrice={this.props.addNewPrice} addItemHandler={this.props.addItemHandler}/>
			</table>
		);
	}
}

class App extends React.Component{
	constructor(props) {
		super(props);
		
		this.total_cost = this.total_cost.bind(this);
		this.changeQttHandler = this.changeQttHandler.bind(this);
		this.removeItemHandler = this.removeItemHandler.bind(this);
		this.addNewName = this.addNewName.bind(this);
		this.addNewPrice = this.addNewPrice.bind(this);
		this.addItemHandler = this.addItemHandler.bind(this);
		
		this.state = {
			items : [
			],
			new_name : "",
			new_price: "",
			error:	"",
		}
	}
	
	addItemHandler(){
		if (this.state.new_name != "" && this.state.new_price != ""){
			var cloneItems = JSON.parse(JSON.stringify(this.state.items));
			var new_item = [{id: this.state.items.length+1, name: this.state.new_name, price: this.state.new_price, quantity: 0}];
			Array.prototype.push.apply(cloneItems,new_item); 
			// console.log(cloneItems);
			this.setState({items: cloneItems, new_name:"", new_price:"", error:""});
		}
		else {
			this.setState({error : "Please fill in everything"});
		}
	}
		
	total_cost(items){
		var total = 0;
		// console.log(list);
		items.map((i) => total+= i.quantity*i.price);
		return total.toFixed(2);
	}
	
	addNewName(e)
	{
		this.setState({new_name: e.target.value});
	}
	
	addNewPrice(e)
	{
		this.setState({new_price: e.target.value});
	}
	
	removeItemHandler(index)
	{
		var whereToRemove = 0, new_index = 1;
		var cloneItems = JSON.parse(JSON.stringify(this.state.items));
		cloneItems.map((i, ind) => {
			if (i.id === index)
				whereToRemove = ind;
			else
				{i.id = new_index; new_index++};
		});
		cloneItems.splice(whereToRemove,1);
		// console.log(cloneItems);
		this.setState({items: cloneItems});
	}

	changeQttHandler(index, method)
	{
		var cloneItems = JSON.parse(JSON.stringify(this.state.items));
		cloneItems.map((i) => {
			if (i.id === index)
				if (!(i.quantity == 0 && method==-1))
					i.quantity = i.quantity+method;
		});
		// console.log(cloneItems);
		// console.log(this.state.items);
		this.setState({items : cloneItems});
	}

	render() {
		return (
		<div>
			<NavBar total_cost={this.total_cost(this.state.items)} />
			<ItemList items={this.state.items} changeQttHandler={this.changeQttHandler}
				removeItemHandler={this.removeItemHandler}
				new_name={this.state.new_name} new_price={this.state.new_price}
				addNewName={this.addNewName} addNewPrice={this.addNewPrice} 
				addItemHandler={this.addItemHandler}
			/>
			<div id="error_mess" class="d-flex justify-content-center text-danger" 
				role="alert">{this.state.error}</div>
		</div> 
		);
	}
}

export default App;

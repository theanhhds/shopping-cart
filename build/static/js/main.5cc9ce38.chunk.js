(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),c=a(1),s=a(3),m=a(4),d=a(6),o=a(5),u=a(21),p=a(22);a(10),window.React2=a(0),console.log(window.React1===window.React2);var h=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{className:"bg-primary text-white xs"},r.a.createElement(p.a,{className:"m-4"}," ",r.a.createElement("h1",null," Shopping cart")),r.a.createElement(p.a,{className:"d-flex col-3 justify-content-end m-4"}," ",r.a.createElement("h1",null,"$",this.props.total_cost)))}}]),a}(r.a.Component);function b(e){return e.items.map((function(t){return r.a.createElement("tr",null,"  ",r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,"$",t.price),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return e.changeQttHandler(t.id,-1)}},"-"),"\xa0",t.quantity,"\xa0",r.a.createElement("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return e.changeQttHandler(t.id,1)}},"+")),r.a.createElement("td",null," $",(t.quantity*t.price).toFixed(2)," "),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return e.removeItemHandler(t.id)}},"X")))}))}var w=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.items.length+1),r.a.createElement("td",null,r.a.createElement("input",{autocomplete:"off",autofocus:"on",value:this.props.new_name,onChange:this.props.addNewName,type:"text",name:"name",placeholder:"Product's name"})),r.a.createElement("td",null,r.a.createElement("input",{value:this.props.new_price,onChange:this.props.addNewPrice,type:"number",name:"price",placeholder:"Product's unit price"})),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm btn-outline-danger",onClick:function(){return e.props.addItemHandler()}},"Add")))}}]),a}(r.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"table table-hover xs"},r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Cancel")),r.a.createElement(b,{items:this.props.items,removeItemHandler:this.props.removeItemHandler,changeQttHandler:this.props.changeQttHandler}),r.a.createElement(w,{items:this.props.items,new_name:this.props.new_name,new_price:this.props.new_price,addNewName:this.props.addNewName,addNewPrice:this.props.addNewPrice,addItemHandler:this.props.addItemHandler}))}}]),a}(r.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).total_cost=n.total_cost.bind(Object(c.a)(n)),n.changeQttHandler=n.changeQttHandler.bind(Object(c.a)(n)),n.removeItemHandler=n.removeItemHandler.bind(Object(c.a)(n)),n.addNewName=n.addNewName.bind(Object(c.a)(n)),n.addNewPrice=n.addNewPrice.bind(Object(c.a)(n)),n.addItemHandler=n.addItemHandler.bind(Object(c.a)(n)),n.state={items:[],new_name:"",new_price:"",error:""},n}return Object(m.a)(a,[{key:"addItemHandler",value:function(){if(""!=this.state.new_name&&""!=this.state.new_price){var e=JSON.parse(JSON.stringify(this.state.items)),t=[{id:this.state.items.length+1,name:this.state.new_name,price:this.state.new_price,quantity:0}];Array.prototype.push.apply(e,t),this.setState({items:e,new_name:"",new_price:"",error:""})}else this.setState({error:"Please fill in everything"})}},{key:"total_cost",value:function(e){var t=0;return e.map((function(e){return t+=e.quantity*e.price})),t.toFixed(2)}},{key:"addNewName",value:function(e){this.setState({new_name:e.target.value})}},{key:"addNewPrice",value:function(e){this.setState({new_price:e.target.value})}},{key:"removeItemHandler",value:function(e){var t=0,a=1,n=JSON.parse(JSON.stringify(this.state.items));n.map((function(n,r){n.id===e?t=r:(n.id=a,a++)})),n.splice(t,1),this.setState({items:n})}},{key:"changeQttHandler",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state.items));a.map((function(a){a.id===e&&(0==a.quantity&&-1==t||(a.quantity=a.quantity+t))})),this.setState({items:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{total_cost:this.total_cost(this.state.items)}),r.a.createElement(f,{items:this.state.items,changeQttHandler:this.changeQttHandler,removeItemHandler:this.removeItemHandler,new_name:this.state.new_name,new_price:this.state.new_price,addNewName:this.addNewName,addNewPrice:this.addNewPrice,addItemHandler:this.addItemHandler}),r.a.createElement("div",{id:"error_mess",class:"d-flex justify-content-center text-danger",role:"alert"},this.state.error))}}]),a}(r.a.Component);window.React1=a(0);var v=r.a.createElement(E,null);i.a.render(v,document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5cc9ce38.chunk.js.map
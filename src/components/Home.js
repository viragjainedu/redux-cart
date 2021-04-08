import {connect} from 'react-redux';
import addItems from '../redux/actions/addItems';

function Home(props) {
    return (
      <div className="Home">
        <h1>Cart : {props.newState.numberCart}</h1>

        <button onClick={() => {props.addItemHandler({product:"shoe"})}}>Add Shoes to Cart</button>
        <button onClick={() => {props.addItemHandler({product:"belt"})}}>Add Belt to Cart</button>
        <button onClick={() => {props.addItemHandler({product:"wallet"})}}>Add Wallet to Cart</button>
        <button onClick={() => {props.addItemHandler({product:"glasses"})}}>Add Glasses to Cart</button>
        <h1>Cart Products are</h1>
        <ul>
 
        {props.newState.cart.map(
            function(item,index){
                return <li key={index}>{item}</li>
            }
        )}
        </ul>     
      </div>
    );
}

const mapStateToProps = state => {
    return { 
        newState : state._cartItems  
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        addItemHandler:(item)=>dispatch(addItems(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
  
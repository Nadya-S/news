// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Api from "../../utils/Api.js";
import Main from "../../pages/Main";
import News from "../../pages/News";
// import { addCustomerAction, removeCustomerAction } from '../../store/customerReducer';

function App() {
  // const [update, setUpdate] = useState(false);
  // const dispatch = useDispatch();
  // const cash = useSelector(state => state.cash.cash);
  // const customers = useSelector(state => state.customers.customers)
  // const [newsArr, setNewsArray] = useState([]);
  const [maxId, setMaxId] = useState("");
  // const addCash = () => {
  //   dispatch({type:"ADD_CASH", payload: 5})
  // }

  // const getCash = () => {
  //   dispatch({type:"GET_CASH", payload: 7})
  // }

  // const addCustomer = (name) => {
  //   const customer = {
  //     name,
  //     id: Date.now(),
  //   }
  //   dispatch(addCustomerAction(customer))
  // }

  // const removeCustomer = (customer) => {
  //   dispatch(removeCustomerAction(customer.id))
  // }

  // useEffect(() => {
  //   Api.getNewsId().then((id) => {
  //     console.log(id);
  //     console.log(id[0]);
  //     for (let i = 0; i < 30; i++) {
  //       let news = id[i];
  //       Api.getNews(news).then((res) => {
  //         newsArr.push(res);
  //         setNewsArray([...newsArr]);
  //       });
  //     }
  //   });
  // }, []);

  // console.log(newsArr);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/news/:id" component={News} />
        <Redirect to='/'/>
      </Switch>

      {/* <div>{cash}</div>
      <button onClick={() => addCash()}>Add</button>
      <button onClick={() => getCash()}>Get</button>
      <button onClick={() => addCustomer()}>AddCustomer</button>
      {customers.length > 0 ? 
         <div>
           {customers.map(customer => 
              <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
            )}
         </div>
         :
         <div>
          No clients
         </div>
    } */}
    </div>
  );
}

export default App;

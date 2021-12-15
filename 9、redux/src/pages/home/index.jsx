import React, { useEffect } from 'react';
import store from '../../redux/store';
import { sendActions } from '../../redux/actions';

const Home = () => {
  useEffect(()=>{
    store.subscribe(()=>{
      console.log('subscribe',store.getState());
    })
  },[])
  const handleAction = ()=> {
    const action = sendActions()
    store.dispatch(action)
  }
  return (
    <div>
      <button onClick={handleAction}>点我发Action</button>
      <div>{store.getState().data}</div>
    </div>
  );
}

export default Home;

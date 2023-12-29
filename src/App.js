// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import food from './food.jpg'
function App() {
  const [search,setSearch]=useState('');
  //varible to store the resipe information 
  // all the information is in array
  const [data,setData]=useState([]);
  const App_id='25437d53';
  const App_key='0e39cd660f98fde406d519d5dd3825ba';

const handler=(e)=>{
  setSearch(e.target.value);
}

// onsubmit
const submitHandler=(e)=>{
  e.preventDefault();
  // console.log(search);
  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  fetch(`https://api.edamam.com/search?q=${search}&app_id=${App_id}&app_key=${App_key}&from=0&to=30&calories=591-722&health=alcohol-free`).then(response => response.json()
  ).then(data => setData(data.hits))

  setSearch('');

}
  return (
    <div className="App">
      <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={food}
              width="80"
              height="83"
              className="d-inline-block align-top"
            />{' '}
            Food Recipe App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='form'>
        <form onSubmit={submitHandler}>
          <input type='text' value={search}  name='search' onChange={handler} placeholder='enter the item'/>
          <input type='submit' value='Search' className='btn btn-primary'/>
          <h3>Order Your Factive Food </h3>
          <h4>Enjoy your Life</h4>
        </form>
        </div>
      </div>
      {/* this a condition statment data={data} is a props to send to other file */}
        {data.length>=1? <Item data={data}/>:null}
    </div>
  );
}

export default App;

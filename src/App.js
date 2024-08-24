import Header from './Component/Header/header';
import Context from './Component/Context/context';
import Body from './Component/Body/body';
import Footer from './Component/Footer/footer';

let info = [
  {id : 1 , img : 'images (1).jpeg' , title : 'SEO Frindly' , btnText : 'READ MORE' },
  {id : 2 , img : 'images(2).jpg' , title : 'Portfolio Section' , btnText : 'SEE IT IN ACTION' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        {info.map((item)=>(
          <Context key = {item.id} {...item}/>
        ))}
        {/* <Context {...info[0]}/>
        <Context {...info[1]}/> */}

        <Body/>
        <Footer/>
        
        
        
      </header>
    </div>
  );
}

export default App;

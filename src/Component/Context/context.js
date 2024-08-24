import'./context.css'

function Context(props){

    const isSecondItem = props.id === 2;
    
    return(
        <div className = 'container-context'>
            
            {isSecondItem ? (
        <>
          <div className="text-card">
            <div className='title'>
              <h2>{props.title}</h2>
            </div>
            <div className='lorem-text'>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.<br/>
                Nam pulvinar luctus sem, eget porta orci.
                Maecenas <br/> molestie dui id diam feugiat,
                eu tincidunt mauris <br/> aliquam.
                Duis commodo vitae ligula et interdum.<br/>
                Maecenas faucibus mattis imperdiet.
                In rhoncus ac <br/> ligula id ultricies.<br/>
              </p>
            </div>
            <button className='btn'>{props.btnText}</button>
          </div>

          <div className="image">
            <img className='img-elem' src={props.img} alt="image"/>
          </div>
        </>
      ) : (
        <>
          <div className="image">
            <img className='img-elem' src={props.img} alt="image"/>
          </div>

          <div className="text-card">
            <div className='title'>
              <h2>{props.title}</h2>
            </div>
            <div className='lorem-text'>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.<br/>
                Nam pulvinar luctus sem, eget porta orci.
                Maecenas <br/> molestie dui id diam feugiat,
                eu tincidunt mauris <br/> aliquam.
                Duis commodo vitae ligula et interdum.<br/>
                Maecenas faucibus mattis imperdiet.
                In rhoncus ac <br/> ligula id ultricies.<br/>
              </p>
            </div>
            <button className='btn'>{props.btnText}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Context
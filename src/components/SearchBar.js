import React,{useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term,setTerm] = useState('');
     const onSubmit=(e)=>{
      e.preventDefault();
      //TODO:call back from parent component

      onFormSubmit(term);
    };
    return (
        <div className="ui segment search-bar">

            <form onSubmit={onSubmit}className="ui form">
                <div className="field">
            <label htmlFor="search">Enter Your Search:</label>
            <input id="search" value={term} type="text" onChange={(event) => setTerm(event.target.value)}/>
            </div>
            </form>
        </div>
        
        );

};

export default SearchBar;
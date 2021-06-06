import React from'react'

class SearchBar extends React.Component{
    state={term:''};
//  OnInputChange(event){
// console.log(event.target.value);
//  }

OnFormSubmit=event=>{
  event.preventDefault();
  //using props inside class based components always use this.props
  //onusersubmit is a callback function in app.js
  this.props.OnUserSubmit(this.state.term);
};


    render(){
        return (
        <div className="ui segment"> 
            <form onSubmit={this.OnFormSubmit} className="ui form">
                    {/* //no () will calling the function  */}
                <div className="field">
                    <label>Image Search</label>
                <input type="text" value={this.state.term} 
                onChange={(e)=>this.setState({term:e.target.value})}/>
               
                </div>
            </form>
        </div>
        )
    };

}
export default SearchBar;

// uQuIr7c7m3z_ZMZSxEQaFncupqMmEOKe_6gcgahGA6k
// BuTaFwyxiLX3osvZr565GiD_Xsp5bW5 - XPT0pvzY_3Q
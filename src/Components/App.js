import React from 'react'
// import axios from 'axios'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'

class App extends React.Component{
  state={images:[]};

    // 1st method
//  OnSearchSubmit(term){
//      //1st arguement is the address of the api we make and second is a object for headers or authorization
//     axios.get("https://api.unsplash.com/search/photos",{
//         //params are the different query string we want to include
//         params:{ query:term},
//         // for header object we put: n not=
//         headers:{
//             Authorization:'Client-ID uQuIr7c7m3z_ZMZSxEQaFncupqMmEOKe_6gcgahGA6k'
//         }
//     //   then() function tells us what to do after the fetching of data is successful coz this get() function returns a object khown as promise
//     }) .then((response)=>{
//         console.log(response.data.results);
//     });

     
//  }
 
// 2nd method to check what data is fetch



//async keywords so that we can use await keyword known as async-await

    OnSearchSubmit = async (term)=>{
     //1st arguement is the address of the api we make and second is a object for headers or authorization
     //request now made to unsplashfile
     const response=await unsplash.get("/search/photos",{
        //params are the different query string we want to include
        params:{ query:term},



        
        // for header object we put: n not=
        // headers:{
        //     Authorization:'Client-ID uQuIr7c7m3z_ZMZSxEQaFncupqMmEOKe_6gcgahGA6k'
        // }
    //   then() function tells us what to do after the fetching of data is successful coz this get() function returns a object khown as promise



    });
    //  console.log(this);'This' has to be an instance of the class App and not anything else
        this.setState({images:response.data.results});
    

     
 }



    render(){
    return (
    <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar OnUserSubmit={this.OnSearchSubmit}/>  
       <ImageList images1={this.state.images}/>
    </div>
    );
}
}
export default App;

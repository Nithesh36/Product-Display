import React from "react";
import List from "./List";
import "./Apicall.css";
import "./FilterCol.css"


class Apis extends React.Component {
  constructor(props) {
    super(props);
    this.state={checkboxvalue1:'',check1:false,checkboxvalue2:'',check2:false,checkbox1status:false,checkbox2status:false,checkbox3Status:false,checkbox4status:false};


    this.state = { fetchdata: [] };
    
  }
 
  ValidateCheckbox(){
    
    // if(this.state.checkbox1status===true || this.state.checkbox1status===false)
  return this.state.check1 ? this.state.fetchdata.filter((productval)=>productval.gender===this.state.checkboxvalue1 || productval.brand===this.state.checkboxvalue1)
    .map((productvalue) => {
      const {
        brand,
        category,
        searchImage,
        discount,
        rating,
        productName,
        price,
        
        
      } = productvalue;
      return (
        <List
          Brand={brand}
          Category={category}
          im={searchImage}
          discount={discount}
          rating={rating}
          productName={productName}
          price={price}
        ></List>
      );
      }):this.state.fetchdata.map((productval)=>{
        const {
          brand,
          category,
          searchImage,
          discount,
          rating,
          productName,
          price,
          
          
        } = productval;
        return (
          <List
            Brand={brand}
            Category={category}
            im={searchImage}
            discount={discount}
            rating={rating}
            productName={productName}
            price={price}
          ></List>
        );
        

      }
      ) 

  }
  componentDidMount() {
   
    fetch("https://demo7242716.mockable.io/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fetchdata: data.products });

        console.log(this.state.fetchdata);
      });
  }
  render() {
    let a=0;
    return (
      <>
    
      <div className="options">
        <h1>Filters</h1>
        <span style={{ color: "green", fontWeight: "bold" }}   onClick={(e)=>{
          this.setState({check1:false})
      e.target.checked=false;
        }
      }>Clear All</span>
        <div className="check">
          <input
            type="checkbox"
            className="checkbox"
            name="checkbox1"
            value="Men"
            style={{Backgroundcolor: "blue" }}
            onChange={(e)=>{
              console.log(e.target.checked)
              // const {check}=this.state.checked;
            this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
            if(e.target.checked)
            this.setState({checkbox1status:true})
          }
          
              
         
        } />
        
          <span>Men</span>
          <br></br>
          
          <input type="checkbox"
          className="checkbox"
          name="checkbox2"
          value="Women"
          
   onChange={(e)=>
    {

  this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
  if(e.target.checked)
  this.setState({checkbox2status:true})
  console.log(e.target.name)
  }    
  
            }     
          ></input>
          <span>womens</span>
          <br></br>

          <input type="checkbox"
          value="Girls"
          onChange={(e)=>
            {
             
          this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
        if(e.target.checked===true)
        this.setState({checkbox3status:true})

          console.log(e.target.name)
          }    
          
                    }  
          
          
          ></input>
          <span>Girls</span><br></br>
          <input type="checkbox"
          className="checkbox"
          value="Unisex"
          name="checkbox3"
         
          onChange={(e)=>
            {
        
          this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
        
          console.log(e)
            
          
                    }  }
          
         
         
          ></input><span>Unisex</span>
        </div>
        <hr></hr> <h1>{"Brands"}</h1>
        <input
          type="checkbox"
          className="checkbox"
          style={{ color: "black" }}
        value="Roadster"
          onChange={(e)=>
            {
        
          this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
        
          console.log(e)
            
          
                    }  }
        
          ></input>
        <span>Roadster</span>
        <br></br>
        <input type="checkbox"
        value="Puma"
        onChange={(e)=>
          {
      
        this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
      
        console.log(e)
          
        
                  }  }
      
        
        
        
        ></input>
        <span>Puma</span>
        <br></br>
        <input type="checkbox"
        
        value="Campus Sutra"
        
        onChange={(e)=>
          {
      
        this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
      
        console.log(e)
          
        
                  }  }
      
        ></input>
        <span>Campus Sutra</span>
        <br></br>
        <input type="checkbox"
        
        
      value="HERE&NOW"  
        onChange={(e)=>
          {
      
        this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
      
        console.log(e)
          
        
                  }  }
      
        ></input>
        <span>HERE&NOW</span>
        <br></br>
        <input type="checkbox"
        
        value="Fastrack"
        onChange={(e)=>
          {
      
        this.setState({checkboxvalue1:e.target.value,check1:e.target.checked})
      
        console.log(e)
          
        
                  }  }
      
        ></input>
        <span>Fastrack</span>
      </div>
    
 

           <div className="grido">

      {this.ValidateCheckbox()} 
      </div></>

    );
  }
}

export default Apis;

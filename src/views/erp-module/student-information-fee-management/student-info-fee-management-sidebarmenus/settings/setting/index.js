import React,{useState} from 'react'
import Organisation from './Organisation'
import ParamSearchBar from 'views/common-section/ParamSearchBar';

const Setting = () => {
  const [searchTerm,setSearchTerm]=useState("");

  const handleSearch=(value)=>{
          console.log(searchTerm);
         setSearchTerm(value);
  }

  //  const searchData=[
  //   {
  //     "organizatioin":"abc",
  //     "class":"2nd",
  //     "fees":"50"
  //   },
  //   {
  //     "organizatioin":"abc",
  //     "class":"2nd",
  //     "fees":"50"
  //   }
  //  ]
 

  return (
    <div>
      <ParamSearchBar onChange={()=>handleSearch}/>
      <Organisation/>
    </div>
  )
}

export default Setting
import FCEngine from "./FCEngine";

export default function FCCar(props) {


  
  
    return(
      <div>
      <input id='num1' type="text" /> <button onClick={BtnClick}>+</button><input id='num2' type="text" /> = 
      </div>



    );
    
  
  // else{
  //   return(
  //     <div style={{color:'red', fontSize:30, border :'2px solid black',margin:20,padding:10,borderRadius:15}}>
  //       <p>car</p>
  //       color={props.color} <br />
  //       id={props.id} <br />
  //     </div>
  //   );
  // }
}
function BtnClick(num1,num2){

  return num1+num2;
}
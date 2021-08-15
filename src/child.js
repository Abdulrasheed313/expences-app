import React, { useContext, useState } from 'react';
 import {TranstionContext} from './transContext'

function Child () {
let {transtions, addTranstion } = useContext(TranstionContext);
let[newDesc,setDesc] = useState('');
let[newAmount,setAmount] = useState(0);

const handleAddition = (event) =>{
event.preventDefault();
addTranstion ({
    amount: Number(newAmount),
    desc: newDesc
})
}

const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transtions.lenght; i++){
        if (transtions[i].amount > 0)
        income = income + transtions[i].amount
    }
    return income;
        
    
}
const getExpence = () => {
    let expence = 0;
    for(var i = 0; i < transtions.lenght;i++){
        if(transtions[i].amount<0)
        expence += transtions[i].amount
    }
    return expence
    
    ;
}
console.log(getIncome())
return (
        <div className="container">
            <h1 className="text-center">Expence Tracker</h1>
            <h3>Your Balance <br />{getIncome() + getExpence()}</h3>
      <div className="expence-container">
      <h3>INCOME<br />{getIncome()}</h3>
      <h3>Expence <br />{getExpence()}</h3>
    </div>
<h3>HISTORY</h3>
<hr />

<ul className="list-transtion" >
    { transtions.map((transObj, ind) => {
        return(
<li key={ind}>
    <span>{transObj.desc}</span>
    <span>{transObj.amount}</span>
</li>
)
})}
</ul>




<h3>Add new transaction</h3>
<hr />
<form className="transtion-form" onSubmit={handleAddition}>
    <label>
        Enter Description <br />
        <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />
    </label>
    <br />
    <label>
       Enter  Amount <br />
        <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required />
    </label>
    <br />
    <br />
    <input type="submit" value="Add Transtion"/>
</form>
      </div>
    )
}
export default Child
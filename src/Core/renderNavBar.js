const renderRouteCar = (data)=>{
    const seen = new Set();
    return data.filter(el => {
     const duplicate = seen.has(el.route);
     seen.add(el.route);
     return !duplicate;
   }).map(
     item=><option>{item.route}</option>)
 }
 export {renderRouteCar};
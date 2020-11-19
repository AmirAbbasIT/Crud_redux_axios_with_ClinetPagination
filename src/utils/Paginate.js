import _ from 'lodash';


export const GetPageItems=(items,pagesize,currentpage)=>{

    debugger;
    const Skip=(currentpage-1)*pagesize;
    console.log(Skip);
    return _(items).slice(Skip).take(pagesize).value();

}
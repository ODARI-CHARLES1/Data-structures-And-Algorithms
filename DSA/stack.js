class Stack{
    constructor(){
        this.stack=new Array();
    }
    push(element){
       return this.stack.push(element);
    }
    pop(){
        if(this.stack.length==0)
        return null;
      else{
        return this.stack.pop();
      }
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    transverse(){
        if(this.stack.length>0){
            return this.stack;
        }
        else{
            return null;
        }
    }
}
var elements=[4,5,6,6,6,4,4];
const stack=new Stack();

elements.map(element=>{
    stack.push(element);
})

console.log(stack.transverse());


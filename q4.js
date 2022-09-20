
class Stack {
    constructor() {
        this.items = [];
    }

    top(){
        return this.items[i];
    }
    
    push(element) {
        return this.items.push(element);
    }
    
 
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    isEmpty(){
        if(this.items.length==0){
            return 'empty';
        }else{
            return 'not empty';
        }
    }
   
    size(){
        return this.items.length;
    }

}

let stack = new Stack();
stack.push(1);
stack.push(9);
stack.push(3);
stack.push(7);
console.log(stack.items);


function removeAdd(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            stack.pop(arr[i]);
        }
    }
    console.log(arr);
}
removeAdd(stack.items);

console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);
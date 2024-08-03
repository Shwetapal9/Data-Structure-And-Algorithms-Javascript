// Implemet queue using obj

class Queue{

    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(ele){
        this.items[this.rear] = ele
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){

        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }

}

const q = new Queue()
console.log(q.isEmpty())
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.size())
q.print()
q.dequeue()
q.print()
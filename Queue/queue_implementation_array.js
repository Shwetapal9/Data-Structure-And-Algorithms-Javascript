// QueImplementation using array
// Methods -
    // Enqueue(ele) => add an  element to the queue
    // Dequeue() = remove the oldest element from the queue
    // peek()=> get the value of ele at the front of the queue without removing it
    // isEmpty() => check if the queue is empty
    // size() => get the number of elements in the queue
    // print() => visualize the elements in the queue

    class Queue{

        constructor(){
            this.items = []
        }

        enqueue(ele){
            this.items.push(ele)
        }

        dequeue(){
           return this.items.shift()
        }

        isEmpty(){
            return this.items.length === 0
        }

        peek(){
            if(!this.isEmpty()){
                return this.items[0]
            }
            return null
        }

        size(){
            return this.items.length
        }

    }
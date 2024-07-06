class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    at(n) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (count === n) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    join(separator = ',') {
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += current.value;
            if (current.next !== null) {
                result += separator;
            }
            current = current.next;
        }
        return result;
    }

    map(func) {
        const newList = new LinkedList();
        let current = this.head;
        while (current !== null) {
            newList.insertLast(func(current.value));
            current = current.next;
        }
        return newList;
    }

    filter(func) {
        const newList = new LinkedList();
        let current = this.head;
        while (current !== null) {
            if (func(current.value)) {
                newList.insertLast(current.value);
            }
            current = current.next;
        }
        return newList;
    }

    find(func) {
        let current = this.head;
        while (current !== null) {
            if (func(current.value)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

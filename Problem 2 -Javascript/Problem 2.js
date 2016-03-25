/**
 * Created by Tyler on 3/24/2016.
 */
"use strict";

var list = function() {
    var list = function () {
        // Creating a node
        function Node(data) {
            this.data = data;
            this.next = null;
        }
        //This is L not 1, its an empty list
        var l = {
            length: 0,
            currentNode: null,
            //head begins with a null node
            head: new Node(null),
            add: function(e) {
                if (l.currentNode === null) { // This is true the first time
                    //Setting data equal to e if its empty
                    l.head.data = e;
                    l.currentNode = new Node(null);
                    l.head.next = l.currentNode;
                    //now increase the length by one since we added
                    l.length++;
                }
                else {
                    //if current node is not null node
                    //change its data to e
                    l.currentNode.data = e;
                    var node = new Node(null);
                    //and add a new node for it to come after it
                    l.currentNode.next = node;
                    l.currentNode = node;
                    l.length++;
                }
            },
        };

        var F = function () {
        };
        //what is this?
        var f = new F();

        // public data
        f.run = function (e) {
            //run function takes f turns it into a new function and creates an l element with data e(could be a list)
            return l[e];
        };
        f.first = f.car = function () {
            //returns what the data of the head
            return l.head.data
        };
        f.rest = f.cdr = function () {
            //returns the data of all the entries (including the head?)
            if(l.length > 0) {
                l.head = l.head.next;
                l.length--;
            }
            return this;
        }
        f.concat = f.cons = function(e){
            //this is for concatination, if statement works if e is a string data type
            if (typeof e === 'string' || e instanceof String) {l.add(e);}
            else {
                //else we treat e like an f and we run its head to get data out
                var n = e.run('head');
                for(var i = 0; i < e.run('length'); i++) {
                    l.add(n.data);
                    n = n.next;
                }
            }
        }
        f.length = function(){return l.length};
        f.map = function(f){
            if (f instanceof Function) {
                var n = l.head;
                for(var i = 0; i < l.length; i++) {
                    n.data = f(n.data);
                    n = n.next;
                }
            }
        }
        f.iterator = function() {

            var n = this.first();
            this.rest();
            return n;

        }
        return f;
    }();
    return list;
};


var l1 = new list();
l1.cons('x')
l1.cons('y')
l1.cons('z')


document.writeln(l1.iterator());
document.writeln(l1.iterator());
document.writeln(l1.iterator());
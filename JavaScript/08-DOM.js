// ===DOCUMENT OBJECT MODEL (DOM)=== // (WIP)

console.log("DOM - Document Object Model");
console.log("The DOM defines a standard for accessing documents");

/*
The DOM (Document Object Model) is an API that represents and interacts with 
any HTML or XML-based markup language document. The DOM is a document model 
loaded in the browser and representing the document as a node tree, or DOM 
tree, where each node represents part of the document (e.g., an element, text 
string, or comment).

Connects web pages to scripts or programming languages.

The DOM is one of the most-used APIs on the Web because it allows code running 
in a browser to access and interact with every node in the document. Nodes can 
be created, moved, and changed. Event listeners can be added to nodes and 
triggered on the occurrence of a given event.

The W3C DOM standard is separated into 3 different parts:

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents

What is the HTML DOM?
The HTML DOM is a standard object model and programming interface for HTML. 
It defines:

- The HTML elements as objects
- The properties of all HTML elements
- The methods to access all HTML elements
- The events for all HTML elements

In other words: The HTML DOM is a standard for how to get, change, add, 
or delete HTML elements.
*/

//* ===Trees=== *//
/*
- A tree is a finite hierarchical tree structure. In tree order is preorder, 
depth-first traversal of a tree.

- An object that participates in a tree has a parent, which is either null or 
an object, and has children, which is an ordered set of objects. An object A 
whose parent is object B is a child of B.

- The root of an object is itself, if its parent is null, or else it is the 
root of its parent. The root of a tree is any object participating in that 
tree whose parent is null.

- An object A is called a descendant of an object B, if either A is a child
of B or A is a child of an object C that is a descendant of B.

- An inclusive descendant is an object or one of its descendants.

- An object A is called an ancestor of an object B if and only if B is a 
descendant of A.

- An inclusive ancestor is an object or one of its ancestors.

- An object A is called a sibling of an object B, if and only if B and A share 
the same non-null parent.

- An inclusive sibling is an object or one of its siblings.

- An object A is preceding an object B if A and B are in the same tree and A 
comes before B in tree order.

- An object A is following an object B if A and B are in the same tree and A 
comes after B in tree order.

- The first child of an object is its first child or null if it has no children.

- The last child of an object is its last child or null if it has no children.

- The previous sibling of an object is its first preceding sibling or null if it has no preceding sibling.

- The next sibling of an object is its first following sibling or null if it has no following sibling.

- The index of an object is its number of preceding siblings, or 0 if it has 
none.

*/

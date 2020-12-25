import { produce } from 'immer';

let book = { title: "Harry Potter" };

function publish(book) {
   // book.isPublished = true;
   produce(book, draftBook => {
       draftBook.isPublished = true;
   });
}

let updated = publish(book);

console.log(book);
console.log(updated);
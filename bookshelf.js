// bookshelf

// CONSTRUCTION
new Book({
  title: "One Thousand and One Nights",
  author: "Scheherazade"
});
let Books = bookshelf.Model.extend({
  tableName: 'documents',
  constructor: function() {
    bookshelf.Model.apply(this, arguments);
    this.on('saving', function(model, attrs, options) {
      options.query.where('type', '=', 'book');
    });
  }
});

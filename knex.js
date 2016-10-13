// knex


// NOTES
// - don't do arrow functions or you'll lose `this`
// - when looking at knexjs.org, flip dropdown to 'PostgreSQL'

// WHERE
knex('table')
  .select('title', 'author', 'year')
  .where({column: 'value'}).whereNot('column', 'value')
  .whereIn('column', subquery).orWhereIn('column', subquery)
  .whereNotIn('column', array).orWhereNotIn('column', array)
  .whereNull('column').orWhereNull('column')
  .whereNotNull('column').orWhereNotNull('column')
  .whereExists(() => true).orWhereExists(builder)
  .whereNotExists(subquery).orWhereNotExists(() => true)
  .whereBetween('column', [0, 9000]).orWhereBetween('column', [-1,0])
  .whereNotBetween('column', [0, 9000]).orWhereNotBetween('column', [0, 1])
  .whereRaw('id = ?', [1])
  .orWhere('column', 'value').orWhereNot('column', 'value')
  .andWhere('column', '>', 9000);

// first is wrong, do second for `in` and `between`
knex('table').whereNot('id', 'in', subquery);
knex('table').where('id', 'not in', subquery);

// grouped chain motherfucker
knex('users').where(function() {
  this.where('id', 1).orWhere('id', '>', 10);
}).orWhere({name: 'Tester'});

// subqueries motherfucker
var subquery = knex('users').where('votes', '>', 100).select('id');
knex('accounts').where('id', 'in', subquery);


// JOINS
knex('users')
  .join('contacts', 'users.id', '=', 'contacts.user_id')
  .select('users.id', 'contacts.phone');

knex('users')
  .join('contacts', 'users.id', 'contacts.user_id')
  .select('users.id', 'contacts.phone');

knex.select('*').from('users').join('accounts', {'accounts.id': 'users.account_id'});

// TODO innerJoin, leftJoin, leftOuterJoin, rightJoin, rightOuterJoin, outerJoin, fullOuterJoin, crossJoin, joinRaw


// BORING
knex('customers').distinct('first_name', 'last_name').select();
knex('users').count('active');
knex('users').countDistinct('active');
knex('users').min('age');
knex('users').max('age');
knex('users').sum('products');
knex('users').avg('age');
knex('users').pluck('id').then(ids => {});
//TODO transactions

// GROUPBY, ORDERBY
knex('users').groupBy('count');
knex.select('year', knex.raw('SUM(profit)')).from('sales').groupByRaw('year WITH ROLLUP');
knex('users').orderBy('name', 'desc');
knex.select('*').from('table').orderByRaw('col NULLS LAST DESC');


// LIMIT, SKIP/OFFSET
knex.select('*').from('users').limit(10).offset(30);


// INSERT
// - resolves Promise with array containing inserted ids (postgres;)
// - only user by postgres, specifies which column should be returned by insert/update
knex('books')
  .returning('id')
  .insert({title: 'Slaughterhouse Five'});


// UPDATE
knex('books')
  .where('published_date', '<', 2000)
  .update({
    status: 'archived',
    thisKeyIsSkipped: undefined
  });

// DELETE
knex('accounts').where('activated', false).del();


// FIRST
knex.table('users').first('id', 'name').then(function(row) {
  console.log(row);
});


// TODO Schema Builder


// RAW
// positional bindings ? is interpret as value and ?? as identifier
knex('users').where(knex.raw('?? = ?', ['user.name', 1]));
// named bindings :name is interpret as value and :name: as identifier
knex('users')
  .where(knex.raw(':name: = :thisGuy or :name: = :otherGuy', {
    name: 'users.name',
    thisGuy: 'Bob',
    otherGuy: 'Jay'
  }));


// PROMISES
knex.select('name').from('users')
  .where('id', '>', 20)
  .andWhere('id', '<', 200)
  .limit(10)
  .offset(x)
  .then(function(rows) {
    return _.pluck(rows, 'name');
  })
  .then(function(names) {
    return knex.select('id').from('nicknames').whereIn('nickname', names);
  })
  .then(function(rows) {
    console.log(rows);
  })
  .catch(function(error) {
    console.error(error);
  });


// MIGRATIONS
// $ knex init
// $ knex migrate:make migration_name
// $ knex migrate:latest
// $ knex migrate:rollback


// SEED
// $ knex seed:make seed_name
// $ knex seed:run




// REFERENCES
// http://knexjs.org/

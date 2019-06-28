var DBsearch = require('./DBsearch.js');
var sqlsen='select * from test1';
DBsearch.getsen(sqlsen,DBsearch.getTransaction);
DBsearch.getTransaction(DBsearch.funsearch);

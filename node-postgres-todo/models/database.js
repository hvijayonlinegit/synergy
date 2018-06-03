const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://ebsibdphtesvlf:d19fe91759068da262861ecd484e5317d9f7ae94a852797cadea213a4b6a47dd@ec2-54-204-46-236.compute-1.amazonaws.com:5432/d1jm11r40pu698?ssl=true';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });

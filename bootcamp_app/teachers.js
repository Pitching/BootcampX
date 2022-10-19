const { Pool } = require('pg');
const process = require('process');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const userInput = [`${process.argv.slice(2)}`];

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`, userInput)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${userInput[0]}: ${user.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
SELECT SUM(duration) AS total_duration
FROM assignment_submissions AS sub
JOIN students ON students.id = sub.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12';
SELECT name, COUNT(assistance_requests.*)
FROM students
JOIn assistance_requests ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;
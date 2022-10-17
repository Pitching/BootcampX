SELECT day, count(id) as total_assignments
FROM assignments
WHERE total_assignments >= 10
GROUP BY day
ORDER BY day ASC;
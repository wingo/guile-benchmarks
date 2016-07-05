.PHONY: csv clean

doc:
	echo Run make all to run all tests
csv:
	grep -a -h '^+!CSVLINE' results.* | sed 's/+!CSVLINE!+//' > all.csv

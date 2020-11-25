# cst336-hw4

HW 4: Express

Redo HW1 using Express. 

It must use "partials". 
It must also use the "faker" package in the backend to include random fake data.

Hint:  To pass data from a route to a view use this syntax in the route:
res.render("fileToRender.ejs", {"variableName":value});

And then, in the "fileToRender.ejs" use this syntax to display the value passed:

<%= variableName %>

Note that the file to render must have "ejs" extension, not "html".

Rubric:

Requirements	Points
App includes same content as HW1. 20pts
App uses partials Include your Github repo link as part of your post (please, make it public)	20pts
There is a navigation menu across all pages 20pts
App uses the "faker" package in the backend (As part of your post, mention where/how it's used) 20pts
There is an external CSS file and/or Bootstrap	10pts
Comment on at least one of your peers using at least 100 words 	10pts

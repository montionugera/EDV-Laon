# EDV-Laon

### Summary

This project is connected to the Data Visualization course, 
but depending on your background knowledge of data visualization, 
dimple.js, and d3.js you may not need to take the whole course to complete this project.

After completing Lesson 2 and Problem Set 2 of the course, 
you will be able to complete this project since you will have learned about dimple.js.

If you want to become more technical and expand your skill set, 
you can continue to Lesson 3 and Lesson 4, in which you will learn more 
about narrative structures and how to create graphics using d3.js. 
The d3.js library has a steeper learning curve, and we encourage you to take on the challenge if you desire.


### Design

The project decide to use :

#### Bar chart and Line Chart
because it is suite with differentiate data and show the trend of data.

#### Geomap

#### Boxplot
because it is suite with differentiate data between category and can also show the distribution of it.
 

### Step

#### Draft a story

After I got the data I try to mark down what is the interesting story behide this 
and I found out that the most interesting variables are 
amount of loan and yield; I try to draft the visualization by using tableau public and found the co-related interesting variables such as
Loan Original Date, Brrower Rating , Credit Grade, Prosper Rating and Borrower State.

draft file : draft.pdf (http://static.augimon.com/EDV-Laon/draft.pdf)

#### Processing Data

The data is too large so I need to process the data to optimize the size of resource that 
be used to create the visualization by create python script using numpy and pandas; 

1st View Loan Original Date vs Sum(Loan Amount) vs ListingCategory - Show trend
2nd State vs vs Sum(LoanAmount) On date - Show Loan density
3nd View CreditGrade vs Borrower Rate - Show relation between Grade and Borrower Rate
4nd View ProsperRating vs Borrower Rate - Show relation between Grade and Borrower Rate


### Reviews

#### By Mr. Chat

For US map view, it should have the state name and amount of loan when hover pointer on each state area.

For boxplot graph, it should have highlight number of borrower rate for each credit grade/ prosper rating.
For example, grade A have borrowing rate as follow.
0.08: maximum 0.06 :q1 0.07: mediam  0.06:q3 0.05 :minimum

#### By Mr. Vetsutee

I was confused about what this data visualization want to introduce. 
The creator should include some brief to get audience understand his core concept. 
Lack of understanding greatly effects how audiences interpret each graph.
 
- While website loading data by each Q, the graph also keeps moving, make it confusing of what happens. Did creator want to make a point or just loading.

- Top left graph was easy to digest, loan amout by Q. However, I still don't get what creator want to say.
 
- I likes geography graph map. Easy to see different between each state. After saw different in color, I want to see their numbers too. Mouse hover to see exact number should improve this graph.

- Both right graphs were too hard for me to get any message.

#### By Mr. Chatuporn


1. When the page first loaded, it should display a graph with the final data (2013-Q4). It should not
to start animation from the first data to the final data. It will take a long time to wait.

2. The display should be divided as follows:

a. Added the option to view each Quarter by selecting the drop-down (into the upper right
corner of the page).

b. Segment graph in the display below (1) a graph showing data from 2005-Q3 data
Quarter to the Quarter is selected and (2) a graph showing the data specific Quarter.

3. Add definition of Credit Grade (AA, A, B, C, D, E, HR and NC) and Prosper Rating (AA, A, B, C, D, E,
HR and N / A) may be displayed in a small square on the graph (label description).

4. The map graph, it should show the state name and amount of loan when hover on each state.

5. The scale rate (colors) of the map graph should be fixed in every Quarter

#### Summary 

##### What I think it should be improved or be fixed :

-Graph title, to make user can clearly understand what it is and what duration that each graph include the data.

-US map view should improve by add tooltip when the user hover mouse on it.

-Drop down for quick navigate though quater.

-Graph unit definitions.

##### What I think it should not be improved or be fixed :

1.When the page first loaded, it should display a graph with the final data (2013-Q4). It should not
to start animation from the first data to the final data. It will take a long time to wait.. 

I think it has already make sense to tell the story from the beginning of the data.

2. The scale rate (colors) of the map graph should be fixed in every Quarter.

I think this can make user can not distinguish visualization
in case it has very low loan amount in some years.




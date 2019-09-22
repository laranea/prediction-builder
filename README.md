## Using the Database
Start the mongo service with the following command:
```
sudo service mongod start
```
Once the mongo service starts, you can use the mongo terminal by running the following command:
```
mongo
```
Next, to show the available databases, run:
```
show dbs
``` 
Use the "twitter_data" database 
```
use twitter_data
```
Next, view the available collections by running:
```
show collections
```
Query the tweets collection within the twitter_data database by running:
```
db.tweets.find()
``` 
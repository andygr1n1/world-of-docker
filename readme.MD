mongo

docker exec -it <name> bash
mongo -u <username> -p <password>

db
show dbs
db.books.insert({"name": "harry potter"})
db.books.find()

npm install redis connect-redis express-session @types/redis @types/connect-redis @types/express-session

docker exec -it 381ac505f4f6 redis-cli
KEYS *
GET "sess:nCJfSNQAF1F-2xFy3oyqGFLhLf9ay6Z0"
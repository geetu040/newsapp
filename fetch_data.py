import requests, json

with open(".env.local", "r") as f:
	api_key = f.read()[18:50]

data_dir = "src\components\data.json"

categories = {
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology"
}

data = {}
for category in categories:
	url = f"https://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey={api_key}&page=1&pageSize=100"
	r = requests.get(url = url)
	data[category] = r.json()
with open(data_dir, "w") as f:
	f.write(json.dumps(data))
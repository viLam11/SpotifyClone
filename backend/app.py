from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SONGS = [
    {
        "genre": "Jazz",
        "songName": "Be Bop a Lula",
        "urlPicsumPhotos": "https://picsum.photos/seed/V07iZ9e5o/640/480",
        "type": "song",
        "artist": "Hoang Dung"
    },
    {
        "genre": "Electronic",
        "songName": "Tutti Frutti",
        "urlPicsumPhotos": "https://picsum.photos/seed/FoWxQpj/640/480"
    },
    {
        "genre": "Latin",
        "songName": "Horse With No Name",
        "urlPicsumPhotos": "https://picsum.photos/seed/rSe1xF/640/480"
    },
    {
        "genre": "Non Music",
        "songName": "Locked Out Of Heaven",
        "urlPicsumPhotos": "https://picsum.photos/seed/yq8WcMN/640/480"
    },
    {
        "genre": "Latin",
        "songName": "Yellow Rose of Texas",
        "urlPicsumPhotos": "https://picsum.photos/seed/j5GwSRTP5/640/480"
    },
    {
        "genre": "Stage And Screen",
        "songName": "Eye of the Tiger",
        "urlPicsumPhotos": "https://picsum.photos/seed/a3SF6A/640/480"
    },
    # {
    #     "genre": "Jazz",
    #     "songName": "Hard to Say I'm Sorry",
    #     "urlPicsumPhotos": "https://picsum.photos/seed/pxcGhj8GMP/640/480"
    # }
]


@app.route('/')
def home():
    return "Welcome to the Flask backend!"


@app.route('/sidebar/songs', methods=["GET"])
def sidebarSong():
    dump_data = SONGS
    return dump_data

if __name__ == "__main__":
    app.run(debug=True)
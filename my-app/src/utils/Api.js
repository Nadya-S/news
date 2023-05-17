class Api {
  constructor() {
    this.baseUrl = "https://hacker-news.firebaseio.com/v0/";
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  getNewsId() {
    return fetch(`${this.baseUrl}newstories.json`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getNews(itemId) {
    return fetch(`${this.baseUrl}/item/${itemId}.json`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default new Api();

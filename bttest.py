import os

import sqlite3

from flask import Flask, render_template, request, redirect, session, url_for

from werkzeug.utils import secure_filename

from datetime import datetime

app = Flask(__name__)


/* ボタンテスト用Python */


@app.route("/")
def index():
	return render_template("/bttest.html")

@app.route("/results.html/<file_name>")
def next(file_name):
	js_val = file_name
	print(img_urls)
	return render_template("/results.html",js_val = js_val)




if __name__ == "__main__":
    # Flask が持っている開発用サーバーを、実行します。
    app.run(debug=True)


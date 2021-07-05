import os
import sqlite3
from flask import Flask, render_template, request, redirect, session
from werkzeug.utils import secure_filename
from datetime import datetime
app = Flask(__name__)
app.config['SECRET_KEY'] = 'oYzJehoge09C5c3tMf5FnNhogezZho'
#この下から書き込む







#書き込みここまで
if __name__ == "__main__":
    # Flask が持っている開発用サーバーを、実行します。
    app.run(debug=True)
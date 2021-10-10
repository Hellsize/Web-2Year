from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    data={"text":"Объединяйся с друзьями и готовься к эпичной онлайн-бойне! Открывай новые режимы и разнообразных бойцов с уникальными способностями. Уничтожай, взрывай и побеждай в особенных режимах игры «Brawl Stars»!", "title":["Leon", "Spike", "Crow", "Sandy", "Amber", "Meg"], "cards":["", "", "", ""]}
    return render_template("_layout1.html", **data)

app.run(port=5500)
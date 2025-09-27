from flask import Flask, render_template, request
#Teste
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")
@app.route("/feedback")
def feedback():
    return render_template("feedback.html")

@app.route("/forms")
def forms():
    return render_template("forms.html")


@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/admin")
def admin():
    return render_template("")

@app.route("/acompanhamento")
def acompanhamento():
    return render_template("acompanhamento.html")

if __name__ == "__main__":
    app.run(debug=True) # debug=True ativa o modo de desenvolvimento, reiniciando o servidor quando você muda algo

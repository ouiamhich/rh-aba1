
import bcrypt
from bson import ObjectId
from flask import (Flask, jsonify, redirect, render_template, request, session,
                   url_for)
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
# connecting mongodb
# collection
app.config["MONGO_URI"] = "mongodb+srv://ouiam:ouiam@cluster0.3xs0omv.mongodb.net/RhApp"
mongo = PyMongo(app)

CORS(app)
dbv = mongo.db.vacation
dbh = mongo.db.holiday
dbd = mongo.db.departement
dbt = mongo.db.team
dbp = mongo.db.presence
dbn = mongo.db.notes
dbemp = mongo.db.employee
dbpro = mongo.db.project
dbt = mongo.db.teams  # add
dbc = mongo.db.clients  # add
dbdoc = mongo.db.documents  # add
dbu = mongo.db.users  # add adn auth


# employee
@app.route('/employee', methods=["GET", "POST"])
def getpost():
    if request.method == 'GET':
        employee = []
        for i in dbemp.find():
            employee.append({
                "_ID": str(ObjectId(i["_id"])),
                "firstName": i["firstName"],
                "lastName": i["lastName"],
                "email": i["email"],
                "gender": i["gender"],
                "birthDay": i["birthDay"],
                "maritalStatus": i["maritalStatus"],
                "cin": i["cin"],
                "address": i["address"],
                "city": i["city"],
                "country": i["country"],
                "phone": i["phone"],
                "departement": i["departement"],
                "contractType": i["contractType"],
                "joinedDate": i["joinedDate"],
                "salary": i["salary"],
                "supervisor": i["supervisor"]
            })
        return jsonify(employee)

    elif request.method == "POST":
        id = dbemp.insert_one({
            "firstName": request.json["firstName"],
            "lastName": request.json["lastName"],
            "email": request.json["email"],
            "gender": request.json["gender"],
            "birthDay": request.json["birthDay"],
            "maritalStatus": request.json["maritalStatus"],
            "cin": request.json["cin"],
            "address": request.json["address"],
            "city": request.json["city"],
            "country": request.json["country"],
            "phone": request.json["phone"],
            "departement": request.json["departement"],
            "contractType": request.json["contractType"],
            "joinedDate": request.json["joinedDate"],
            "salary": request.json["salary"],
            "supervisor": request.json["supervisor"],

        })
        return jsonify(str(id.inserted_id))


@app.route("/employee/<id>", methods=["DELETE", "PUT"])
def deleteput(id):

    if request.method == "DELETE":
        dbemp.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbemp.update_one({"_id": ObjectId(id)}, {"$set": {
            "firstName": request.json["firstName"],
            "lastName": request.json["lastName"],
            "email": request.json["email"],
            "gender": request.json["gender"],
            "birthDay": request.json["birthDay"],
            "maritalStatus": request.json["maritalStatus"],
            "cin": request.json["cin"],
            "address": request.json["address"],
            "city": request.json["city"],
            "country": request.json["country"],
            "phone": request.json["phone"],
            "departement": request.json["departement"],
            "contractType": request.json["contractType"],
            "joinedDate": request.json["joinedDate"],
            "salary": request.json["salary"],
            "supervisor": request.json["supervisor"],
        }})
        return jsonify({"message": "updated"})


@app.route('/employee/<id>', methods=["GET"])
def getEmployee(id):
    res = dbemp.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "firstName": res["firstName"],
        "lastName": res["lastName"],
        "email": res["email"],
        "gender": res["gender"],
        "birthDay": res["birthDay"],
        "maritalStatus": res["maritalStatus"],
        "cin": res["cin"],
        "address": res["address"],
        "city": res["city"],
        "country": res["country"],
        "phone": res["phone"],
        "departement": res["departement"],
        "contractType": res["contractType"],
        "joinedDate": res["joinedDate"],
        "salary": res["salary"],
        "supervisor": res["supervisor"],
    }


# conge
@app.route('/vacation', methods=["GET", "POST"])
def getpostVacation():
    if request.method == 'GET':
        vacation = []
        for i in dbv.find():
            vacation.append({
                "_ID": str(ObjectId(i["_id"])),
                "start": i["start"],
                "finish": i["finish"],
                "period": i["period"],
                "type": i["type"],
            },)
        return jsonify(vacation)

    elif request.method == "POST":
        id = dbv.insert_one({
            "start": request.json["start"],
            "finish": request.json["finish"],
            "period": request.json["period"],
            "type": request.json["type"],
        })
        return jsonify(str(id.inserted_id))


@app.route("/vacation/<id>", methods=["DELETE", "PUT"])
def deleteputVacation(id):

    if request.method == "DELETE":
        dbv.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbv.update_one({"_id": ObjectId(id)}, {"$set": {
            "start": request.json["start"],
            "finish": request.json["finish"],
            "period": request.json["period"],
            "type": request.json["type"],
        }})
        return jsonify({"message": "updated"})


@app.route('/vacation/<id>', methods=["GET"])
def getconge(id):
    res = dbv.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "start": res["start"],
        "finish": res["finish"],
        "period": res["period"],
        "type": res["type"],
    }

# presence


@app.route('/presence', methods=["GET", "POST"])
def getpostPresence():
    if request.method == 'GET':
        presence = []
        for i in dbp.find():
            presence.append({
                "_ID": str(ObjectId(i["_id"])),
                "entry": i["entry"],
                "exit": i["exit"]})
        return jsonify(presence)

    elif request.method == "POST":
        id = dbp.insert_one({
            "entry": request.json["entry"],
            "exit": request.json["exit"]
        })
        return jsonify(str(id.inserted_id))


@app.route("/presence/<id>", methods=["DELETE", "PUT"])
def deleteputPresence(id):

    if request.method == "DELETE":
        dbp.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbp.update_one({"_id": ObjectId(id)}, {"$set": {
            "entry": request.json["entry"],
            "exit": request.json["exit"]
        }})
        return jsonify({"message": "updated"})


@app.route('/presence/<id>', methods=["GET"])
def getPresence(id):
    res = dbp.find_one({"_id": ObjectId(id)})
    return {
        "_ID": str(ObjectId(res["_id"])),
        "entry": res["entry"],
        "exit": res["exit"]
    }


# jour ferie
@app.route('/holiday', methods=["GET", "POST"])
def getpostholiday():
    if request.method == 'GET':
        holiday = []
        for i in dbh.find():
            holiday.append({
                "_ID": str(ObjectId(i["_id"])),
                "date": i["date"],
                "description": i["description"]
            })
        return jsonify(holiday)

    elif request.method == "POST":
        id = dbh.insert_one({
            "date": request.json["date"],
            "description": request.json["description"]
        })
        return jsonify(str(id.inserted_id))


@app.route("/holiday/<id>", methods=["DELETE", "PUT"])
def deleteputholiday(id):

    if request.method == "DELETE":
        dbh.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbh.update_one({"_id": ObjectId(id)}, {"$set": {
            "date": request.json["date"],
            "description": request.json["description"]
        }})
        return jsonify({"message": "updated"})


@app.route('/holiday/<id>', methods=["GET"])
def getHoliday(id):
    res = dbh.find_one({"_id": ObjectId(id)})
    return {
        "_ID": str(ObjectId(res["_id"])),
        "date": res["date"],
        "description": res["description"]
    }


# notes
@app.route('/notes', methods=["GET", "POST"])
def getpostNotes():

    if request.method == 'GET':
        notes = []
        for i in dbn.find():
            notes.append({
                "_ID": str(ObjectId(i["_id"])),
                "title": i["title"],
                "content": i["content"]
            })
        return jsonify(notes)

    elif request.method == "POST":
        id = dbn.insert_one({
            "title": request.json["title"],
            "content": request.json["content"]
        })
        return jsonify(str(id.inserted_id))


@app.route("/notes/<id>", methods=["DELETE", "PUT"])
def deleteputNotes(id):

    if request.method == "DELETE":
        dbn.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbn.update_one({"_id": ObjectId(id)}, {"$set": {
            "title": request.json["title"],
            "content": request.json["content"]
        }})
        return jsonify({"message": "updated"})


@app.route('/notes/<id>', methods=["GET"])
def getnotes(id):
    res = dbn.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "title": res["title"],
        "content": res["content"],
    }


# départements
@app.route('/departements', methods=["GET", "POST"])
def getpostDepartements():
    if request.method == 'GET':
        departements = []
        for i in dbd.find():
            departements.append({
                "_ID": str(ObjectId(i["_id"])),
                "depName": i["depName"],

            })
        return jsonify(departements)

    elif request.method == "POST":
        id = dbd.insert_one({
            "depName": request.json["depName"],
        })
        return jsonify(str(id.inserted_id))


@app.route("/departements/<id>", methods=["DELETE", "PUT"])
def deleteputDepartements(id):

    if request.method == "DELETE":
        dbd.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbd.update_one({"_id": ObjectId(id)}, {"$set": {
            "depName": request.json["depName"],
        }})
        return jsonify({"message": "updated"})


@app.route('/departements/<id>', methods=["GET"])
def getdepartement(id):
    res = dbd.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "depName": res["depName"],
    }


# projet
@app.route('/projects', methods=["GET", "POST"])
def getpostProject():
    if request.method == 'GET':
        projects = []
        for i in dbpro.find():
            projects.append({
                "_ID": str(ObjectId(i["_id"])),
                "name": i["name"],
                "team": i["team"],
                "duration": i["duration"],
                "hours": i["hours"],
                "startOn": i["startOn"],
                "dueOn": i["dueOn"],
                "progress": i["progress"]

            })
        return jsonify(projects)

    elif request.method == "POST":
        id = dbpro.insert_one({
            "name": request.json["name"],
            "team": request.json["team"],
            "duration": request.json["duration"],
            "hours": request.json["hours"],
            "startOn": request.json["startOn"],
            "dueOn": request.json["dueOn"],
            "progress": request.json["progress"]
        })
        return jsonify(str(id.inserted_id))


@app.route("/projects/<id>", methods=["DELETE", "PUT"])
def deleteputProject(id):

    if request.method == "DELETE":
        dbpro.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbpro.update_one({"_id": ObjectId(id)}, {"$set": {

            "name": request.json["name"],
            "team": request.json["team"],
            "duration": request.json["duration"],
            "hours": request.json["hours"],
            "startOn": request.json["startOn"],
            "dueOn": request.json["dueOn"],
            "progress": request.json["progress"]
        }})
        return jsonify({"message": "updated"})


@app.route('/projects/<id>', methods=["GET"])
def getProjec(id):
    res = dbpro.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "name": res["name"],
        "team": res["team"],
        "duration": res["duration"],
        "hours": res["hours"],
        "startOn": res["startOn"],
        "dueOn": res["dueOn"],
        "progress": res["progress"]
    }


# projet
@app.route('/teams', methods=["GET", "POST"])
def getpostTeam():
    if request.method == 'GET':
        teams = []
        for i in dbt.find():
            teams.append({
                "_ID": str(ObjectId(i["_id"])),
                "teamName": i["teamName"],
                "description": i["description"],
                "department": i["department"],
                "supervisor": i["supervisor"]

            })
        return jsonify(teams)

    elif request.method == "POST":
        id = dbt.insert_one({
            "teamName": request.json["teamName"],
            "description": request.json["description"],
            "department": request.json["department"],
            "supervisor": request.json["supervisor"],
        })

        return jsonify(str(id.inserted_id))


@app.route("/teams/<id>", methods=["DELETE", "PUT"])
def deleteputTeams(id):

    if request.method == "DELETE":
        dbt.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbt.update_one({"_id": ObjectId(id)}, {"$set": {
            "teamName": request.json["teamName"],
            "description": request.json["description"],
            "department": request.json["department"],
            "supervisor": request.json["supervisor"],
        }})
        return jsonify({"message": "updated"})


@app.route('/teams/<id>', methods=["GET"])
def getTeam(id):
    res = dbt.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "teamName": res["teamName"],
        "description": res["description"],
        "department": res["department"],
        "supervisor": res["supervisor"], }


# client
@app.route('/clients', methods=["GET", "POST"])
def getpostClient():
    if request.method == 'GET':
        clients = []
        for i in dbc.find():
            clients.append({
                "_ID": str(ObjectId(i["_id"])),
                "name": i["name"],
                "details": i["details"],
                "address": i["address"],
                "contact": i["contact"],
                "email": i["email"],
                "companyUrl": i["companyUrl"],
                "status": i["status"]

            })
        return jsonify(clients)

    elif request.method == "POST":
        id = dbc.insert_one({
            "name": request.json["name"],
            "details": request.json["details"],
            "address": request.json["address"],
            "contact": request.json["contact"],
            "email": request.json["email"],
            "companyUrl": request.json["companyUrl"],
            "status": request.json["status"],
        })

        return jsonify(str(id.inserted_id))


@app.route("/clients/<id>", methods=["DELETE", "PUT"])
def deleteputClients(id):

    if request.method == "DELETE":
        dbc.delete_one({"_id": ObjectId(id)})
        return jsonify({"message": "deleted"})

    elif request.method == "PUT":
        dbc.update_one({"_id": ObjectId(id)}, {"$set": {
            "name": request.json["name"],
            "details": request.json["details"],
            "address": request.json["address"],
            "contact": request.json["contact"],
            "email": request.json["email"],
            "companyUrl": request.json["companyUrl"],
            "status": request.json["status"],
        }})
        return jsonify({"message": "updated"})


@app.route('/clients/<id>', methods=["GET"])
def getClient(id):
    res = dbc.find_one({"_id": ObjectId(id)})
    print(res)
    return {
        "_ID": str(ObjectId(res["_id"])),
        "name": res["name"],
        "details": res["details"],
        "address": res["address"],
        "contact": res["contact"],
        "email": res["email"],
        "companyUrl": res["companyUrl"],
        "status": res["status"]
    }


mongo = PyMongo(app)


# auth only for test

@app.route('/')
def index():
    if 'username' in session:
        return 'You are logged in as ' + session['username']

    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():

    login_user = dbu.find_one({'name': request.form['username']})

    if login_user:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
            session['username'] = request.form['username']
            return redirect(url_for('index'))

    return 'Invalid username/password combination'


@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':

        existing_user = dbu.find_one({'name': request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(
                request.form['pass'].encode('utf-8'), bcrypt.gensalt())
            dbu.insert_one(
                {'name': request.form['username'], 'password': hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index'))

        return 'That username already exists!'

    return render_template('register.html')


if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)

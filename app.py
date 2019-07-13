from flask import Flask
from flask import jsonify
from flask import abort
from flask import request

app = Flask(__name__)

korobchansky = [
	{
		'id': 1,
		'subject': u'OS',
		'rating': u'good'
	},
	{
		'id': 2,
		'subject': u'Computational Mathematics',
		'rating': u'good'
	},
	{
		'id': 3,
		'subject': u'electrical engineering',
		'rating': u'good'	
	},
	{
		'id': 4,
		'subject': u'computer and peripherals',
		'rating': u'excellent'
	}
]

@app.route('/api/korobchansky', methods=['GET'])
def get_korobchansky():
	
	return jsonify({'korobchansky': korobchansky})

@app.route('/api/korobchansky/<int:id>', methods=['GET'])
def get_subject(id):
    return jsonify({'korobchansky/'+str(id): korobchansky[id-1]})

@app.route('/api/korobchansky', methods=['POST'])
def add_subject():
	subject = {
		'id': korobchansky[-1]['id'] + 1,
		'subject': request.args.get('subject'),
		'rating': request.args.get('rating')
	}
	korobchansky.append(subject)
	return jsonify({'subject': subject}), 201

@app.route('/api/korobchansky/<int:id>', methods=['PUT'])
def update_subject(id):
    korobchansky[id-1]['subject'] = request.args.get('subject')
    korobchansky[id-1]['rating'] = request.args.get('rating')
    return jsonify({'korobchansky/'+str(id): korobchansky[id-1]})

@app.route('/api/korobchansky/<int:id>', methods=['DELETE'])
def delete_task(id):
    korobchansky.remove(korobchansky[id-1])
    return jsonify({'result': True})

if __name__ == '__main__':
	app.run(debug=True)

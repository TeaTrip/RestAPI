from  flask import Flask, jsonify

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

if __name__ == '__main__':
	app.run(debug=True)

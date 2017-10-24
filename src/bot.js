const LineConnect = require('./connect');
let LINE = require('./main1.js');

const auth = {
	authToken: ' EmZC87JkdSaYFSd3bEW5.ukgrBh1BCpARcVl0zqthXq.Ja5rw5ym9zIeyH7wr3kNRtBg+4noms9z7RQndCyvGU0=',
	certificate: '0a7ee836407607ec4fd78c2c9762314f319096e293e25bf3d7bb940fedb345c8',
}
 let client =  new LineConnect(auth);
//let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});

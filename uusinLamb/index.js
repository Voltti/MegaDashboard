const fetch = require('node-fetch');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

async function handler() {
        async function shakespeare() {
            let lines = [];
            let res = await fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet');
            let data = await res.json();
            for (let i = 0; i < 50; i++) {
                lines.push(data[i].lines);
            }
            toBucket(lines);
            return lines;
        }

        async function toBucket(lines) {
            try {
                const params = {
                    Bucket: 'megadashbucket',
                    Key: 'shakespeare.json',
                    Body: JSON.stringify(lines),
                    ContentType: 'application/json; charset=utf-8'
            }
            await s3.putObject(params).promise();
            } catch (err) {
                console.log(err);
            }
        }
        
        try {
            const dataShake = await shakespeare();
            return dataShake;
        } catch (err) {
            return { error: err };
        }
    };


handler()

//$ aws lambda update-function-code --function-name megaDashShake --zip-file fileb://shakeLamb.zip
const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

async function run(){
    try{
        let url = core.getInput('url')
        let basic_auth = core.getInput('basic_auth')
        let status  = await axios.get(url,
            {
                headers: {
                  Authorization: basic_auth,
                }
        
        }).then((res) => {
            console.log(res)
            core.setOutput("result", "The issue was found successfully!")
        })
        console.log("response")
        console.log(status)
        console.log(status.status)
        
    }catch(error){
        core.setFailed(error.message)
    }    
}
run()
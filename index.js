const core = require('@actions/core')
const github = require('@actions/github')
const axios = require('axios')

async function run(){
    try{
        let url = core.getInput('url')
        let basic_auth = core.getInput('basic_auth')
        await axios.get(url,
            {
                headers: {
                  Authorization: basic_auth,
                }
        
        }).then((res) => {
            core.setOutput("result", "The issue was found successfully!")
        }).catch((err) => {
            core.setFailed("The Issue not found!")
            core.setFailed(err)
        })
    }catch(error){
        core.setFailed(error.message)
    }    
}
run()
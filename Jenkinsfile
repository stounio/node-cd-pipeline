// Credential identifier for connecting to github
def gitCredential = env.GIT_CREDENTIALS

node {
    stage('Checkout') {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'UserExclusion', excludedUsers: 'jenkins'], [$class: 'WipeWorkspace'], [$class: 'LocalBranch', localBranch: 'master']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: "${gitCredential}", url: 'git@github.com:stounio/node-cd-pipeline.git']]])
    }
    stage('Install') {
        sh 'npm install mocha'
        sh 'npm install'
    }
    stage('Test') {
        sh 'npm test'
    }
}

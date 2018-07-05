// Uses credentials ID	GIT_CREDENTIALS for connecting to the git repository
node {
    stage('Checkout') {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'UserExclusion', excludedUsers: 'jenkins'], [$class: 'WipeWorkspace'], [$class: 'LocalBranch', localBranch: 'master']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'GIT_CREDENTIALS', url: 'git@github.com:stounio/node-cd-pipeline.git']]])
    }
    stage('Install') {
        sh 'npm install mocha'
        sh 'npm install'
    }
    stage('Test') {
        sh 'npm test'
    }
}

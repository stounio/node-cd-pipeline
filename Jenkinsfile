// Uses credentials ID	GIT_CREDENTIALS for connecting to the git repository
// Uses global environment variable GIT_USERNAME and GIT_EMAIL for setting up Git repository.
// Uses custom configuration file NPM_CONFIG containing NPM credentials for authenticating the user to the NPM registry.

def gitUserName = env.GIT_USERNAME
def gitEmail = env.GIT_EMAIL

node {
    stage('Setup Git') {
        sh "git config --global user.name ${gitUserName}"
        sh "git config --global user.email ${gitEmail}"
    }

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
    stage('Version'){
        sh 'npm version patch'
        sshagent(['GIT_CREDENTIALS']) {
          sh 'git push --set-upstream origin master'
        }
        sshagent(['GIT_CREDENTIALS']) {
          sh 'git push origin master'
        }
        sshagent(['GIT_CREDENTIALS']) {
          sh "git push --follow-tags"
        }
    }
    stage('Publish') {
        withNPM(npmrcConfig: 'NPM_CONFIG') {
            sh 'npm publish'
        }
    }
}

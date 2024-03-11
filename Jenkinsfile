pipeline {
    agent any
    // environment {
    //     NODE_LABEL = 'finOms_prod'
    // }
    stages {
        stage('npm install and npm run build') {
            steps {
                script {
                    // Run npm install and npm run build for the first build
                    if (!isApplicationRunning('oms')) {
                        sh 'npm install --legacy-peer-deps'
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Start or Restart Application') {
            steps {
                script {
                    // If the application is not running, start it
                    if (!isApplicationRunning('oms')) {
                        sh 'pm2 start npm --name kairavistudios -- run dev'
                    } else {
                        sh 'pm2 restart kairavistudios'
                    }
                }
            }
        }
    }
}

def isApplicationRunning(appName) {
    def status = sh(script: "pm2 status", returnStdout: true).trim()
    return status.contains(appName)
}

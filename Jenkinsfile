pipeline {
  agent {
    docker {
      image 'node:alpine'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        sh 'apk add chromium'
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            sh 'npm run-script lint'
          }
        }

        stage('Unit tests') {
          steps {
            sh '''




npm run-script test'''
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run-script build'
      }
    }

  }
}
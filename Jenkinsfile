pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        sh 'apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main'
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
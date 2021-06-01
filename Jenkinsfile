pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'apt update'
        sh 'apt upgrade'
        sh 'npm install'
        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
        sh 'apt install ./google-chrome-stable_current_amd64.deb'
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
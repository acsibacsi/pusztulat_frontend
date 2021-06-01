pipeline {
  agent {
    docker {
      image 'tiangolo/node-frontend'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'nvm install 12'
        sh 'nvm use 12'
        sh 'npm install @angular/cli -g'
        sh 'npm install'
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
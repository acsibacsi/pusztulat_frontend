pipeline {
  agent {
    docker {
      image 'tiangolo/node-frontend'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        sh 'ng update @angular/core@11 @angular/cli@11'
        sh 'ng update'
        sh 'ng update @angular/core@12 @angular/cli@12'
        sh 'ng update'
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
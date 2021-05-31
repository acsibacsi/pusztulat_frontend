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
        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&  sudo apt install ./google-chrome-stable_current_amd64.deb'
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
            sh 'npm run-script test'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run-script build'
      }
    }

    stage('Clean') {
      steps {
        sh 'sudo apt-get remove google-chrome-stable'
      }
    }

  }
}
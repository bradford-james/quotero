pipeline {
    agent { docker { image 'temp' } }
    stages {
        stage('Test') {
            steps {
                // Compile the tests

                sh 'npm test'
            }
        }
    }
}
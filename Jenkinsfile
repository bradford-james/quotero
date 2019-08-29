pipeline {
    agent { docker { image 'node' } }
    stages {
        stage('Test') {
            steps {
                // Compile the tests

                sh 'npm test'
            }
        }
    }
}
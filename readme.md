## 🌐 Profile Page

#### Available on: https://djc7924qzcvck.cloudfront.net/

#### 🔨 Frameworks

- ReactJS
- Styled Components
- ViteJS

#### 🚀 Start Application

- run "yarn" and "yarn dev"

#### 📦 Deploy Application

- Generate website assets

  ```
  yarn build
  ```

- Add AWS keys

  ```
  export AWS_ACCESS_KEY_ID=
  export AWS_SECRET_ACCESS_KEY=
  export AWS_DEFAULT_REGION=us-east-1
  ```

- Deploy

  ```
  cd ./deploy
  yarn cdk:deploy
  ```

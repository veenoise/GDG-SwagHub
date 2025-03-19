# GDG Swag Shop

This is a React project that uses Firebase Auth for backend authentication using signInWithEmailAndPassword, createUserWithEmailAndPassword, and signInWithPopup using GoogleAuthProvider.

## Install Dependencies

```bash
npm install
```

## Rename `/src/.sample.env` to `/src/.env`

Utilize the sample env to copy your firebase project configs.

## Modify `/src/firebase/firebase.ts`

Generate your own firebase project and paste the firebase configuration in that file. From `.env`, utilize the environment variables using `process.env`.

## Modify `/controller/userAuthentication.ts`

Generate the required code to login, signup, and use Google OAuth using firebase.

## Run experimental

```bash
npm run dev
```
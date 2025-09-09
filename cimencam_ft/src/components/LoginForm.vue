<template>

<head>
    
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../../../../../vendor/bootstrap5/css/bootstrap.min.css">

</head>
<body>
     <div class="container">
        <div   class="form-section sign-in">

          
            <form action="#" @submit.prevent="handlelogin" method="post">
                <div class="img_logo">
                    <img src="C:\projects\cimencam_app\frontend\Performance_tracking_ftend\cimencam_ft\src\assets\img\10_48_34_cimencam_logo.png" alt="CIMENCAM Logo">
                    <div>Sign In</div>
                </div>
                
                <div class="form-group">
                    <label for="Username">Username</label>
                    <input type="text" id="username" class="form-input" placeholder="Enter your usename"  v-model="credentials.username"  required />
                    <!-- <div class="error" v-if ="errors.email">{{ errors.email }}</div> -->
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-input"  placeholder="Enter your password"  v-model="credentials.password"  required />
                    <!-- <div class="error" v-if ="errors.password">{{ password.email }}</div> -->

                </div>
                
                <!-- Display an error message if it exists -->
                    <div v-if="authStore.error" class="error-message">
                    <p>{{ authStore.error.detail }}</p>
                    </div>


                <a href="#" class="forgot-password">Forgot your password?</a>
                
                <button type="submit" class="form-button" :disabled="authStore.loading">
                        {{ authStore.loading ? 'Signing In...' : 'Sign In' }}
                 </button>
             </form>
        </div>
        
        <div class="form-section register">
            <div class="decoration"></div>
            <div class="decoration"></div>
            <div class="decoration"></div>
            
            <h3>Welcome to CIMENCAM</h3>
            <p>Your trusted partner in building materials and construction solutions</p>
            
            <img src="C:\projects\cimencam_app\frontend\Performance_tracking_ftend\cimencam_ft\src\assets\img\WhatsApp Image 2025-08-23 at 23.48.00_8d9fb9ee.jpg" alt="Construction Site">
            
            <p>Don't have an account yet?</p>
            <router-link  to="/Register" class="form-button register-button" id="registerBtn">
                Register
            </router-link>
        </div>
    </div>
</body>


</template>



<script setup> 
// all new 
import { ref } from  'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
// import 
// const auth = useAuthStore()
// const routes = useRouter();

const credentials = ref({
  username :'',
  password: ''
});

const authStore = useAuthStore();
const router = useRouter();
// const errorMessage = ref('');



const handlelogin = async () => {
authStore.error = null;
  const success = await authStore.login(credentials.value);

  if (success) {
    const userRole = authStore.user?.role;
    if (userRole === 'admin') {
      router.push('/DashboardAdmin');
    } else {
      router.push('/Dashboard');
    }
  }
};

</script>

<style >
    
   :root {
            --primary: #1a73e8;
            --secondary: #4285f4;
            --accent: #34a853;
            --light: #f8f9fa;
            --dark: #202124;
            --gray: #5f6368;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        html, body {
            height: 100%;
        }
        
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        #app {
            width: 100%;
            height: 100%;
            /* display: flex; */
            justify-content: center;
            align-items: center;
        }
        
        .container {
            display: flex;
            width: 100%;
            max-width: 1100px;
            background: white;
            border-radius: 20px;
            box-shadow: var(--shadow);
            min-height: 600px;
            overflow: hidden;
        }
        
        .form-section {
            padding: 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .sign-in {
            background: #fff;
        }
        
        .register {
            background: linear-gradient(to bottom right, #1a73e8, #4285f4);
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .register img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            margin: 20px 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        
        .img_logo {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .img_logo img {
            width: 150px;
            margin-bottom: 15px;
        }
        
        .img_logo div {
            font-size: 2.2rem;
            font-weight: 600;
            color: var(--primary);
            letter-spacing: 1px;
        }
        
        h2 {
            color: var(--dark);
            margin-bottom: 25px;
            font-size: 2rem;
        }
        
        .form-group {
            margin-bottom: 20px;
            position: relative;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--gray);
        }
        
        .form-input {
            width: 100%;
            padding: 14px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: var(--transition);
        }
        
        .form-input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.2);
            outline: none;
        }
        
        .form-input::placeholder {
            color: #aaa;
        }
        
        .role-title {
            font-weight: 500;
            color: var(--gray);
            margin-bottom: 10px;
        }
        
        .Roles {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 25px;
        }
        
        .Roles label {
            display: flex;
            align-items: center;
            padding: 12px;
            background: #f5f8fa;
            border-radius: 8px;
            cursor: pointer;
            transition: var(--transition);
            border: 1px solid #eee;
        }
        
        .Roles label:hover {
            background: #e8f0fe;
            border-color: var(--primary);
        }
        
        .Roles input {
            margin-right: 10px;
        }
        
        .forgot-password {
            display: inline-block;
            color: var(--primary);
            text-decoration: none;
            margin: 10px 0 20px;
            font-weight: 500;
            transition: var(--transition);
        }
        
        .forgot-password:hover {
            text-decoration: underline;
        }
        
        .form-button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 14px 30px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            width: 100%;
            letter-spacing: 0.5px;
            text-decoration: none;
        }
        
        .form-button:hover {
            background: #0d62d0;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(26, 115, 232, 0.3);
        }
        
        .register-button {
            background: var(--accent);
            margin-top: 20px;
            width: 80%;
            max-width: 250px;
        }
        
        .register-button:hover {
            background: #2a8c4a;
            box-shadow: 0 4px 10px rgba(52, 168, 83, 0.3);
        }
        
        .register p {
            font-size: 1.1rem;
            font-weight: 400;
            margin: 10px 0;
            line-height: 1.6;
        }
        
        .register h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
        }
        
        .decoration {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
        }
        
        .decoration:nth-child(1) {
            top: -50px;
            right: -50px;
            width: 150px;
            height: 150px;
        }
        
        .decoration:nth-child(2) {
            bottom: -80px;
            left: -60px;
            width: 200px;
            height: 200px;
        }
        
        .decoration:nth-child(3) {
            bottom: 100px;
            right: 30px;
            width: 80px;
            height: 80px;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .container {
                max-width: 800px;
            }
            
            .form-section {
                padding: 30px;
            }
            
            .img_logo img {
                width: 130px;
            }
            
            .img_logo div {
                font-size: 1.8rem;
            }
            
            .register h3 {
                font-size: 1.6rem;
            }
            
            .register p {
                font-size: 1rem;
            }
        }
        
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                max-width: 600px;
                min-height: auto;
            }
            
            .register {
                padding: 30px 20px;
                order: -1;
            }
            
            .sign-in {
                padding: 30px 20px;
            }
            
            .register img {
                max-height: 200px;
            }
            
            .img_logo {
                margin-bottom: 20px;
            }
            
            .img_logo img {
                width: 110px;
            }
            
            .img_logo div {
                font-size: 1.6rem;
            }
            
            .register h3 {
                font-size: 1.5rem;
            }
            
            .register p {
                font-size: 0.95rem;
            }
        }
        
        @media (max-width: 576px) {
            body {
                padding: 15px;
            }
            
            .container {
                max-width: 100%;
                border-radius: 15px;
            }
            
            .form-section {
                padding: 25px 15px;
            }
            
            .img_logo img {
                width: 100px;
            }
            
            .img_logo div {
                font-size: 1.5rem;
            }
            
            .form-input {
                padding: 12px;
                font-size: 15px;
            }
            
            .Roles {
                grid-template-columns: 1fr;
            }
            
            .register-button {
                width: 100%;
                max-width: none;
            }
            
            .decoration:nth-child(1),
            .decoration:nth-child(2),
            .decoration:nth-child(3) {
                display: none;
            }
        }
        
        @media (max-width: 400px) {
            .img_logo img {
                width: 90px;
            }
            
            .img_logo div {
                font-size: 1.4rem;
            }
            
            .form-group label {
                font-size: 0.9rem;
            }
            
            .form-input {
                font-size: 14px;
            }
            
            .form-button {
                padding: 12px 20px;
                font-size: 15px;
            }
        }
</style>
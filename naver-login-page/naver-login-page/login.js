function chageLangSelect(){
    var langSelect = document.getElementById("id-lang");
    var selectValue = langSelect.options[langSelect.selectedIndex].value;

    if(selectValue=='ko') {
        document.getElementById("input-id").placeholder='아이디';
        document.getElementById("input-pw").placeholder='비밀번호';
        document.getElementById("login-btn").textContent = '로그인';
        document.getElementById("stay-text").textContent = '로그인 상태 유지';
        document.getElementById("ip-check").style.display = '';
        document.getElementById("easy-login-text").textContent = '더욱 간편한 로그인';
        document.getElementById("easy-login-wrap").style.height = '90px';
        document.getElementById("easy-login-wrap-ko").style.display = '';
        document.getElementById("easy-login-wrap-en").style.display = 'none';
        document.getElementById("find-signup-wrap-ko").style.display = '';
        document.getElementById("find-signup-wrap-en").style.display = 'none';
        

    }
    else{
        document.getElementById("input-id").placeholder='Username';
        document.getElementById("input-pw").placeholder='Password';
        document.getElementById("login-btn").textContent = 'Sign in';
        document.getElementById("stay-text").textContent = 'Stay Signed in';
        document.getElementById("ip-check").style.display = 'none';
        document.getElementById("easy-login-text").textContent = 'Easier sign in';
        document.getElementById("easy-login-wrap").style.height = '215px';
        document.getElementById("easy-login-wrap-ko").style.display = 'none';
        document.getElementById("easy-login-wrap-en").style.display = '';
        document.getElementById("find-signup-wrap-ko").style.display = 'none';
        document.getElementById("find-signup-wrap-en").style.display = '';
        
    }
}

function ipCheck(){

    var ipcheck = document.getElementById("ip-context");
    
    if(ipcheck.textContent == 'OFF'){
        ipcheck.textContent = 'ON'
        ipcheck.style.color = '#03c75a';
    }else{
        ipcheck.textContent = 'OFF'
        ipcheck.style.color = 'rgb(160,160,160)';
    }
}

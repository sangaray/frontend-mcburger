const probarData = async (isAuthenticated=false, token='') => {
    // const token = document.cookie.replace('token', '');
    //console.log(token + '  <====');
    if (isAuthenticated) {
        var res = await axios.post("http://localhost:3001/user/test", { token: token, email: user.email })
        console.log(res.data.data);
    }
} 
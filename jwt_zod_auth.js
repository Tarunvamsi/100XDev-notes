const jwt = require('jsonwebtoken');
const zod = require('zod');
const jwtpassword= "secret";

const emailSchema = zod.string().email();
const passwordSchmea = zod.string().max(6);
function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordSchmeaResponse = passwordSchmea.safeParse(password);
    if (!usernameResponse.success || !passwordSchmeaResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtpassword);

    return signature;

}

const ans = signJwt("vasmxfgi@gmail.com", "aso");
console.log(ans);

function verifyjwt(token , jwtpassword){
    let ans = true;
    try{
        jwt.verify(token , jwtpassword);
    }
    catch(e){
        ans = false;
    }
    return ans;
}
const ans2 = verifyjwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhc214ZmdpQGdtYWlsLmNvbSIsImlhdCI6MTcwMzE5MDIxMH0.8H05PR_a4cEKISohGkT-vDgimV7ErVCk8-D8hoTtUOs");
console.log(ans2)

function decodejwt(token){
    const decoder = jwt.decode(token);
    if(decoder){
        return true;
    }
    return false;
}

console.log(decodejwt("bskdfk"));  //returns fasle as it is wrong jwt 





// function verifyjwt(token, jwtpassword){
//     const verifier = jwt.verify(token, jwtpassword);
//     console.log(verifier);
// }

// console.log(verifyjwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhc214ZmdpQGdtYWlsLmNvbSIsImlhdCI6MTcwMzE4OTU2Mn0.E_z4UK0e8RxKeHv67f41PVl6l5PCXg3Su93dxzis4M0", "secret"))